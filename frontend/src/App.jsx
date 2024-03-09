import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Inicio from './pages/Inicio'
import RegisterAbogados from './pages/RegisterAbogado'
import LoginAbogado from './pages/LoginAbogado'
import AbogadosList from './pages/AbogadosList'
import ProtectedRoute from './ProtectedRoute'
import Bienvenida from './pages/Bienvenida'
//aaaaaa
function App(){
  return(
      // RUTA DE LOS ENDPOINTS
    <AuthProvider>
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/registerAbogados' element={<RegisterAbogados/>}/>
      <Route path='/profile' element={<h1>Pagina De Inicio</h1>}/>
      <Route path='/loginAbogado' element={<LoginAbogado/>}/>
      <Route path='/bienvenida' element={<Bienvenida/>}/>
    <Route element={<ProtectedRoute/>}>
    <Route path='/abogadoslist' element={<AbogadosList/>}/> 

    </Route>
     
    
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  

  
  )
}
// another changes safhbasjhfasvfas
export default App 