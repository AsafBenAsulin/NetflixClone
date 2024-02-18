import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from "@/Actions";

export interface MyState {
    loading:boolean,
    error:string,
    data:[]
  }

  type MyAction = {
    type: string;
    payload: any; 
  };
 const initialState: MyState ={
    loading:true,
    error:'',
    data:[]
 }
const homePageReducer=(state: MyState = initialState, action: MyAction)=>{
    switch(action.type){

        case GET_REQUEST:{
            return {...state,loading:true}
        }
        case GET_FAIL:{
            return{...state,loading:false,error:action.payload}
        }
        case GET_SUCCESS:{
            return{...state,loading:false,data:action.payload}
        }
        default :return{...state};
    }
}

export default homePageReducer