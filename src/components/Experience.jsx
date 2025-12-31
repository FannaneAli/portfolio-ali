import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import s2m from "../assets/s2m.png";
import { web } from "../assets";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            title: t("exp1.title"),
            company_name: t("exp1.company"),
            icon: s2m,
            iconBg: "#ffffff",
            date: t("exp1.date"),
            points: [
                t("exp1.point1"),
                t("exp1.point2"),
                t("exp1.point3"),
                t("exp1.point4"),
                t("exp1.point5"),
                t("exp1.point6"),
            ],
        },
        {
            title: t("exp2.title"),
            company_name: t("exp2.company"),
            icon: web,
            iconBg: "#0e1320",
            date: t("exp2.date"),
            points: [
                t("exp2.point1"),
                t("exp2.point2"),
                t("exp2.point3"),
                t("exp2.point4"),
            ],
        },
    ];

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>{t("experience.subtitle")}</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {t("experience.title")}
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
