
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'
import { toast } from "react-toastify";

// --------- Paste Your Firebase Config File Here ---------

const firebaseConfig = {
  apiKey: "AIzaSyDX2xe_dMgGU2qng8UI0SnmF4h45-SLSK0",
  authDomain: "budgetbuddy-862d3.firebaseapp.com",
  projectId: "budgetbuddy-862d3",
  storageBucket: "budgetbuddy-862d3.firebasestorage.app",
  messagingSenderId: "916047828822",
  appId: "1:916047828822:web:37a7eab41366fe51d068f7",
  measurementId: "G-HL27YL7NQ0"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (username, email, password) => {
    try {
        const usersRef = collection(db,'users')
        const q = query(usersRef,where("username", "==" ,username.toLowerCase()))
        const querySnapshot = await getDocs(q)
        if(querySnapshot.docs.length>0){
            toast.error("Username already taken")
            return 0;
        }
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await setDoc(doc(db,"users",user.uid), {
            id: user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen: Date.now()
        });
        await setDoc(doc(db,"chats",user.uid), {
            chatsData:[]
        });

    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}

const resetPass = async (email) => {
    if (!email) {
        toast.error("Enter your email")
        return null
    }
    try {
        const userRef = collection(db, "users")
        const q = query(userRef, where("email", "==", email))
        const querySnap = await getDocs(q)
        if (!querySnap.empty) {
            await sendPasswordResetEmail(auth,email)
            toast.success("Reset Email Sent")
        }
        else {
            toast.error("Email doesn't exists")
        }
    } catch (error) {
        console.error(error)
        toast.error(error.message)
    }
   
}

export { auth, db, login, signup, logout, resetPass};