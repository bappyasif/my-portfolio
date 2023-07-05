import { ReactElement, useEffect, useState } from "react"
import { AiOutlineArrowDown } from "react-icons/ai"

export const Intro = (): ReactElement => {
    const content = (
        <div
            id="Home"
            className="relative text-2xl flex flex-col gap-72 items-center justify-end"
        >
            <ViewMasking />
            <ShowName />
            <ShowRoles />
            <PointingArrow />
        </div>
    )
    return content
}

const ViewMasking = () => {
    return (
        <div className="absolute w-screen h-screen flex justify-between">
            <span className="left w-1/2 bg-slate-800 opacity-40"></span>
            <span className="right w-1/2 bg-slate-800 opacity-60"></span>
        </div>
    )
}

const PointingArrow = (): ReactElement => {
    const content = (
        <a
            href="#Resume"
            className="animate-pulse text-4xl relative 
                border border-zinc-600 border-b-8 text-amber-300"
        >
            <span
                style={{
                    display: "block",
                    width: "20px",
                    height: "40px",
                    borderLeft: "26px solid blue",
                    borderRight: "26px solid yellow",
                    borderBottom: "45px solid maroon"
                }}
            ></span>
            <span
                className="z-20 absolute -bottom-4 left-2 animate-bounce"
            >
                <AiOutlineArrowDown />
            </span>
        </a>
    )

    return content
}

const ShowName = (): ReactElement => {
    const [text, setText] = useState<string>("Asifuzzaman Bappy")
    const [className, setClassName] = useState<string>("dissolve-text")

    const swapText = (): void => setText(prev => prev === "Originally From Bangladesh" ? "Asifuzzaman Bappy" : prev === "Asifuzzaman Bappy" ? "A Keen Learner" : "Originally From Bangladesh")

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
        <div className="flex gap-1 justify-between w-2/4">
            <span className="w-1/2 self-end text-right mr-1 text-2xl font-extrabold">I'm</span>
            <span className={`${className} w-1/2 self-start text-left`}>{text}</span>
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
        console.log("rtunning bactrack!!")
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
        <div className="test1234 relative text-4xl">
            A Self Taught <span>{text}</span>
        </div>
    )

    return content
}

const roles = [" Web Developer ", " Frontend Developer ", " Backend Developer ", " Fullstack Developer ", " SQA Automation Engineer "]