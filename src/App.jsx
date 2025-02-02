import './App.css'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Portfolio } from './components/Portfolio'

function App() {
  return (
    <div className='container'>
        <Header/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}

export default App
