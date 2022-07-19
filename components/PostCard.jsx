import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const PostCard = ({ post }) => {

    const [authorData, setAuthorData] = useState(null)

    useEffect(() => {
        const getAuthorData = async () => {
            setAuthorData(
                (await getDoc(doc(db, 'users', post.author))).data()
            )
        }
        getAuthorData();
    }, [])


    return (
        <Link href={`/post/${post.id}`}>
            <div className='wrapper flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer '>
                <div className='postDetails flex flex-[2.5] flex-col  '>

                    <div className='authorContainer flex gap-[.4rem] '>
                        <div className='authorImageContainer grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] '><Image width={40} height={40} className='authorImage' objectFit='cover' src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`} alt='logo' /></div>
                        <div className='authorName font-semibold '>{authorData?.name}</div>
                    </div>

                    <h1 className='font-bold text-2xl'>{post.title}</h1>
                    <div className='briefing text-[#787878]'>{post.brief}</div>

                    <div className='detailsContainer flex items-center justify-between text-[#787878] '>
                        <span className='articlesDetails my-2 text-[.8rem]  '>
                            {new Date(post.postedOn).toLocaleDateString('en-US', {
                                day: 'numeric', month: 'short'
                            })} {" "}
                             • {post.postLength} min read • <span className='category bg-[#F2F3F2] p-1 rounded-full '>{post.category}</span>
                        </span>
                        <span className='bookmarkContainer cursor-pointer '><FiBookmark className='h-5 w-5' /></span>
                    </div>
                </div>


                <div className='thumbnailContainer flex-1 ' >
                    <Image width={100} height={100} className='thumbnail' objectFit='cover' src={`https://res.cloudinary.com/demo/image/fetch/${post.bannerImage}`} alt='logo' />
                </div>

            </div>
        </Link>
    )
}

export default PostCard