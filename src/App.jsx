import "./App.css";
import Heade from "./commponent/Header/Heade";
import TopBar from "./commponent/TopBar/TopBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignUpPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import SingleBlogPage from "./pages/singleBlogPage/SingleBlogPage";
import MyBlogPage from "./pages/MyBlogPage/MyBlogPage";
import CreateBlogPage from "./pages/CreateBlogPage/CreateBlogPage";
import Footer from "./commponent/footer/Footer";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <TopBar className="top" />
          <Heade />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/singleBlog" element={<SingleBlogPage />} />
            <Route path="/myblog" element={<MyBlogPage />} />
            <Route path="/createBlog" element={<CreateBlogPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
