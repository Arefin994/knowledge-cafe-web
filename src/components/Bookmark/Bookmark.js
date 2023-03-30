import React from 'react';
import './Bookmark.css'
const Bookmark = () => {
    let readingTime = 177;
    let bookMarkCount = 0;
    function ddReadTime(time){
        readingTime+=parseInt(time);
    }
    return (
        <div >
            <div className='book-mark my-2'>
                Time Spent on reading: {readingTime} min
            </div >
            <div className='book-mark-count'>
                <h6>Bookmarked Blog: {bookMarkCount}</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quas!</p>
                <p>Pariatur necessitatibus tenetur exercitationem consequuntur porro iste expedita tempora voluptate?</p>
                <p>Optio aperiam doloribus consequatur impedit ipsum! Voluptatibus iste vitae harum?</p>
                <p>Cum numquam amet odit nam qui officiis! Sint, sit necessitatibus.</p>
                <p>Totam amet, eum nesciunt expedita accusantium corrupti voluptas perferendis sapiente?</p>
                <p>Explicabo, nobis dolorum? Iure, nihil mollitia. Quo tenetur possimus explicabo!</p>
                <p>Nemo nobis, corporis at blanditiis illo vel impedit enim mollitia.</p>
                <p>Dolore in nihil maiores, veniam hic deserunt. Iste, suscipit rem.</p>
                <p>Nostrum adipisci minus a tempore recusandae libero at? Cum, molestias.</p>
                <p>Rerum, consequatur laborum. Aut rem molestias dolore fugiat consequuntur libero.</p>
                <p>Nisi mollitia est sint! Similique labore praesentium eius eaque maiores.</p>
                <p>Distinctio, hic nam? Impedit obcaecati itaque tempora recusandae error aliquid.</p>
                <p>Ex maiores sed debitis doloremque nam quasi nesciunt voluptatum incidunt.</p>
                <p>Totam, neque? Omnis, velit temporibus fuga perspiciatis reiciendis delectus modi!</p>
                <p>Ratione sunt aut omnis sapiente voluptatibus? Modi rem dolor impedit!</p>
                <p>Saepe fugiat velit consectetur, doloribus quibusdam praesentium aperiam soluta illum.</p>
                <p>Quasi fugit praesentium non. Amet id pariatur tempora delectus architecto?</p>
                <p>Laboriosam, perspiciatis! Eveniet reprehenderit distinctio inventore laborum quia voluptates sed!</p>
                <p>Quam nostrum cum perferendis sequi eius, optio doloremque sunt dolores!</p>
                <p>Sed porro officiis architecto ex ducimus quos exercitationem ipsum nostrum!</p>
            </div>
        </div>
    );
};

export default Bookmark;