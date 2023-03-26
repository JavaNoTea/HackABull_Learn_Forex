import { BrowserRouter, Routes , Route, Navigate} from 'react-router-dom';
import Landing from './landing/Landing';
import Login from './login-register/Login';
import { useContext } from 'react';
import { AuthContext} from './context/AuthContext';
import Dashboard from './Dashboard';

const App = () => {
    const {currentUser} = useContext(AuthContext);

    const ProtectedRoute = ({children}) =>{
        if(!currentUser){
          return <Navigate to="/login" />
        }
    
        return children;
      }
    

    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' index element={
                <Login />
            }>
            </Route>
            <Route path='/page' index element={
                <Dashboard/>
            }></Route>

            </Routes>
        </BrowserRouter>
     );
}
 
export default App;