import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Calendar, User, Tag } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${post.imageUrl || '/placeholder-blog.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
        
        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-orange-600 text-white px-3 py-1 text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          <Link to={`/blog/${post.id}`} className="stretched-link">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Meta information */}
        <div className="flex items-center text-gray-500 text-xs">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags && post.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
          {post.tags && post.tags.length > 2 && (
            <span className="inline-flex items-center text-xs text-gray-600 px-2 py-1">
              +{post.tags.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default BlogCard;