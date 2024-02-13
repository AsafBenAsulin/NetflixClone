import { USER_SIGNIN } from "../Actions";


const userReducer = (state: any, action: any) => {
    const type = action.type;
    const payload = action.payload;
    switch (type) {
        case USER_SIGNIN: {
            return { ...state, userInfo: payload }
        }
        default:
            break;
    }

}

export default userReducer;