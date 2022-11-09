import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react'
import { auth, db } from "../firebase/firebase.config";
import { doc, setDoc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [userAuthState, setUserAuthState] = useState(null)
    const [userKey, setUserKey] = useState();
    const [interestData, setInterestData] = useState([])
    const [clientsData, setClientsData] = useState([])
    const [clientDetailsData, setClientDetailsData] = useState()
    const [formsData, setFormsData] = useState([])
    const [formDetailsData, setFormDetailsData] = useState()


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUserAuthState(user.uid);
                console.log("usuarui = " + user.uid)
            } else {
                setUserAuthState(user)
            }
        })
    }, [])

    //Login UserWithEmailAndPassword
    const FirebaseSignInUserWithEmailAndPassword = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.info(user.uid)
                setUserKey(user.uid)
                console.info("Login user success!")
            })
    }

    //salir
    const FirebaseSignOut = async () => await signOut(auth)


    // create

    const FirebaseCreateUser = async (data) => {
        const { email, password, company, name, lastname } = data;
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const Credential = userCredential.user;
                setUserKey(Credential.uid);
                updateProfile(auth.currentUser, {
                    displayName: company
                }).then(async () => {
                    const id = nanoid();
                    const docData = {
                        PK_TSON_T_UserDocument: id,
                        TSON_T_InterestUID: Credential.uid,
                        TSON_T_UserName: name,
                        TSON_T_UserLastname: lastname,
                        TSON_T_UserCompany: company,
                        TSON_T_UserEmail: email,
                        TSON_D_UserRegisterDate: company,
                        TSON_B_UserVerified: Credential.emailVerified,
                    };
                    await setDoc(doc(db, "TSON_CAT_User", id), docData);
                    console.log("added")
                })
            });
    }

    const FirebaseCreateClient = async (data) => {
        const id = nanoid();
        const docData = {
            PK_TSON_T_ClientDocument: id,
            FK_SON_CAT_ClientSON_UserSON_UserID: userAuthState,
            TSON_T_ClientName: data.name,
            TSON_T_ClientLastname: data.lastname,
            TSON_T_ClientPhone: data.phone,
            TSON_T_ClientEmail: data.email,
            TSON_T_ClientBirthday: data.date,
            FK_SON_CAT_ClientSON_InterestSON_First_InterestID: data.firstInterest,
            FK_SON_CAT_ClientSON_InterestSON_Second_InterestID: data.secondInterest,
            TSON_D_ClientRegisterDate: new Date(),
        };
        await setDoc(doc(db, "TSON_CAT_Client", id), docData);
    }

    const FirebaseCreateForm = async (data) => {
        const id = nanoid();
        const docData = {
            PK_TSON_T_FormDocument: id,
            FK_SON_CAT_FormSON_UserSON_UserID: userAuthState,
            TSON_T_FormName: data.name,
            TSON_T_FormLink: data.linkForm,
            TSON_T_FormLinkResults: data.linkFormResults,
            FK_SON_CAT_FormSON_InterestSON_InterestID: data.interest,
            TSON_T_FormAge: data.radio,
            TSON_T_FormDateRegistered: new Date(),
        };
        await setDoc(doc(db, "TSON_CAT_Form", id), docData);
    }

    const FirebaseCreateInterest = async (data) => {
        const id = nanoid();
        const docData = {
            PK_TSON_T_InterestDocument: id,
            TSON_T_InterestUID: userAuthState,
            TSON_T_Interest: data.interes,
        };
        await setDoc(doc(db, "TSON_CAT_Interest", id), docData);
    }

    //GET
    //GET
    //GET

    const FirebaseGetInterests = async () => {
        const q = query(collection(db, "TSON_CAT_Interest"), where("TSON_T_InterestUID", "==", userAuthState));
        const querySnapshot = await getDocs(q);
        setInterestData([]);
        querySnapshot.forEach((doc) => {
            setInterestData(old => [...old, doc.data()]);
        });
    }

    const FirebaseGetClients = async () => {
        const q = query(collection(db, "TSON_CAT_Client"), where("FK_SON_CAT_ClientSON_UserSON_UserID", "==", userAuthState));
        const querySnapshot = await getDocs(q);
        setClientsData([]);
        querySnapshot.forEach((doc) => {
            setClientsData(old => [...old, doc.data()]);
        });
    }

    const FirebaseGetClientDetails = async (id) => {
        const docRef = doc(db, "TSON_CAT_Client", id);
        const docSnap = await getDoc(docRef);
        setClientDetailsData();
        if (docSnap.exists()) {
            setClientDetailsData(docSnap.data());
        } else {
            setClientDetailsData([]);
        }
    }


    const FirebaseGetForms = async () => {
        const q = query(collection(db, "TSON_CAT_Form"), where("FK_SON_CAT_FormSON_UserSON_UserID", "==", userAuthState));
        const querySnapshot = await getDocs(q);
        setFormsData([]);
        querySnapshot.forEach((doc) => {
            setFormsData(old => [...old, doc.data()]);
        });
    }

    const FirebaseGetFormDetails = async (id) => {
        const docRef = doc(db, "TSON_CAT_Form", id);
        const docSnap = await getDoc(docRef);
        setFormDetailsData();
        if (docSnap.exists()) {
            setFormDetailsData(docSnap.data());
        } else {
            setFormDetailsData([]);
        }
    }

    return (
        <authContext.Provider value={{ userAuthState, userKey, FirebaseSignInUserWithEmailAndPassword, FirebaseCreateUser, FirebaseSignOut, FirebaseCreateInterest, FirebaseGetInterests, FirebaseCreateClient, FirebaseGetClients, FirebaseCreateForm, FirebaseGetClientDetails, FirebaseGetForms, FirebaseGetFormDetails, interestData, clientsData, clientDetailsData, formsData, formDetailsData }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider