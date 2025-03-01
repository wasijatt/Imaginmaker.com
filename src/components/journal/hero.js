import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { satoshi } from "@/lib/fonts";
import { clashGrotesk } from "@/lib/clashGroteskfont";

export default function Hero({ posts = [] }) {
  const featuredPost = posts[0] || {
    frontmatter: {
      image: '/journal/journal1.png',
      title: 'No posts found',
      excerpt: '',
      date: '',
      category: ''
    },
    slug: ''
  };
  const recentPosts = posts.slice(1, 4);

  return (
    <>
      <Head>
        <title>Orizon Blog | Insights & Stories</title>
        <meta name="description" content="Explore our thoughts on design, technology, and innovation." />
        <meta property="og:title" content="Orizon Blog | Insights & Stories" />
        <meta property="og:description" content="Explore our thoughts on design, technology, and innovation." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container mx-auto px-4 py-12 md:py-24 ">
        <section className="mb-24">
          <div className="flex flex-col items-start space-y-4 mb-6">
            <p className={`${satoshi.className} text-sm md:text-lg tracking-wider text-primary font-bold`}>OUR JOURNAL</p>
            <h1 className={`${clashGrotesk.className} text-4xl md:text-6xl font-bold tracking-wide`}>The Creative Edge</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mt-4">
              Explore our thoughts on design, technology, and creating digital experiences that delight humans.
            </p>
          </div>

          {featuredPost && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={featuredPost.frontmatter.image || "/journal/journal1.png"}
                  alt={featuredPost.frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{featuredPost.frontmatter.date}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{featuredPost.frontmatter.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold">{featuredPost.frontmatter.title}</h2>
                  <p className="text-muted-foreground">{featuredPost.frontmatter.excerpt}</p>
                  <Link href={`/journals/${featuredPost.slug}`}>
                    <Button variant="default">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/journals/${post.slug}`} className="group">
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={post.frontmatter.image || "/placeholder.svg"}
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
 
          <div className="flex justify-center mt-16">
            <Link href="/journals">
              <Button variant="outline" size="lg">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

// Fetching posts from the backend (Static Generation)
export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
