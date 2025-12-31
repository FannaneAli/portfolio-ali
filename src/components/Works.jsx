import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, doctorants, rag_agent, flutter_app } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                tiltMaxAngleX={45}
                tiltMaxAngleY={45}
                transitionSpeed={450}
                scale={1}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const { t } = useLanguage();

    const projects = [
        {
            name: t("project1.name"),
            description: t("project1.description"),
            tags: [
                { name: "springboot", color: "blue-text-gradient" },
                { name: "angular", color: "pink-text-gradient" },
                { name: "postgresql", color: "green-text-gradient" },
                { name: "docker", color: "blue-text-gradient" },
            ],
            image: doctorants,
            source_code_link: "https://github.com/FannaneAli/serviceAuth",
        },
        {
            name: t("project2.name"),
            description: t("project2.description"),
            tags: [
                { name: "python", color: "yellow-text-gradient" },
                { name: "fastapi", color: "green-text-gradient" },
                { name: "langchain", color: "purple-text-gradient" },
                { name: "pgvector", color: "blue-text-gradient" },
            ],
            image: rag_agent,
            source_code_link: "https://github.com/FannaneAli/universal-db-rag-v2",
        },
        {
            name: t("project3.name"),
            description: t("project3.description"),
            tags: [
                { name: "flutter", color: "blue-text-gradient" },
                { name: "firebase", color: "pink-text-gradient" },
                { name: "tensorflow", color: "orange-text-gradient" },
                { name: "maps", color: "green-text-gradient" },
            ],
            image: flutter_app,
            source_code_link: "https://github.com/FannaneAli/flutter_deeplearning_projet",
        },
    ];

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>{t("works.subtitle")}</p>
                <h2 className={`${styles.sectionHeadText}`}>{t("works.title")}</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    {t("works.description")}
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
