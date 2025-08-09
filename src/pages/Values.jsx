import { Card, CardContent } from "@/components/ui/card";
import {
  LightbulbIcon,
  TargetIcon,
  RocketIcon,
  BookOpenIcon,
} from "lucide-react";

const features = [
  {
    icon: LightbulbIcon,
    title: "User-First Thinking",
    description:
      "I build with empathy - prioritizing real-world needs, usability, and clarity.",
  },
  {
    icon: TargetIcon,
    title: "Purpose-Driven Projects",
    description:
      "I enjoy working on small tools that help my friends, teachers, or solve everyday problems.",
  },
  {
    icon: RocketIcon,
    title: "Hands On Development",
    description:
      "Constantly exploring both frontend and backend tools to stay sharp and adaptable.",
  },
  {
    icon: BookOpenIcon,
    title: "Holistic Approach",
    description:
      "I try to understand how everything connects from user needs to code structure, to build more thoughtful solutions.",
  },
];


export default function Values() {
  return (
    <section className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Why Work With Me?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          I approach development with intention - blending design thinking, clean code, and a user-first mindset to build meaningful solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="p-0  group transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <CardContent className="space-y-2 p-6">
              <feature.icon className="text-primary h-12 w-12 transition-colors duration-300 group-hover:text-secondary" />
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
