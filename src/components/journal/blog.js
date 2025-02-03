import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Table of Contents - Fixed on desktop, sliding drawer on mobile */}
      <div className="fixed bottom-0 left-0 top-0 hidden w-72 border-r border-gray-800 bg-black p-6 lg:block">
        <div className="sticky top-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Table of contents
          </h2>
          <nav className="space-y-3 text-sm">
            <Link href="#software-engineer" className="block text-gray-400 hover:text-white">
              AI as a Software Engineer
            </Link>
            <Link href="#collaboration" className="block text-gray-400 hover:text-white">
              Collaboration with Humans
            </Link>
            <Link href="#device" className="block text-gray-400 hover:text-white">
              Device and Environment
            </Link>
            <Link href="#history" className="block text-gray-400 hover:text-white">
              Brief History of AI in Software Engineering
            </Link>
            <Link href="#prediction" className="block text-gray-400 hover:text-white">
              Prediction Types in IDEs
            </Link>
            <Link href="#code" className="block text-gray-400 hover:text-white">
              Automated Code Analysis
            </Link>
            <Link href="#capabilities" className="block text-gray-400 hover:text-white">
              Capabilities of DevAI
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Table of Contents Button */}
      <Button
        variant="outline"
        className="fixed bottom-4 right-4 z-50 lg:hidden"
        onClick={() => document.getElementById('mobile-toc')?.classList.toggle('translate-y-full')}
      >
        Table of Contents
      </Button>

      {/* Mobile Table of Contents Drawer */}
      <div
        id="mobile-toc"
        className="fixed bottom-0 left-0 right-0 z-40 translate-y-full transform bg-black p-6 transition-transform duration-300 ease-in-out lg:hidden"
      >
        <nav className="space-y-3 text-sm">
          <Link href="#software-engineer" className="block text-gray-400 hover:text-white">
            AI as a Software Engineer
          </Link>
          <Link href="#collaboration" className="block text-gray-400 hover:text-white">
            Collaboration with Humans
          </Link>
          <Link href="#device" className="block text-gray-400 hover:text-white">
            Device and Environment
          </Link>
          {/* Add more mobile TOC items */}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12 lg:ml-72 lg:px-8">
        <article className="mx-auto max-w-3xl space-y-8">
          <section id="software-engineer">
            <h2 className="mb-4 text-xl font-bold">AI as a Software Engineer</h2>
            <p className="text-gray-400">
              DevAI demonstrates its groundbreaking AI engineering by integrating sophisticated ML
              models, incorporating advanced algorithms, and implementing state-of-the-art coding
              practices. It excels at code analysis, testing, debugging, and refactoring, setting a new
              standard for AI-driven software development.
            </p>
          </section>

          <section id="collaboration">
            <h2 className="mb-4 text-xl font-bold">Collaboration with Humans</h2>
            <p className="text-gray-400">
              Designed to augment human engineers, DevAI seamlessly integrates into existing
              development workflows while maintaining high standards of code quality and development
              best practices.
            </p>
          </section>

          <section id="device">
            <h2 className="mb-4 text-xl font-bold">Device and Environment</h2>
            <p className="text-gray-400">
              The environment adapts to various IDE configurations, offering efficiency and able
              handling of multiple code formats as well as syntax for high-speed productivity and
              development.
            </p>
          </section>

          <section id="capabilities">
            <h2 className="mb-4 text-xl font-bold">Capabilities of DevAI</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Coding:</h3>
                <p className="text-gray-400">
                  Performs extensive programming language tasks, leveraging semantic analysis and
                  application logic to generate optimal code solutions.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Testing:</h3>
                <p className="text-gray-400">
                  Ensures code integrity by automatically identifying and rectifying errors, ensuring
                  optimal test coverage.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Advanced Features:</h3>
                <p className="text-gray-400">
                  Implements intelligent code analysis, real-time error detection, and seamless
                  integration with existing development workflows.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
