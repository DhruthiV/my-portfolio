import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-9 md:py-14 lg:py-9 bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              Welcome
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Hi, I am Dhruthi V H!
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am an entry-level developer exploring both front-end and back-end technologies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">

        <div className="relative w-90 h-120 overflow-hidden rounded-xl bg-muted">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50"></div> */}
            <img
              src="src/assets/portfolio-photo-dhruthi.png"
              alt="profile photo of Dhruthi"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-12">
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Project Approach</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I enjoy identifying small, real-world challenges and approaching them with simple, thoughtful solutions ,whether that is automating a task or making something more accessible.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">The Design Perpective</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I care deeply about clarity and consistency, with a focus on visual flow and interaction that makes interfaces feel clean and intuitive.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Work Values</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I'm ready to contribute to real-world projects, continue learning, and grow within a collaborative and supportive team environment. I value clear communication, thoughtful collaboration, and shared growth.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
