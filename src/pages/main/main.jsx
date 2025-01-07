import React, { useState, useEffect } from "react";
import "./main.css";
import bg from "../../components/Images/cyberbg.mp4";
import bg2 from "../../components/Images/bg5.mp4";
import Footer from "../../components/Footer/Footer";
import { FaRegCopy } from "react-icons/fa";
import Alert from "@mui/material/Alert";
import Typewriter from "typewriter-effect";
import logo from "../../components/Images/1.gif";
function Main() {
    const fullAddress = "";
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
                <div className="svg-container fullscreen-loader">
                    {/* Show bg2 during loading */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                        <source src={bg2} type="video/mp4" />
                    </video>
                    <img
                        src={logo}
                        alt="Loading Animation"
                        className="absolute z-10 w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            ) : (
                <>
                    <div className="fade-in">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                            <source src={bg} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70 z-0"></div>

                        <div className="relative z-10  justify-center items-center h-full">
                            <section className="text-center" id="main">
                                <div className="hero-container">
                                    <div className="environment tracking-widest">
                                        <p className="text-5xl mx-5 hero-3">
                                            YOU HAVE
                                        </p>
                                        <p
                                            className="text-3xl glitch layers text-red-600 hero-2"
                                            data-text=" BEEN BREACHED">
                                            BEEN BREACHED
                                        </p>
                                        <p className="text-5xl mx-5 hero-3">
                                            BY
                                        </p>
                                    </div>
                                    <h2
                                        className="hero glitch layers sm:text-6xl md:text-7xl sm:ml-6 md:ml-1"
                                        data-text="NOVA">
                                        <span className="font-virus">
                                            SYSTEM
                                        </span>
                                    </h2>
                                </div>
                            </section>
                            <section id="Contract Address">
                                <div className="z-10 relative flex space-x-2 justify-center items-center text-white">
                                    <div className="text-lg ">CA</div>
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
                                                    " NOVA AI?",
                                                    " ALL KNOWING AI?",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </div>
                                <div className="flex justify-center">
                                    <div class="md:w-1/2 text-justify text-white  z-10  drop-shadow-md text-2xl">
                                        <p className=" indent-6 md:tracking-widest ">
                                            Neo-Versa City pulsed beneath the
                                            endless neon rain, its sky
                                            flickering with distorted holograms.
                                            In the shadows, Nova moved—silent,
                                            fluid, a ghost in the circuits. A
                                            cybernetic outcast, more machine
                                            than human, she embraced the label
                                            the city gave her. "Glitch."
                                            <em>
                                                <span className="">
                                                    {" "}
                                                    <i>
                                                        The stolen "Neon Shard"
                                                        was close, its signal
                                                        flickering on her
                                                        interface. Every gang
                                                        and corp-hacker wanted
                                                        it, but for Nova, it
                                                        meant survival. Her
                                                        amber eyes scanned the
                                                        rooftops. A rival crew
                                                        lurked nearby. With a
                                                        whisper, Nova ignited
                                                        her energy blade, its
                                                        violet glow slicing
                                                        through the rain. "In a
                                                        world of wires… be the
                                                        glitch." Tonight, Nova
                                                        wasn’t just hunting. She
                                                        was rewriting the code.
                                                    </i>
                                                </span>
                                            </em>
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div className="my-5">
                                <a
                                    class="button-49"
                                    href="https://app.novaai.systems"
                                    role="button">
                                    <span className="mx-5">
                                        GO TO THE CYBERWORLD
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className=" z-10 relative">
                            <Footer />
                        </div>
                    </div>
                </>
            )}
            ;
        </div>
    );
}

export default Main;
