import { createContext, useEffect, useState } from "react";
import { getDocs, collection, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

const MediumContext = createContext()

const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])


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

    return <MediumContext.Provider value={{ users, posts }} >
        {children}
    </MediumContext.Provider>
}




export { MediumContext, MediumProvider }