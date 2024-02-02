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
    return (
        <div className="flex flex-col justify-between relative min-h-screen overflow-hidden">
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
                            <p className="text-5xl mx-5 hero-3">YOU HAVE</p>
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
                                    strings: [" VIRUS TOKEN?", " COINBACK?"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <div class="md:w-1/2 text-justify text-white  z-10  drop-shadow-md">
                            <p className=" indent-6 md:tracking-widest ">
                                VIRUS TOKEN IS NON-TRADABLE UNLESS YOU POSSESS
                                AT LEAST
                                <span className="">
                                    {" "}
                                    <i>TWO VIRUS TOKENS</i>.
                                </span>{" "}
                                THIS TOKEN FEATURES AN AUTOMATIC BURN MECHANISM,
                                A REFERRAL FEE SYSTEM, AND A COINBACK REWARD.
                                WITH EVERY BUY/SELL OPERATION, A 1% BURN FEE IS
                                APPLIED TO THE TOTAL TRANSACTION VALUE.
                                <em>
                                    <span className="">
                                        {" "}
                                        <i>
                                            FURTHERMORE, EACH TIME YOU SELL, YOU
                                            RECEIVE A COINBACK EQUAL TO 1% OF
                                            THE TRANSACTION AMOUNT.
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
                                EARNING A REFERRAL FEE REQUIRES YOU TO PROVIDE
                                AT LEAST{" "}
                                <span className="">
                                    <i>TWO VIRUS TOKENS</i>
                                </span>{" "}
                                TO SOMEONE, ENABLING THEM TO ACQUIRE THEIR OWN
                                VIRUS TOKENS. FOR EACH PURCHASE OR SALE THEY
                                COMPLETE, YOU'RE ENTITLED TO 1% OF THOSE
                                TRANSACTIONS.
                                <i>
                                    AS AN EXAMPLE, IF PERSON 1 ALLOWS PERSON 2
                                    TO PURCHASE VIRUS TOKENS BY GIVING THEM A
                                    TOKEN, ANY BUY OR SELL ACTIVITY INVOLVING
                                    VIRUS TOKENS BY PERSON 2 WILL RESULT IN A 1%
                                    COMMISSION FOR PERSON 1. THIS COMMISSION IS
                                    PAID OUT IN{" "}
                                    <span className="">
                                        NATIVE VIRUS TOKENS AND WILL UPDATE IN
                                        PERSON 1’S BALANCE FOLLOWING THE SALE OF
                                        TOKENS BY PERSON 2.
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
        </div>
    );
}

export default Main;
