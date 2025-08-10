import AboutMe from "./components/about-me"
import FAQ from "./components/faq"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import PainPoints from "./components/pain-points"
import Testimonials from "./components/testimonials"


function App() {
  

  return (
    <div>
      <div className="container">
        <Header />
        <Hero />
        <PainPoints />
        <AboutMe /> 
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
