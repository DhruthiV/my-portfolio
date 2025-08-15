import { Button } from "@/components/ui/button";
import { Mail, ClipboardCopy } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import resumePic from "../assets/resumePic.jpg"

export default function Resume() {

  const [copied, setCopied] = useState(false);
  const email = "dhruthivenkateshheerguppe@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {/* img column */}
          <div className="relative h-full min-h-[300px] md:h-full">
            <div className="absolute inset-0 w-full overflow-hidden">
              <img
                src={resumePic}
                alt="Resume preview"
                fill="true"
                className="object-cover object-top w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Decorative pattern overlay */}
              <div className="from-primary/40 absolute inset-0 bg-gradient-to-tr to-transparent opacity-60 mix-blend-overlay"></div>
            </div>

            {/* Resource type badge */}
            <Badge className="absolute top-4 left-4 animate-pulse">Resume</Badge>
          </div>

          {/* Content column */}
          <div className="flex flex-col p-6 md:p-8 lg:p-10">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                My Latest Resume
              </h2>

              <p className="text-muted-foreground mt-3 md:text-lg">
                I am actively learning and updating my resume as I grow. To ensure you always receive the most current version, request it via email - and I will get back to you as soon as I can.
              </p>


              <Button asChild size="lg" className="mt-8 w-full sm:w-auto transition transform duration-300 hover:scale-105 hover:shadow-lg">
                <a
                  href="mailto:dhruthivenkateshheerguppe@gmail.com?subject=Requesting%20Your%20Latest%20Resume&body=Hi%20Dhruthi,%0D%0A%0D%0AI%20would%20like%20to%20request%20your%20latest%20resume.%20Please%20send%20it%20to%20me.%0D%0A%0D%0AThank%20you!%0D%0A[Your%20Name]"
                  className="no-underline hover:shadow-md"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Request Latest Resume
                </a>
              </Button>

              <div className="mt-4 flex items-center space-x-2">
                <Button variant="outline" onClick={handleCopy} size="sm">
                  <ClipboardCopy className="mr-2 h-4 w-4" />
                  Copy Email
                </Button>
                {copied && (
                  <span className="text-sm text-green-800  transition-opacity duration-300">
                    Copied!
                  </span>
                )}
              </div>



              <p className="text-muted-foreground mt-4 text-sm">
                This site is static, but my resume evolves faster. Reach out for the latest version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
