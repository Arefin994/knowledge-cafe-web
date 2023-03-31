import React, { useState } from 'react';
import './Bookmark.css';

const Bookmark = (time) => {
  const [readingTime, setReadingTime] = useState(177);
  const [bookMarkCount, setBookMarkCount] = useState(0);

  const handleRead = (time) => {
    setReadingTime((prevTime) => prevTime + time);
  };

  return (
    <div>
      <div className='book-mark my-2'>
        Time Spent on reading: {readingTime} min
      </div>
      <div className='book-mark-count'>
        <h6>Bookmarked Blog: {bookMarkCount}</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Bookmark;
