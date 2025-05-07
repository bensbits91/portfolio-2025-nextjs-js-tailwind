'use client';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';

interface VideoPlayerProps {
   filename: string;
}

export default function VideoPlayer({ filename }: VideoPlayerProps) {
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
   }, [filename]);

   // todo: add loading spinner
   return (
      <div className="w-full">
         {videoUrl ? (
            <Suspense fallback={<p aria-live="polite">Loading video...</p>}>
               <video
                  className="w-full"
                  controls
                  preload="none"
                  aria-label="Video player"
                  aria-describedby="video-transcript"
                  autoPlay
                  playsInline // for iOS
                  loop>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <p id="video-transcript" className="sr-only">
                  This video demonstrates some features of this project.
               </p>
            </Suspense>
         ) : (
            <p aria-live="polite">Loading video...</p>
         )}
      </div>
   );
}
