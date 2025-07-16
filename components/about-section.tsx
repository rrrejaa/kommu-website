export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Community members working together"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">10</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Years of</div>
                    <div className="text-sm font-bold">Community Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium mb-2">
              OUR MISSION
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Creating{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                sustainable communities
              </span>{" "}
              together
            </h2>
            <p className="text-lg text-muted-foreground">
              Kommu is a grassroots movement dedicated to empowering communities to take action on environmental issues.
              We believe that lasting change happens when people come together with a shared vision for a better future.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to build a network of engaged citizens who work together to create sustainable, resilient
              communities through education, advocacy, and direct action.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <div className="text-2xl">🌱</div>
                </div>
                <h4 className="text-xl font-bold mb-2">Environmental Justice</h4>
                <p className="text-sm text-muted-foreground">
                  Fighting for equal access to a clean, healthy environment for all
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <div className="text-2xl">🤝</div>
                </div>
                <h4 className="text-xl font-bold mb-2">Community Building</h4>
                <p className="text-sm text-muted-foreground">
                  Strengthening connections between neighbors and communities
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <div className="text-2xl">🌍</div>
                </div>
                <h4 className="text-xl font-bold mb-2">Climate Action</h4>
                <p className="text-sm text-muted-foreground">Taking meaningful steps to address the climate crisis</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <div className="text-2xl">📚</div>
                </div>
                <h4 className="text-xl font-bold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">Sharing knowledge and skills for sustainable living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

