import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getAllPosts, getPostBySlug } from "@/lib/server/mdx";
import ShareButtons from "@/components/journal/share-button";
import RelatedPosts from "@/components/journal/RelatedPosts";
import MDXComponents from "@/components/journal/mdx-component";

export default function PostPage({ post, relatedPosts }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.frontmatter.title} | Orizon Blog</title>
        <meta name="description" content={post.frontmatter.excerpt} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.excerpt} />
        <meta property="og:image" content={post.frontmatter.image} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-muted-foreground">{post.frontmatter.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.frontmatter.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.frontmatter.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{post.frontmatter.excerpt}</p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-12">
            <Image
              src={post.frontmatter.image || "/placeholder.svg"}
              alt={post.frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <MDXRemote {...post.mdxSource} components={MDXComponents} />
          </div>

          <ShareButtons title={post.frontmatter.title} slug={post.slug} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-24">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content);

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.frontmatter.category === post.frontmatter.category)
    .slice(0, 3);

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
      relatedPosts,
    },
  };
}
