import { ReactElement, useState } from "react"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { FaLinkedinIn, FaQuora } from "react-icons/fa"
import { LiaHackerrank } from "react-icons/lia"
import mdnLogo from "../assets/mdn-logo.jpg"
import topLogo from "../assets/top-logo.png"
import w3cLogo from "../assets/w3c-logo.png"
import photo from "../assets/about-pic.jpeg"
import { useForIntersectionObserver } from "../hooks"

export const About = () => {
    const [zIdx, setZIdx] = useState<boolean>(false)

    return (
        <div
            id="About"
            className="flex flex-col items-center xxs:gap-6 lg:gap-16"
        >

            <div className="flex xxs:flex-col xxl:flex-row xxs:gap-4 lg:gap-9 place-items-center my-6 mb-11">
                <img
                    className="xxs:block lg:hidden xxs:w-fit xxl:w-fit sm:aspect-square self-center opacity-80 rounded"
                    src={photo}
                    alt="picture"
                />

                <img
                    className="xxs:hidden lg:block xxl:w-fit aspect-square opacity-80 rounded"
                    src={photo}
                    alt="picture"
                    style={{
                        width: "530px",
                        height: "580px"
                    }}
                />

                <div
                    className="xxs:w-full xxl:w-2/4 mx-auto flex flex-col gap-4 
                    justify-end items-center "
                >
                    <Heading zIdx={zIdx} setZIdx={setZIdx} />
                    <Details setZIdx={setZIdx} />
                    {/* <Contacts setZIdx={setZIdx} /> */}
                </div>
            </div>
            <ShowContributingEntities />
        </div>
    )
}

const ShowContributingEntities = () => {
    const renderEntities = () => contributes.map(item => <ContributedEntity key={item.name} name={item.name} imgSrc={item.imgSrc} url={item.url} />)

    return (
        <div className="w-full flex flex-col xxs:gap-10 lg:gap-16">
            <h2 className="xxs:text-2xl lg:text-4xl font-shojumaru">Successfull Contributions</h2>
            <div className="flex justify-between w-full">
                {renderEntities()}
            </div>
        </div>
    )
}

type EntityProps = {
    name: string,
    imgSrc: string,
    url: string
}

const ContributedEntity = ({ name, imgSrc, url }: EntityProps) => {
    return (
        <div title={"Click to see my contributing PRs for " + name}>
            <a target="_blank" href={url}>
                <img className="xxs:w-24 sm:w-32 lg:w-64 xxl:w-80 xxs:h-16 lg:h-20 rounded-sm" src={imgSrc} alt={name} />
            </a>
        </div>
    )
}

type PropsType = {
    setZIdx: (v: boolean) => void
}

const Details = ({ setZIdx }: PropsType) => {
    const bringHeadingTextFront = () => {
        if (!window.getSelection()?.toString().length) {
            setZIdx(false)
        }
    }

    return (
        <div
            className="flex flex-col justify-start xxs:gap-6 sm:gap-9 lg:gap-11 items-start text-justify text-2xl"
            onClick={bringHeadingTextFront}
        >
            <p className="xxs:text-2xl xl:text-4xl xxl:text-2xl xxs:px-2 sm:px-0 font-serif">A community focused self-taught Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node), bringing a proven track record of building many web applications. My passion for coding and continuous learning has led me to hone my technical abilities and deepen my knowledge of the MERN stack, and other related technologies, such as Next.JS and TypeScript.</p>
            <RenderLinks />
        </div>
    )
}

const RenderLinks = () => {
    const [hoveredLink, setHoveredLink] = useState("")

    const handleHoverLink = (nm:string) => setHoveredLink(nm)

    const linkItems = () => socialLinks.map(item => <RenderLink key={item.name} icon={item.icon} name={item.name} url={item.url} handleHoverLink={handleHoverLink} />)

    return (
        <div className={`flex xxs:gap-4 lg:gap-8 justify-between text-xl w-full  rounded relative ${hoveredLink ? "bg-slate-600" : ""} z-10`}>
            {linkItems()}
            <p className="absolute bottom-1 font-extrabold flex justify-between w-full text-6xl -z-10 text-blue-950 font-mono capitalize">{hoveredLink.split("").map((ch, idx) => <span key={ch + idx}>{ch}</span>)}</p>
        </div>
    )
}

type LinkPropsType = {
    name: string,
    icon: ReactElement,
    url: string,
    handleHoverLink: (nm: string) => void,
}

const RenderLink = ({ name, icon, url, handleHoverLink }: LinkPropsType) => {
    const handleMouseIn = () => handleHoverLink(name)
    const handleMouseOut = () => handleHoverLink("")
    useForIntersectionObserver(".stacking", "reveal")
    return (
        <a
            className="xxs:text-5xl sm:text-7xl transition-all duration-500 hover:scale-125 stacking" 
            href={url} title={name} target="_blank"
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
        >
            <span className="opacity-80 hover:text-slate-950">{icon}</span>
        </a>
    )
}

type HeadingProps = {
    zIdx: boolean,
    setZIdx: (v: boolean) => void
}

const Heading = ({ zIdx, setZIdx }: HeadingProps) => {
    const handleOnClickSelectionOfText = () => {
        if (window.getSelection()?.toString().length) {
            setZIdx(true)
        }
    }

    return (
        <div
            onClick={() => setZIdx(false)}
        >
            <div
                className="relative w-fit xxs:h-20 lg:h-48"
                onMouseLeave={() => {
                    if (!window.getSelection()?.toString().length) {
                        setZIdx(false)
                    } else {
                        setZIdx(true)
                    }
                }}
                onMouseEnter={() => {
                    if (window.getSelection()?.toString().length) {
                        setZIdx(true)
                    }
                }}
            >
                {/* when on bigger screen */}
                <p
                    className={`relative xxs:hidden lg:block text-7xl text-blue-950 opacity-90 font-shojumaru
                ${zIdx === true ? "z-20" : "z-0"}`}
                    style={{
                        fontSize: "200px",
                    }}
                    onClick={handleOnClickSelectionOfText}
                >
                    ABOUT
                </p>
                <h2
                    className={`relative xxs:hidden lg:block text-blue-400 font-vastShadow ${zIdx === true ? "z-0" : "z-20"} w-fit m-auto`}
                    style={{
                        fontSize: "80px",
                        transform: "translateX(0px) translateY(-175px)"
                    }}
                >Hi, call me ab :)</h2>

                {/* when in smaller screen */}
                <p
                    className={`relative xxs:block lg:hidden text-7xl text-blue-950 opacity-90 font-shojumaru
                ${zIdx === true ? "z-20" : "z-0"}`}
                    onClick={handleOnClickSelectionOfText}
                >
                    ABOUT
                </p>
                <h2
                    className={`relative xxs:block lg:hidden xxs:text-2xl lg:text-5xl xxs:-translate-y-14 lg:-translate-y-16 text-red-400 font-vastShadow ${zIdx === true ? "z-0" : "z-20"} w-fit m-auto`}
                >Hi, call me ab :)</h2>
            </div>
        </div>
    )
}

const contributes = [
    { name: "MDN", imgSrc: mdnLogo, url: "https://github.com/mdn/content/pulls?q=is%3Apr+author%3Abappyasif+is%3Aclosed" },
    { name: "The Odin Project", imgSrc: topLogo, url: "https://github.com/TheOdinProject/curriculum/pulls?q=is%3Apr+author%3Abappyasif+is%3Aclosed" },
    { name: "W3C", imgSrc: w3cLogo, url: "https://github.com/w3c/wai-tutorials/pulls?q=is%3Apr+author%3Abappyasif+is%3Aclosed" }
]

const socialLinks = [
    { name: "Github", icon: <AiOutlineGithub />, url: "https://github.com/bappyasif" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/asifuzzaman-bappy-3583236b" },
    { name: "HackerRank", icon: <LiaHackerrank />, url: "https://www.hackerrank.com/dashboard" },
    { name: "Quora", icon: <FaQuora />, url: "https://www.quora.com/profile/Asifuzzaman-Bappy" },
    { name: "Twitter", icon: <AiOutlineTwitter />, url: "https://twitter.com/bappyasif" },
]