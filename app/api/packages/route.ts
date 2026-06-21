import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import { Package } from '../../models';

export async function GET() {
  try {
    await dbConnect();
    const packages = await Package.find().exec();
    const formatted = packages.map(p => ({ ...p.toObject(), id: p._id.toString() }));
    return NextResponse.json(formatted);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const pkg = await Package.create(data);
    return NextResponse.json({ ...pkg.toObject(), id: pkg._id.toString() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create package' }, { status: 500 });
  }
}
