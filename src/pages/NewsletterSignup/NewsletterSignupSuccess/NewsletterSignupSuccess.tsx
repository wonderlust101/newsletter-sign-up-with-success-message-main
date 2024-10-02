import Button from "../../../components/Button";

import successIcon from "/images/icon-success.svg";

import "./NewsletterSignupSuccess.scss";

type newsletterSignupSuccessProps = {
    onClick: () => void;
    email: string;
}

export default function NewsletterSignupSuccess({onClick, email}: newsletterSignupSuccessProps) {

    return (
        <div className="newsletter-signup-success">
            <div className="newsletter-signup-success__message">
                <img src={successIcon} alt=""/>

                <div className="newsletter-signup-success__text">
                    <h1>Thank you for subscribing!</h1>
                    <p>A confirmation email has been sent to 
                        <span className="newsletter-signup-success__email"> {email}</span>. 
                        Please open it and click the button inside to confirm your subscription
                    </p>
                </div>
            </div>

            <Button variant="button--navy" onClick={onClick}>Dismiss message</Button>
        </div>
    );
}