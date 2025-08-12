import AboutMe from "./components/about-me"
import FAQ from "./components/faq"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import PainPoints from "./components/pain-points"
import SocialMedia from "./components/social-media"
import Testimonials from "./components/testimonials"
import { Treatments } from "./components/treatments/index."


function App() {
  

  return (
    <div>
      <div className="container">
        <Header />
        <Hero />
        <PainPoints />
        <AboutMe /> 
        <Treatments />
        <Testimonials />
        <FAQ />
        <SocialMedia />
        <Footer />
      </div>
    </div>
  )
}

export default App
