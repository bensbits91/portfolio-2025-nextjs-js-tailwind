import { list } from '@vercel/blob';

const GET = async request => {
   try {
      console.log('bb ~ request: ------------->>>', request);
      const requestUrl = new URL(request.url);
      const filename = requestUrl.searchParams.get('filename');
      console.log('bb ~ filename:', filename);
      const token = process.env.BLOB_READ_WRITE_TOKEN;
      console.log('bb ~ token:', token);

      const { blobs } = await list({
         prefix: filename,
         limit: 1,
         token: token
      });
      console.log('bb ~ blobs:', blobs);
      const { url } = blobs[0];
      console.log('bb ~ url:', url);

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
