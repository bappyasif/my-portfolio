import { useState } from "react"
import { useForIntersectionObserver } from "../hooks"

export const Additionals = () => {
    return (
        <div
            id="Testimonials"
            className="flex flex-col justify-center items-center gap-20 w-full"
        >
            {/* <RenderTestimonials /> */}
            {/* <ShowRecentBlogs /> */}
            <HireMe />
        </div>
    )
}

const HireMe = () => {
    useForIntersectionObserver("stackNow", "reveal")
    return (
        <div
            className="pattern h-60 w-full flex flex-col justify-center items-center gap-6 text-teal-800 font-extrabold font-martianMono"
        >
            <h2 className="xxs:text-lg sm:text-xl lg:text-2xl stackNow">Im available for Freelance or Contractual or Fulltime or Valued Internships</h2>
            {/* <h2 className="xxs:text-lg sm:text-xl lg:text-2xl">{"Im available for Freelance or Contractual or Fulltime or Valued Internships".split("").map((ch, idx) => <span className="slideInFromRight" key={idx}>{ch}</span>)}</h2> */}
            <HireMeForm />
        </div>
    )
}

const HireMeForm = () => {
    const [rotate, setRotate] = useState<boolean>(false)
    const onMouseEnter = () => setRotate(true);
    const onMouseleave = () => setRotate(false)
    useForIntersectionObserver("stackNow", "reveal")

    return (
        <form action="mailto:bappy.asif@icloud.com" method="post" encType="text/plain" onMouseEnter={onMouseEnter} onMouseLeave={onMouseleave} className="stackNow">
            <button type="submit" className="bg-slate-400 px-6 py-2 rounded-full flex items-center transition-all duration-500 hover:bg-slate-900 hover:scale-90 hover:text-slate-400"><span className="relative font-vastShadow">Begin Process</span> <span className={`transition-all duration-500 px-4 ${rotate ? "rotate-90" : ""} font-bold`}>:-)</span></button>
        </form>
    )
}