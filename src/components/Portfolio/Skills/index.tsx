import { skills } from "../data"
import { useHandlePercentileCount } from "../../../hooks";

export const Skills = () => {
    const highPercentiles = skills.filter(item => item.percentile >= 85);
    const regularPercentiles = skills.filter(item => item.percentile < 85);

    return (
        <div
            id="Skills"
            className="flex xxs:flex-col xl:flex-row justify-between items-center xxs:gap-6 lg:gap-0 w-full font-martianMono"
        >
            <ShowHighPercentilesSkills data={highPercentiles} />
            <ShowRegulars data={regularPercentiles} />
        </div>
    )
}

type MetricProps = {
    name: string,
    text: string,
    percentile: number
}

type MetricsData = {
    data: MetricProps[]
}

const ShowHighPercentilesSkills = ({ data }: MetricsData) => {
    const renderMetrics = () => data?.map(item => <ShowMetric name={item.name} percentile={item.percentile} text={item.text} key={item.name} />)
    return (
        <div className="flex flex-wrap xxs:gap-0 sm:gap-1 lg:gap-4 xxs:w-full xxl:w-1/2">
            {renderMetrics()}
        </div>
    )
}

const ShowMetric = ({ ...item }: MetricProps) => {
    // const { name, text, percentile } = item;
    const { name, percentile } = item;

    const { currPercentile, handleBegin, handleStop } = useHandlePercentileCount(percentile)

    return (
        <div
            className="xxs:w-3/6 sm:w-1/4 lg:w-1/4 h-fit mx-auto rounded-2xl py-2 relative"
            // onClick={handleToggle}
            onMouseEnter={handleBegin}
            onMouseLeave={handleStop}
            title={`Current ${name} Profeciency*`}
        >
            <h2 className="text-lg">{name}</h2>
            {/* <RadialProgressBar percentile={percentile} /> */}
            {/* <CurvedTextInCircle /> */}
            {/* <p className="rounded-full">Testing</p> */}
            <RadialProgressBar percentile={currPercentile || percentile} />
            {/* <p>{text} *</p> */}
        </div>
    )
}

// const CurvedTextInCircle = () => {
//     return (
//         <svg
//             className="absolute xxs:left-8 sm:left-4 lg:left-6"
//             viewBox="0 0 200 200"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 id="circlePath"
//                 d="
//                     M 10, 50
//                     a 40,40 0 1,1 80,0
//                     40,40 0 1,1 -80,0
//                 "
//                 fill="none"
//             />
//             <text className="fill-red-800" strokeWidth={4}>
//                 <textPath href="#circlePath"  textLength={Math.floor(Math.PI * 2 * 44)}>
//                     Profeciency*
//                 </textPath>
//             </text>
//         </svg>
//     )
// }

// const CurvedTextInCircle = () => {
//     return (
//         <svg className="absolute xxs:left-8 sm:left-4 lg:left-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={110} height={110}>
//             {/* <path id="curve" d="M 0 120 C 0 120, 130 0, 260 180"></path> */}
//             {/* <path id="curve" d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"></path> */}
//             {/* <path id="curve" d="M0,60a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" fill="none"></path> */}
//             {/* <path id="curve" d="M16,60a44,44 0 1,0 88,0a44,44 0 1,0 -88,0" fill="none"></path> */}
//             {/* <path id="curve" d="M2,62a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" fill="none"></path> */}
//             {/* <path id="curve" d="M16,60a44,44 0 1,0 88,0a44,44 0 1,0 -88,0" fill="none"></path> */}
//             <path className="xxs:hidden xl:block" id="curve" d="M11,60a49,49 0 1,0 98,0a49,49 0 1,0 -98,0" fill="none"></path>
//             <path className="xxs:hidden sm:block lg:hidden skew-x-2" id="curve" d={`M14,60a46,46 0 1,0 92,0a46,46 0 1,0 -92,0`} fill="none"></path>
//             <path className="xxs:block sm:hidden" id="curve" d={`M 20,60a49,49 0 1,0 98,0a49,49 0 1,0 -98,0`} fill="none"></path>
//             <text className="font-mono fill-red-900 text-sm stroke-red-800">
//                 <textPath startOffset={"0%"} href="#curve">Proficiency*</textPath>
//             </text>

//             {/* <path d="M2,62a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" id="textcircle" fill="none"></path>
//             <text dy="70" textLength="1220">
//                 <!-- textLength (essentially the circumference of the circle) is used as an alternative to letter-spacing for Firefox, which currently doesn't support letter-spacing for SVG -->
//                 <textPath xlinkHref="#textcircle">Red Hot Chilli Peppers</textPath>
//             </text> */}

//         </svg>
//     )
// }

// const CurvedTextInCircle = () => {
//     return (
//         <svg className="absolute" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
//             <title>Starbucks Coffee Logo</title>
//             <defs>
//                 <path d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0" id="coffeecircle" />
//                 <path d="M100,37c34.8,0,63,28.2,63,63s-28.2,63-63,63s-63-28.2-63-63S65.2,37,100,37z" id="starbuckscircle" transform="rotate(-85 100 100)" />
//             </defs>
//             <circle cx="60" cy="60" r="60" fill="transparent" id="background" />
//             <circle fill="none" stroke="#FFF" cx="60" cy="60" r="60" stroke-width="3" id="rim" />
//             <text>
//                 <textPath xlinkHref="#starbuckscircle">Starbucks</textPath>
//             </text>
//             <text dx="20" textLength="160" className="coffee">
//                 <textPath xlinkHref="#coffeecircle">Coffee</textPath>
//             </text>
//         </svg>
//     )
// }

/**
 * 
 * Inside an <svg> element we place a <circle> tag, where we declare the radius of the ring with the r attribute, its position from the center in the SVG viewBox with cx and cy and the width of the circle stroke
 * 
 * stroke-dasharray
This property is like border-style: dashed but it lets you define the width of the dashes and the gap between them.
* 
*stroke-dashoffset
The second one allows you to move the starting point of this dash-gap sequence along the path of the SVG element.
*
* stroke-dasharray lets you specify the length of the rendered part of the line, then the length of the gap. stroke-dashoffset lets you change where the dasharray starts.
 */
const RadialProgressBar = ({ percentile }: ProgressProps) => {

    const radius = 60;
    const stroke = 6

    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset = circumference - percentile / 100 * circumference;

    return (
        <svg
            className="mx-auto"
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                // id="textcircle"
                stroke="white"
                fill="transparent"
                strokeWidth={stroke}
                // strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                // id="textcircle"
                stroke="green"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                // stroke-width={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            {/* you can’t yet make text cling to a <circle> or <rect></rect> */}

            {/* <text dx="50">
                    <textPath xlinkHref="#textcircle">
                        Red Hot Chilli Peppers
                    </textPath>
                </text> */}

            <text className="text-lg"
                x="50%" y="50%" textAnchor="middle" fill="white" dy=".5em" dx=".1em">{percentile}%
            </text>
        </svg>
    )
}

const ShowRegulars = ({ data }: MetricsData) => {
    const showMetrics = () => data.sort((a, b) => a.percentile > b.percentile ? 1 : -1).map(item => <ShowSkillProgress name={item.name} percentile={item.percentile} text={item.text} key={item.name} />)

    return (
        <div
            className="flex justify-around xxs:w-full xxl:w-1/2 flex-wrap gap-8"
        >
            {showMetrics()}
        </div>
    )
}

const ShowSkillProgress = ({ ...item }: MetricProps) => {
    // const { name, text, percentile } = item;
    const { name, percentile } = item;

    const { currPercentile, handleBegin, handleStop } = useHandlePercentileCount(percentile)

    return (
        <div
            className={`xxs:w-2/5 lg:w-1/3 h-fit flex flex-col justify-end gap-2`}
            onMouseEnter={handleBegin}
            onMouseLeave={handleStop}
        >
            <h2 className="xxs:text-sm lg:text-lg">{name}</h2>
            {/* <LinearProgressBar percentile={percentile} /> */}
            <LinearProgressBar percentile={currPercentile || percentile} />
            {/* <p className="text-sm xxs:hidden lg:block">Current {text} *</p> */}
        </div>
    )
}

type ProgressProps = {
    percentile: number
}

const LinearProgressBar = ({ percentile }: ProgressProps) => {
    return (
        <div className='w-full bg-gray-300 rounded overflow-hidden'>
            <div
                style={{ width: `${percentile}%` }}
                className={`h-4 ${percentile < 56 ? 'bg-red-600' : 'bg-green-600'
                    }`}
            >
                <p className="text-xs h-fit">Profeciency*</p>
            </div>
        </div>
    );
};