import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Portfoolio.css'

import Header from '../../../components/Header'
import About from '../../../components/About'
import Projects from '../../../components/Project'
import Footer from '../../../components/Footer'

function GreetingMessage(name){
  return <h1>Hello, {name}</h1>
}

function Important(){
  const object = {name: "Ahmet",age: "23"}

  //Bunu böyle de yapabilirsin
  const name1=object.name
  const age1 = object.age

  //Böylede bu daha iyi

  const {name,age} = object

}

function PortfolioApp() {
  const userName = "John Pork";
  const profession = "Full Stack Developer";
  
  return (
    <div className='App'>
    {/*comment line in return 
    
       {GreetingMessage("Selami")}
       {GreetingMessage("Hayri")}
    */}
      
      <Header name={userName} profession={profession} />

      {/* About Section */}

      <About name={32}  />

      {/* Project Section */}
     
     <Projects/>

      {/* Contact Section */}

      


      {/* Footer Section */}
      <Footer/>
    </div>
  )
}



function LearnE() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*comment line in return */}
       {GreetingMessage("Selami")}
       {GreetingMessage("Hayri")}
       
    </>
  )
}

export default PortfolioApp
