import { SiLinkedin, SiGithub } from "react-icons/si";
import Testimonials from "./Testimonials";

export default function FootNote() {
  return (
    <footer className="w-full border-t bg-background">

    <Testimonials />



      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
          <span>Connect with me on</span>
          <a
            href="https://linkedin.com/in/dhruthi-venkatesh-heerguppe"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <SiLinkedin className="h-5 w-5" />
          </a>
          <span>and</span>
          <a
            href="https://github.com/DhruthiV"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <SiGithub className="h-5 w-5" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Go Top
            </a>
          </nav>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Dhruthi V H Portfolio. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
