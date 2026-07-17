import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/app/lib/db';
import { Readable } from 'stream';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file found' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const conn = await dbConnect();
    
    const bucket = new mongoose.mongo.GridFSBucket(conn.connection.db, {
      bucketName: 'uploads'
    });

    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);

    return new Promise<NextResponse>((resolve) => {
      const uploadStream = bucket.openUploadStream(file.name, {
        metadata: { contentType: file.type },
      });

      readableStream.pipe(uploadStream)
        .on('error', (error) => {
          console.error('Upload Error:', error);
          resolve(NextResponse.json({ success: false, message: 'File upload failed' }, { status: 500 }));
        })
        .on('finish', () => {
          resolve(NextResponse.json({ success: true, url: `/api/image/${uploadStream.id}` }));
        });
    });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ success: false, message: 'File upload failed' }, { status: 500 });
  }
}
