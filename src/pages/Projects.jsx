import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { project_details } from "./project_details";

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

        <div className="flex justify-start content-center m-2 p-3 gap-3">
          <Button asChild>
            <a
              href="https://www.notion.so/2508debe72c980a39969f972dfe7706a?v=2508debe72c980a89df1000c2570ddf0"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Projects
            </a>
          </Button>

          <span className="text-sm text-tertiary self-center">Ongoing or Mini projects I am currently working on is here!</span>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project_details.map((project) => (
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
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="secondary" onClick={() => setSelectedProject(project)}>
                  View project
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Open project view when selected */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

    </div>
  );
}
