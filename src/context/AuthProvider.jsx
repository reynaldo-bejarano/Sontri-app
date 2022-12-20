import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, updateEmail, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import { createContext, useEffect, useState } from 'react'
import { auth, db } from "../firebase/firebase.config";
import { doc, setDoc, collection, query, where, getDocs, getDoc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [userAuthState, setUserAuthState] = useState(null);
    const [interestData, setInterestData] = useState([]);
    const [clientsData, setClientsData] = useState([]);
    const [clientDetailsData, setClientDetailsData] = useState([]);
    const [formsData, setFormsData] = useState([]);
    const [messageData, setMessageData] = useState([]);
    const [formDetailsData, setFormDetailsData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [displayName, setDisplayName] = useState();


    const [enero, setEnero] = useState(0)
    const [febrero, setFebrero] = useState(0)
    const [marzo, setMarzo] = useState(0)
    const [abril, setAbril] = useState(0)
    const [mayo, setMayo] = useState(0)
    const [junio, setJunio] = useState(0)
    const [julio, setJulio] = useState(0)
    const [agosto, setAgosto] = useState(0)
    const [septiembre, setSeptiembre] = useState(0)
    const [octubre, setOctubre] = useState(0)
    const [noviembre, setNoviembre] = useState(0)
    const [diciembre, setDiciembre] = useState(0)

    const [fechas, setFechas] = useState([enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre]);


    const [eneroMessage, setEneroMessage] = useState(0)
    const [febreroMessage, setFebreroMessage] = useState(0)
    const [marzoMessage, setMarzoMessage] = useState(0)
    const [abrilMessage, setAbrilMessage] = useState(0)
    const [mayoMessage, setMayoMessage] = useState(0)
    const [junioMessage, setJunioMessage] = useState(0)
    const [julioMessage, setJulioMessage] = useState(0)
    const [agostoMessage, setAgostoMessage] = useState(0)
    const [septiembreMessage, setSeptiembreMessage] = useState(0)
    const [octubreMessage, setOctubreMessage] = useState(0)
    const [noviembreMessage, setNoviembreMessage] = useState(0)
    const [diciembreMessage, setDiciembreMessage] = useState(0)

    const [messagesSize, setMessagesSize] = useState([eneroMessage, febreroMessage, marzoMessage, abrilMessage, mayoMessage, junioMessage, julioMessage, agostoMessage, septiembreMessage, octubreMessage, noviembreMessage, diciembreMessage]);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setDisplayName(user.displayName)
                setUserAuthState(user.uid);
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
            })
    }

    //salir
    const FirebaseSignOut = async () => {
        try {
            await signOut(auth);
            setInterestData([]);
            setClientsData([]);
            setClientDetailsData([]);
            setFormsData([]);
            setFormDetailsData([]);
            setUserData([]);
            setDisplayName([]);
        } catch (error) {
            console.log(error.message);
        }
    }


    // create

    const FirebaseCreateUser = async (data) => {
        const { email, password, company, name, lastname } = data;
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const Credential = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: company
                }).then(async () => {
                    const docData = {
                        PK_TSON_T_UserID: Credential.uid,
                        TSON_T_UserName: name,
                        TSON_T_UserLastname: lastname,
                        TSON_T_UserCompany: company,
                        TSON_T_UserEmail: email,
                        TSON_D_UserRegisterDate: new Date(),
                        TSON_B_UserVerified: Credential.emailVerified,
                    };
                    await setDoc(doc(db, "TSON_CAT_User", Credential.uid), docData);
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

    const FirebaseFirstLoginInterest = async (data) => {
        const id = nanoid();
        await setDoc(doc(db, "TSON_CAT_Interest", id), {
            PK_TSON_T_InterestDocument: id,
            TSON_T_InterestUID: userAuthState,
            TSON_T_Interest: data.interes1,
        }).then(async () => {
            const id = nanoid();
            await setDoc(doc(db, "TSON_CAT_Interest", id), {
                PK_TSON_T_InterestDocument: id,
                TSON_T_InterestUID: userAuthState,
                TSON_T_Interest: data.interes2,
            })
        }).then(async () => {
            const id = nanoid();
            await setDoc(doc(db, "TSON_CAT_Interest", id), {
                PK_TSON_T_InterestDocument: id,
                TSON_T_InterestUID: userAuthState,
                TSON_T_Interest: data.interes3,
            })
        })
    }

    const FirebaseCreateMessage = async (data) => {
        const id = nanoid();
        const docData = {
            PK_TSON_T_MessageDocument: id,
            FK_SON_CAT_MessageSON_UserSON_UserID: userAuthState,
            TSON_T_MessageToEmail: data,
            TSON_T_MessageDate: new Date(),
        };
        await setDoc(doc(db, "TSON_CAT_Message", id), docData);
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

    const [interestDataChart, setInterestDataChart] = useState(["", ""]);

    const FirebaseGetInterestsChart = async () => {
        const q = query(collection(db, "TSON_CAT_Interest"), where("TSON_T_InterestUID", "==", userAuthState));
        const querySnapshot = await getDocs(q);

        setInterestDataChart([]);
        querySnapshot.forEach((doc) => {
            setInterestDataChart(old => [...old, doc.data().TSON_T_Interest]);
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

    const FirebaseGetUsers = async () => {
        const docRef = doc(db, "TSON_CAT_User", userAuthState);
        const docSnap = await getDoc(docRef);
        setUserData();
        if (docSnap.exists()) {
            setUserData(docSnap.data());
        } else {
            setUserData();
        }
    }

    const FirebaseGetMessages = async () => {
        const q = query(collection(db, "TSON_CAT_Message"), where("FK_SON_CAT_MessageSON_UserSON_UserID", "==", userAuthState));
        const querySnapshot = await getDocs(q);
        setMessageData([]);
        querySnapshot.forEach((doc) => {
            setMessageData(old => [...old, doc.data()]);
        });
    }

    //Update 

    const FirebaseUpdateEmail = async (newEmail, password) => {
        var user = auth.currentUser;
        var credentials = EmailAuthProvider.credential(
            user.email,
            password
        );
        await reauthenticateWithCredential(user, credentials).then(async () => {
            await updateEmail(user, newEmail).then(async () => {
                const washingtonRef = doc(db, "TSON_CAT_User", user.uid);
                await updateDoc(washingtonRef, {
                    TSON_T_UserEmail: newEmail
                });
            })
        })
    }

    const FirebaseUpdatePassword = async (oldPassword, newPassword) => {

        var user = auth.currentUser;
        var credentials = EmailAuthProvider.credential(
            user.email,
            oldPassword
        );
        await reauthenticateWithCredential(user, credentials).then(async () => {
            await updatePassword(user, newPassword)
        })
    }

    const FirebaseUpdateClientDetails = async (data, idClient) => {

        const washingtonRef = doc(db, "TSON_CAT_Client", idClient);

        await updateDoc(washingtonRef, {
            TSON_T_ClientName: data.name,
            TSON_T_ClientLastname: data.lastname,
            TSON_T_ClientPhone: data.phone,
            TSON_T_ClientEmail: data.email,
            FK_SON_CAT_ClientSON_InterestSON_First_InterestID: data.firstInterest,
            FK_SON_CAT_ClientSON_InterestSON_Second_InterestID: data.secondInterest,
        });
    }


    const FirebaseGetMessagesSize = async () => {
        const q = query(collection(db, "TSON_CAT_Message"), where("FK_SON_CAT_MessageSON_UserSON_UserID", "==", userAuthState));
        const querySnapshot = await getDocs(q);
        let numEnero = 0;
        let numFebrero = 0;
        let numMarzo = 0;
        let numAbril = 0;
        let numMayo = 0;
        let numJunio = 0;
        let numJulio = 0;
        let numAgosto = 0;
        let numSeptiembre = 0;
        let numOctubre = 0;
        let numNoviembre = 0;
        let numDiciciembre = 0;
        querySnapshot.forEach((doc) => {
            const fecha = new Date(doc.data().TSON_T_MessageDate.seconds * 1000).toISOString().slice(0, 19).replace('T', ' ')
            const words = fecha.split("");
            const palabra = words[5] + words[6]

            if (palabra === "01") {
                numEnero += 1;
            }
            if (palabra === "02") {
                numFebrero += 1;
            }
            if (palabra === "03") {
                numMarzo += 1;
            }
            if (palabra === "04") {
                numAbril += 1;
            }
            if (palabra === "05") {
                numMayo += 1;
            }
            if (palabra === "06") {
                numJunio += 1;
            }
            if (palabra === "07") {
                numJulio += 1;
            }
            if (palabra === "08") {
                numAgosto += 1;
            }
            if (palabra === "09") {
                numSeptiembre += 1;
            }
            if (palabra === "10") {
                numOctubre += 1;
            }
            if (palabra === "11") {
                numNoviembre += 1;
            }
            if (palabra === "12") {
                numDiciciembre += 1;
            }
        });

        setEneroMessage(numEnero);
        setFebreroMessage(numFebrero);
        setMarzoMessage(numMarzo);
        setAbrilMessage(numAbril);
        setMayoMessage(numMayo);
        setJunioMessage(numJunio);
        setJulioMessage(numJulio);
        setAgostoMessage(numAgosto);
        setSeptiembreMessage(numSeptiembre);
        setOctubreMessage(numOctubre);
        setNoviembreMessage(numNoviembre);
        setDiciembreMessage(numDiciciembre);
        setMessagesSize([eneroMessage, febreroMessage, marzoMessage, abrilMessage, mayoMessage, junioMessage, julioMessage, agostoMessage, septiembreMessage, octubreMessage, noviembreMessage, diciembreMessage])

    }

    const FirebaseGetClientsFecha = async () => {
        const q = query(collection(db, "TSON_CAT_Client"), where("FK_SON_CAT_ClientSON_UserSON_UserID", "==", userAuthState));
        const querySnapshot = await getDocs(q);
        let numEnero = 0;
        let numFebrero = 0;
        let numMarzo = 0;
        let numAbril = 0;
        let numMayo = 0;
        let numJunio = 0;
        let numJulio = 0;
        let numAgosto = 0;
        let numSeptiembre = 0;
        let numOctubre = 0;
        let numNoviembre = 0;
        let numDiciciembre = 0;
        querySnapshot.forEach((doc) => {
            const fecha = new Date(doc.data().TSON_D_ClientRegisterDate.seconds * 1000).toISOString().slice(0, 19).replace('T', ' ')
            const words = fecha.split("");
            const palabra = words[5] + words[6]

            if (palabra === "01") {
                numEnero += 1;
            }
            if (palabra === "02") {
                numFebrero += 1;
            }
            if (palabra === "03") {
                numMarzo += 1;
            }
            if (palabra === "04") {
                numAbril += 1;
            }
            if (palabra === "05") {
                numMayo += 1;
            }
            if (palabra === "06") {
                numJunio += 1;
            }
            if (palabra === "07") {
                numJulio += 1;
            }
            if (palabra === "08") {
                numAgosto += 1;
            }
            if (palabra === "09") {
                numSeptiembre += 1;
            }

            if (palabra === "10") {
                numOctubre += 1;
            }
            if (palabra === "11") {
                numNoviembre += 1;
            }
            if (palabra === "12") {
                numDiciciembre += 1;
            }
        });
        setEnero(numEnero);
        setFebrero(numFebrero);
        setMarzo(numMarzo);
        setAbril(numAbril);
        setMayo(numMayo);
        setJunio(numJunio);
        setJulio(numJulio);
        setAgosto(numAgosto);
        setSeptiembre(numSeptiembre);
        setOctubre(numOctubre);
        setNoviembre(numNoviembre);
        setDiciembre(numDiciciembre);
        console.log(numEnero)
        setFechas([enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre])
    }




    return (
        <authContext.Provider value={{ userAuthState, displayName, FirebaseFirstLoginInterest, FirebaseSignInUserWithEmailAndPassword, FirebaseCreateUser, FirebaseSignOut, FirebaseCreateInterest, FirebaseGetInterests, FirebaseCreateClient, FirebaseGetClients, FirebaseCreateForm, FirebaseGetClientDetails, FirebaseGetForms, FirebaseGetFormDetails, FirebaseGetUsers, FirebaseUpdateEmail, FirebaseUpdatePassword, FirebaseUpdateClientDetails, FirebaseCreateMessage, FirebaseGetMessages, interestData, clientsData, clientDetailsData, formsData, formDetailsData, userData, messageData, FirebaseGetClientsFecha, fechas, FirebaseGetMessagesSize, messagesSize, FirebaseGetInterestsChart, interestDataChart }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider