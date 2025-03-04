import { list } from '@vercel/blob';

const GET = async request => {
   try {
      const requestUrl = new URL(request.url);
      const filename = requestUrl.searchParams.get('filename');
      const token = process.env.BLOB_READ_WRITE_TOKEN;

      const { blobs } = await list({
         prefix: filename,
         limit: 1,
         token: token
      });
      const { url } = blobs[0];

      return new Response(
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
      return new Response(
         JSON.stringify({ error: 'Error fetching video URL' }),
         {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
         }
      );
   }
};

export { GET };
