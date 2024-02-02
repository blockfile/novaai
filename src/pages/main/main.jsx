import React, { useState, useEffect } from "react";
import "./main.css";
import bg from "../../components/Images/bg5.mp4";
import Footer from "../../components/Footer/Footer";
import { FaRegCopy } from "react-icons/fa";
import Alert from "@mui/material/Alert";
import Typewriter from "typewriter-effect";

function Main() {
    const fullAddress = "0xDc3AE0015B7Eda745E70BFad2d1D67Da9b4ec719";
    const [displayAddress, setDisplayAddress] = useState(fullAddress);
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 320) {
                setDisplayAddress(
                    `${fullAddress.slice(0, 18)}...${fullAddress.slice(-6)}`
                );
            } else {
                setDisplayAddress(fullAddress);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const copyToClipboard = () => {
        // Check if navigator.clipboard API is available
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(fullAddress)
                .then(() => {
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                })
                .catch((err) => console.error("Failed to copy text: ", err));
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = fullAddress;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                const successful = document.execCommand("copy");
                const msg = successful ? "successful" : "unsuccessful";
                console.log("Fallback: Copying text command was " + msg);
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
            } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
            }

            document.body.removeChild(textArea);
        }
    };
    useEffect(() => {
        // Simulate a loading time with setTimeout
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide loader after 2000ms or 2 seconds
        }, 4000);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);
    return (
        <div className="flex flex-col justify-between relative min-h-screen overflow-hidden">
            {isLoading ? (
                <div className="svg-container fullscreen-loader ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.999991"
                        height="200"
                        preserveAspectRatio="xMidYMid meet"
                        className="loader-logo"
                        version="1.0">
                        <defs>
                            <clipPath id="4d9b1487a9">
                                <path
                                    d="M 79.25 69 L 296 69 L 296 306 L 79.25 306 Z M 79.25 69 "
                                    clip-rule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#4d9b1487a9)">
                            <path
                                fill="#ffffff"
                                d="M 167.921875 163.152344 C 167.921875 152.308594 176.75 143.480469 187.589844 143.480469 C 198.441406 143.480469 207.265625 152.308594 207.265625 163.152344 C 207.265625 174 198.441406 182.824219 187.589844 182.824219 C 176.75 182.824219 167.921875 174 167.921875 163.152344 Z M 168.335938 217.453125 C 161.738281 217.453125 156.371094 212.082031 156.371094 205.484375 C 156.371094 198.878906 161.738281 193.515625 168.335938 193.515625 C 174.9375 193.515625 180.304688 198.878906 180.304688 205.484375 C 180.304688 212.082031 174.9375 217.453125 168.335938 217.453125 Z M 208.980469 225.777344 C 200.085938 225.777344 192.851562 218.542969 192.851562 209.644531 C 192.851562 200.75 200.085938 193.515625 208.980469 193.515625 C 217.878906 193.515625 225.113281 200.75 225.113281 209.644531 C 225.113281 218.542969 217.878906 225.777344 208.980469 225.777344 Z M 288.429688 207.84375 C 292.445312 207.84375 295.699219 204.585938 295.699219 200.574219 L 295.699219 177.910156 C 295.699219 173.894531 292.445312 170.640625 288.429688 170.640625 C 284.414062 170.640625 281.160156 173.894531 281.160156 177.910156 L 281.160156 182.164062 L 251.992188 181.046875 C 249.585938 164.367188 240.632812 149.488281 226.816406 139.683594 L 254.46875 91.945312 C 258.742188 94.136719 259.679688 94.839844 261.867188 94.839844 C 269.460938 94.839844 271.972656 84.570312 265.1875 81.097656 L 244.464844 70.488281 C 240.890625 68.664062 236.511719 70.070312 234.683594 73.648438 C 232.847656 77.222656 234.265625 81.605469 237.835938 83.4375 L 241.503906 85.3125 L 214.050781 132.710938 C 198.074219 126.289062 180.59375 127.0625 165.664062 133.859375 L 149.183594 106.832031 L 153.222656 104.320312 C 156.636719 102.203125 157.691406 97.722656 155.570312 94.308594 C 153.453125 90.894531 148.972656 89.847656 145.558594 91.964844 L 125.777344 104.234375 C 122.363281 106.347656 121.316406 110.835938 123.429688 114.25 C 125.546875 117.65625 130.027344 118.714844 133.441406 116.589844 L 136.828125 114.496094 L 153.234375 141.417969 C 139.964844 151.820312 131.597656 167.289062 130.023438 183.894531 L 93.839844 185.046875 L 93.839844 180.984375 C 93.839844 176.972656 90.578125 173.714844 86.5625 173.714844 C 82.550781 173.714844 79.292969 176.972656 79.292969 180.984375 L 79.292969 203.648438 C 79.292969 207.664062 82.550781 210.917969 86.5625 210.917969 C 90.578125 210.917969 93.839844 207.664062 93.839844 203.648438 L 93.839844 199.601562 L 130.390625 198.433594 C 132.816406 215.070312 141.75 229.921875 155.582031 239.726562 L 139.34375 269.480469 L 135.375 267.554688 C 131.757812 265.8125 127.410156 267.320312 125.660156 270.933594 C 123.910156 274.554688 125.425781 278.898438 129.042969 280.652344 L 149.445312 290.519531 C 150.464844 291.011719 151.542969 291.246094 152.605469 291.246094 C 160.28125 291.246094 162.722656 280.785156 155.777344 277.425781 L 152.453125 275.816406 L 168.339844 246.707031 C 184.25 253.117188 201.613281 252.4375 216.765625 245.535156 L 245.949219 289.691406 L 242.523438 292.007812 C 239.199219 294.257812 238.324219 298.78125 240.578125 302.105469 C 242.832031 305.433594 247.351562 306.304688 250.679688 304.050781 L 269.4375 291.347656 C 272.765625 289.09375 273.636719 284.566406 271.382812 281.242188 C 269.132812 277.914062 264.617188 277.050781 261.285156 279.300781 L 257.988281 281.53125 L 229.191406 237.964844 C 242.300781 227.648438 250.730469 212.242188 252.335938 195.613281 L 281.160156 196.714844 L 281.160156 200.574219 C 281.160156 204.585938 284.414062 207.84375 288.429688 207.84375 "
                                fill-opacity="1"
                                fill-rule="nonzero"
                            />
                        </g>
                    </svg>
                </div>
            ) : (
                <>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                        <source src={bg} type="video/mp4" />
                    </video>

                    <div className="relative z-10  justify-center items-center h-full">
                        <section className="text-center" id="main">
                            <div className="hero-container">
                                <div className="environment tracking-widest">
                                    <p className="text-5xl mx-5 hero-3">
                                        YOU HAVE
                                    </p>
                                    <p
                                        className="text-3xl  glitch layers text-red-600 hero-2"
                                        data-text=" BEEN INFECTED">
                                        BEEN INFECTED
                                    </p>
                                    <p className="text-5xl mx-5 hero-3">BY</p>
                                </div>
                                <h2
                                    className="hero glitch layers sm:text-6xl md:text-7xl sm:ml-6 md:ml-1 "
                                    data-text="VIRUS">
                                    <span className="font-virus">VIRUS</span>
                                </h2>
                            </div>
                        </section>
                        <section id="Contract Address">
                            <div className="z-10 relative flex space-x-2 justify-center items-center">
                                <div className="text-lg">CA</div>
                                <input
                                    disabled={true}
                                    value={displayAddress}
                                    className="rounded-xl text-lg p-2 w-96"
                                    readOnly
                                />
                                <div
                                    onClick={copyToClipboard}
                                    className="cursor-pointer">
                                    <FaRegCopy size={25} />
                                </div>
                            </div>
                            {showAlert && (
                                <Alert
                                    severity="success"
                                    className="fixed bottom-24 left-1/2 transform -translate-x-1/2">
                                    Copied to clipboard!
                                </Alert>
                            )}
                        </section>
                        <section id="description">
                            <div className="flex justify-center space-x-1 sm:text-lg md:text-2xl hero-1 mb-4">
                                <span>WHAT IS </span>
                                <span>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                " VIRUS TOKEN?",
                                                " COINBACK?",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </div>
                            <div className="flex justify-center">
                                <div class="md:w-1/2 text-justify text-white  z-10  drop-shadow-md">
                                    <p className=" indent-6 md:tracking-widest ">
                                        VIRUS TOKEN IS NON-TRADABLE UNLESS YOU
                                        POSSESS AT LEAST
                                        <span className="">
                                            {" "}
                                            <i>TWO VIRUS TOKENS</i>.
                                        </span>{" "}
                                        THIS TOKEN FEATURES AN AUTOMATIC BURN
                                        MECHANISM, A REFERRAL FEE SYSTEM, AND A
                                        COINBACK REWARD. WITH EVERY BUY/SELL
                                        OPERATION, A 1% BURN FEE IS APPLIED TO
                                        THE TOTAL TRANSACTION VALUE.
                                        <em>
                                            <span className="">
                                                {" "}
                                                <i>
                                                    FURTHERMORE, EACH TIME YOU
                                                    SELL, YOU RECEIVE A COINBACK
                                                    EQUAL TO 1% OF THE
                                                    TRANSACTION AMOUNT.
                                                </i>
                                            </span>
                                        </em>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section id="description">
                            <div>
                                <div className=" flex justify-center sm:text-lg md:text-2xl hero-1 space-x-1 mb-4">
                                    <span>HOW CAN </span>
                                    <span>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "I START ?",
                                                    "I GET REFERRAL?",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div class="md:w-1/2 text-justify text-white  z-10  drop-shadow-md">
                                    <p className=" indent-6 md:tracking-widest ">
                                        EARNING A REFERRAL FEE REQUIRES YOU TO
                                        PROVIDE AT LEAST{" "}
                                        <span className="">
                                            <i>TWO VIRUS TOKENS</i>
                                        </span>{" "}
                                        TO SOMEONE, ENABLING THEM TO ACQUIRE
                                        THEIR OWN VIRUS TOKENS. FOR EACH
                                        PURCHASE OR SALE THEY COMPLETE, YOU'RE
                                        ENTITLED TO 1% OF THOSE TRANSACTIONS.
                                        <i>
                                            AS AN EXAMPLE, IF PERSON 1 ALLOWS
                                            PERSON 2 TO PURCHASE VIRUS TOKENS BY
                                            GIVING THEM A TOKEN, ANY BUY OR SELL
                                            ACTIVITY INVOLVING VIRUS TOKENS BY
                                            PERSON 2 WILL RESULT IN A 1%
                                            COMMISSION FOR PERSON 1. THIS
                                            COMMISSION IS PAID OUT IN{" "}
                                            <span className="">
                                                NATIVE VIRUS TOKENS AND WILL
                                                UPDATE IN PERSON 1’S BALANCE
                                                FOLLOWING THE SALE OF TOKENS BY
                                                PERSON 2.
                                            </span>
                                        </i>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <div className="my-5">
                            <a
                                class="button-49"
                                href="https://www.google.com"
                                role="button">
                                <span className="mx-5">BUY $VIRUS</span>
                            </a>
                        </div>
                    </div>

                    <div className=" z-10 relative">
                        <Footer />
                    </div>
                </>
            )}
            ;
        </div>
    );
}

export default Main;
