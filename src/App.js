import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import PostList from "./components/post-list";
import PostDetail from "./components/post-detail";
import WritePost from "./components/write-post"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div className="container main-container">
          <Routes>
            <Route path='/' element={<PostList></PostList>}> </Route>
            <Route path='/post-list' element={<PostList></PostList>}></Route>
            <Route path='/post-detail/:id' element={<PostDetail></PostDetail>}></Route>
            <Route path='/write-post' element={<WritePost></WritePost>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
