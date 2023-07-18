import { ReactElement, useState } from "react"
import {AiOutlineMenuFold} from "react-icons/ai"
import { Menu } from "./Menu";


export const Header = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const closeMenu = () => setShow(false);

  const openMenu = () => setShow(true);

  return (
    <div className="flex xxs:w-full lg:w-3/4 justify-between text-4xl mx-auto">
        <p className="z-20">Greetings :)</p>
        <button className="z-20" onClick={openMenu}><AiOutlineMenuFold /></button>
        {
          show
          ? <Menu closeMenu={closeMenu} />
          : null
        }
    </div>
  )
}
