import { useState } from "react"
import { Mentions } from "./Mentions"
import { Skills } from "./Skills"
import { collaborativeProjects, curriculamProjects, designs, explorativeProjects } from "./data"
import { useForAccordionSlides } from "../../hooks"

export const Portfolio = () => {
    return (
        <div
            className="flex flex-col gap-20"
        >
            <div className="flex flex-col gap-16">
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
                data={explorativeProjects}
                heading="Explorative Projects - Fullstack"
            />
            <ReusableNoteableWorks
                data={curriculamProjects}
                heading="Curriculam Projects - Fullstack"
            />
            <ReusableNoteableWorks
                data={collaborativeProjects}
                heading="Collaborative Project - Frontend"
            />
            {/* <ReusableNoteableWorks
                data={projects}
                heading="Projects: Fullstack / Frontend"
            /> */}
            {/* <ReusableNoteableWorks
                data={designs}
                heading="Responsive UI Design Prototypes"
            /> */}
            <AccordionView
                data={designs}
                heading="Design Prototypes"
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
            {/* while in bigger screen */}
            <div className="xxs:hidden xxl:flex gap-4 items-center">
                <button className="bg-transparent px-4 text-2xl prev-btn" onClick={handlePrev}>Prev</button>
                <div className="flex justify-around xxs:gap-6 lg:gap-20">
                    <RenderAccordionCardView key={item1.name} description={item1.description} imgSrc={item1.imgSrc} live={item1.live} name={item1.name} repo={item1.repo} smallerSize={smallerSize} />
                    <RenderAccordionCardView key={item2.name} description={item2.description} imgSrc={item2.imgSrc} live={item2.live} name={item2.name} repo={item2.repo} smallerSize={smallerSize} />
                </div>

                <button className="bg-transparent px-4 text-2xl next-btn" onClick={handleNext}>Next</button>
            </div>

            {/* while in smaller screen */}
            <div className="xxs:flex xxl:hidden flex-col gap-4 items-center">
                <div className="flex justify-around xxs:gap-6 lg:gap-20">
                    <RenderAccordionCardView key={item1.name} description={item1.description} imgSrc={item1.imgSrc} live={item1.live} name={item1.name} repo={item1.repo} smallerSize={smallerSize} />
                </div>
                <div className="flex gap-4 w-full">
                    <button className="px-4 text-4xl py-2 bg-slate-900 w-full rounded-2xl" onClick={handlePrev}>Prev</button>
                    <button className="px-4 text-4xl py-2 bg-slate-900 w-full rounded-2xl" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

const RenderAccordionCardView = ({ ...item }: ProjectProps) => {
    const { description, imgSrc, live, name, repo, smallerSize } = item;

    return (
        <article className="flex flex-col justify-between items-center gap-16 xxs:w-full xxl:w-2/5">
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
    tagline?: string,
    repo: string,
    live: string,
    description: string,
    imgSrc: string,
    smallerSize?: boolean
    stackUsed?: string[]
}

type ReusableProps = {
    data: ProjectProps[],
    heading: string,
    smallerSize?: boolean
}

const ReusableNoteableWorks = ({ data, heading }: ReusableProps) => {
    const renderProjects = () => data.map((item: ProjectProps) => <RenderWork key={item.name} description={item.description} live={item.live} name={item.name} repo={item.repo} imgSrc={item.imgSrc} stackUsed={item.stackUsed} tagline={item.tagline} />)

    return (
        <div
            className="flex flex-col justify-center items-center gap-11"
        >
            <h2 className="xxs:text-3xl sm:text-4xl">{heading}</h2>
            <div
                className={`flex flex-col justify-center items-center gap-16`}
            >
                {renderProjects()}
            </div>
        </div>
    )
}

const RenderWork = ({ ...item }: ProjectProps) => {
    const { name, repo, live, description, imgSrc, stackUsed, tagline } = item;

    const check = () => {
        let reverse = false;
        if (["Just News", "Standalone Twitter - Prototype"].includes(name)) {
            reverse = true
        }
        return reverse
    }

    return (
        <article
            className={`flex xxs:flex-col ${check() ? "xxl:flex-row-reverse" : "xxl:flex-row"} gap-10 items-center justify-center`}
        >
            <ImageView imgSrc={imgSrc} description={description} live={live} />
            <RenderProjectDetailInfo
                description={description} live={live}
                name={name} repo={repo} stackUsed={stackUsed} tagline={tagline} />
        </article>
    )
}

type DetailProps = Omit<ProjectProps, "imgSrc">

const RenderProjectDetailInfo = ({ ...item }: DetailProps) => {
    const { description, live, name, repo, smallerSize, stackUsed, tagline } = item;

    const renderStacks = () => stackUsed?.map(name => <span className="bg-slate-900 my-0.5 xxs:px-1.5 md:px-2.5" key={name}>{name}</span>)

    const ifAccordions = () => ["Restaurant Site", "Tourism Worldwide", "Landing Page", "Animations Saavy", "Self-driving Corp", "Product Review Page"].includes(name)
    return (
        <div
            className={`xxs:w-screen sm:w-full text-xl ${smallerSize ? "text-center" : "text-justify"} flex flex-col gap-2`}
        >
            <h2 className="text-4xl">{name}</h2>
            {
                !smallerSize
                    ? <p className="flex flex-row gap-2"><span className="font-bold">Tagline: </span>{tagline}</p>
                    : null
            }
            <a target="_blank" href={repo} className={`font-bold flex flex-row ${smallerSize ? "justify-center" : ""} gap-2 flex-wrap`}><span>Repo:</span> <span className="text-cyan-400">{repo}</span></a>
            <a target="_blank" href={live} className={`font-bold flex flex-row ${smallerSize ? "justify-center" : ""} gap-2 flex-wrap`}><span>Live:</span> <span className="text-cyan-400">{live}</span></a>
            <p className={`text-justify ${ifAccordions() ? "xxs:h-28 sm:h-20 text-2xl" : "h-44 overflow-y-auto hide-scrollbar text-xl"} pr-2 
            `}
            // /*custom-scrollbar*/
            // style={{ scrollbarGutter: "unset" }}
            >{description}</p>
            {
                !smallerSize
                    ?
                    <div>
                        <h2 className="font-bold">Stack Used</h2>
                        <div className="flex gap-x-4 flex-wrap xxs:text-sm md:text-lg">{stackUsed?.length ? renderStacks() : null}</div>
                    </div>
                    : null
            }
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
            className={`relative w-full h-full`}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
        >
            <img
                className={`${smallerSize ? "w-full xxs:h-40 md:h-96" : "xxs:w-screen sm:w-full h-auto"}`}
                src={imgSrc}
                alt={description}
                style={{
                    minHeight: !smallerSize ? "366px" : "200px",
                    minWidth: !smallerSize ? "375px" : ""
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