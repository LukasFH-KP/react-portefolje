import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import AboutMe from "./pages/About Me.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about-me" element={<AboutMe/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}