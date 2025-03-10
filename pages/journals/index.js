import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "lib/server/mdx";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function JournalsPage({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1>No posts found</h1>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
      <Head>
        <title>Journals | Our Blog</title>
        <meta name="description" content="Explore our collection of articles on design, technology, and innovation." />
        <meta property="og:title" content="Journals | Our Blog" />
        <meta
          property="og:description"
          content="Explore our collection of articles on design, technology, and innovation."
        />
        <meta property="og:image" content="/images/journals-og.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-start space-y-2 mb-16">
          <p className="text-sm font-medium text-primary">OUR JOURNAL</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Insights & Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mt-4">
            Explore our thoughts on design, technology, and creating digital experiences that delight humans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journals/${post.slug}`} className="group">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{post.frontmatter.date}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.frontmatter.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{post.frontmatter.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{post.frontmatter.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  try {
    const posts = await getAllPosts();
    console.log('Posts in getStaticProps:', posts.length); // Debug log

    return {
      props: {
        posts: posts || [],
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
