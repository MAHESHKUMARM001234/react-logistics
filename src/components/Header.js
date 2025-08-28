import React from 'react'
// import { FaPhone } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='home-page'>
            <div className='top'></div>
            <header>
                <div className='logo'>
                    <p>LOGISTICS</p>
                    <h1>EXPRESS</h1>
                </div>
                <div className='menu-content'>
                    <nav>
                        <ul>
                            <li><a href='#'>HOME</a></li>
                            <li><a href='#'>ABOUT</a></li>
                            <li><a href='#'>SERVICES</a></li>
                            <li><a href='#'>BLOGS</a></li>
                            <li><a href='#'>CONTACT</a></li>
                        </ul>
                    </nav>
                    {/* <FaPhone style={{ color: '#ff5e14', fontSize: '12px', marginLeft: '20px' }} /> */}
                    <span style={{ color: '#000000ff', fontSize: '12px', marginLeft: '5px' }}>+1 234 567 890</span>
                    {/* <button className='track-order'>Track Order</button> */}
                </div>
            </header>
        </div>
    )
}

export default Header;