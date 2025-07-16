"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-64 bg-secondary/10 wave-shape"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-primary/10 -scale-x-100 wave-shape"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 inline-block px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium">
              COMMUNITY-DRIVEN CHANGE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Together we can build a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                greener future
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our grassroots movement to create sustainable communities and protect our planet for future
              generations.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="px-8 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative">
                    <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">Our Impact</h3>
                          <p className="text-sm text-muted-foreground">Growing every day</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-background p-4 rounded-xl text-center border border-border">
                          <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                          <div className="text-sm text-muted-foreground">Community Members</div>
                        </div>
                        <div className="bg-background p-4 rounded-xl text-center border border-border">
                          <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                          <div className="text-sm text-muted-foreground">Local Chapters</div>
                        </div>
                        <div className="bg-background p-4 rounded-xl text-center border border-border">
                          <div className="text-3xl font-bold text-primary mb-1">100+</div>
                          <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="bg-background p-4 rounded-xl text-center border border-border">
                          <div className="text-3xl font-bold text-secondary mb-1">5K+</div>
                          <div className="text-sm text-muted-foreground">Trees Planted</div>
                        </div>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                        <h4 className="font-medium mb-2">Upcoming Community Event</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Join us for our monthly community cleanup at Green Park
                        </p>
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">June 15, 2023</span>
                          <span className="font-medium">9:00 AM - 12:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 relative">
                    <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border">
                      <h4 className="font-bold mb-3">Latest Community Achievement</h4>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=64&width=64"
                            alt="Community garden"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">Community Garden Project</h5>
                          <p className="text-sm text-muted-foreground">Completed last week</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Our volunteers transformed an abandoned lot into a thriving community garden with 20+ vegetable
                        beds.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
