import { useState } from "react"

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
    return (
        <div
            className="pattern h-60 w-full flex flex-col justify-center items-center gap-6 text-teal-800 font-extrabold font-martianMono"
        >
            <h2 className="xxs:text-lg sm:text-xl lg:text-2xl">Im available for Freelance or Contractual or Fulltime or Valued Internships</h2>
            <HireMeForm />
        </div>
    )
}

const HireMeForm = () => {
    const [rotate, setRotate] = useState<boolean>(false)
    const onMouseEnter = () => setRotate(true);
    const onMouseleave = () => setRotate(false)
    return (
        <form action="mailto:bappy.asif@icloud.com" method="post" encType="text/plain" onMouseEnter={onMouseEnter} onMouseLeave={onMouseleave}>
            <button type="submit" className="bg-slate-400 px-6 py-2 rounded-full flex items-center transition-all duration-500 hover:bg-slate-900"><span className="relative font-vastShadow">Begin Process</span> <span className={`transition-all duration-500 px-4 ${rotate ? "rotate-90" : ""} font-bold`}>:-)</span></button>
        </form>
    )
}