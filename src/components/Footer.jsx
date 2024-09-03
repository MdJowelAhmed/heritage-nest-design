import React from 'react';

const Footer = () => {
    return (
        <div className='w-full p-16 bg-[#ECF5FF] flex flex-wrap justify-center gap-20 mx-auto'>
            <div className='w-80 text-center'>
                <img src="https://static.vecteezy.com/system/resources/previews/007/710/760/original/vintage-nature-logo-design-for-your-company-or-business-vector.jpg" alt="logo" className='w-16 h-28 object-cover mx-auto' />
                <p className='text-[#475467]'>Design amazing digital experiences that create more happy in the world.</p>
            </div>
            <div className='text-center'>
                <nav className='list-none font-montserrat space-y-4'>
                    <li className='text-[#667085] '>Products</li>
                    <li>Overview</li>
                    <li>Featured</li>
                    <li>Solutions</li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                </nav>
            </div>
            <div className='text-center'>
                <nav className='list-none font-montserrat space-y-4'>
                    <li className='text-[#667085] '>Company</li>
                    <li>About us</li>
                    <li>Career</li>
                    <li>News</li>
                    <li>Media Kit</li>
                    <li>Press</li>
                    <li>Contact</li>
                </nav>
            </div>
            <div className='text-center'>
                <nav className='list-none font-montserrat space-y-4'>
                    <li className='text-[#667085] '>Resources</li>
                    <li>Blogs</li>
                    <li>Newsletter</li>
                    <li>Events</li>
                    <li>Help Center</li>
                    <li>Support</li>
                    <li>Tutorials</li>
                </nav>
            </div>
            <div className='text-center'>
                <nav className='list-none font-montserrat space-y-4'>
                    <li className='text-[#667085] '>Social</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Github</li>
                    <li>Dribbble</li>
                </nav>
            </div>
            <div className='text-center'>
                <nav className='list-none font-montserrat space-y-4'>
                    <li className='text-[#667085] '>Legal</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Terms</li>
                    <li>License</li>
                    <li>Settings</li>
                    <li>Contact</li>
                </nav>
            </div>
        </div>

    );
};

export default Footer;