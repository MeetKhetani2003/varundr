import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import { GalleryCategory } from '@/app/models';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    await dbConnect();
    const query = type ? { type } : {};
    const categories = await GalleryCategory.find(query).sort({ sortOrder: 1, createdAt: -1 });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();
    const category = await GalleryCategory.create(body);
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
