// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export default function Experience() {
//   return (
//     <div className="max-w-md mx-auto py-6">
//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem
//           value="item-1"
//           className="border-0 border-l-2 border-border/30 data-[state=open]:border-border pl-4 mb-4 transition-colors duration-300"
//         >
//           <AccordionTrigger className="hover:no-underline">
//             Is it accessible?
//           </AccordionTrigger>
//           <AccordionContent>
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem
//           value="item-2"
//           className="border-0 border-l-2 border-border/30 data-[state=open]:border-border pl-4 mb-4 transition-colors duration-300"
//         >
//           <AccordionTrigger className="hover:no-underline">
//             Is it styled?
//           </AccordionTrigger>
//           <AccordionContent>
//             Yes. It comes with default styles that matches the other
//             components&apos; aesthetic.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem
//           value="item-3"
//           className="border-0 border-l-2 border-border/30 data-[state=open]:border-border pl-4 mb-4 transition-colors duration-300"
//         >
//           <AccordionTrigger className="hover:no-underline">
//             Is it animated?
//           </AccordionTrigger>
//           <AccordionContent>
//             Yes. It&apos;s animated by default, but you can disable it if you
//             prefer.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";

export const experiences = [
  {
    role: "Analyst Intern - Internship",
    company: "Amogha Tech Solutions Pvt. Ltd.",
    location: "Bengaluru",
    date: "Mar 2025 – June 2025",
     description:
    "Worked as part of the catalog management team for an upcoming mobile e-commerce platform.",
  achievements: [
    "Managed and standardized a product catalog of 6K+ items using Google Sheets",
    "Validated product and pricing data collected from sellers to ensure consistency and accuracy",
    "Contributed to backend readiness for platform launch by ensuring clean and structured data",
  ],
  skills: ["Google Sheets", "Data Validation", "Catalog Management", "Attention to Detail"],
},
  {
    role: "Frontend Developer (Self-Learning & Collaboration)",
    company: "Independent",
    location: "Remote",
    date: "Feb 2025 – Present",
    description:
      "Actively building and refining frontend development skills through self-paced learning and collaborative projects. Regularly explore UI/UX design fundamentals and modern tools. Also support peers by sharing resources, co-building, and pair programming.",
    achievements: [
      "Built multiple mini-projects using React, Tailwind CSS, and ShadCN UI",
      "Collaborated with peers on learning-based group projects and design implementations",
      "Consistently upskilling through tutorials, docs, and open-source inspiration",
    ],
    skills: [
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "Frontend Development",
      "Design Principles",
      "Peer Mentoring",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-9">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {experiences.map((exp, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg shadow-sm bg-muted/10"
          >
            <AccordionTrigger className="p-6 text-left hover:no-underline hover:shadow-md hover:bg-muted/40 transition-all rounded-md  flex items-center justify-between w-full">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-muted-foreground">{exp.company}</span>
                <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" /> {exp.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" /> {exp.location}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-3 space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-sm">Description</h4>
                <p className="text-muted-foreground mt-1">{exp.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm">Key Achievements</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                  {exp.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
