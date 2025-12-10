import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Check,
  Clock,
  Loader2,
  Lock,
  Mail,
  RefreshCw,
  Send,
  ShieldCheck,
  Unlock,
  User,
  X,
} from "lucide-react";

interface BlogPost {
  row: number;
  dateTime: string;
  email: string;
  name: string;
  subject: string;
  content: string;
  approved: string;
}

const BLOG_API_URL =
  "https://script.google.com/macros/s/AKfycbyQmdJBr-bRHXxDj8OFvC6OHAfnw3RmuP3qhp7yjt9auMr5tZrtA0ybahXmONQ-EELUdA/exec";

const normalizePosts = (posts: any[] = []): BlogPost[] =>
  posts.map((post) => ({
    row: Number(post.row ?? 0),
    dateTime: post.dateTime || post.date || "",
    email: post.email || "",
    name: post.name || post.author || "Anonymous",
    subject: post.subject || post.title || "Untitled",
    content: post.content || "",
    approved: (post.approved || "").toString(),
  }));

const isApproved = (value: string) =>
  value.toString().trim().toLowerCase() === "yes";

const Blog = () => {
  const [publicPosts, setPublicPosts] = useState<BlogPost[]>([]);
  const [adminPosts, setAdminPosts] = useState<BlogPost[]>([]);
  const [loadingPublic, setLoadingPublic] = useState(true);
  const [loadingAdmin, setLoadingAdmin] = useState(false);
  const [approvingRow, setApprovingRow] = useState<number | null>(null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    adminId: "",
    adminPass: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPublicPosts();
  }, []);

  const fetchPublicPosts = async () => {
    try {
      setLoadingPublic(true);
      const response = await fetch(BLOG_API_URL);
      const data = await response.json();
      const normalized = normalizePosts(data.posts || []);
      const approvedOnly = normalized.filter((post) =>
        isApproved(post.approved)
      );
      setPublicPosts(approvedOnly);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      // Fallback sample posts if API is unreachable
      setPublicPosts([
        {
          row: 1,
          subject: "My 6-Month Transformation Journey",
          name: "Rahul Sharma",
          email: "rahul@example.com",
          content:
            "When I started my fitness journey, I weighed 95kg and could barely run for 5 minutes. Six months later, I've lost 20kg and completed my first 10K run. The key was consistency—showing up every day even when I didn't feel like it.",
          dateTime: "2024-01-15",
          approved: "Yes",
        },
        {
          row: 2,
          subject: "How Meal Prep Changed Everything",
          name: "Priya Patel",
          email: "priya@example.com",
          content:
            "Meal prep on Sundays keeps my week clean and budget friendly. Energy levels have skyrocketed, and I've finally broken through my weight loss plateau.",
          dateTime: "2024-01-10",
          approved: "Yes",
        },
      ]);
    } finally {
      setLoadingPublic(false);
    }
  };

  const fetchAdminPosts = async (creds = adminCredentials) => {
    if (!creds.adminId || !creds.adminPass) {
      toast({
        title: "Admin login required",
        description: "Enter your Admin ID and password to load submissions.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoadingAdmin(true);
      const url = new URL(BLOG_API_URL);
      url.searchParams.set("adminId", creds.adminId.trim());
      url.searchParams.set("adminPass", creds.adminPass.trim());

      const response = await fetch(url.toString());
      const data = await response.json();
      const normalized = normalizePosts(data.posts || []);
      setAdminPosts(normalized);
      setAdminLoggedIn(true);

      toast({
        title: "Admin view loaded",
        description: `Showing ${normalized.length} submission(s) from the sheet.`,
      });
    } catch (error) {
      console.error("Failed to fetch admin posts:", error);
      toast({
        title: "Could not load submissions",
        description: "Please verify credentials or try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoadingAdmin(false);
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchAdminPosts(adminCredentials);
  };

  const handleAdminLogout = () => {
    setAdminLoggedIn(false);
    setAdminPosts([]);
    setAdminCredentials({ adminId: "", adminPass: "" });
    toast({
      title: "Logged out",
      description: "Admin access cleared from this device.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = new URLSearchParams();
      payload.set("name", formData.name.trim());
      payload.set("email", formData.email.trim());
      payload.set("subject", formData.subject.trim());
      payload.set("content", formData.content.trim());

      const response = await fetch(BLOG_API_URL, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (response.ok && data.status === "success") {
        toast({
          title: "Blog Submitted!",
          description: data.message
            ? data.message
            : "Your blog has been submitted for review. It will appear once approved.",
        });
        setFormData({ name: "", email: "", subject: "", content: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission Received",
        description:
          "Your blog has been recorded and will be reviewed shortly.",
      });
      setFormData({ name: "", email: "", subject: "", content: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleApproval = async (row: number, approvedValue: "Yes" | "No") => {
    if (!adminLoggedIn) {
      toast({
        title: "Login to manage posts",
        description: "Enter admin credentials to approve or hide posts.",
        variant: "destructive",
      });
      return;
    }

    setApprovingRow(row);
    try {
      const payload = new URLSearchParams();
      payload.set("action", "approve");
      payload.set("row", row.toString());
      payload.set("approved", approvedValue);
      payload.set("adminId", adminCredentials.adminId.trim());
      payload.set("adminPass", adminCredentials.adminPass.trim());

      const response = await fetch(BLOG_API_URL, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || "Approval failed");
      }

      toast({
        title: `Marked as ${approvedValue}`,
        description: `Row ${row} updated in the sheet.`,
      });

      fetchAdminPosts();
      fetchPublicPosts();
    } catch (error) {
      console.error("Failed to update approval:", error);
      toast({
        title: "Update failed",
        description:
          "Could not update the row. Please verify credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setApprovingRow(null);
    }
  };

  const formatDate = (dateValue: string) => {
    const parsed = new Date(dateValue);
    if (Number.isNaN(parsed.getTime())) return dateValue || "Unknown date";
    return parsed.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const readingTime = (content: string) =>
    Math.max(1, Math.ceil(content.split(" ").length / 200));

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
            {loadingPublic ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            ) : publicPosts.length > 0 ? (
              <div className="space-y-8">
                {publicPosts.map((post) => (
                  <article
                    key={post.row}
                    className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-display text-2xl mb-3">
                      {post.subject}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.dateTime)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{readingTime(post.content)} min read</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
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

          {/* Admin moderation */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-2xl flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Admin Moderation
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Column F (Approved or Not) controls what the public sees.
                    Login to review and mark posts Yes/No directly from here.
                  </p>
                </div>
                <Badge variant={adminLoggedIn ? "default" : "outline"}>
                  {adminLoggedIn ? (
                    <span className="flex items-center gap-2">
                      <Unlock className="w-4 h-4" /> Logged in
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Login required
                    </span>
                  )}
                </Badge>
              </div>

              {!adminLoggedIn ? (
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Admin ID
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter Admin ID"
                        value={adminCredentials.adminId}
                        onChange={(e) =>
                          setAdminCredentials({
                            ...adminCredentials,
                            adminId: e.target.value,
                          })
                        }
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        value={adminCredentials.adminPass}
                        onChange={(e) =>
                          setAdminCredentials({
                            ...adminCredentials,
                            adminPass: e.target.value,
                          })
                        }
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={loadingAdmin}
                  >
                    {loadingAdmin ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Login to Admin
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fetchAdminPosts()}
                      disabled={loadingAdmin}
                    >
                      {loadingAdmin ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Refreshing
                        </>
                      ) : (
                        <>
                          <RefreshCw className="w-4 h-4" />
                          Refresh
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleAdminLogout}
                    >
                      <X className="w-4 h-4" />
                      Logout
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Showing {adminPosts.length} submissions
                    </p>
                  </div>

                  {adminPosts.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No submissions found in the sheet yet.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {adminPosts.map((post) => {
                        const approved = isApproved(post.approved);
                        return (
                          <div
                            key={post.row}
                            className="border border-border rounded-lg p-4 bg-background/40"
                          >
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                              <div>
                                <h4 className="font-semibold text-lg">
                                  {post.subject}
                                </h4>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    {post.name}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Mail className="w-4 h-4" />
                                    {post.email}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(post.dateTime)}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    Row {post.row}
                                  </span>
                                </div>
                              </div>
                              <Badge
                                variant={approved ? "default" : "outline"}
                                className={`flex items-center gap-1 ${
                                  approved ? "bg-green-600 text-white" : ""
                                }`}
                              >
                                {approved ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    Approved (Yes)
                                  </>
                                ) : (
                                  <>
                                    <X className="w-3 h-3" />
                                    Not Approved (No)
                                  </>
                                )}
                              </Badge>
                            </div>

                            <p className="text-sm text-foreground/80 mt-3 whitespace-pre-line">
                              {post.content}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-4">
                              <Button
                                size="sm"
                                variant="default"
                                disabled={approvingRow === post.row}
                                onClick={() => handleApproval(post.row, "Yes")}
                              >
                                {approvingRow === post.row ? (
                                  <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Updating
                                  </>
                                ) : (
                                  <>
                                    <Check className="w-4 h-4" />
                                    Approve (Yes)
                                  </>
                                )}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={approvingRow === post.row}
                                onClick={() => handleApproval(post.row, "No")}
                              >
                                <X className="w-4 h-4" />
                                Hide (No)
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
