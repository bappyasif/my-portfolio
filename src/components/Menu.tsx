import { AiOutlineClose } from "react-icons/ai"
// import photo from "../assets/about-pic.jpeg"
import photo from "../assets/contact-pic.jpg"

type MenuProp = {
    closeMenu: () => void
}

export const Menu = ({ closeMenu }: MenuProp) => {
    const renderItems = () => menuItems.map(item => <RenderMenuItem key={item} item={item} closeMenu={closeMenu} />)

    // making sure menu gets closed when user go beyond screen height
    window.addEventListener("scroll", () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 105) {
            closeMenu()
        }
    })

    return (
        <div
            className="absolute left-0 top-0 py-40 
            flex xxs:flex-col sm:flex-row gap-10 justify-center items-center
            bg-slate-800 h-screen w-screen z-40"
            style={{
                backgroundImage: `url("https://source.unsplash.com/random/?Coding,Code,Javascript")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                objectFit: "cover",
                backgroundColor: "rgba(17,17,17,0.6)",
                backgroundBlendMode: "darken"
            }}
        >
            <div className="h-full w-full opacity-60 bg-slate-800 absolute z-0"></div>
            <RenderImage />
            <div className="flex xxs:flex-row justify-around md:flex-col xxs:gap-2 lg:gap-12 items-center flex-wrap z-10">
                {renderItems()}
            </div>
            <button
                className="absolute xxs:right-4 md:right-20 xxs:top-6 md:top-20
                outline outline-2 rounded-full"
                onClick={closeMenu}
            >
                {<AiOutlineClose />}
            </button>
        </div>
    )
}

const RenderImage = () => {
    return (
        <>
            <img
                className="xxs:hidden lg:block h-auto w-1/4 aspect-square"
                src={photo}
                alt="User Picture"
                style={{
                    minWidth: "530px",
                    minHeight: "580px"
                }}
            />
            <img
                className="xxs:block lg:hidden h-auto w-1/4 aspect-square"
                src={photo}
                alt="User Picture"
                style={{
                    minWidth: "330px",
                    minHeight: "440px"
                }}
            />
        </>
    )
}

type ItemProp = {
    item: string,
    closeMenu: () => void
}

const RenderMenuItem = ({ item, closeMenu }: ItemProp) => {
    return (
        <div className="text-right xxs:text-lg lg:text-2xl xxs:w-fit sm:w-36 hover:bg-slate-600 px-6 bg-slate-950">
            <a onClick={closeMenu} href={`#${item}`}>{item}</a>
        </div>
    )
}

const menuItems = ["Home", "About", "Skills", "Mentions", "Portfolio", "Contact"]
