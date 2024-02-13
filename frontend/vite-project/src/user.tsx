import { createContext, useReducer } from "react";
import userReducer from "./Reducers/userReducer";
import Cookies from "js-cookie"

export const User = createContext<any>(null);

const initialState = {
    userInfo : Cookies.get('userInfo'),

}

export const UserProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const body = { state, dispatch }
    return <User.Provider value={body}>{children}</User.Provider>
}
