import { useEffect, useState } from 'react'
import { List, Typography } from 'antd'
import { Link } from 'react-router-dom'
import {Loader} from '../components/blog/Loader.jsx'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=5')
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loader />

    return (
        <div>
            <h1>Список постов</h1>
            <List
                bordered
                dataSource={posts}
                renderItem={item => (
                    <List.Item>
                        <Link to={`/posts/${item.id}`}>
                            <Typography.Text>{item.title}</Typography.Text>
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Posts
