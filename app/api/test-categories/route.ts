import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import { TestCategory } from '../../models';

export async function GET() {
  try {
    await dbConnect();
    const categories = await TestCategory.find().sort({ sortOrder: 1 }).exec();
    const formatted = categories.map(c => ({ ...c.toObject(), id: c._id.toString() }));
    return NextResponse.json(formatted);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const category = await TestCategory.create(data);
    return NextResponse.json({ ...category.toObject(), id: category._id.toString() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
