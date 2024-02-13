import { useContext, useEffect } from 'react';
import Title from '../Components/shared/Title'
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../user';

const HomePage = () => {
    const navigate = useNavigate();
    const {search} = useLocation();
    const { state:{userInfo},dispatch: ctxDispatch } = useContext(User);
    const redirectURL=new URLSearchParams(search);
    const redirectValue=redirectURL.get("redirect");
    const redirect = redirectValue ?redirectValue:"/signin";

    useEffect(() => {
        if(!userInfo){
            navigate(redirect)
        }
        }, [navigate,redirect,userInfo]);

  return (
    <div>
        <Title title='Home - Netflix'/>
        <h1>NetFlix</h1>
    </div>
  )
}

export default HomePage