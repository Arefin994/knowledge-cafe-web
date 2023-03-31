// import React, { useState, useEffect } from 'react';
// import './Bookmark.css';

// const Bookmark = () => {
//   const [currentTime, setCurrentTime] = useState(localStorage.getItem('timeToRead'));
  
//   useEffect(() => {
//     const handleStorageChange = () => {
//       setCurrentTime(localStorage.getItem('timeToRead'));
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   let bookMarkCount = localStorage.getItem('bookmarkCount');
  
//   return (
//     <div>
//       <div className='book-mark my-2'>
//         Time Spent on reading: <span id='markAsRead'>{currentTime}</span>min
//       </div>
//       <div className='book-mark-count'>
//         <h6>Bookmarked Blog: {bookMarkCount}</h6>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//       </div>
//     </div>
//   );
// };

// export default Bookmark;
