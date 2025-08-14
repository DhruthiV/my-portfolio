import { X, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ProjectDetailModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent bg scroll when modal open
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  if (!project) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.pictures.length) % project.pictures.length);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Centered modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="w-full max-w-4xl bg-white dark:bg-background rounded-lg shadow-lg flex flex-col max-h-[90vh]">

          {/* Header */}
          <header className="flex justify-between items-center px-6 py-4 border-b border-muted">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <Button
              onClick={onClose}
              aria-label="Close panel"
              variant="ghost"
              size="icon"
              className="rounded-md"
            >
              <X className="h-5 w-5" />
            </Button>
          </header>



          {/* Scrollable Content */}
          <section className="px-8 py-6 overflow-y-auto space-y-6 flex-1">
            <p className="text-muted-foreground">{project.description}</p>

            {project.tech?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-muted inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Features */}
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>



            {/* Image Carousel - fixed height */}
            {project.pictures?.length > 0 && (
              <div className="relative w-full h-[400px] flex items-center justify-center bg-black rounded-md overflow-hidden">
                <img
                  src={project.pictures[currentIndex]}
                  alt={`Project visual ${currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />

                {project.pictures.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full z-10"
                      onClick={prevImage}
                    >
                      <ChevronLeftIcon className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full z-10"
                      onClick={nextImage}
                    >
                      <ChevronRightIcon className="h-5 w-5" />
                    </Button>
                  </>
                )}
              </div>
            )}

            {/* Video */}
            {project.link && project.link.includes("youtu") && (
              <div className="mt-4 aspect-video">
                <iframe
                  className="w-full h-full rounded-md shadow-md"
                  src={project.link.replace("youtu.be/", "www.youtube.com/embed/")}
                  title={`${project.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="m-10"></div>
          </section>
        </div>
      </div>
    </>
  );
}
