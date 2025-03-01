import Link from "next/link";
import Image from "next/image";

export default function RelatedPosts({ posts }) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
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
                  <span className="text-sm text-muted-foreground">
                    {post.frontmatter.date}
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {post.frontmatter.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{post.frontmatter.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
