import { useEffect, useReducer} from 'react';
import Title from '../Components/shared/Title'
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from '../Actions';
import homePageReducer from '@/Reducers/homeReducer';
import { IState } from '@/Models/IState';
import ContentSection from '@/Components/shared/ContentSection';
import { getData } from '@/utils';
import CheckUser from '@/Components/shared/CheckUser';


const initialState: IState ={
  loading:true,
  error:'',
  data:[]
}

const HomePage = () => {
    const [state,dispatch]=useReducer(homePageReducer,initialState);

      useEffect(()=>{
      const getContents=async()=>{
        dispatch({
          type: GET_REQUEST,
          payload: undefined
        });
      try{
     
        const data=await getData("/api/v1/seed/genres");
        dispatch({type:GET_SUCCESS,payload:data});
        
      }catch(error:any){
          dispatch({type:GET_FAIL,payload:error.message});
      }
      };
      getContents();
    },[])
  return (
    <div>
      <CheckUser/>
        <Title title='Home - Netflix'/>

        <div className='products'>
          {state.loading ?<p>loading</p>: state.error ?<p>{state.error}</p>:(
            <div>
              {state.data.map((listName:string,index:number) => (
                  <ContentSection key={index} genre={listName} movieName={undefined} seriesName={undefined} url='' />

              ))}
                <ContentSection genre={undefined} movieName='Top picks for Movie' seriesName={undefined} url='movies/'  />
                <ContentSection genre={undefined} movieName={undefined} seriesName='Top Series' url='series/'/>
            </div>
          )}
          
          </div>



    </div>
  )
}

export default HomePage