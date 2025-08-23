"use client"
import { useEffect, useState } from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShareButton = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: typeof document !== 'undefined' ? document.title : 'VMC Group',
          url: currentUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(currentUrl);
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <Button variant="link" size="icon" className="hidden sm:flex" onClick={handleShare}>
      <Share2 className="h-5 w-5" />
    </Button>
  );
};

export default ShareButton;
