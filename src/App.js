import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import { useEffect, useState } from 'react';
import Blogs from './components/Blogs/Blogs.js';
import Bookmark from './components/Bookmark/Bookmark';
import QnA from './components/QnA/QnA';




function App() {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch('data.json')
  //   .then(res => res.json())
  //   .then(blogs => console.log(blogs))
  // },[])

  return (
    <div className="App">
      <Header></Header>
      <div className=''>
        <Blogs></Blogs>
      </div>
      <QnA></QnA>
    </div>
  );
}

export default App;
