import React from 'react';
import './Blog.css'

const Blog = (props) => {
    return (
        <div className='py-3'>
            <img className='blog-img rounded' src={props.img} alt="" />
            <div className='p-3'>
                <div className='d-flex '>
                    <div>
                        <img className='pfp-img' src={props.pfpImg} alt="" />
                    </div>
                    <div className='d-flex flex-grow-1 justify-content-between'>
                        <div>
                            <h5>{props.name}</h5>
                            <h6>{props.date} ({props.daysAgo} days ago)</h6>
                        </div>
                        <div className='d-flex '>
                            <h6 className='p-4 my-auto'>{props.timeToRead}</h6>
                            <h6 className='my-auto'>Bookmark</h6>
                            <button className='bookmark-btn'><i class="fa-regular fa-bookmark fa-beat"></i></button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <h5>{props.tags}</h5>
                    <button className='markAsRead-btn' >Mark as read</button>
                </div>
            </div>

        </div>
    );
};

export default Blog;