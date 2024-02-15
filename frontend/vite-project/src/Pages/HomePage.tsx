import { useContext, useEffect } from 'react';
import Title from '../Components/shared/Title'
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../user';
import Cookies from "js-cookie";
import { USER_SIGNOUT } from '../Actions';

import Contents from '@/Components/HomePage/Contents';

const HomePage = () => {
    const navigate = useNavigate();
    const {search} = useLocation();
    const { state:{userInfo},dispatch: ctxDispatch } = useContext(User);
    const redirectURL=new URLSearchParams(search);
    const redirectValue=redirectURL.get("redirect");
    const redirect = redirectValue ?redirectValue:"/signin";

    const clickHandler =() =>{
      Cookies.remove("userInfo");
      ctxDispatch({ type: USER_SIGNOUT})
      navigate("/");
    }

    useEffect(() => {
        if(!userInfo){
            navigate(redirect)
        }
        }, [navigate,redirect,userInfo]);

  return (
    <div>
        <Title title='Home - Netflix'/>
        <h1>NetFlix</h1>
        <button onClick={clickHandler}>Logout</button>
        <Contents></Contents>
    </div>
  )
}

export default HomePage