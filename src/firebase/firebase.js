import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";

//Login UserWithEmailAndPassword
export const FirebaseSignInUserWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.info(user)
            console.info("Login user success!")
        })
}

//SingOut User
export const FirebaseSignOut = async () => {
    await signOut(auth).then(() => {
        console.info("SignOut user success!")
    }).catch((error) => {
        console.info(error.code);
    });
}

// create
export const FirebaseCreateUser = async (email, password, companyName) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const Credential = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: companyName
            }).then(() => {
                console.log(Credential);
            })

    });
}


const FirebaseCreateClient = () => { }
const FirebaseCreateMessage = () => { }
const FirebaseCreateForm = () => { }
const FirebaseCreateInterest = () => { }

// Get
const FirebaseGetAccountCurrentUser = () => { }
const FirebaseGetMessages = () => { }
const FirebaseGetClients = () => { }
const FirebaseGetForms = () => { }
const FirebaseGetInterests = () => { }

// Update
const FirebaseUpdateEmail = () => { }
const FirebaseUpdatePassword = () => { }
const FirebaseUpdateClient = () => { }
const FirebaseUpdateMessage = () => { }
const FirebaseUpdateForm = () => { }
const FirebaseUpdateInterest = () => { }


