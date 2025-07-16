"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Calendar, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "volunteer",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "volunteer",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium mb-4">
            GET INVOLVED
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are many ways to get involved with GreenRoots. Let us know how you'd like to contribute to our
            mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-sm h-full border border-border">
              <h3 className="text-2xl font-bold mb-6">Ways to Get Involved</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Volunteer</h4>
                    <p className="text-muted-foreground">
                      Join our volunteer team and help with community projects, events, and campaigns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Attend Events</h4>
                    <p className="text-muted-foreground">
                      Participate in workshops, cleanups, tree plantings, and community gatherings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Stay Connected</h4>
                    <p className="text-muted-foreground">
                      Sign up for our newsletter to receive updates on programs and events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-xl border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-card rounded-lg p-2 text-center min-w-[60px] border border-border">
                        <div className="text-sm font-medium text-muted-foreground">JUN</div>
                        <div className="text-xl font-bold">15</div>
                      </div>
                      <div>
                        <h4 className="font-bold">Community Cleanup</h4>
                        <p className="text-sm text-muted-foreground mb-2">Green Park, 9:00 AM - 12:00 PM</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        >
                          RSVP
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-xl border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-card rounded-lg p-2 text-center min-w-[60px] border border-border">
                        <div className="text-sm font-medium text-muted-foreground">JUN</div>
                        <div className="text-xl font-bold">22</div>
                      </div>
                      <div>
                        <h4 className="font-bold">Composting Workshop</h4>
                        <p className="text-sm text-muted-foreground mb-2">Community Center, 6:00 PM - 8:00 PM</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        >
                          RSVP
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 text-foreground px-6 py-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">Thank you for your interest!</h4>
                  <p>
                    We've received your information and will be in touch soon about how you can get involved with Kommu.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>I'm interested in:</Label>
                    <RadioGroup
                      value={formData.interest}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="volunteer" id="volunteer" />
                        <Label htmlFor="volunteer" className="cursor-pointer">
                          Volunteering
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="donate" id="donate" />
                        <Label htmlFor="donate" className="cursor-pointer">
                          Donating
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partner" id="partner" />
                        <Label htmlFor="partner" className="cursor-pointer">
                          Partnering with us
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="learn" id="learn" />
                        <Label htmlFor="learn" className="cursor-pointer">
                          Learning more
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border focus:border-primary"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                      Sign me up for the Kommu newsletter to receive updates on programs and events
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                      </>
                    ) : (
                      <>
                        Submit <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

