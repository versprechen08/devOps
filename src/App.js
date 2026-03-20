import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import PostList from './components/post-list';


function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <NavBar></NavBar>
      <div className="container main-container">
        <PostList></PostList>  
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
