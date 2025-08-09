import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectDetailPanel from "./ProjectDetailPanel";

// Sample project data
const projects = [
  {
    id: 1,
    title: "PESU DCC Bot",
    category: "Web Development",
    description:
      "Automated Curriculum Review, Revision and Approval System.",
    image:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["React", "React Bootstrap", "Fast API", "MongoDB", "Python", "Sentence Transformers", "ReportLab"],
  },
  {
    id: 2,
    title: "Siri Flavors, Online Millets Store",
    category: "Web Development",
    description:
      "A Full Stack E-Commerce Website to promote Millet Based Food Products",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    category: "Web Development",
    description:
      "lorem this is an app that works as an app",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

export default function Projects() {
   const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            A selection of my recent software development work, showcasing
            expertise in front-end, back-end, and mobile application
            development.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category badge visible on hover */}
                <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="bg-primary/90 text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="secondary"  onClick={() => setSelectedProject(project)}>
                  View project
                   <ExternalLink className="ml-1 h-4 w-4" /> 
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
<ProjectDetailPanel
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      </div>
      
    </div>
  );
}
