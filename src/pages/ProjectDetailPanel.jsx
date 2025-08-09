import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetailPanel({ project, onClose }) {
  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
  className="fixed inset-0 backdrop-blur-sm bg-opacity-1 z-40"
  onClick={onClose}
/>

      {/* Slide-in panel */}
      <aside
        className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white dark:bg-background shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0"
        role="dialog"
        aria-modal="true"
      >
        <header className="flex justify-between items-center p-4 border-b border-muted">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <Button
            onClick={onClose}
            aria-label="Close panel"
            className="p-2 hover:bg-tertiary rounded-md"
          >
            <X className="h-5 w-5" />
          </Button>
        </header>
        <section className="p-4 overflow-y-auto max-h-full">
          
          <p className="text-muted-foreground">{project.description}</p>
          <p>In Formula 1, the 90% rule dictates that a driver must complete at least 90% of the winner's race distance to be classified in the official race results. If a driver does not complete this percentage, they are not eligible for points, regardless of their finishing position. This rule ensures that drivers who retire late in the race can still be awarded points, while those who retire too early, even if they were ahead, are not. </p> 
          <p>In Formula 1, the 90% rule dictates that a driver must complete at least 90% of the winner's race distance to be classified in the official race results. If a driver does not complete this percentage, they are not eligible for points, regardless of their finishing position. This rule ensures that drivers who retire late in the race can still be awarded points, while those who retire too early, even if they were ahead, are not. </p> <p>In Formula 1, the 90% rule dictates that a driver must complete at least 90% of the winner's race distance to be classified in the official race results. If a driver does not complete this percentage, they are not eligible for points, regardless of their finishing position. This rule ensures that drivers who retire late in the race can still be awarded points, while those who retire too early, even if they were ahead, are not. </p> <p>In Formula 1, the 90% rule dictates that a driver must complete at least 90% of the winner's race distance to be classified in the official race results. If a driver does not complete this percentage, they are not eligible for points, regardless of their finishing position. This rule ensures that drivers who retire late in the race can still be awarded points, while those who retire too early, even if they were ahead, are not. </p>
        </section>
      </aside>
    </>
  );
}
