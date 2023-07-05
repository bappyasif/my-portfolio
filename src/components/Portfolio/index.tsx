import { useState } from "react"
import { Mentions } from "./Mentions"
import { Skills } from "./Skills"
import { designs, projects } from "./data"
import { useForAccordionSlides } from "../../hooks"

export const Portfolio = () => {
    return (
        <div
            className="flex flex-col gap-20"
        >
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl">Some Noteable Skills</h2>
                <Skills />
            </div>
            <Mentions />
            <Projects />
        </div>
    )
}

const Projects = () => {

    return (
        <div
            id="Portfolio"
            className="flex flex-col justify-center items-center gap-20"
        >
            <ReusableNoteableWorks
                data={projects}
                heading="Some Noteable Works - Fullstack / Frontend"
            />
            {/* <ReusableNoteableWorks
                data={designs}
                heading="Responsive UI Design Prototypes"
            /> */}
            <AccordionView
                data={designs}
                heading="Responsive UI Design Prototypes"
                smallerSize={true}
            />
        </div>
    )
}

const AccordionView = ({ data, heading, smallerSize }: ReusableProps) => {
    const { cnInfo, handleNext, handlePrev } = useForAccordionSlides()

    const item1 = data[cnInfo.currSilde]
    const item2 = data[cnInfo.nextSlide]

    return (
        <div className="flex flex-col gap-20">
            <h2 className="text-4xl">{heading}</h2>
            <div className="flex gap-4 items-center">
                <button className="bg-transparent px-4 text-2xl prev-btn" onClick={handlePrev}>Prev</button>
                {/* <div className="flex justify-around gap-20 flex-wrap">{renderData()}</div> */}
                <div className="flex justify-around gap-20">
                    <RenderAccordionCardView key={item1.name} description={item1.description} imgSrc={item1.imgSrc} live={item1.live} name={item1.name} repo={item1.repo} smallerSize={smallerSize} />
                    <RenderAccordionCardView key={item2.name} description={item2.description} imgSrc={item2.imgSrc} live={item2.live} name={item2.name} repo={item2.repo} smallerSize={smallerSize} />
                </div>
                <button className="bg-transparent px-4 text-2xl next-btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

const RenderAccordionCardView = ({ ...item }: ProjectProps) => {
    const { description, imgSrc, live, name, repo, smallerSize } = item;

    return (
        <article className="flex flex-col justify-between items-center gap-2 w-2/5">
            <ImageView
                description={description} imgSrc={imgSrc} live={live} smallerSize={smallerSize}
            />
            <RenderProjectDetailInfo
                description={description} live={live}
                name={name} repo={repo} smallerSize={smallerSize}
            />
        </article>
    )
}

type ProjectProps = {
    name: string,
    repo: string,
    live: string,
    description: string,
    imgSrc: string,
    smallerSize?: boolean
}

type ReusableProps = {
    data: ProjectProps[],
    heading: string,
    smallerSize?: boolean
}

const ReusableNoteableWorks = ({ data, heading }: ReusableProps) => {
    const renderProjects = () => data.map((item: ProjectProps) => <RenderWork key={item.name} description={item.description} live={item.live} name={item.name} repo={item.repo} imgSrc={item.imgSrc} />)

    return (
        <div
            className="flex flex-col justify-center items-center gap-20"
        >
            <h2 className="text-4xl">{heading}</h2>
            <div
                className={`flex flex-col justify-center items-center gap-16`}
            >
                {renderProjects()}
            </div>
        </div>
    )
}

const RenderWork = ({ ...item }: ProjectProps) => {
    const { name, repo, live, description, imgSrc } = item;

    const check = () => {
        let reverse = false;
        if (["OdBo", "Myth Busters", "Animations Saavy", "Product Review Page"].includes(name)) {
            reverse = true
        }
        return reverse
    }

    return (
        <article
            className={`flex ${check() ? "flex-row-reverse" : "flex-row"} gap-10 items-center justify-center`}
        >
            <ImageView imgSrc={imgSrc} description={description} live={live} />
            <RenderProjectDetailInfo
                description={description} live={live}
                name={name} repo={repo} />
        </article>
    )
}

type DetailProps = Omit<ProjectProps, "imgSrc">

const RenderProjectDetailInfo = ({ ...item }: DetailProps) => {
    const { description, live, name, repo, smallerSize } = item;
    const ifAccordions = () => ["Tourism Worldwide", "Landing Page", "Animations Saavy", "Self-driving Corp", "Product Review Page"].includes(name)
    return (
        <div className={`${smallerSize ? "w-full" : "w-3/4"} text-xl ${smallerSize ? "text-center" : "text-justify"} flex flex-col gap-4`}>
            <h2 className="text-4xl">{name}</h2>
            <a target="_blank" href={repo}>Repo: {repo}</a>
            <a target="_blank" href={live}>Live: {live}</a>
            <p className={`text-justify text-2xl ${ifAccordions() ? "h-32" : "h-60 overflow-y-auto hide-scrollbar"}`} style={{scrollbarGutter: "unset"}}>{description}</p>
        </div>
    )
}

type ImageProps = Omit<ProjectProps, "repo" | "name">

const ImageView = ({ imgSrc, description, live, smallerSize }: ImageProps) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const handleMouseOver = () => setHovered(true)
    const handleMouseOut = () => setHovered(false)

    return (
        <figure
            className={`relative ${smallerSize ? "w-full" : "w-3/4"} h-full`}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
        >
            <img
                className="w-full h-auto"
                src={imgSrc}
                alt={description}
                style={{
                    height: !smallerSize ? "373px" : "263px"
                }}
            />
            {
                hovered
                    ? <ShowImgCard live={live} />
                    : null
            }
        </figure >
    )
}

type ImgCardProp = Pick<ProjectProps, "live">

const ShowImgCard = ({ live }: ImgCardProp) => {

    return (
        <div
            className="absolute top-0 bg-blue-900 h-full w-full opacity-80 flex flex-col items-center justify-center text-xl"
        >
            <h2 className="text-4xl">Care to See it Live?</h2>
            <p>
                {/* <span>Care to See it Live?</span> */}
                <a className="bg-slate-600 px-6 font-bold rounded-xl" target="_blank" href={live}>Click Here</a>
            </p>
        </div>
    )
}