import { async } from '@firebase/util'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { MediumContext } from '../context/MediumContext'
import { db } from '../firebase'
import { useRouter } from 'next/router'

const PostModal = () => {

    const { currentUser } = useContext(MediumContext)

    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [category, setCategory] = useState('')
    const [postLength, setPostLength] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [body, setBody] = useState('')
    const router = useRouter()

    const addPostToFirebase = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, 'articles'), {
            author: currentUser.email,
            bannerImage: bannerImage,
            body: body,
            brief: brief,
            category: category,
            postLength: Number(postLength),
            postedOn: serverTimestamp(),
            title: title,
        })
        router.push('/')
    }

    return (
        <div>
            <form className=' px-5' onSubmit={addPostToFirebase}>

                <h1 className='text-3xl font-medium text-start  mb-5'>Upload a Post</h1>

                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Brief</label>
                    <input onChange={(e) => setBrief(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Banner Image URL</label>
                    <input onChange={(e) => setBannerImage(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                    <input onChange={(e) => setCategory(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estimated read length (in minutes)</label>
                    <input onChange={(e) => setPostLength(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Article description</label>
                    <textarea onChange={(e) => setBody(e.target.value)} rows={5} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>

            </form>

        </div>
    )
}

export default PostModal