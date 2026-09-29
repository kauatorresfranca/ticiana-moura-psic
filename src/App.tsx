import { Suspense, lazy } from 'react'
import Hero from './components/sections/hero'

// Seções "abaixo da dobra" carregadas sob demanda
const AboutMe = lazy(() => import('./components/sections/about-me'))
const PainPoints = lazy(() => import('./components/sections/pain-points'))
const Treatments = lazy(() => import('./components/sections/treatments'))
const FAQ = lazy(() => import('./components/sections/faq'))
const Footer = lazy(() => import('./components/sections/footer'))
const WhatsAppButton = lazy(() => import('./components/wpp-button'))

// Reserva altura enquanto os chunks carregam, evitando "pulos" no layout
const SectionFallback = () => <div style={{ minHeight: '100vh' }} aria-hidden="true" />

function App() {
  return (
    <>
      <main>
        {/* Hero renderiza imediatamente para um LCP rápido */}
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <AboutMe />
          <PainPoints />
          <Treatments />
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </>
  )
}

export default App