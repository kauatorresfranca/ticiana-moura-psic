import AboutMe from "./components/sections/about-me"
import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import PainPoints from "./components/sections/pain-points"
import SocialMedia from "./components/sections/social-media"
import Testimonials from "./components/sections/testimonials"
import Treatments from "./components/sections/treatments/index."
import WhatsAppButton from "./components/wpp-button"


function App() {
  

  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
        <PainPoints />
        <AboutMe /> 
        <Treatments />
        <Testimonials />
        <FAQ />
        <SocialMedia />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}

export default App
