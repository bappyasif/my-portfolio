import { figs } from "../data"
import { useIncrementingCounter } from "../../../hooks"

export const Mentions = () => {

    return (
        <div id="Mentions" className="flex flex-col xxs:gap-6 lg:gap-11">
            <h2 className="text-4xl">Special Mentions</h2>
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
            className="flex justify-center flex-wrap xxs:gap-2 lg:gap-10 text-2xl"
        >
            {renderFigs()}
        </div>
    )
}

const RenderSpecial = ({ ...item }: SpecialsProps) => {
    const { name, count, text } = item;
    // console.log(name, count)
    const adjustTopMargin = () => {
        let str = "mt-0"
        if(name === "HackerRank") {
            str="xxs:mt-2 lg:mt-28"
        } else if(name === "OSP Contributions") {
            str="xxs:mt-2 lg:mt-60"
        } else if(name === "FCC Forum") {
            str="xxs:mt-2 lg:mt-96"
        }

        return str;
    }
    return (
        <div 
            className={`${adjustTopMargin()} h-fit hover:text-red-800 hover:animate-bounce`}
        >
            <h2>{name}</h2>
            <RenderCircleWithText count={count} />
            <p>{text}</p>
            {/* <SomeCounter /> */}
        </div>
    )
}

type SvgProps = {
    count: number,
    //     text: string
}

const RenderCircleWithText = ({ count }: SvgProps) => {
    return (
        <svg className="flex justify-center hover:animate-pulse">
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