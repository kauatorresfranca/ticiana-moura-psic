import AboutMe from "./components/about-me"
import FAQ from "./components/faq"
import Header from "./components/header"
import Hero from "./components/hero"
import Testimonials from "./components/testimonials"


function App() {
  

  return (
    <div>
      <div className="container">
        <Header />
        <Hero />
        <AboutMe /> 
        <Testimonials />
        <FAQ />
      </div>
    </div>
  )
}

export default App
