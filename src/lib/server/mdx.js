import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getPostBySlug(slug) {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: {
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        category: data.category || 'Uncategorized',
        excerpt: data.excerpt || '',
        image: data.image || '/placeholder.svg',
        ...data
      },
      content
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    
    // Check if directory exists
    try {
      await fs.access(postsDirectory);
    } catch (error) {
      console.error('Posts directory not found:', error);
      return [];
    }

    // Read all files from the posts directory
    const filenames = await fs.readdir(postsDirectory);
    console.log('Found files:', filenames); // Debug log

    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.mdx')) // Only process .mdx files
        .map(async (filename) => {
          try {
            const slug = filename.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, filename);
            const fileContents = await fs.readFile(fullPath, 'utf8');
            
            const { data } = matter(fileContents);
            
            // Validate required fields
            if (!data.title || !data.date || !data.category || !data.excerpt) {
              console.warn(`Missing required fields in ${filename}`);
            }

            return {
              slug,
              frontmatter: {
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                category: data.category || 'Uncategorized',
                excerpt: data.excerpt || '',
                image: data.image || '/placeholder.svg',
                ...data
              }
            };
          } catch (error) {
            console.error(`Error processing ${filename}:`, error);
            return null;
          }
        })
    );

    // Filter out any null values from errors and sort by date
    const validPosts = posts
      .filter(post => post !== null)
      .sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      });

    console.log('Processed posts:', validPosts.length); // Debug log
    return validPosts;

  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
} 