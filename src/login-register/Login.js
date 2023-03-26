import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-config/firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'

const provider = new GoogleAuthProvider();
const Login = () => {
    const {data} = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const handleSignIn = (e) =>{
        e.preventDefault();
        console.log(data)

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      setShow(true)
    }
    
    return ( 
        <div className="d-flex flex-column align-items-center justify-content-center height">
            <p className="logo">4X</p>
            <button className="btn1" onClick={ (e) => {handleSignIn(e)}}> Sign in with google</button>
        </div>
     );
}
 
export default Login;