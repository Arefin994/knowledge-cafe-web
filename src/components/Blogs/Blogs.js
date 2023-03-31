import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [totalReadTime, setTotalReadTime] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  useEffect(() => {
    const localBookmarks = localStorage.getItem('Bookmarks');
    if (localBookmarks) {
      setBookmarks(JSON.parse(localBookmarks));
    }
  }, []);

  const handleClick = (props) => {
    const localBookmarks = localStorage.getItem('Bookmarks');
    const bookmarks = localBookmarks ? JSON.parse(localBookmarks) : [];
    bookmarks.push(props);
    localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
    setBookmarks(bookmarks);
  };

  const handleReadTime = (time) => {
    setTotalReadTime(parseInt(totalReadTime) + parseInt(time.timeToRead));
  };
  
  return (
    <div className='layout'>
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
            timeToRead={blog.timeToRead}
            img={blog.img}
            handleClick={handleClick}
            handleReadTime={handleReadTime}
          />
        ))}
      </div>
      <div>
        <div className='book-mark my-2'>
          Time Spent on reading: <span id='markAsRead'>{totalReadTime}</span>min
        </div>
        <div className='book-mark-count py-2'>
          <h6 className='py-3'>Bookmarked Blog: {bookmarks.length}</h6>
          <div>
            {bookmarks.map(bookmark => (
              <p className='bg-white p-2'>{bookmark.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
