import { ReactElement, useEffect, useState } from "react"
// import { AiOutlineArrowDown } from "react-icons/ai"
import { CgScrollV } from "react-icons/cg"

export const Intro = (): ReactElement => {
    const content = (
        <div
            id="Home"
            className="relative xxs:text-lg lg:text-2xl flex flex-col xxs:gap-40 lg:gap-72 items-center justify-between"
            style={{
                minHeight: "481px"
            }}
        >
            {/* <ViewMasking /> */}
            <ShowName />
            <ShowRoles />
            <PointingArrow />
        </div>
    )
    return content
}

export const ViewMasking = () => {
    return (
        <div
            className="absolute w-full h-full flex justify-between z-0"
        >
            < span className="left w-1/2 bg-slate-800 opacity-80 z-0" ></span >
            <span className="right w-1/2 bg-slate-800 opacity-90 z-0"></span>
        </div >
    )
}

const PointingArrow = (): ReactElement => {
    const content = (
        <a
            href="#About"
            className="animate-pulse text-6xl relative 
                border border-zinc-600 border-b-8 text-amber-300 z-20 flex flex-col justify-center items-center opacity-80"
        >
            <span
                style={{
                    display: "block",
                    width: "90px",
                    height: "80px",
                    borderRight: "45px solid blue",
                    borderLeft: "45px solid red",
                    borderBottom: "83px solid green"
                    // borderRight: "76px solid blue",
                    // borderLeft: "76px solid red",
                    // borderBottom: "85px solid green",
                    // borderTop: "9px solid green"
                }}
            ></span>
            <span
                // className="z-20 absolute -bottom-4 left-0 animate-bounce"
                className="animate-bounce absolute bottom-0"
            >
                {/* <AiOutlineArrowDown /> */}
                {<CgScrollV />}
            </span>
        </a >
    )

    return content
}

const ShowName = (): ReactElement => {
    const [text, setText] = useState<string>("Asifuzzaman Bappy")
    const [className, setClassName] = useState<string>("dissolve-text")

    const swapText = (): void => setText(prev => prev === "From Bangladesh" ? "Asifuzzaman Bappy" : prev === "Asifuzzaman Bappy" ? "A Keen Learner" : "From Bangladesh")

    const swapClassname = (): void => setClassName(prev => prev === "dissolve-text" ? "reappear-text" : "dissolve-text")

    useEffect(() => {
        // let timerIntvl = setInterval(swapText, 20000)
        // let anotherInterval = setInterval(swapClassname, 6000)
        let timerIntvl = setInterval(swapText, 6000)
        let anotherInterval = setInterval(swapClassname, 3000)

        return () => {
            clearInterval(timerIntvl)
            clearInterval(anotherInterval)
        }
    }, [])

    const content = (
        <div className="flex gap-1 justify-between items-baseline xxs:w-screen lg:w-2/4 font-mono">
            <span className="w-1/2 text-right mr-1 xxs:text-2xl lg:text-6xl font-extrabold z-10">I'm</span>
            <span className={`${className} xxs:text-lg lg:text-4xl w-1/2 text-left z-10`}>{text}</span>
        </div>
    )

    return content
}

const ShowRoles = (): ReactElement => {
    const [text, setText] = useState<string>("Web Development")
    const [newText, setNewText] = useState<string>("")
    const [waitBacktrack, setWaitBacktrack] = useState<boolean>(false)
    const [idx, setIdx] = useState<number>(0)

    const forwardEntryText = () => {
        if (newText.length !== -1) {
            setText(prev => prev + newText[0])
            setNewText("")
        }

        let slicedNewText: string

        slicedNewText = newText.substring(1)

        if (slicedNewText.length === 1) {
            setNewText("")
        } else if (slicedNewText.length === 0) {
            setWaitBacktrack(false)
        }

        setNewText(slicedNewText)
    }

    const decideWhichRole = () => {
        let text = ""
        if (idx <= roles.length - 1) {
            setIdx(prev => {
                if (prev === roles.length - 1) {
                    return 0
                } else {
                    return prev + 1
                }
            })

            text = roles[idx]
        }

        return text
    }

    const backtrackText = () => {
        const subTxt = text.substring(0, text.length - 1)
        if (text.length === 1) {
            setText("")
            setWaitBacktrack(true)

            setNewText(decideWhichRole())
        } else {
            setText(subTxt)
        }
        // console.log("rtunning bactrack!!")
    }

    useEffect(() => {
        if (!waitBacktrack && text) {
            const intervalTimer = setInterval(backtrackText, 200)

            return () => {
                clearInterval(intervalTimer)
            }
        } else {
            if (newText) {
                const intervalTimer = setInterval(forwardEntryText, 200)

                return () => {
                    clearInterval(intervalTimer)
                }
            }
        }

    }, [text, waitBacktrack, newText])

    useEffect(() => {
        setIdx(1)
    }, [])

    const content = (
        <div className="test1234 relative xxs:text-xl lg:text-6xl flex xxs:gap-2 lg:gap-4 font-mono">
            <span className="xxs:hidden sm:block">A Self Taught </span>
            <span className="xxs:block sm:hidden">
                <span className="text-transparent">.</span>
            </span>
            <span className="z-10">{text}</span>
        </div>
    )

    return content
}

const roles = [" Web Developer ", " Frontend Developer ", " Backend Developer ", " Fullstack Developer ", " SQA Automation Engineer "]