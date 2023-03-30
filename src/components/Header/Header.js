import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='d-flex justify-content-between pt-3'>
                <div>
                    <h2>Knowledge Cafe</h2>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Header;