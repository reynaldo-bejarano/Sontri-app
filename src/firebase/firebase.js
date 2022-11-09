import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase.config";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";



//SingOut User


// create


const FirebaseCreateMessage = () => { }
const FirebaseCreateForm = () => { }



// Get
const FirebaseGetAccountCurrentUser = () => { }
const FirebaseGetMessages = () => { }

const FirebaseGetForms = () => { }


// Update
const FirebaseUpdateEmail = () => { }
const FirebaseUpdatePassword = () => { }
const FirebaseUpdateClient = () => { }
const FirebaseUpdateMessage = () => { }
const FirebaseUpdateForm = () => { }
const FirebaseUpdateInterest = () => { }


