import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import { Test, TestCategory } from '../../models';

export async function GET() {
  try {
    await dbConnect();
    const tests = await Test.find().populate('categoryId', 'name').exec();
    
    // Format to match old Prisma output where populated field was "category" instead of "categoryId" object
    const formattedTests = tests.map(t => {
      const obj = t.toObject();
      return {
        ...obj,
        id: obj._id.toString(),
        category: obj.categoryId,
        categoryId: obj.categoryId ? obj.categoryId._id.toString() : null
      };
    });

    return NextResponse.json(formattedTests);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tests' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const test = await Test.create(data);
    return NextResponse.json({ ...test.toObject(), id: test._id.toString() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create test' }, { status: 500 });
  }
}
