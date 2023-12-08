import './App.css'
import {useEffect,useState} from 'react';
import {auth} from "./firebase.ts";
import {onAuthStateChanged} from 'firebase/auth';
import {useDispatcher, useUser} from "./context/UserContext.tsx";
import {SignIn} from "./component/signin/SignIn.tsx";
import {Loader} from "./component/loader/Loader.tsx";
import {Header} from "./component/header/Header.tsx";
import {Form} from "./component/form/Form.tsx";
import {TaskProvider} from "./context/TaskContext.tsx";
import {TaskList} from "./component/task-list/TaskList.tsx";

function App() {

    const [loader, setLoader] = useState(true);
    const user = useUser();
    const userDispatcher = useDispatcher();


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setLoader(false);
            if (user){
                userDispatcher({type: 'sign-in', user: user});
            }else {
                userDispatcher({type: 'sign-out'});
            }
        });
        return () => unsubscribe();
    },[]);

  return (
    <>
        {loader ?
            <Loader />  // if part
        :
            user ? // else part
            (<>
                <Header />
                <TaskProvider>
                    <Form />
                    <TaskList />
                </TaskProvider>
            </>)
            :
            <SignIn/>
        }
    </>
  )
}

export default App
