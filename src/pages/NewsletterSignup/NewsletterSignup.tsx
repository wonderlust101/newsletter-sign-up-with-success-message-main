import React, {useState} from "react";

import NewsletterSignupForm from "./NewsletterSignupForm";
import NewsletterSignupSuccess from "./NewsletterSignupSuccess/NewsletterSignupSuccess";

import decoImageMobile from "/images/illustration-sign-up-mobile.svg";
import decoImageDesktop from "/images/illustration-sign-up-desktop.svg";
import checkIcon from "/images/icon-list.svg";

import "./NewsletterSignup.scss";

const features: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!"
];

export default function NewsletterSignup() {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [inputStatus, setInputStatus] = useState("");

    const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!isEmail(email)) {
            setInputStatus("error");
        }
        else {
            setInputStatus("");
            setSubmitted(true);
        }
    };

    const handleDismiss = () => {
        setSubmitted(false);
        setEmail("");
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <div className="newsletter-signup grid-bleed">
            <main className="newsletter-signup__content">
                {submitted ? (
                    <NewsletterSignupSuccess
                        onClick={handleDismiss}
                        email={email}
                    />
                ) : (
                    <>
                        <NewsletterSignupForm
                            handleEmailChange={handleEmailChange}
                            email={email}
                            onSubmit={handleFormSubmit}
                            status={inputStatus}
                        >
                            <h1>Stay updated!</h1>

                            <p>Join 60,000+ product managers receiving monthly updates on:</p>

                            <ul className="newsletter-signup__features">
                                {features.map((feature, index) => (
                                    <li key={index}>
                                        <img src={checkIcon} alt="" role="presentation"/>
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </NewsletterSignupForm>

                        <picture className="newsletter-signup__image" aria-hidden={true}>
                            <source srcSet={decoImageDesktop} media={"(min-width: 60rem)"}/>
                            <img src={decoImageMobile} alt=""/>
                        </picture>
                    </>
                )}
            </main>
        </div>
    );
}
