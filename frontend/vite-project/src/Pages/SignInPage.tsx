import { useRef } from "react";
import Title from "../Components/shared/Title";
import { toast } from "react-toastify";
import {getError} from "../utils" 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const emailValue = emailRef.current?.value || "";
            const passwordValue = passwordRef.current?.value || "";
            const {data} = await axios.post("/api/v1/users/signin",{email:emailValue,password:passwordValue})
            if(data){
                navigate("/")
            }
        } catch (error) {
            toast.error(getError(error))
        }

        
    };

    return (
        <div>
            <h1>Sign In</h1>
            <Title title="Sign In"/>
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                    /><br/>
                    <input
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                    /><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
