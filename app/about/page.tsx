import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.png"
            alt="About AgriX Network"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About AgriX Network</h1>
            <p className="text-lg md:text-xl">
              Founded in 2024, AgriX Network International is dedicated to transforming global agriculture through
              regenerative practices, research, and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                AgriX Network International was born from a vision to address the growing challenges facing global
                agriculture: climate change, soil degradation, biodiversity loss, and food security concerns.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Founded by a diverse group of agricultural scientists, farmers, and sustainability experts, our
                organization began as a small research collaborative and has grown into a global network spanning six
                continents.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We believe that regenerative agriculture—farming and grazing practices that rebuild soil organic matter
                and restore degraded soil biodiversity—is key to creating long-term food security while reversing
                climate change.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder of AgriX Network"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Dr. Elena Rodriguez</h4>
                  <p className="text-muted-foreground">Founder & Executive Director</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden order-1 lg:order-2">
              <Image src="/images/our-story.png" alt="AgriX Network story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Mission, Vision & Values</h2>
            <p className="text-muted-foreground text-lg">
              The core principles that guide our work and shape our impact in the agricultural world.
            </p>
          </div>

          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-6 bg-card rounded-lg mt-6 border">
              <div className="flex items-start gap-4">
                <Target className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-4">
                    To accelerate the global transition to regenerative agriculture by connecting stakeholders,
                    facilitating knowledge exchange, and implementing innovative solutions that restore ecosystems while
                    ensuring food security.
                  </p>
                  <p className="text-muted-foreground">
                    We work to make regenerative practices accessible to farmers of all scales, from smallholders to
                    large agricultural operations, through education, resources, and market connections.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vision" className="p-6 bg-card rounded-lg mt-6 border">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-4">
                    A world where agriculture serves as a solution to environmental challenges, where farming practices
                    rebuild soil health, enhance biodiversity, improve water cycles, and sequester carbon.
                  </p>
                  <p className="text-muted-foreground">
                    We envision resilient food systems that nourish communities while regenerating the planet, creating
                    a harmonious relationship between human needs and natural ecosystems.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="p-6 bg-card rounded-lg mt-6 border">
              <div className="flex items-start gap-4">
                <Heart className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <span className="font-medium text-foreground">Stewardship:</span> Caring for the land and its
                      resources for future generations.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Collaboration:</span> Working together across
                      disciplines and borders to achieve common goals.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Innovation:</span> Embracing new ideas and
                      technologies that advance regenerative practices.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Inclusivity:</span> Ensuring all voices are heard
                      and all stakeholders benefit.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Integrity:</span> Maintaining transparency and
                      ethical standards in all our work.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Our diverse team of experts is dedicated to transforming agriculture through innovation and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elena Rodriguez",
                role: "Founder & Executive Director",
                bio: "With over 20 years of experience in agricultural science, Elena leads our global initiatives with vision and expertise.",
                image: "/images/team-1.png",
              },
              {
                name: "Michael Chen",
                role: "Director of Research",
                bio: "Michael oversees our research programs, focusing on innovative techniques for soil regeneration and carbon sequestration.",
                image: "/images/team-2.png",
              },
              {
                name: "Amara Okafor",
                role: "Farmer Network Coordinator",
                bio: "Amara builds and maintains relationships with our global network of farmers, ensuring their voices and needs are represented.",
                image: "/images/team-3.png",
              },
              {
                name: "Dr. James Wilson",
                role: "Policy Advisor",
                bio: "James works with governments and international organizations to create policies that support regenerative agriculture.",
                image: "/images/team-4.png",
              },
              {
                name: "Sofia Mendoza",
                role: "Education Program Manager",
                bio: "Sofia develops and implements our training programs, making regenerative practices accessible to farmers worldwide.",
                image: "/images/team-5.png",
              },
              {
                name: "Raj Patel",
                role: "Technology Innovation Lead",
                bio: "Raj explores and develops technological solutions to support the implementation of regenerative farming practices.",
                image: "/images/team-6.png",
              },
            ].map((member, index) => (
              <Card key={index}>
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in the growth and impact of AgriX Network International.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Foundation",
                  description:
                    "AgriX Network International is established by Dr. Elena Rodriguez and a team of agricultural experts.",
                },
                {
                  year: "2024",
                  title: "First Research Initiative",
                  description:
                    "Launch of our flagship soil regeneration research program in partnership with three universities.",
                },
                {
                  year: "2024",
                  title: "Farmer Network Expansion",
                  description:
                    "Expansion to include 500+ farmers across 15 countries, creating our first global knowledge exchange platform.",
                },
                {
                  year: "2025",
                  title: "Future Vision",
                  description:
                    "Planned launch of our comprehensive certification program for regenerative agricultural practices.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-card rounded-lg p-6 border">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Partners</h2>
            <p className="text-muted-foreground text-lg">
              We collaborate with organizations around the world to advance regenerative agriculture.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-20 w-full flex items-center justify-center">
                <Image
                  src={`/images/partner-${index + 1}.png`}
                  alt={`Partner organization ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-h-full w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're a farmer, researcher, policymaker, or consumer, there's a place for you in the AgriX Network.
            Together, we can transform agriculture for a sustainable future.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Get Involved Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
