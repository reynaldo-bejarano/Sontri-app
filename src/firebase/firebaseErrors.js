
const firebaseErrors = (errorCode) => {
    if (errorCode === "auth/email-already-in-use") {
        return "El correo electrónico ingresado ya está en uso"
    }
    if (errorCode === "auth/invalid-password") {
        return "La contraseña es incorrecta"
    }
    if (errorCode === "auth/invalid-email") {
        return "La correo electrónico es incorrecto"
    }
    if (errorCode === "auth/wrong-password") {
        return "La contraseña es incorrecta"
    }

    
    return null
}

export default firebaseErrors