import { ReactElement, useState } from "react"
import { AiFillCode, AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"
import fccLogo from "../assets/fcc-logo.png"
import mdnLogo from "../assets/mdn-logo.jpg"
import topLogo from "../assets/top-logo.png"
import w3cLogo from "../assets/w3c-logo.png"

export const About = () => {
    const [zIdx, setZIdx] = useState<boolean>(false)

    return (
        <div
            id="Resume" 
            className="flex flex-col items-center gap-6"
        >

            <div className="flex gap-4 mt-6">
                <img 
                className="w-96" 
                src="https://source.unsplash.com/random/?professional&Man&&Office&Corporate" 
                alt="picture" 
                />

                <div 
                    className="w-2/4 mx-auto flex flex-col gap-4 
                    justify-end items-center "
                >
                    <Heading zIdx={zIdx} setZIdx={setZIdx} />
                    <Details setZIdx={setZIdx} />
                    <Contacts setZIdx={setZIdx} />
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

const ContributedEntity = ({name, imgSrc}:EntityProps) => {
    return (
        <div title={name}>
            <img className="w-44 h-20" src={imgSrc} alt={name} />
        </div>
    )
}

const Contacts = ({setZIdx}: PropsType) => {
    const renderContacts = () => contacts.map(item => <RenderContact key={item.text} label={item.label} text={item.text} />)

    const bringHeadingTextFront = () => {
        if (!window.getSelection()?.toString().length) {
            setZIdx(false)
        }
    }

    return (
        <div 
            className="self-start text-justify"
            onClick={bringHeadingTextFront}
        >
            <h2>My Contacts</h2>
            <div>
                {renderContacts()}
            </div>
        </div>
    )
}

type ContactProps = {
    label: string,
    text: string
}

const RenderContact = ({...item}: ContactProps) => {
    const {label, text} = item;

    return (
        <div>
            <span>{label}</span>
            <span>{text}</span>
        </div>
    )
}

type PropsType = {
    setZIdx: (v: boolean) => void
}

const Details = ({setZIdx}: PropsType) => {
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
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque debitis repellat dolorem, voluptate blanditiis sit eveniet repellendus, unde placeat nobis dolore ad labore odio? Nam fugit eum architecto aut itaque.</p>
            <a className="text-blue-600 font-extrabold" href="#">Checkout my resume</a>
            <RenderLinks />
        </div>
    )
}

const RenderLinks = () => {
    const linkItems = () => socialLinks.map(item => <RenderLink key={item.name} icon={item.icon} name={item.name} />)
    return (
        <div className="flex gap-4 text-xl">
            {linkItems()}
        </div>
    )
}

type LinkPropsType = {
    name: string,
    icon: ReactElement
}

const RenderLink = ({ name, icon }: LinkPropsType) => {
    // const {icon, name} = item;

    return (
        <div title={name}>
            <span>{icon}</span>
            {/* <span>{name}</span> */}
        </div>
    )
}

type HeadingProps = {
    zIdx: boolean,
    setZIdx: (v: boolean) => void
}

const Heading = ({zIdx, setZIdx}: HeadingProps) => {
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
                className="relative w-fit"
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
                <p
                    className={`relative text-7xl text-blue-950 opacity-90 
                ${zIdx === true ? "z-20" : "z-0"}`}
                    style={{
                        fontSize: "200px",
                    }}
                    onClick={handleOnClickSelectionOfText}
                >
                    ABOUT
                </p>
                <h2
                    className={`relative text-7xl text-red-400 font-extrabold ${zIdx === true ? "z-0" : "z-20"} w-fit m-auto`}
                    style={{
                        // fontSize: "150px",
                        transform: "translateX(0px) translateY(-144px)"
                    }}
                >Hello, I'm ab :)</h2>
            </div>
        </div>
    )
}

const contributes = [
    {name: "MDN", imgSrc: mdnLogo},
    {name: "The Odin Project", imgSrc: topLogo},
    {name: "W3C", imgSrc: w3cLogo},
    {name: "FreeCodeCamp", imgSrc: fccLogo}
]

const contacts = [
    {label: "Email", text: "abcd@efghi.jkl.mno"},
    {label: "Mobile", text: "+1234567890"}
]

const socialLinks = [
    { name: "Github", icon: <AiFillFacebook /> },
    { name: "LinkedIn", icon: <AiFillLinkedin /> },
    { name: "Twitter", icon: <AiFillTwitterSquare /> },
    { name: "HackerRank", icon: <AiFillCode /> }
]