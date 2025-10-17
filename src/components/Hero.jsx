// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const PHRASE = "Salut, je suis Ali";

const Hero = () => {
    const [text, setText] = useState("");       // portion affichée
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 90;   // vitesse effacement/écriture
        let timerId;

        if (!isDeleting && text === PHRASE) {
            // Pause à la fin de l'écriture
            timerId = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && text === "") {
            // Petite pause avant de relancer
            timerId = setTimeout(() => setIsDeleting(false), 400);
        } else {
            timerId = setTimeout(() => {
                const nextLen = text.length + (isDeleting ? -1 : 1);
                setText(PHRASE.slice(0, Math.max(0, Math.min(PHRASE.length, nextLen))));
            }, typeSpeed);
        }

        return () => clearTimeout(timerId);
    }, [text, isDeleting]);

    // Mise en valeur de "Ali" en violet pendant la frappe
    const aliStart = PHRASE.indexOf("Ali");
    const aliEnd = aliStart + "Ali".length;
    const typedLen = text.length;

    const before = text.slice(0, Math.min(typedLen, aliStart));
    const aliPart = typedLen > aliStart ? text.slice(aliStart, Math.min(typedLen, aliEnd)) : "";
    const after = typedLen > aliEnd ? text.slice(aliEnd, typedLen) : "";

    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        <span>{before}</span>
                        <span className="text-[#915EFF]">{aliPart}</span>
                        <span>{after}</span>
                        <span className="inline-block align-middle w-2 h-8 ml-1 bg-[#915EFF] animate-pulse" />
                    </h1>

                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Je suis un <strong>futur ingénieur informatique</strong>, spécialisé en{" "}
                        <strong>développement full-stack</strong>.
                        <br className="sm:block hidden" />
                        Spring Boot &amp; Angular • Microservices (Eureka/Gateway) • Sécurité JWT • PostgreSQL • Kafka
                    </p>
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
