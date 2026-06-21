import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import { Inquiry, Test, Package } from '../../models';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    await dbConnect();
    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .populate({ path: 'selectedTests', model: Test })
      .populate({ path: 'selectedPackage', model: Package })
      .exec();

    // Format to roughly match the shape expected by frontend (which expected Prisma include syntax)
    const formatted = inquiries.map(inq => {
      const obj = inq.toObject();
      return {
        ...obj,
        id: obj._id.toString(),
        selectedTests: obj.selectedTests?.map((t: any) => ({ test: { ...t, id: t._id.toString() } })) || [],
        selectedPackage: obj.selectedPackage ? [{ package: { ...obj.selectedPackage, id: obj.selectedPackage._id.toString() } }] : []
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    const inquiryData = {
      patientName: data.patientName,
      phone: data.phone,
      email: data.email,
      date: data.date ? new Date(data.date) : undefined,
      timeSlot: data.timeSlot,
      type: data.type,
      message: data.message,
      selectedTests: data.testIds || [],
      selectedPackage: data.packageId || undefined,
    };

    const inquiry = await Inquiry.create(inquiryData);

    const populatedInquiry = await Inquiry.findById(inquiry._id)
      .populate({ path: 'selectedTests', model: Test })
      .populate({ path: 'selectedPackage', model: Package })
      .exec();

    // Send email using nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && populatedInquiry) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        let totalAmount = 0;
        let testsHtml = '';

        if (populatedInquiry.selectedTests && populatedInquiry.selectedTests.length > 0) {
          testsHtml += `
            <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; border-color: #e2e8f0;">
              <thead>
                <tr style="background-color: #f8fafc;">
                  <th style="text-align: left; color: #334155;">Test Name</th>
                  <th style="text-align: right; color: #334155;">Rate (₹)</th>
                </tr>
              </thead>
              <tbody>
          `;
          populatedInquiry.selectedTests.forEach((t: any) => {
            totalAmount += t.rate || 0;
            testsHtml += `
                <tr>
                  <td style="color: #475569;">${t.name}</td>
                  <td style="text-align: right; color: #475569;">₹${t.rate}</td>
                </tr>
            `;
          });
          testsHtml += `
              </tbody>
            </table>
          `;
        }

        let packageHtml = '';
        if (populatedInquiry.selectedPackage) {
          const pkg: any = populatedInquiry.selectedPackage;
          totalAmount += pkg.price || 0;
          packageHtml = `
            <h3 style="color: #334155; margin-top: 20px;">Selected Package:</h3>
            <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; border-color: #e2e8f0;">
              <tr>
                <td style="color: #475569;"><strong>${pkg.name}</strong></td>
                <td style="text-align: right; color: #475569;"><strong>₹${pkg.price}</strong></td>
              </tr>
            </table>
          `;
        }

        const htmlBody = `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 30px; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; border-bottom: 2px solid #0d9488; padding-bottom: 20px; margin-bottom: 20px;">
              <h2 style="color: #0d9488; margin: 0; font-size: 24px;">Medicure Pathology Lab</h2>
              <p style="color: #64748b; margin: 5px 0 0 0;">New Inquiry & Estimated Bill</p>
            </div>
            
            <div style="margin-bottom: 25px; background-color: #f8fafc; padding: 15px; border-radius: 8px;">
              <p style="margin: 5px 0;"><strong>Patient Name:</strong> ${data.patientName}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email || 'N/A'}</p>
              <p style="margin: 5px 0;"><strong>Collection Type:</strong> ${data.type}</p>
              <p style="margin: 5px 0;"><strong>Date & Time:</strong> ${data.date ? new Date(data.date).toLocaleDateString() : 'N/A'} at ${data.timeSlot || 'N/A'}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong> ${data.message || 'None'}</p>
            </div>

            ${populatedInquiry.selectedTests.length > 0 ? '<h3 style="color: #334155;">Selected Tests:</h3>' + testsHtml : ''}
            ${packageHtml}

            <div style="margin-top: 30px; padding: 20px; background-color: #f0fdf4; border: 1px solid #bbf7d0; text-align: right; border-radius: 8px;">
              <h2 style="margin: 0; color: #166534; font-size: 22px;">Total Estimated Bill: ₹${totalAmount}</h2>
              <p style="margin: 5px 0 0 0; font-size: 13px; color: #15803d;">*This is an estimated bill based on the selected items. Final billing will occur at the lab.</p>
            </div>
          </div>
        `;

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to admin
          subject: `New Pathology Inquiry & Bill: ${data.patientName}`,
          html: htmlBody,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 });
  }
}
