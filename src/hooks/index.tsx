import { useEffect, useState } from "react"

export const useOnClickOutside = (ref: any, cb: (e: MouseEvent) => void) => {
    useEffect(() => {
        let listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target)) return
            cb(event)
        }

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, cb])
}

export const useIncrementingCounter = (maxVal: number) => {
    const [total, setTotal] = useState<number>(0)

    const incrementCount = () => {
        let timer = setInterval(() => {
            setTotal(prev => {
                if (prev === maxVal - 1) {
                    clearInterval(timer)
                }
                return prev + 1
            })

        }, 200)

        return () => clearInterval(timer)
    }

    useEffect(() => incrementCount(), [])

    return { total }
}

type CnPropsType = {
    currSilde: number,
    nextSlide: number
}

const initialCn: CnPropsType = {
    currSilde: 0,
    nextSlide: 1
}

export const useForAccordionSlides = () => {
    const [cnInfo, setCnInfo] = useState<CnPropsType>(initialCn)

    const handleNext = () => {
        if (cnInfo.nextSlide === 3) {
            setCnInfo({ currSilde: 3, nextSlide: 0 })
        } else {
            if (cnInfo.currSilde === 3) {
                setCnInfo({ currSilde: 0, nextSlide: 1 })
            } else {
                setCnInfo(prev => ({ currSilde: prev.currSilde + 1, nextSlide: prev.nextSlide + 1 }))
            }
        }
    }

    const handlePrev = () => {
        if (cnInfo.currSilde === 0) {
            setCnInfo({ currSilde: 3, nextSlide: 0 })
        } else {
            if (cnInfo.currSilde === 3) {
                setCnInfo({ currSilde: 2, nextSlide: 3 })
            } else {
                setCnInfo(prev => ({ currSilde: prev.currSilde - 1, nextSlide: prev.nextSlide - 1 }))
            }
        }
    }

    return { handleNext, handlePrev, cnInfo }
}

export const useHandlePercentileCount = (percentile: number) => {
    const [currPercentile, setCurrPercentile] = useState<number>(0)

    const [begin, setBegin] = useState<boolean>(false)

    const handleBegin = () => setBegin(true);

    const handleStop = () => setBegin(false);

    const incrementPercentileCount = () => {
        const timer = setTimeout(() => {
            // console.log(currPercentile, percentile, currPercentile < percentile, timer)
            if (currPercentile < percentile) {
                setCurrPercentile(prev => prev + 1)
            } else {
                clearTimeout(timer)
            }
        }, 6)

        return () => clearTimeout(timer)
    }

    // console.log(currPercentile, percentile)

    useEffect(() => {
        begin && incrementPercentileCount()
        !begin && setCurrPercentile(0)
    }, [begin, currPercentile])

    return { currPercentile, handleBegin, handleStop}
}

export const useOnPageScroll = () => {
    const [scrolled, setScrolled] = useState<number>(0);

    const app = document.body.querySelector(".App") as HTMLElement;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }

    window.addEventListener("scroll", () => {
        var winheight = window.innerHeight || app.clientHeight
        var docheight = getDocHeight()
        var scrollTop = (document.documentElement).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

        setScrolled(pctScrolled)
    })

    return { scrolled }
}