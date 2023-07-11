import { ReactElement, useState } from "react"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import {FaLinkedinIn, FaQuora} from "react-icons/fa"
import {LiaHackerrank} from "react-icons/lia"
import mdnLogo from "../assets/mdn-logo.jpg"
import topLogo from "../assets/top-logo.png"
import w3cLogo from "../assets/w3c-logo.png"
import photo from "../assets/about-pic.jpeg"
// import photo from "../assets/contact-pic.jpg"

export const About = () => {
    const [zIdx, setZIdx] = useState<boolean>(false)

    return (
        <div
            id="Resume"
            className="flex flex-col items-center gap-6"
        >

            <div className="flex xxs:flex-col lg:flex-row gap-4 mt-6">
                <img
                    className="xxs:w-full lg:w-1/3"
                    // src="https://source.unsplash.com/random/?professional&Man&&Office&Corporate"
                    src={photo}
                    alt="picture"
                />

                <div
                    className="xxs: w-full lg:w-2/4 mx-auto flex flex-col gap-4 
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
    const renderEntities = () => contributes.map(item => <ContributedEntity key={item.name} name={item.name} imgSrc={item.imgSrc} />)

    return (
        <div className="w-full flex flex-col gap-10">
            <h2 className="text-4xl">Successfull Contributions</h2>
            <div className="flex justify-between w-full">
                {renderEntities()}
            </div>
        </div>
    )
}

type EntityProps = {
    name: string,
    imgSrc: string
}

const ContributedEntity = ({ name, imgSrc }: EntityProps) => {
    return (
        <div title={name}>
            <img className="xxs:w-20 lg:w-44 xxs:h-16 lg:h-20" src={imgSrc} alt={name} />
        </div>
    )
}

// const Contacts = ({ setZIdx }: PropsType) => {
//     const renderContacts = () => contacts.map(item => <RenderContact key={item.text} label={item.label} text={item.text} />)

//     const bringHeadingTextFront = () => {
//         if (!window.getSelection()?.toString().length) {
//             setZIdx(false)
//         }
//     }

//     return (
//         <div
//             className="self-start text-justify"
//             onClick={bringHeadingTextFront}
//         >
//             <h2>My Contacts</h2>
//             <div>
//                 {renderContacts()}
//             </div>
//         </div>
//     )
// }

// type ContactProps = {
//     label: string,
//     text: string
// }

// const RenderContact = ({ ...item }: ContactProps) => {
//     const { label, text } = item;

//     return (
//         <div className="flex gap-2">
//             <span>{label}</span>
//             <span>{text}</span>
//         </div>
//     )
// }

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
            className="flex flex-col justify-start gap-2 items-start text-justify text-2xl"
            onClick={bringHeadingTextFront}
        >
            <p className="">A community driven self-taught Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node), bringing a proven track record of building many web applications. My passion for coding and continuous learning has led me to hone my technical abilities and deepen my knowledge of the MERN stack, and other related technologies, such as Next.JS and TypeScript.</p>
            {/* <a className="text-blue-600 font-extrabold" target="_blank" href="https://drive.google.com/file/d/1vszl4SBsWtY44tFVPfkBHwirFFjnq2Ja/view?usp=sharing">Checkout my resume</a> */}
            <RenderLinks />
        </div>
    )
}

const RenderLinks = () => {
    const linkItems = () => socialLinks.map(item => <RenderLink key={item.name} icon={item.icon} name={item.name} url={item.url} />)
    return (
        <div className="flex gap-4 text-xl">
            {linkItems()}
        </div>
    )
}

type LinkPropsType = {
    name: string,
    icon: ReactElement,
    url: string
}

const RenderLink = ({ name, icon, url }: LinkPropsType) => {
    // const {icon, name} = item;

    return (
        <a className="text-7xl" href={url} title={name} target="_blank">
            <span>{icon}</span>
            {/* <span>{name}</span> */}
        </a>
    )
}

type HeadingProps = {
    zIdx: boolean,
    setZIdx: (v: boolean) => void
}

const Heading = ({ zIdx, setZIdx }: HeadingProps) => {
    // const [zIdx, setZIdx] = useState<boolean>(false)

    const handleOnClickSelectionOfText = () => {
        // console.log(window.getSelection()?.toString())
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
                    className={`relative xxs:hidden lg:block text-7xl text-blue-950 opacity-90 
                ${zIdx === true ? "z-20" : "z-0"}`}
                    style={{
                        fontSize: "200px",
                    }}
                    onClick={handleOnClickSelectionOfText}
                >
                    ABOUT
                </p>
                <h2
                    className={`relative xxs:hidden lg:block text-red-400 font-extrabold ${zIdx === true ? "z-0" : "z-20"} w-fit m-auto`}
                    style={{
                        fontSize: "90px",
                        transform: "translateX(0px) translateY(-175px)"
                    }}
                >Hello, I'm ab :)</h2>

                {/* when in smaller screen */}
                <p
                    className={`relative xxs:block lg:hidden text-7xl text-blue-950 opacity-90 
                ${zIdx === true ? "z-20" : "z-0"}`}
                    style={{
                        // fontSize: "200px",
                    }}
                    onClick={handleOnClickSelectionOfText}
                >
                    ABOUT
                </p>
                <h2
                    className={`relative xxs:block lg:hidden xxs:text-4xl lg:text-5xl xxs:-translate-y-14 lg:-translate-y-16 text-red-400 font-extrabold ${zIdx === true ? "z-0" : "z-20"} w-fit m-auto`}
                    style={{
                        // fontSize: "150px",
                        // transform: "translateX(0px) translateY(-144px)"
                    }}
                >Hello, I'm ab :)</h2>
            </div>
        </div>
    )
}

const contributes = [
    { name: "MDN", imgSrc: mdnLogo },
    { name: "The Odin Project", imgSrc: topLogo },
    { name: "W3C", imgSrc: w3cLogo },
    // {name: "FreeCodeCamp", imgSrc: fccLogo}
]

// const contacts = [
//     { label: "Email", text: "bappy.asif@icloud.com" },
//     { label: "Mobile", text: "+8801915645093" }
// ]

const socialLinks = [
    { name: "Github", icon: <AiOutlineGithub />, url: "https://github.com/bappyasif" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/asifuzzaman-bappy-3583236b" },
    { name: "HackerRank", icon: <LiaHackerrank />, url: "https://www.hackerrank.com/dashboard" },
    { name: "Quora", icon: <FaQuora />, url: "https://www.quora.com/profile/Asifuzzaman-Bappy" },
    { name: "Twitter", icon: <AiOutlineTwitter />, url: "https://twitter.com/bappyasif" },
]