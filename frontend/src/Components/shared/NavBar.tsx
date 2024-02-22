import { useContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { USER_SIGNOUT } from '@/Actions';
import { useNavigate } from 'react-router-dom';
import { User } from '@/user';

const NavBar = () => {
    const navigate = useNavigate();
    const { dispatch: ctxDispatch } = useContext(User);
    const [isTop, setIsTop] = useState(true);

    const clickHandler = () => {
        Cookies.remove("userInfo");
        ctxDispatch({ type: USER_SIGNOUT })
        navigate("/");
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            // Check if scrollTop is less than a certain value to determine if the user has scrolled down
            if (scrollTop < 100) { // Adjust 100 to a suitable value depending on when you want the transparency to kick in
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-10 ${isTop ? 'bg-transparent' : 'bg-gray-900 opacity-90'} text-white`}>
            <div className="bg-black p-2">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="/Netflix-Logo.wine.svg" alt="Netflix Logo" className="w-22 mr-2" />
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-red-600">Home</a></li>
                        <li><a href="#" className="hover:text-red-600">TV Shows</a></li>
                        <li><a href="#" className="hover:text-red-600">Movies</a></li>
                        <li><a href="#" className="hover:text-red-600">New & Popular</a></li>
                        <li><a href="#" className="hover:text-red-600 color:text-white">My List</a></li>
                        <li><button onClick={clickHandler} className="logout-btn">Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
