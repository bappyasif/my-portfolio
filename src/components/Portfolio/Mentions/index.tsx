import { figs } from "../data"
import { useIncrementingCounter } from "../../../hooks"
import { useState } from "react"

export const Mentions = () => {

    return (
        <div 
            id="Mentions" 
            className="flex flex-col xxs:gap-6 lg:gap-11 bg-[conic-gradient(var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-600 rounded-lg py-4"
        >
            <h2 className="xxs:text-2xl lg:text-4xl font-martianMono font-extrabold">Special Mentions</h2>
            <Specials />
        </div>
    )
}

type SpecialsProps = {
    name: string,
    count: number,
    text: string
}

const Specials = () => {
    const renderFigs = () => figs.map(item => <RenderSpecial key={item.name} count={item.count} name={item.name} text={item.text} />)

    return (
        <div
            className="grid xxs:grid-cols-1 sm:grid-cols-2 xxl:grid-cols-4 xxs:gap-4 lg:gap-10 text-2xl"
        >
            {renderFigs()}
        </div>
    )
}

const RenderSpecial = ({ ...item }: SpecialsProps) => {
    const [animate, setAnimate] = useState<string>("")

    const handleHover = () => setAnimate(item.name)

    const { name, count, text } = item;
    
    const adjustTopMargin = () => {
        let str = "mt-0"
        if (name === "OSP Contributions") {
            str = "xxs:mt-0 xxl:mt-28"
        } else if (name === "FCC Forum") {
            str = "xxs:mt-0 xxl:mt-60"
        } else if (name === "Github Repos") {
            str = "xxs:mt-0 xxl:mt-96"
        }

        return str;
    }

    return (
        <div
            className={`${adjustTopMargin()} h-fit hover:text-blue-200`}
            onMouseEnter={handleHover}
            onMouseLeave={() => setAnimate("")}
        >
            <div className={`${name === animate ? "animate-bounce" : "mx-auto"} flex flex-col items-center justify-center xxs:text-lg lg:text-xl font-martianMono font-semibold`}>
                <h2>{name}</h2>
                <RenderCircleWithText count={count} />
                <p>{text}</p>
            </div>
        </div>
    )
}

type SvgProps = {
    count: number,
    //     text: string
}

const RenderCircleWithText = ({ count }: SvgProps) => {
    return (
        <svg className="flex items-center justify-center hover:animate-pulse">
            <RenderCircle />
            <RenderText count={count} />
        </svg>
    )
}

const RenderCircle = () => {
    return (
        <circle
            cx="151" cy="72" r="58"
            stroke="blue" strokeWidth="4" fill="transparent"
        />
    )
}

const RenderText = ({ count }: SvgProps) => {
    const { total } = useIncrementingCounter(count)

    return (
        <text
            className="text-3xl font-bold"
            x="50%" y="50%" textAnchor="middle"
            fill="teal" dy=".3em"
        >
            {total}
        </text>
    )
}