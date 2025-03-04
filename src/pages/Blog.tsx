
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Sample blog posts data (this would typically come from an API)
const ALL_BLOG_POSTS = [
  {
    title: "The Future of Design Systems in 2024",
    excerpt: "Design systems are evolving rapidly as digital products become more complex and teams grow larger. In 2024, we're seeing a shift towards more intelligent, adaptive design systems.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "Sarah Johnson",
    date: "22 Jan 2024",
    categories: ["Design Systems", "Technology"],
    slug: "future-of-design-systems"
  },
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
    excerpt: "The journey of product design is one of constant refinement and attention to detail. Through years of experience, I've come to appreciate the stark contrast between well-crafted products and those that fall short.",
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

// Get all unique categories from blog posts
const getAllCategories = (posts: typeof ALL_BLOG_POSTS) => {
  const categoriesSet = new Set<string>();
  
  posts.forEach(post => {
    post.categories.forEach(category => {
      categoriesSet.add(category);
    });
  });
  
  return Array.from(categoriesSet).sort();
};

const Blog = () => {
  const [posts, setPosts] = useState(ALL_BLOG_POSTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = getAllCategories(ALL_BLOG_POSTS);
  
  useEffect(() => {
    let filteredPosts = [...ALL_BLOG_POSTS];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post => 
        post.categories.some(cat => cat === selectedCategory)
      );
    }
    
    setPosts(filteredPosts);
  }, [searchTerm, selectedCategory]);
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Explore our latest articles, insights, and resources about design, development, and technology.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        {/* Search and filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            {(searchTerm || selectedCategory) && (
              <Button variant="ghost" onClick={clearFilters}>
                Clear filters
              </Button>
            )}
          </div>
          
          {/* Category filters */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryClick(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        {/* Blog posts grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">No articles found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find any articles matching your search criteria.
            </p>
            <Button onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
