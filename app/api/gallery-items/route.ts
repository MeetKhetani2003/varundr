import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import { GalleryItem } from '@/app/models';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    await dbConnect();
    const query = type && type !== 'all' ? { type } : {};
    const items = await GalleryItem.find(query).populate('categoryId').sort({ createdAt: -1 });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();
    const item = await GalleryItem.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
  }
}
