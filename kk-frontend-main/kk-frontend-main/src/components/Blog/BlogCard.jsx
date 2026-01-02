import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { id, title, excerpt, date, readTime, image } = blog;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">
            {date} • {readTime} min read
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600">{excerpt}</p>
          <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
            Read More →
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
