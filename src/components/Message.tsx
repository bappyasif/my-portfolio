import { FormEvent, useRef } from "react"
import emailjs from '@emailjs/browser';
import photo from "../assets/about-pic.jpeg"

export const MessageMe = () => {
    return (
        <div
            id="Contact"
            className="w-full flex flex-col gap-6 items-center"
        >
            <h2 className="text-4xl">Let's Get In Touch</h2>
            <div
                className="flex xxs:flex-col lg:flex-row justify-center items-center gap-6 xxs:w-auto sm:w-full lg:w-3/4 text-lg"
            >
                <img
                    className="h-96 xxs:w-full lg:w-1/2"
                    src={photo}
                    alt=""
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
            className="xxs:w-full lg:w-2/5 flex flex-col gap-4"
            action=""
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-1">{renderFieldsets()}</div>
            <button className="px-4 py-2 bg-slate-600 rounded-xl font-bold text-2xl" type="submit">Send Message</button>
        </form>
    )
}

const Fieldset = ({ ...item }: FieldsetProps) => {
    const { label, type, placeholder } = item

    return (
        <fieldset className="flex flex-col justify-start items-start">
            <label className="text-2xl" htmlFor={label}>{label} *</label>
            {
                label === "Message"
                    ? <textarea className="w-full" required={true} name={label.toLowerCase()} id={label} cols={30} rows={4}></textarea>
                    : <input className="w-full" required={true} name={label.toLowerCase()} id={label} type={type} placeholder={placeholder} />
            }
        </fieldset>
    )
}

const formFields = [
    { label: "Name", type: "text", placeholder: "You Name" },
    { label: "Email", type: "email", placeholder: "You Email" },
    { label: "Subject", type: "text", placeholder: "Subject" },
    { label: "Message", type: "textarea", placeholder: "Message" }
]