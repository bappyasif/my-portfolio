import { ReactElement, useState } from "react"
import {AiOutlineMenuFold} from "react-icons/ai"
import { Menu } from "./Menu";


export const Header = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const closeMenu = () => setShow(false);

  const openMenu = () => setShow(true);

  return (
    <div className="flex xxs:w-full lg:w-3/4 justify-between text-4xl mx-auto">
        <p className="z-20 flex gap-x-2 items-center">
          <span className="xxs:font-normal lg:font-extrabold">Greetings</span>
          <span className="hover:rotate-90 px-4">:)</span>
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
