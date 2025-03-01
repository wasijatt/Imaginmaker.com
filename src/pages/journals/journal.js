import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import BlogHeader from '@/components/journal/hero';
import SubscribeSection from '@/components/journal/journalThird';
import BlogSection from '@/components/journal/blog';
import Hero from '@/components/journal/hero';
import { getAllPosts } from '@/lib/server/mdx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Journal({ posts }) {
  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <Hero posts={posts} />
      <Footer />
    </main>
  )
}

// This runs on the server side only
export async function getStaticProps() {
  try {
    const posts = await getAllPosts();
    return {
      props: {
        posts: posts || []
      }
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: []
      }
    };
  }
}