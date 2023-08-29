import { FormEvent, useRef } from "react"
import emailjs from '@emailjs/browser';
import photo from "../assets/about-pic.jpeg"

export const MessageMe = () => {
    return (
        <div
            id="Contact"
            className="w-full flex flex-col gap-6 items-center"
        >
            <h2 className="xxs:text-2xl lg:text-4xl font-shojumaru">Let's Get In Touch</h2>
            <div className="xxs:text-xl xl:text-2xl flex flex-col gap-y-2 font-mono">
                <h3>Are You A Charitable Organization And Want To Revamp Your Website?</h3>
                <h3>I Can Help You Build That Slick Website, And That Too For Free*</h3>
            </div>
            <div
                className="flex xxs:flex-col lg:flex-row justify-center items-center gap-6 xxs:w-auto sm:w-full xxl:w-3/4 text-lg"
            >
                <img
                    className="w-screen sm:w-96 aspect-square opacity-80 rounded-sm"
                    src={photo}
                    alt="headshot view of ab"
                    style={{
                        height: "402px"
                    }}
                />
                <Form />
            </div>
        </div>
    )
}

type FieldsetProps = {
    label: string,
    type: string,
    placeholder: string,
    // handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Form = () => {
    const formRef = useRef<HTMLFormElement>(document.querySelector("form") as HTMLFormElement)

    const sendEmail = () => {
        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_NAME, import.meta.env.VITE_EMAIL_TEMPLATE_NAME, formRef.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
            .then(() => {
                console.log("success!!");
                formRef.current.reset()
            }, (error) => {
                console.log(error.text, "error!!");
            });
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault()
        sendEmail();
    }

    const renderFieldsets = () => formFields.map(item => <Fieldset label={item.label} placeholder={item.placeholder} type={item.type} key={item.label}

    />)

    return (
        <form
            ref={formRef}
            className="w-screen sm:w-96 flex flex-col gap-4"
            action=""
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-1">{renderFieldsets()}</div>
            <button className="px-4 py-2 bg-slate-600 rounded-xl font-bold font-vastShadow text-2xl transition-all duration-500 hover:bg-slate-900" type="submit">Send Message</button>
        </form>
    )
}

const Fieldset = ({ ...item }: FieldsetProps) => {
    const { label, type, placeholder } = item

    return (
        <fieldset className="flex flex-col justify-start items-start">
            <label className="text-xl font-vastShadow" htmlFor={label}>{label} *</label>
            {
                label === "Message"
                    ? <textarea className="w-full font-mono" required={true} name={label.toLowerCase()} id={label} cols={30} rows={4}></textarea>
                    : <input className="w-full font-mono" required={true} name={label.toLowerCase()} id={label} type={type} placeholder={placeholder} />
            }
        </fieldset>
    )
}

const formFields = [
    { label: "Name", type: "text", placeholder: "Your Name" },
    { label: "Email", type: "email", placeholder: "Your Email" },
    { label: "Subject", type: "text", placeholder: "Subject Here" },
    { label: "Message", type: "textarea", placeholder: "Message" }
]