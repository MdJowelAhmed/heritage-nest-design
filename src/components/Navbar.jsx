import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow-md bg-[#ECF5FF] max-w-[1440px] mx-auto'>
            <header className="my-7 mx-24">
                <div className="container flex justify-between h-16 mx-auto">
                    <nav className="  space-x-3 flex items-center ">
                        <li className='list-none'><Link to='/buyer'>Buy </Link></li>
                        <li className='list-none'><Link to='/buyer'>Sel </Link></li>
                        <li className='list-none'><Link to='/buyer'>Service </Link></li>

                    </nav>
                    <Link to='/'>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/710/760/original/vintage-nature-logo-design-for-your-company-or-business-vector.jpg" alt="logo" className='object-cover w-16 h-16' />
                    </Link>
                    <div className="flex items-center md:space-x-4">
                        <p>Manage Rentals</p>
                        <button> Sign in</button>

                    </div>

                </div>
            </header>
        </div>
    );
};

export default Navbar;