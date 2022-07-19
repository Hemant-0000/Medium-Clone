import { createContext, useEffect, useState } from "react";
import { getDocs, collection, setDoc, doc } from 'firebase/firestore'
import { auth, db, provider } from '../firebase'
import { signInWithPopup, signOut } from "firebase/auth";

const MediumContext = createContext()

const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: { ...doc.data() },

                }
            }))
        }
        getUsers()
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'))
            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    body: doc.data().body,
                    brief: doc.data().brief,
                    category: doc.data().category,
                    postLength: doc.data().postLength,
                    bannerImage: doc.data().bannerImage,
                    title: doc.data().title,
                    // comments: doc.data().comments,
                    postedOn: doc.data().postedOn.toDate(),
                    author: doc.data().author,
                }
            }))
        }
        getPosts()
    }, [])

    const addUserToFirebase = async (user) => {
        await setDoc(doc(db, 'users', user?.email), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            followerCount: 0
        })
    }

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        setCurrentUser(userData.user)
        addUserToFirebase(userData.user)
    }

    const signOutUser = () => {
        signOut(auth).then(()=> console.log("Signed Out"))
        setCurrentUser(null)
    }


    return <MediumContext.Provider value={{ users, posts, handleUserAuth, currentUser, signOutUser }} >
        {children}
    </MediumContext.Provider>
}




export { MediumContext, MediumProvider }