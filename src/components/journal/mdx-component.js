import Image from "next/image";
import Link from "next/link";

const MDXComponents = {
  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  a: ({ href, children }) => (
    <Link href={href || "#"} className="text-primary hover:underline">
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
  ),
  img: ({ src, alt }) => (
    <div className="my-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image src={src || "/placeholder.svg"} alt={alt || "Blog image"} fill className="object-cover" />
      </div>
      {alt && <p className="text-center text-sm text-muted-foreground mt-2">{alt}</p>}
    </div>
  ),
  code: ({ children }) => <code className="bg-muted px-1 py-0.5 rounded text-sm">{children}</code>,
  pre: ({ children }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">{children}</pre>,
};

export default MDXComponents;
