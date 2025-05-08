import { useEffect, useState } from 'react';

const useVideoPlayer = (filename: string) => {
   const [videoUrl, setVideoUrl] = useState<string | null>(null);

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
            console.error('Error fetching video URL:', error);
         }
      };

      fetchVideoUrl();
   }, [filename]);

   return videoUrl;
};

export default useVideoPlayer;
