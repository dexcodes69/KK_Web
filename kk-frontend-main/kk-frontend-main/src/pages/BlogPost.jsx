import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
        
        <div className="text-sm text-gray-500 mb-4">
          {post.date} • {post.readTime} min read
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
        
        <div className="h-96 overflow-hidden rounded-lg mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div 
  className="prose max-w-none"
  dangerouslySetInnerHTML={{ __html: post.fullContent }} // <-- This is the correct way
/>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
