import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-config/firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'
import { useNavigate } from "react-router-dom";
import logo from "../media/Logo.png"

const provider = new GoogleAuthProvider();
const Login = () => {
    const {data} = useContext(AuthContext)
    const navigate = useNavigate();
    const [error,setError] = useState(false);

    const handlePage = () =>{
      navigate("/page")
    }

    const handleSignIn = (e) =>{
        e.preventDefault();
        //console.log(data)

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        //console.log(user);
        handlePage()
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;

        setError(true)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }

    
    
      
      
    
    return ( 
        <div className="d-flex flex-column align-items-center justify-content-center height">
            <img src={logo} alt="" />
            <p className="text-center width">The exciting world of buying and selling currencies on a fast-paced, 24/5 market. Traders use sophisticated strategies and tools to profit by buying low and selling high, turning their financial expertise into an electrifying art form.</p>
            <button className="btn1" onClick={ (e) => {handleSignIn(e)}}> Sign in with google</button>
            {error && <p>Something went wrong!</p>}
        </div>
     );
}
 
export default Login;