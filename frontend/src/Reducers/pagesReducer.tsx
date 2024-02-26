import {GET_REQUEST,GET_FAIL,GET_SUCCESS} from '../Helpers/Actions.js'
import { MyAction } from '@/Models/Action/MyAction.js';
import { IStateArr } from '@/Models/States/IStateArr.js';


 const initialState: IStateArr<String> ={
    loading:true,
    error:'',
    data:[]
 }
function pagesReducer(state: IStateArr<String> = initialState, action: MyAction) {
    switch (action.type) {

        case GET_REQUEST: {
            return { ...state, loading: true };
        }
        case GET_FAIL: {
            return { ...state, loading: false, error: action.payload };
        }
        case GET_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        default: return { ...state };
    }
}

export default pagesReducer