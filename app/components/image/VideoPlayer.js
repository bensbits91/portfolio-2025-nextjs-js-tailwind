'use client';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';

export default function VideoPlayer({ filename }) {
   const [videoUrl, setVideoUrl] = useState('');

   useEffect(() => {
      const fetchVideoUrl = async () => {
         try {
            const response = await fetch(
               `/api/vercel-blob?filename=${filename}`,
               {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json' }
               }
            );
            const data = await response.json();
            setVideoUrl(data.videoUrl);
         } catch (error) {
            // todo: handle error
            console.error('Error fetching video URL:', error);
         }
      };

      fetchVideoUrl();
   }, []);

   // todo: add loading spinner
   return (
      <div>
         {videoUrl ? (
            <Suspense fallback={<p>Loading video...</p>}>
               <video
                  controls
                  preload="none"
                  aria-label="Video player"
                  autoPlay
                  playsInline // for iOS
                  loop>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </Suspense>
         ) : (
            <p>Loading video...</p>
         )}
      </div>
   );
}
