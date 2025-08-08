import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Education() {
  const workExperiences = [
    {
      level: "Master of Computer Applications",
      institute: "PES University",
      location: "Bengaluru",
      year: "Oct 2023 - Present",
      
    },
    {
      level: "Bachelor of Science - PMCs",
      institute: "B.M.S. College for Women",
      location: "Bengaluru",
      year: "Aug 2020 - Sept 2023",
     
    }
  ];

  return (
    <section className="py-4 md:py-2">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto max-w-4xl pb-4">
            
            <p className="text-muted-foreground text-md">
              A chronological overview of my academic background.
            </p>
          </div>

        <div className="space-y-4">
            {workExperiences.map((experience, index) => (
              <Card
                key={index}
                className="group hover:border-primary hover:bg-muted/50 overflow-hidden border p-0 transition-all"
        >
        <CardContent className="p-0">
            <div className="block p-5">
              <div className="flex flex-col justify-between gap-y-2 sm:flex-row sm:items-center">
               <div>
               <h3 className="text-l font-bold">{experience.level}</h3>
              <div className="text-muted-foreground mt-1 flex flex-col sm:flex-row sm:items-center">
                <span>{experience.institute}</span>
                <span className="hidden sm:mx-2 sm:inline">•</span>
                <span>{experience.location}</span>
                 </div>
            </div>

              <div className="text-muted-foreground font-mono text-sm">
                  {experience.year}
                </div>
              </div>
            </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </section>
  );
}
