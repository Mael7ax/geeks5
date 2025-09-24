import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

export const Header = () => (
    <Layout.Header>
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="/">Главная</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">О нас</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/posts">Посты</Link></Menu.Item>
        </Menu>
    </Layout.Header>
)

