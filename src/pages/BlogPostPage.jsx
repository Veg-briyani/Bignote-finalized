import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import blogPosts, { getRelatedPosts } from '../data/blogData';
import RelatedPostCard from '../components/blog/RelatedPostCard';

const BlogPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  // Find the current post
  const post = blogPosts.find(post => post.id === postId);
  
  // Get related posts (maximum 3)
  const relatedPosts = getRelatedPosts(postId);
  
  // Scroll to top when navigating between posts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);
  
  // If post not found, navigate to blog listing
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  if (!post) {
    return null; // Will redirect to blog page via the useEffect
  }
  
  // Function to copy current URL to clipboard
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to all articles
        </Link>
        
        {/* Hero section */}
        <div className="relative rounded-xl overflow-hidden mb-10 h-[400px]">
          {/* Featured image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.imageUrl || '/placeholder-blog.jpg'})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          {/* Post category */}
          <div className="absolute top-6 left-6">
            <span className="inline-block bg-orange-600 text-white px-4 py-1.5 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          {/* Post title and meta */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-white/80 gap-4 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
                {post.authorRole && (
                  <span className="ml-1 text-white/60">— {post.authorRole}</span>
                )}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              {/* Post content */}
              <div 
                className="prose prose-orange prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Tagged with:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Author section */}
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-xl font-bold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{post.author}</h3>
                  {post.authorRole && (
                    <p className="text-gray-600 mb-3">{post.authorRole}</p>
                  )}
                  <p className="text-gray-600">
                    Author of insightful articles on publishing, writing, and book marketing. 
                    Passionate about helping authors succeed in today's dynamic publishing landscape.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation between posts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Previous post */}
              <div>
                {blogPosts[blogPosts.findIndex(p => p.id === postId) - 1] && (
                  <Link 
                    to={`/blog/${blogPosts[blogPosts.findIndex(p => p.id === postId) - 1].id}`}
                    className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <ChevronLeft size={20} className="mr-2" />
                    <span className="text-sm">Previous Article</span>
                  </Link>
                )}
              </div>
              
              {/* Next post */}
              <div className="text-right">
                {blogPosts[blogPosts.findIndex(p => p.id === postId) + 1] && (
                  <Link 
                    to={`/blog/${blogPosts[blogPosts.findIndex(p => p.id === postId) + 1].id}`}
                    className="flex items-center justify-end text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm">Next Article</span>
                    <ChevronRight size={20} className="ml-2" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            {/* Share section */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share This Article</h3>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`, '_blank')}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-sky-500 hover:text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
                <button
                  onClick={copyLinkToClipboard}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-orange-600 hover:text-white transition-colors"
                  aria-label="Copy link"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>
            
            {/* Popular posts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map(popularPost => (
                  <Link 
                    key={popularPost.id}
                    to={`/blog/${popularPost.id}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <div 
                        className="w-full h-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${popularPost.imageUrl || '/placeholder-blog.jpg'})` }}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {popularPost.title}
                      </h4>
                      <span className="text-xs text-gray-500">{popularPost.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900">You May Also Like</h2>
            <p className="text-gray-600 mt-2">More insights and resources for authors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <RelatedPostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;