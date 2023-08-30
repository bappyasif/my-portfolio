import { ReactElement, useState } from "react"
import { AiOutlineMenuFold } from "react-icons/ai"
import { Menu } from "./Menu";


export const Header = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const closeMenu = () => setShow(false);

  const openMenu = () => setShow(true);

  const tokenizedWord = "greetings".split("").map((ch, idx) => <span className="scaleUpAndDown" key={idx}>{ch}</span>)

  return (
    <div className="flex xxs:w-full lg:w-3/4 justify-between text-4xl mx-auto">
      <p className="z-20 flex gap-x-2 items-center">
        {/* <span className="xxs:font-normal lg:font-extrabold font-shojumaru animated-text xxs:text-xl md:text-2xl">Greetings</span> */}
        {/* <span className="xxs:font-normal lg:font-extrabold font-shojumaru xxs:text-xl md:text-2xl">Greetings 🖖</span> */}
        {/* <span className="xxs:font-normal lg:font-extrabold font-shojumaru 
        xxs:text-xl md:text-2xl animate-bounce">Greetings</span> */}
        <span className="xxs:font-normal lg:font-extrabold font-shojumaru xxs:text-xl md:text-2xl">{tokenizedWord}</span>
        <span className="xxs:font-normal lg:font-extrabold font-shojumaru xxs:text-xl md:text-2xl scaleUpAndDown">🖖</span>
        {/* <span className="xxs:font-normal lg:font-extrabold font-shojumaru xxs:text-xl md:text-2xl">
        <span>Greetings</span>
        <span className="scaleUpAndDown">🖖</span>
        </span> */}
        {/* <span className="xxs:font-normal lg:font-extrabold font-shojumaru xxs:text-xl md:text-2xl">
          {tokenizedWord}
          <span className="scaleUpAndDown">🖖</span>
        </span> */}
        <span className="hover:rotate-90 px-4 text-blue-600">:)</span>
        {/* <span className=""><VscSmiley /></span> */}
      </p>
      <button className="z-20" onClick={openMenu}><AiOutlineMenuFold /></button>
      {
        show
          ? <Menu closeMenu={closeMenu} />
          : null
      }
    </div>
  )
}
