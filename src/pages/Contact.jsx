import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-primary w-full py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-primary-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Want to Get in Touch?
        </h2>

        <p className="text-primary-foreground/90 mx-auto mt-3 max-w-2xl text-lg">
          Whether it's feedback, collaboration, or just a quick hello - feel free to reach out.
        </p>

        <Button
          asChild
          size="lg"
          variant="secondary"
          className="group mt-8 font-medium transition transform duration-300 hover:scale-105"
        >
          <a href="mailto:dhruthivenkateshheerguppe@gmail.com"
          >
            Send an email
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
}
