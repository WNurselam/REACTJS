import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        { <Route path="/" element={<Home />}></Route> }
        <Route path="about" element={<About />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/:postId" element={<Post />}></Route> {/*blog id bağlama Post component */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
