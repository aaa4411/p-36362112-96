
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

// This data would normally come from an API
const ALL_BLOG_POSTS = [
  {
    title: "Conversations with Our Favorite London Studio",
    excerpt: "We sat down with London's fast-growing brand and product design studio to find out how they've used our platform to 2x their revenue.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    categories: ["Design", "Research"],
    slug: "london-studio-conversation"
  },
  {
    title: "A Relentless Pursuit of Perfection in Product Design",
    excerpt: "I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and an even greater distinction between the people who made them.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    categories: ["Product", "Design"],
    slug: "perfection-in-product-design"
  },
  {
    title: "How to Run a Successful Business With Your Partner",
    excerpt: "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    categories: ["Business", "Research"],
    slug: "business-with-partner"
  },
  {
    title: "The Impact of AI on Modern Software Development",
    excerpt: "Artificial Intelligence is revolutionizing how we build software. Learn about the latest trends and tools shaping the future of development.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    author: "Alex Chen",
    date: "17 Jan 2024",
    categories: ["Technology", "AI"],
    slug: "ai-impact-software-development"
  },
  {
    title: "Creating Sustainable Design Practices",
    excerpt: "Discover how design teams are incorporating sustainability into their digital products and processes for a better future.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    author: "Emma Wilson",
    date: "16 Jan 2024",
    categories: ["Design", "Sustainability"],
    slug: "sustainable-design-practices"
  },
  {
    title: "The Psychology of User Interface Design",
    excerpt: "Explore how psychological principles influence user interface design and how to leverage them to create more intuitive experiences.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
    author: "Michael Wong",
    date: "15 Jan 2024",
    categories: ["Design", "Psychology"],
    slug: "psychology-ui-design"
  },
  {
    title: "Principles of Minimalist Design Systems",
    excerpt: "Learn how simplicity and clarity in design can enhance user experience and streamline development processes.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    author: "Lisa Chen",
    date: "14 Jan 2024",
    categories: ["Design", "Minimalism"],
    slug: "minimalist-design-systems"
  }
];

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [posts, setPosts] = useState<typeof ALL_BLOG_POSTS>([]);
  
  useEffect(() => {
    if (categoryId) {
      // Normalize the category for comparison
      const normalizedCategory = categoryId.toLowerCase().replace(/-/g, ' ');
      
      // Filter posts by the selected category
      const filteredPosts = ALL_BLOG_POSTS.filter(post => 
        post.categories.some(category => 
          category.toLowerCase() === normalizedCategory
        )
      );
      
      setPosts(filteredPosts);
    }
  }, [categoryId]);

  // Format the category name for display
  const displayCategory = categoryId ? 
    categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 
    '';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">{displayCategory}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Explore our latest articles, insights, and resources about {displayCategory.toLowerCase()}.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">No articles found</h2>
            <p className="text-gray-600">
              We couldn't find any articles in this category. Please check back later.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
