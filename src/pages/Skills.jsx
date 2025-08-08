import { SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiMongodb, SiFastapi, SiTailwindcss, SiBootstrap, SiPostgresql, SiVite } from "react-icons/si";


export default function Skills() {
  const badges = [
    // 🔵 Frontend
    {
      icon: SiReact,
      label: "React",
      description: "Component-based UI development",
    },
    {
      icon: SiVite,
      label: "Vite",
      description: "Fast front-end build tool",
    },
    {
      icon: SiTailwindcss,
      label: "Tailwind CSS",
      description: "Utility-first styling framework",
    },
    {
      icon: SiBootstrap,
      label: "Bootstrap",
      description: "Component-based CSS framework",
    },
    {
      icon: SiHtml5,
      label: "HTML5",
      description: "Semantic and accessible structure",
    },
    {
      icon: SiCss3,
      label: "CSS3",
      description: "Responsive and styled layouts",
    },
    {
      icon: SiJavascript,
      label: "JavaScript",
      description: "Dynamic functionality & logic",
    },

    // 🟢 Backend
    {
      icon: SiPython,
      label: "Python",
      description: "General-purpose scripting & backend",
    },
    {
      icon: SiFastapi,
      label: "FastAPI",
      description: "High-performance Python web framework",
    },

    // 🟣 Databases
    {
      icon: SiMongodb,
      label: "MongoDB",
      description: "NoSQL document database",
    },
    {
      icon: SiPostgresql,
      label: "PostgreSQL",
      description: "Relational database management",
    },
  ];

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="container mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-center">My Skills</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="bg-muted/30 hover:bg-muted/50 flex flex-col items-center rounded-lg p-4 text-center transition-colors"
              >
                <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                  <IconComponent className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-1 text-sm font-semibold">{badge.label}</h3>
                <p className="text-muted-foreground text-xs">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
