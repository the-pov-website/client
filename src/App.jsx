import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import BlogPost from "./pages/BlogPost";
import StoryPage from './pages/StoryPage'/* 
import Programs from "./pages/Programs"; */
import GetInvolved from "./pages/GetInvolved";
import ThankYou from "./pages/ThankYou";
import Resources from "./pages/Resources";/* 
import ProgramDetail from "./components/GetInvolvedDetail"; */
import GetInvolvedDetail from './components/GetInvolvedDetail'
import ProgramDetail from './pages/ProgramDetail'
import FAQ from './pages/FAQ.jsx'
import Programs from './pages/ProgramList.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/stories/:id" element={<StoryPage />} />
     {/*   <Route path="/programs" element={<Programs />} /> */}
         <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/get-involved/:id" element={<GetInvolvedDetail />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<Blog />} />
         <Route path="/programs" element={<Programs />}/>
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/programs/:id" element={<ProgramDetail />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}