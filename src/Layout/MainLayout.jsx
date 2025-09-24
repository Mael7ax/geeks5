import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import {Header} from '../components/blog/Header.jsx'
import {Footer} from '../components/blog/Footer.jsx'

const { Content } = Layout

export const MainLayout = () => (
    <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '20px' }}>
            <Outlet />
        </Content>
        <Footer />
    </Layout>
)

