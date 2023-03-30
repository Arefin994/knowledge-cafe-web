import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  return (
    <div className='blogs px-2'>
      {blogs.map(blog => (
        <Blog 
        key={blog.id} 
        pfpImg={blog.pfpImg}
        name={blog.writer}  
        tags={blog.tags}
        title={blog.title}
        date={blog.date}
        daysAgo={blog.daysAgo}
        timeToRead = {blog.timeToRead}
        img = {blog.img}></Blog>
      ))}
    </div>
  );
};

export default Blogs;