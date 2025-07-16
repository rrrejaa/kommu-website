"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Community Volunteer",
    content:
      "Being part of GreenRoots has completely changed how I view my role in the community. I've learned so much about sustainable living and have met the most incredible, passionate people who are committed to making a difference.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Local Business Owner",
    content:
      "Working with GreenRoots to eliminate single-use plastics in my café was one of the best decisions I've made. Not only has it reduced our environmental footprint, but our customers love it and it's actually saved us money in the long run.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "School Teacher",
    content:
      "The school garden program has been transformative for my students. They're excited to learn about growing food, and I've seen improvements in their science understanding, teamwork skills, and even their eating habits as they try vegetables they've grown themselves.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium mb-4">
            COMMUNITY VOICES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stories from our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the people who are making a difference in their communities through our programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500 absolute top-0 left-0 w-full",
                  index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none",
                )}
              >
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                  <div className="mb-6 text-gradient">
                    <Quote className="h-10 w-10 text-secondary opacity-20" />
                  </div>
                  <p className="text-lg mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-primary to-secondary p-0.5">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder to maintain height */}
            <div className="opacity-0 pointer-events-none">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="mb-6 text-gradient">
                  <Quote className="h-10 w-10 text-secondary opacity-20" />
                </div>
                <p className="text-lg mb-6">{testimonials[0].content}</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonials[0].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[0].position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="rounded-full border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === activeIndex ? "bg-gradient-to-r from-primary to-secondary" : "bg-muted-foreground/30",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="rounded-full border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

