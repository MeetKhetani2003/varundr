import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/db';
import { Inquiry, Test, Package } from '../../../../models';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const resolvedParams = await params;
    
    const inquiries = await Inquiry.find({ selectedTests: resolvedParams.id })
      .sort({ createdAt: -1 })
      .populate({ path: 'selectedTests', model: Test })
      .populate({ path: 'selectedPackage', model: Package })
      .exec();

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
    return NextResponse.json({ error: 'Failed to fetch test inquiries' }, { status: 500 });
  }
}
