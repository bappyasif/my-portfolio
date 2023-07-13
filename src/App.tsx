import { About } from "./components/About"
import { Additionals } from "./components/Additionals"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Intro } from "./components/Intro"
import { MessageMe } from "./components/Message"
import { Portfolio } from "./components/Portfolio"
import { useOnPageScroll } from "./hooks"

function App() {

  const { scrolled } = useOnPageScroll()

  // console.log(scrolled, "scrolled")

  const content = (
    <>
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

      <div className="flex flex-col gap-20 bg-gray-800">
        <div className='App w-3/4 mx-auto'>
          <div className="flex flex-col gap-20 py-4">
            <Header />
            <Intro />
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
            backgroundImage: `url("https://source.unsplash.com/random/?Coding")`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "100% 100%",
            objectFit: "cover",
            backgroundColor: "rgba(17,17,17,0.6)",
            backgroundBlendMode: "darken"
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
