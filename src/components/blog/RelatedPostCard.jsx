import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

const RelatedPostCard = ({ post }) => {
  return (
    <div className="group flex flex-col bg-white rounded-lg border border-orange-100 overflow-hidden hover:shadow-md transition-all duration-300 h-full">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${post.imageUrl || '/placeholder-blog.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-orange-600">{post.category}</span>
        </div>
        
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-sm text-orange-600 font-medium mt-auto group-hover:underline"
        >
          Read more 
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

RelatedPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    category: PropTypes.string
  }).isRequired,
};

export default RelatedPostCard;