"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function PinterestModal({ item, onClose, onNext, onPrevious }) {
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 gap-0 bg-background">
        <div className="grid md:grid-cols-[1fr,400px] h-[80vh]">
          {/* Image/Video Section */}
          <div className="relative bg-black flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 left-2 text-white hover:text-white/80 z-50"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:text-white/80 z-50 md:hidden"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:text-white/80 z-50"
              onClick={onNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="relative w-full h-full">
              {item.video ? (
                item.video.endsWith('.json') ? (
                  <Lottie animationData={item.video} loop={true} />
                ) : (
                  <video
                    src={item.video}
                    loop
                    muted
                    autoPlay
                    className="object-contain w-full h-full"
                  />
                )
              ) : (
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="relative p-6 overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 hidden md:flex"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}