import { Analytics } from "@vercel/analytics/react"
import { About } from "./components/About"
import { Additionals } from "./components/Additionals"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Intro, ViewMasking } from "./components/Intro"
import { MessageMe } from "./components/Message"
import { Portfolio } from "./components/Portfolio"
import { useOnPageScroll } from "./hooks"

function App() {

  const { scrolled } = useOnPageScroll()

  // console.log(scrolled, "scrolled")

  const content = (
    <>
      <Analytics />
      <div
        style={{
          height: "4px",
          background: "red",
          width: `${scrolled}%`,
          position: "fixed",
          zIndex: "40",
          scrollBehavior: "smooth"
        }}
      ></div>

      <div
      // className="flex flex-col gap-20 bg-gray-800 bg-gradient-to-tr from-gray-800 to-gray-700" 
      className="flex flex-col gap-20 bg-gray-800"
      style={{
        backgroundImage: `repeat-radial-gradient(#1f2937, #374151 ${scrolled}%, #1f2937 ${scrolled + 11}%)`
      }}
      >
        <div
          className="relative flex flex-col gap-y-52"
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?Coding,Code,Javascript")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit: "cover",
            // backgroundAttachment: "fixed"
          }}
        >
          <ViewMasking />
          <Header />
          <Intro />
        </div>
        <div className='App xxs:w-full sm:w-3/4 mx-auto'>
          <div className="flex flex-col gap-20 py-4">
            {/* <Header />
            <Intro /> */}
            <About />
            <Portfolio />
            <Additionals />
            <MessageMe />
            {/* <Footer /> */}
          </div>
        </div>

        <div
          className='w-full flex flex-col items-center'
          style={{
            // backgroundImage: `url("${photo}")`,
            backgroundImage: `url("https://source.unsplash.com/random/?Coding,js")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit: "cover",
            backgroundColor: "rgba(17,17,17,0.6)",
            backgroundBlendMode: "darken",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="w-3/4 flex flex-col gap-20">
            {/* <Additionals />
            <MessageMe /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )

  return content
}

export default App
