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
import { useTheme } from "../context/ThemeContext";
import s2m from "../assets/s2m.png";
import { web } from "../assets";

const ExperienceCard = ({ experience, isDark }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: isDark ? "#1d1836" : "#ffffff",
                color: isDark ? "#fff" : "#1a1a1a",
                boxShadow: isDark ? "none" : "0 3px 15px rgba(0,0,0,0.1)",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${isDark ? "#232631" : "#e5e5ea"}` }}
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
                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-[24px] font-bold`}>{experience.title}</h3>
                <p className={`${isDark ? 'text-secondary' : 'text-gray-600'} text-[16px] font-semibold`} style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className={`${isDark ? 'text-white-100' : 'text-gray-700'} text-[14px] pl-1 tracking-wider`}
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
    const { isDark } = useTheme();

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
                <VerticalTimeline lineColor={isDark ? "#232631" : "#d1d5db"}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} isDark={isDark} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
