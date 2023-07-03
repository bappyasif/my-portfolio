import { ReactElement } from "react"
import { AiOutlineCode, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
    return (
        <div
            className="flex flex-col gap-6"
        >
            <RenderNavs
                learningSites={footers.learningSites}
                recruitingSites={footers.recrutingSites}
                socials={footers.socials}
            />
            <ShowCopyrights />
        </div>
    )
}

const ShowCopyrights = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <div>This portfolio is developed by a.b. &copy; {getYear()} and this design is inspired from <a href="#">colorlib</a> templates</div>
    )
}

type NavProps = {
    name: string,
    url: string,
    icon?: ReactElement | null
}

type NavsProps = {
    learningSites?: NavProps[],
    recruitingSites?: NavProps[],
    socials?: NavProps[],
}

type NavSectionProps = {
    items: NavProps[] | undefined,
    heading: string
}

const RenderNavs = ({ ...items }: NavsProps) => {
    const { learningSites, recruitingSites, socials } = items;

    return (
        <div
            className="flex justify-between gap-6 w-full "
        >
            <RenderNavSection
                items={learningSites}
                heading="Learnign Sites"
            />
            <RenderNavSection
                items={recruitingSites}
                heading="Recruiting Sites"
            />
            <RenderNavSection
                items={socials}
                heading="Social Sites"
            />
        </div>
    )
}

const RenderNavSection = ({ items, heading }: NavSectionProps) => {

    const renderItems = () => items?.map(item => <RenderNav key={item.name} name={item.name} url={item.url} icon={item.icon} />)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl">{heading}</h2>
            <div className="flex flex-col gap-6 flex-wrap h-36">{renderItems()}</div>
        </div>
    )
}

const RenderNav = ({ ...item }: NavProps) => {
    const { name, url, icon } = item;

    return (
        <div className="text-justify flex gap-4 items-center">
            {icon ? <span>{icon}</span> : null}
            <a target="_blank" href={url}>{name}</a>
        </div>
    )
}

const footers = {
    learningSites: [
        { name: "Free Code Camp", url: "https://www.freecodecamp.org/bappyasif" },
        { name: "The Odin Project", url: "https://www.theodinproject.com/paths" },
        { name: "MDN", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        { name: "Edx", url: "https://www.edx.org/search" },
        { name: "Code Security", url: "https://owasp.org/www-project-top-ten/" },
        { name: "Accessibility", url: "https://www.w3.org/mission/accessibility/" },
        { name: "MongodbUniversity", url: "https://learn.mongodb.com/" },
        {name: "Udemy", url: "https://www.udemy.com/"},
        {name: "Udacity", url: "https://www.udacity.com/"},
    ],
    recrutingSites: [
        { name: "Wellfound", url: "https://wellfound.com/u/asifuzzaman-bappy-2" },
        { name: "YCombinator", url: "https://www.workatastartup.com/" },
        { name: "Indeed", url: "indeed.com" }
    ],
    socials: [
        { name: "Github", url: "https://github.com/bappyasif", icon: <AiOutlineGithub /> },
        { name: "Twitter", url: "@bappyasif", icon: <AiOutlineTwitter /> },
        { name: "HackerRank", url: "https://www.hackerrank.com/abappy", icon: <AiOutlineCode /> },
    ]
}