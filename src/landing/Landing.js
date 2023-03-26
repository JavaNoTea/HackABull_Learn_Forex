import { async } from "@firebase/util";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { onSnapshot, setDoc, arrayUnion, collection} from "firebase/firestore";
import { db } from "../firebase-config/firebase";
import { doc } from "firebase/firestore";


const Landing = () => {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handlePage = () =>{
        navigate("/")
    }


    const handleNewUser = async () => {
        console.log(currentUser.uid)
        try{
            await setDoc(doc(db, "currency", currentUser.uid), {
                Carray: arrayUnion({
                    type:"USD",
                    amount:10000,
                })}
            )
        }
        catch(e){
            console.log(e);
        }
    }

    const getChats = () =>{
        
        const unsub = onSnapshot(doc(db, "currency", currentUser.uid), (doc) =>{

            if(!doc.data())handleNewUser();
        })
       
        return () =>{
            unsub();
        }
    };


    useEffect(()=>{
        getChats();
    },[])



    return ( <div>{currentUser.email}</div> );
}
 
export default Landing;