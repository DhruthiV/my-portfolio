import heroPesu from "../assets/projects/hero_pesudccbot.png";
import pesuPoster from "../assets/projects/pesu-poster.png";

import heroSiri from "../assets/projects/hero_siriflavors.jpg";
import siri1 from "../assets/projects/siri_1.png";
import siri2 from "../assets/projects/siri_2.png";
import siri3 from "../assets/projects/siri_3.png";

export const project_details = [
    {
        id: 1,
        title: "PESU DCC Bot",
        category: "Web Development",
        description:
            "Automated Curriculum Review, Revision and Approval System.",
        image:
            heroPesu,
        tech: ["React", "React Bootstrap", "FastAPI", "MongoDB", "Python", "Sentence Transformers", "ReportLab"],

        role: "Designer and Developer",
        features: [
            "Automated the previously manual workflow of internal and external curriculum approval for the MCA Department's  Curriculum Committee.",
            "Integrated machine learning models to highlight differences between course versions within seconds and generate comparison reports.",
            "Implemented PDF extraction to parse legacy curriculum into the database and automated the generation of university-standard curriculum PDF documents using ReportLab",
            "Designed and developed a modular FastAPI backend with an interactive React frontend to streamline review and approval processes across committees."],
        pictures: [pesuPoster],
        link:"https://youtu.be/c8FkvKvljz8"
        
    },
    {
        id: 2,
        title: "Siri Flavors, Online Millets Store",
        category: "Web Development",
        description:
            "A Full Stack E-Commerce Website to promote Millet Based Food Products",
        image:
            heroSiri,
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Developed a user-friendly e-commerce site for millet products, supporting local farmers and raising awareness about millets’ health benefits.",
            "Implemented secure user authentication, shopping cart, and seamless order management for an easy shopping experience.",
            "Optimized database management and site deployment using XAMPP and PhpMyAdmin.",
            "Empowered health-conscious consumers to discover and purchase millet-based foods, contributing to the International Year of Millets initiative."],
        pictures:[siri1, siri2, siri3],
        link:null
    }
];
