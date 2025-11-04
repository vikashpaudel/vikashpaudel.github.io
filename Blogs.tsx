import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Acne: Causes, Treatment, and Prevention",
      excerpt: "Comprehensive guide to understanding acne vulgaris, its causes, modern treatment options, and effective prevention strategies for clear, healthy skin.",
      date: "March 15, 2024",
      category: "Medical Dermatology",
      readTime: "5 min read",
    },
    {
      title: "The Science Behind Chemical Peels",
      excerpt: "Explore how chemical peels work, different types available, their benefits, and what to expect during and after the procedure.",
      date: "March 8, 2024",
      category: "Aesthetic Dermatology",
      readTime: "4 min read",
    },
    {
      title: "Sun Protection: More Than Just Sunscreen",
      excerpt: "Learn about comprehensive sun protection strategies, understanding UV radiation, and choosing the right sunscreen for your skin type.",
      date: "March 1, 2024",
      category: "Skin Care",
      readTime: "6 min read",
    },
    {
      title: "Laser Treatments in Dermatology: What You Need to Know",
      excerpt: "An overview of various laser treatments used in dermatology, their applications, benefits, and what to expect from laser therapy.",
      date: "February 22, 2024",
      category: "Aesthetic Dermatology",
      readTime: "7 min read",
    },
    {
      title: "Managing Eczema: Tips for Daily Care",
      excerpt: "Practical advice for managing eczema symptoms, identifying triggers, and maintaining healthy skin through proper skincare routines.",
      date: "February 15, 2024",
      category: "Medical Dermatology",
      readTime: "5 min read",
    },
    {
      title: "Hair Loss: Causes and Modern Treatment Options",
      excerpt: "Understanding different types of hair loss, their causes, and the latest evidence-based treatment options available.",
      date: "February 8, 2024",
      category: "Hair Disorders",
      readTime: "6 min read",
    },
  ];

  const categories = ["All", "Medical Dermatology", "Aesthetic Dermatology", "Skin Care", "Hair Disorders"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[image:var(--hero-gradient)] text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Articles</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Expert insights on skin health, dermatology treatments, and skincare tips
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medical)] transition-[var(--transition-smooth)] flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4 self-start">
                        {post.category}
                      </span>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <Button variant="link" className="p-0 h-auto justify-start group">
                        Read More 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Newsletter Signup */}
              <Card className="border-border shadow-[var(--shadow-card)] mt-12 bg-muted">
                <CardContent className="p-8">
                  <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
                    <p className="text-muted-foreground mb-6">
                      Subscribe to receive the latest articles on dermatology, skincare tips, and health updates directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button>Subscribe</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
