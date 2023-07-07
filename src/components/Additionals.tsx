import { useState } from "react"
import { testimonials } from "./Portfolio/data"

export const Additionals = () => {
    return (
        <div
            id="Testimonials"
            className="flex flex-col justify-center items-center gap-20 w-full"
        >
            <RenderTestimonials />
            {/* <ShowRecentBlogs /> */}
            <HireMe />
        </div>
    )
}

type LinksProps = {
    profile?: string,
    twitter?: string
}

type TestimonialProps = {
    text: string,
    user: {
        name: string,
        title: string,
        links: LinksProps
    }
}

const RenderTestimonials = () => {
    const renderTestimonies = () => testimonials.map(item => <ShowTestimony key={item.text} text={item.text} user={item.user} />)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-4xl">Testimonials</h2>
            <div className="flex flex-col gap-28">{renderTestimonies()}</div>
        </div>
    )
}

const ShowTestimony = ({ ...item }: TestimonialProps) => {
    const { text, user } = item;

    const decideFlow = () => ["Skyler"].includes(user.name)

    return (
        <div className={`flex xxs:flex-col lg:flex-row ${decideFlow()? "flex-row-reverse" : "flex-row"}  gap-4 relative`}>
            <h2
                className="relative w-4/5 mx-auto text-2xl"
            >
                <span className="quotes__ql" content="“"></span>
                <span className="text-justify">{text}</span>
                <span className="quotes__qr" content="”"></span>
            </h2>

            <ShowUserDetails user={user} />
        </div>
    )
}

type UserProps = Pick<TestimonialProps, "user">

const ShowUserDetails = ({ user }: UserProps) => {
    const { name, title, links } = user;

    return (
        <div className="flex flex-col gap-2 bg-slate-900 opacity-60 font-bold text-blue-200 xxs:w-1/2 lg:w-1/4 mx-auto px-6 py-2 rounded-lg ">
            <div>
                <h2 className="text-xl">{name}</h2>
                <h3>{title}</h3>
            </div>
            <ShowLinks
                profile={links.profile}
                twitter={links.twitter}
            />
        </div>
    )
}

const ShowLinks = ({ ...items }: LinksProps) => {
    const { profile, twitter } = items

    return (
        <div className="flex gap-6 justify-center">
            <a href={profile} target="_blank" title={profile}>
                {/* <span>Profile: </span> */}
                <span>Website</span>
            </a>
            <a href={twitter} target="_blank" title={twitter}>
                <span>Twitter</span>
                {/* <span>{twitter}</span> */}
            </a>
        </div>
    )
}

// const ShowRecentBlogs = () => {
//     return (
//         <div className="flex flex-col gap-6">
//             <h2 className="text-4xl">Recent Blogs</h2>
//             <div
//                 className="flex gap-4"
//             >
//                 <img
//                     className="h-80 w-96"
//                     src="https://source.unsplash.com/random/?Cryptocurrency&1"
//                     alt=""
//                 />
//                 <h3>Work In Progress, Will Go Live Soon....</h3>
//             </div>
//         </div>
//     )
// }

const HireMe = () => {
    return (
        <div
            // className="absolute left-1/3 top-4 flex flex-col gap-6 text-blue-900 font-extrabold"
            className="pattern h-60 w-full flex flex-col justify-center items-center gap-6 text-blue-900 font-extrabold xxs:text-lg lg:text-4xl"
        >
            <h2 className="">Im available for Freelance or Contractual or Fulltime or Valued Internships</h2>
            {/* <button className="bg-slate-400 px-6 py-2 flex items-baseline rounded-full">Hire Me</button> */}
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
            <button type="submit" className="bg-slate-400 px-6 py-2 rounded-full flex items-center"><span className="relative">Begin Process</span> <span className={`px-4 ${rotate ? "rotate-90" : ""}`}>:-)</span></button>
        </form>
    )
}