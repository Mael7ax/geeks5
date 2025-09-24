import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Loader} from '../components/blog/Loader.jsx'

const PostDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Пост не найден')
                }
                return res.json()
            })
            .then(data => {
                setPost(data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader />
    if (error) return <h2>Пост не найден</h2>

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail
