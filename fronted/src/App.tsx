
import './App.css'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './Login/LoginPage'
import IndexPage from './Home/IndexPage'
import LeftPage from './layout/LeftPage'
import RegisterLogin from './Login/RegisterLogin'
import SettingPage from './Settings/SettingPage'
import FavoritePage from './Favorite/FavoritePage'
import ProfilePage from './Profile/ProfilePage'

function App() {  

  return (
    <Routes>
      <Route path='/*' element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<RegisterLogin></RegisterLogin>}></Route>
      <Route path='/log/' element={<LeftPage></LeftPage>}>
         <Route path='home' element={<IndexPage></IndexPage>}></Route>
         <Route path='settings' element={<SettingPage></SettingPage>}></Route>
         <Route path='favorite' element={<FavoritePage></FavoritePage>}></Route>
         <Route path='profile' element={<ProfilePage></ProfilePage>}></Route>
     </Route>
    </Routes>
   
  )
}

export default App
