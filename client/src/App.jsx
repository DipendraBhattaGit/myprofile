import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Stats, About, Skills, Toolkit, Backend, Experience, Projects, Process, Journey } from './components/Sections';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
export default function App() {
  return (<><Cursor /><Navbar /><main><Hero /><Stats /><About /><Experience /><Skills /><Toolkit /><Backend /><Projects /><Process /><Journey /><Contact /></main><Footer /></>);
}
