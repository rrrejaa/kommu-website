import { Leaf, Recycle, Droplets, Users, Home, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const programs = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Urban Greening",
    description: "Transforming urban spaces with community gardens, tree planting, and green infrastructure projects.",
    id: "urban-greening",
  },
  {
    icon: <Recycle className="h-10 w-10 text-secondary" />,
    title: "Zero Waste Initiative",
    description:
      "Working toward zero waste communities through recycling education, composting workshops, and waste reduction campaigns.",
    id: "zero-waste",
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Water Conservation",
    description:
      "Protecting local waterways through cleanup events, rain garden installations, and water-saving education.",
    id: "water",
  },
  {
    icon: <Users className="h-10 w-10 text-secondary" />,
    title: "Community Organizing",
    description: "Building grassroots power through leadership development, coalition building, and civic engagement.",
    id: "organizing",
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Sustainable Housing",
    description:
      "Advocating for energy-efficient, affordable housing and helping residents reduce their environmental footprint.",
    id: "housing",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-secondary" />,
    title: "Environmental Education",
    description:
      "Offering workshops, school programs, and community events to build environmental literacy and skills.",
    id: "education",
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium mb-4">
            OUR PROGRAMS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How we make a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our programs address environmental challenges through community-based solutions that create lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              id={program.id}
              className="bg-card border border-border hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:from-primary/10 group-hover:to-secondary/10 transition-colors duration-300"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="mb-4">{program.icon}</div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground mb-6">{program.description}</CardDescription>
                <Button
                  variant="outline"
                  className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Get Involved
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
