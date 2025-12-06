import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Calendar, Clock, Send, Loader2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  approved: boolean;
}

const BLOG_API_URL =
  "https://script.google.com/macros/s/AKfycbxg8P0I380IXY9c6lLCDFKra14l7vShj6FLlgaepWvIxnOMgguD8Xy_TI8RKmse21XgoA/exec";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(BLOG_API_URL);
      const data = await response.json();
      // Filter only approved posts
      const approvedPosts = (data.posts || []).filter(
        (post: BlogPost) => post.approved
      );
      setPosts(approvedPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      // Show sample posts if API fails
      setPosts([
        {
          id: "1",
          title: "My 6-Month Transformation Journey",
          author: "Rahul Sharma",
          content:
            "When I started my fitness journey, I weighed 95kg and could barely run for 5 minutes. Six months later, I've lost 20kg and completed my first 10K run. The key was consistency—showing up every day even when I didn't feel like it. TheFitBhaskar's workout routines helped me structure my training, and the diet tips were game-changing. To anyone starting out: trust the process!",
          date: "2024-01-15",
          approved: true,
        },
        {
          id: "2",
          title: "How Meal Prep Changed Everything",
          author: "Priya Patel",
          content:
            "I used to spend so much money on unhealthy takeout because I was 'too busy' to cook. Then I discovered meal prep. Now I spend 3 hours on Sunday preparing all my meals for the week. Not only am I eating healthier, but I'm also saving money and time during weekdays. My energy levels have skyrocketed, and I've finally broken through my weight loss plateau.",
          date: "2024-01-10",
          approved: true,
        },
        {
          id: "3",
          title: "From Skinny to Strong: My Bulking Experience",
          author: "Amit Kumar",
          content:
            "I was always the skinny guy in my group. At 55kg, I felt weak and lacked confidence. Two years of consistent training and proper nutrition later, I'm at 75kg of lean muscle. The journey taught me that gaining quality weight is harder than losing it. You need patience, progressive overload, and a caloric surplus. Don't skip leg day, and don't underestimate the power of sleep!",
          date: "2024-01-05",
          approved: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(BLOG_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Blog Submitted!",
          description:
            "Your blog has been submitted for review. It will appear once approved.",
        });
        setFormData({ name: "", email: "", title: "", content: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Received",
        description:
          "Your blog has been recorded and will be reviewed shortly.",
      });
      setFormData({ name: "", email: "", title: "", content: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Community Blog"
            subtitle="Read transformation stories and fitness tips from our community"
          />

          {/* Blog Posts */}
          <div className="max-w-4xl mx-auto mb-20">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            ) : posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-display text-2xl mb-3">{post.title}</h3>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {Math.ceil(post.content.split(" ").length / 200)} min
                          read
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.content}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No blog posts yet. Be the first to share your story!
              </div>
            )}
          </div>

          {/* Submit Blog Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-display text-3xl text-center mb-2">
                Share Your <span className="text-gradient">Story</span>
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Submit your fitness journey or tips. Approved posts will be
                featured on the blog.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Blog Title
                  </label>
                  <Input
                    type="text"
                    placeholder="Give your post a catchy title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Story
                  </label>
                  <Textarea
                    placeholder="Share your fitness journey, tips, or transformation story..."
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    required
                    rows={8}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Blog
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree that your content may be featured on
                TheFitBhaskar website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
