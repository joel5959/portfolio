import {useState} from "react";

function Contact() {

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setError("");

        setEmail("");
        setName("");
        setMessage("");
    }

    return (
        <section>
            <h1> Contact Me </h1>

            <div>
                <input
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    name="name"
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    name="email"
                />
            </div>
            <div>
                <input
                    type="message"
                    placeholder="Enter your message"
                    value={message}
                    name="message"
                />
            </div>
            <div>
                <button>
                    Submit
                </button>
            </div>

        </section>

    );

}


export default Contact;