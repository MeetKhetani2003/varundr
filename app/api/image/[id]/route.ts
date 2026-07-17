import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/app/lib/db';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const conn = await dbConnect();
    const { id } = await context.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse('Invalid ID', { status: 400 });
    }

    const bucket = new mongoose.mongo.GridFSBucket(conn.connection.db, {
      bucketName: 'uploads'
    });

    const objectId = new mongoose.Types.ObjectId(id);
    
    // Find the file to get its content type
    const files = await bucket.find({ _id: objectId }).toArray();
    if (files.length === 0) {
      return new NextResponse('File not found', { status: 404 });
    }
    const file = files[0];

    const downloadStream = bucket.openDownloadStream(objectId);

    const webStream = new ReadableStream({
      start(controller) {
        downloadStream.on('data', (chunk) => controller.enqueue(chunk));
        downloadStream.on('end', () => controller.close());
        downloadStream.on('error', (error) => controller.error(error));
      }
    });

    return new NextResponse(webStream, {
      headers: {
        'Content-Type': file.metadata?.contentType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });

  } catch (error) {
    console.error('Image Fetch Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
