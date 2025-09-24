import './App.css'
import {Routes,Route} from "react-router-dom";
import {MainLayout} from "./Layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default App
