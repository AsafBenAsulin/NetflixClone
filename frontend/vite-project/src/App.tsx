import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';

function App() {


  return (
    <BrowserRouter>
      <ToastContainer position='bottom-center' limit={1} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
