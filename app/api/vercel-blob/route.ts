import { NextResponse, NextRequest } from 'next/server';
import { list } from '@vercel/blob';

const GET = async (request: NextRequest) => {
   try {
      const requestUrl = new URL(request.url);
      const filename = requestUrl.searchParams.get('filename') || '';
      if (!filename) {
         return new NextResponse(
            JSON.stringify({ error: 'Filename is required' }),
            {
               status: 400,
               headers: { 'Content-Type': 'application/json' }
            }
         );
      }
      const token = process.env.BLOB_READ_WRITE_TOKEN;

      const { blobs } = await list({
         prefix: filename,
         limit: 1,
         token: token
      });
      const { url } = blobs[0];

      return new NextResponse(
         JSON.stringify({
            message: 'Video URL fetched successfully',
            videoUrl: url
         }),
         {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
         }
      );
   } catch (error) {
      console.log('bb ~ error:', error);
      return new NextResponse(
         JSON.stringify({ error: 'Error fetching video URL' }),
         {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
         }
      );
   }
};

export { GET };
