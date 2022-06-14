import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";
import User from "./Pages/User";
import Users from "./Pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="blog/:postId" element={<Post />}></Route>
          {/* Post component id değeri  */}
          {/*------------------------- */}
          <Route path="users" element={<Users/>}></Route>
          <Route path="user/:userId" element={<User/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
