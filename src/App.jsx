import Header from './components/header/Header'
import './App.css'
import Footer from './components/footer/Footer'
import Description from './components/description/Description'
import Projects from './components/project/Projects'
import Cv from './components/cv/Cv'
import Home from './pages/home/Home'

function App() {

  return (
    <>
    <Header />
    <Home />
    <Description />
    <Projects />  
    <Cv />
   <Footer />
   </>
  )
}

export default App
