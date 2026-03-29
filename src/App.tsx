import { Suspense, lazy } from 'react'
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"

// Carregamento Tardio (Lazy Loading) para seções "abaixo da dobra"
const PainPoints = lazy(() => import("./components/sections/pain-points"))
const AboutMe = lazy(() => import("./components/sections/about-me"))
const Treatments = lazy(() => import("./components/sections/treatments/index."))
const Testimonials = lazy(() => import("./components/sections/testimonials"))
const FAQ = lazy(() => import("./components/sections/faq"))
const Footer = lazy(() => import("./components/sections/footer"))
const WhatsAppButton = lazy(() => import("./components/wpp-button"))

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero é renderizado imediatamente para um LCP (Largest Contentful Paint) rápido */}
        <Hero />
        
        {/* O Suspense gerencia o carregamento das outras seções em segundo plano */}
        <Suspense fallback={null}>
          <div className="container">
            <PainPoints />
            <AboutMe /> 
            <Treatments />
            <Testimonials />
            <FAQ />
            <Footer />
          </div>
          <WhatsAppButton />
        </Suspense>
      </main>
    </>
  )
}

export default App