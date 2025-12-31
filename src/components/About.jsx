import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { backend, web, creator, mobile } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        transitionSpeed={450}
        scale={1}
        className="xs:w-[250px] w-full"
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    const { language, t } = useLanguage();

    const localizedServices = [
        { title: t("service.backend"), icon: backend },
        { title: t("service.frontend"), icon: web },
        { title: t("service.api"), icon: creator },
        { title: t("service.database"), icon: mobile },
    ];

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>{t("about.subtitle")}</p>
                <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                {language === 'fr' ? (
                    <>
                        Je suis <b>Fannane Ali</b>, futur ingénieur en <b>informatique & réseaux</b> (EMSI),
                        spécialisé en <b>développement full-stack</b> et <b>microservices</b>. Curieux et
                        orienté résultats, je me distingue par une <b>capacité d apprentissage rapide</b> et
                        un <b>esprit d initiative</b> au service de produits fiables et scalables.
                    </>
                ) : (
                    <>
                        I am <b>Fannane Ali</b>, a future engineer in <b>IT & Networks</b> (EMSI),
                        specialized in <b>full-stack development</b> and <b>microservices</b>. Curious and
                        results-oriented, I stand out with my <b>fast learning ability</b> and
                        <b> initiative spirit</b> to deliver reliable and scalable products.
                    </>
                )}
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {localizedServices.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
