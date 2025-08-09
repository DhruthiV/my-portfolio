import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chithrashree N",
      testimonial: "I've had the pleasure of working with Dhruthi on several projects and she’s always been a valuable team member. She has a strong ability to solve complex problems with creative solutions and pays great attention to detail. Dhruthi is hardworking, dedicated and brings a positive attitude to every task. I highly recommend her for any role – she consistently delivers high-quality work.",
      designation: "Project Collaborator",
    },
    {
      name: "John Doe",
      testimonial: "Fantastic to work with!",
      designation: "Project Manager",
    },
    {
      name: "Jane Smith",
      testimonial: "Very talented and proactive.",
      designation: "UI/UX Designer",
    },
  ]

  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    // <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
    <div className="container pt-10 pb-3 mx-auto px-4 md:px-6 2xl:max-w-[1400px]">

      <div className="relative pt-10 pb-1 max-w-4xl mx-auto overflow-hidden px-6 sm:px-0">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 px-4 sm:px-6 "
            >
              <blockquote className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">

                <div className="text-primary mb-6 font-serif text-4xl">
                  &ldquo;
                </div>
                <p className="text-base sm:text-sm md:text-xl leading-relaxed max-w-3xl mx-auto break-words">
                  {item.testimonial}
                </p>
                <div className="mt-6 flex flex-col items-center md:mt-8">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {item.designation}
                  </p>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Transparent Arrow Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-transparent hover:bg-transparent text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-transparent hover:bg-transparent text-muted-foreground hover:text-primary"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </Button>
      </div>

      {/* Small pagination dots */}
      <div className="mt-6 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition ${current === index ? "bg-primary" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  )
}


