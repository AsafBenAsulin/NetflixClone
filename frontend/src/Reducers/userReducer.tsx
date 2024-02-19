import { USER_SIGNIN, USER_SIGNOUT } from "../Actions";


const userReducer = (state: any, action: any) => {
    const type = action.type;
    const payload = action.payload;
    switch (type) {
        case USER_SIGNIN: {
            return { ...state, userInfo: payload }
        }
        case USER_SIGNOUT:{
            return {...state,userInfo:null}
        }
        default:
            break;
    }

}

export default userReducer;