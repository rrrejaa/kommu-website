"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar, MapPin } from "lucide-react"

const categories = ["All Projects", "Urban Greening", "Zero Waste", "Water Conservation", "Community Organizing"]

const projects = [
  {
    id: 1,
    title: "Oak Street Community Garden",
    category: "Urban Greening",
    description:
      "Transformed a vacant lot into a thriving community garden with 20 vegetable beds, fruit trees, and a gathering space.",
    location: "Downtown",
    date: "Completed March 2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "River Cleanup Initiative",
    category: "Water Conservation",
    description:
      "Organized monthly cleanups that removed over 2 tons of trash from our local river and educated 500+ community members about water protection.",
    location: "Riverside Park",
    date: "Ongoing since 2021",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "School Composting Program",
    category: "Zero Waste",
    description:
      "Implemented composting systems in 5 local schools, diverting 1,000+ pounds of food waste monthly and teaching students about the circular economy.",
    location: "District Schools",
    date: "Launched September 2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Neighborhood Tree Planting",
    category: "Urban Greening",
    description:
      "Planted 200 native trees throughout underserved neighborhoods to increase canopy cover, reduce heat islands, and improve air quality.",
    location: "Eastside Neighborhood",
    date: "Completed Fall 2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Climate Policy Advocacy",
    category: "Community Organizing",
    description:
      "Mobilized 1,000+ residents to advocate for the city's climate action plan, resulting in ambitious emissions reduction targets.",
    location: "City-wide",
    date: "Achieved June 2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Plastic-Free Business Alliance",
    category: "Zero Waste",
    description:
      "Partnered with 25 local businesses to eliminate single-use plastics and implement sustainable practices in their operations.",
    location: "Business District",
    date: "Ongoing",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ImpactSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="impact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium mb-4">
            OUR IMPACT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Success stories from our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our programs and volunteers are making a real difference in communities across the region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "mb-2",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  : "border-secondary/50 text-foreground hover:border-secondary hover:text-secondary",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full border border-border">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    {project.date}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

