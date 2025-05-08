'use client';
import { Suspense } from 'react';
import { Loading } from '@/components/common';
import useVideoPlayer from '@/hooks/useVideoPlayer';

interface VideoPlayerProps {
   filename: string;
}

export default function VideoPlayer({ filename }: VideoPlayerProps) {
   const videoUrl = useVideoPlayer(filename);

   return (
      <div className="w-full">
         {videoUrl ? (
            <Suspense fallback={<Loading message='Loading video...' />}>
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
            <div>
               <Loading message='Loading video...' />
            </div>
         )}
      </div>
   );
}
