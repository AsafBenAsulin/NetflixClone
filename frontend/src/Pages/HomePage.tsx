
import Title from '../Components/shared/Title'
import CheckUser from '@/Components/shared/CheckUser';
import NavBar from '@/Components/shared/NavBar';
import ContentPage from '@/Components/shared/ContentPage';


const HomePage = () => {

  return (
    <div>
      <CheckUser/>
        <NavBar></NavBar>
        <Title title='Home - Netflix'/>
        <ContentPage name='genres'></ContentPage>
        <ContentPage name='series'></ContentPage>
        <ContentPage name='movies'></ContentPage>


    </div>
  )
}

export default HomePage