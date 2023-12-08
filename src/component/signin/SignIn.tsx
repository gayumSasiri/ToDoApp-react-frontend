import './SignIn.css';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth} from "../../firebase.ts";

export function SignIn() {

    function handleSignIn(){
       signInWithPopup(auth, new GoogleAuthProvider());
    }

    return (
        <>
            <div className="d-flex vh-100 flex-column gap-2 align-items-center justify-content-center">
                <h1>Welcome to To-Do-App</h1>
                <button onClick={handleSignIn} className="btn btn-primary">Sign in with google</button>
            </div>

        </>
    );
}