"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, LinkIcon, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/journals/${slug}`
      : `/journals/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-t border-b py-6 my-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Share this article</h3>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
                "_blank"
              )
            }
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                "_blank"
              )
            }
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                "_blank"
              )
            }
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={copyToClipboard}>
            {copied ? <Copy className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
