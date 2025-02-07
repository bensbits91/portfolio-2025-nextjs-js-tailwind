import { Suspense } from 'react';
import { list } from '@vercel/blob';
const token = process.env.BLOB_READ_WRITE_TOKEN;
console.log('bb ~ token:', token);

export default function VideoPlayer() {
   return (
      <Suspense fallback={<p>Loading video...</p>}>
         <VideoComponent fileName="form-builder-A8W3CLnzDdvZH4fZ3Yod5M9uCM9p1Y.mp4" />
         {/* <VideoComponent fileName="https://iz82xiwmmsdesrvi.public.blob.vercel-storage.com/form-builder-A8W3CLnzDdvZH4fZ3Yod5M9uCM9p1Y.mp4" /> */}
      </Suspense>
   );
}

async function VideoComponent({ fileName }) {
   const { blobs } = await list({
      prefix: fileName,
      limit: 1/* ,
      token: token */
   });
   console.log('bb ~ blobs:', blobs);
   const { url } = blobs[0];
   console.log('bb ~ url:', url);

   return (
      <video controls preload="none" aria-label="Video player">
         <source src={url} type="video/mp4" />
         Your browser does not support the video tag.
      </video>
   );
}
