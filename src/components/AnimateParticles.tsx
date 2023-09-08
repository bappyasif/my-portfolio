import { useEffect, useState } from 'react'
import { Particle, hue, mouse } from '../utils';

export const AnimateParticles = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

    const [canvas, setCanvas] = useState<HTMLCanvasElement>();

    const [partciles, setParticles] = useState<Particle[]>([]);

    // const canvasEl = document.querySelector("#canvas") as HTMLCanvasElement

    const handleParticles = () => {
        partciles.forEach((particle, idx) => {
            particle.update();
            particle.draw();
            // finding constollation distance between two nodes, using pythagorian thorem
            for (let j = idx; j < partciles.length; j++) {
                const dx = particle.x - partciles[j].x
                const dy = particle.y - partciles[j].y
                const distacnce = Math.sqrt((dx * dx) + (dy * dy))

                if (distacnce < 200) {
                    ctx?.beginPath();
                    (ctx!!).strokeStyle = particle.colorVar;
                    // (ctx!!).lineWidth = particle.size / 10;
                    (ctx!!).lineWidth = .5;
                    ctx?.moveTo(particle.x, particle.y);
                    ctx?.lineTo(partciles[j].x, partciles[j].y);
                    ctx?.stroke();
                }
            }

            // if particles go beyond a certain size we will remove it here from array
            if (particle.size > 0.0 && particle.size <= 0.18) {
                partciles.splice(idx, 1)
                // console.log(partciles.length, particle.size)
            } 
        })
    }

    const animateParticles = () => {
        (ctx!!)?.clearRect(0, 0, canvas?.width as number, canvas?.height as number)

        // changing hue change rate will effect how fast or slower color change will be taking effect
        hue.val += 2

        handleParticles()

        requestAnimationFrame(animateParticles)
    }

    const setWidthAndHeight = (canvas: HTMLCanvasElement) => {
        (canvas).width = window.innerWidth;
        // (canvas).height = window.innerHeight;
        // (canvas).width = 1395;
        (canvas).height = 650;
    }

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-1") as HTMLCanvasElement
        const cCtx = canvasEl?.getContext("2d") as CanvasRenderingContext2D
        setCtx(cCtx)
        setCanvas(canvasEl)
        setWidthAndHeight(canvasEl)
    }

    const init = () => {
        // setParticles([])
        const temp:Particle[] = []

        for (let i = 0; i < 20; i++) {
            const newParticle = new Particle(canvas!!)
            temp.push(newParticle)
            // setParticles(prev => [...prev, newParticle])
        }

        setParticles(temp)
    }

    useEffect(() => {
        // partciles.length > 2 && partciles.length < 29 && animateParticles()
        partciles.length && animateParticles()
        partciles.length > 40 && setParticles([])

        // console.log(partciles.length)

        const timer = setInterval(init, 6000)
        partciles.length && timer

        return () => clearInterval(timer)
    }, [partciles])

    useEffect(() => {
        // canvas && console.log(partciles.length)
        canvas && init()
    }, [canvas])

    useEffect(() => {
        initialConfig()
        // setParticles([])
    }, [])

    return (
        <div className='absolute z-20'>
            <canvas
                id='canvas-1'
                // onMouseMove={e => mouseMoveHandler(e)}
                onClick={event => {
                    mouse.x = event.clientX
                    mouse.y = event.clientY

                    const temp = []
                    setParticles([])

                    for (let i = 0; i < 20; i++) {
                        temp.push(new Particle(document.querySelector("#canvas-1") as HTMLCanvasElement))
                        // setParticles(prev=> [...prev, new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement)])
                    }

                    console.log(temp.length, partciles.length)
                    setParticles([...temp])
                }}
            ></canvas>
        </div>
    )
}
