"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Users, Target } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  // Add a project filter functionality
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const filteredProjects = projects.filter((project) => {
    if (filterStatus !== "all" && project.status !== filterStatus) return false
    if (filterType !== "all" && project.type !== filterType) return false
    return true
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects-hero.png"
            alt="AgriX Network Projects"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Projects</h1>
            <p className="text-lg md:text-xl">
              Explore our global initiatives implementing regenerative agriculture practices and creating positive
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <TabsList className="h-auto p-1">
                <TabsTrigger value="all" className="rounded-md">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="africa" className="rounded-md">
                  Africa
                </TabsTrigger>
                <TabsTrigger value="asia" className="rounded-md">
                  Asia
                </TabsTrigger>
                <TabsTrigger value="americas" className="rounded-md">
                  Americas
                </TabsTrigger>
                <TabsTrigger value="europe" className="rounded-md">
                  Europe
                </TabsTrigger>
              </TabsList>

              {/* Then update the filter buttons to use these state variables */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Filter by:</span>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Planning">Planning</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Soil">Soil</SelectItem>
                    <SelectItem value="Water">Water</SelectItem>
                    <SelectItem value="Biodiversity">Biodiversity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="africa" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects
                  .filter((p) => p.region === "Africa")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="asia" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects
                  .filter((p) => p.region === "Asia")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="americas" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects
                  .filter((p) => p.region === "Americas")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="europe" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects
                  .filter((p) => p.region === "Europe")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Project</h2>
            <p className="text-muted-foreground text-lg">Spotlight on one of our most impactful initiatives.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/featured-project.png" alt="Featured project" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-agrix-maroon hover:bg-agrix-maroon/90">Featured</Badge>
                <Badge variant="outline">In Progress</Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">East African Soil Regeneration Initiative</h3>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Kenya, Tanzania, Uganda</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - 2027</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                This flagship project aims to restore 50,000 hectares of degraded farmland across East Africa through
                comprehensive soil regeneration practices. Working with 10,000 smallholder farmers, we're implementing a
                combination of cover cropping, minimal tillage, and integrated livestock management to rebuild soil
                organic matter and improve water retention.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Key Objectives:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Increase soil organic matter by 2% across all participating farms</li>
                    <li>Reduce water usage by 30% while maintaining or improving yields</li>
                    <li>Train 10,000 farmers in regenerative practices</li>
                    <li>Establish a regional knowledge-sharing network</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Current Impact:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>3,500 farmers trained and implementing practices</li>
                    <li>15,000 hectares under regenerative management</li>
                    <li>Average 20% increase in water retention capacity</li>
                    <li>12% average increase in crop yields</li>
                  </ul>
                </div>
              </div>
              <Button asChild>
                <Link href="/projects/east-african-soil-regeneration">View Full Project Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Collective Impact</h2>
            <p className="text-muted-foreground text-lg">
              Measuring the difference our projects are making around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                metric: "75,000+",
                label: "Hectares Under Regenerative Management",
                icon: <Target className="h-10 w-10 text-primary" />,
              },
              {
                metric: "15,000+",
                label: "Farmers Trained in Regenerative Practices",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                metric: "30%",
                label: "Average Increase in Soil Organic Matter",
                icon: <Target className="h-10 w-10 text-primary" />,
              },
              {
                metric: "45%",
                label: "Average Reduction in Chemical Inputs",
                icon: <Target className="h-10 w-10 text-primary" />,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto">{item.icon}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">{item.metric}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get Involved</h2>
            <p className="text-muted-foreground text-lg">
              There are many ways to support and participate in our projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Partner with Us",
                description:
                  "Organizations can collaborate with us on existing projects or develop new initiatives aligned with our mission.",
                action: "Become a Partner",
                link: "/contact",
              },
              {
                title: "Volunteer",
                description:
                  "Contribute your skills and time to support our projects, whether you're a farmer, researcher, or have other valuable expertise.",
                action: "Join as Volunteer",
                link: "/contact",
              },
              {
                title: "Fund a Project",
                description:
                  "Support our work financially through donations, grants, or impact investments to help scale regenerative agriculture.",
                action: "Support Our Work",
                link: "/contact",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={item.link}>{item.action}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Map */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Global Presence</h2>
            <p className="text-muted-foreground text-lg">Explore our projects around the world.</p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden border">
            <Image src="/images/world-map.png" alt="Map of project locations" fill className="object-cover" />
            {/* Map pins would be implemented with interactive elements in a real application */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Have a Project Idea?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We're always looking for new opportunities to expand our impact. If you have a project idea or want to bring
            regenerative agriculture to your region, we'd love to hear from you.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Propose a Project</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

// Project data
const projects = [
  {
    title: "Soil Regeneration Initiative",
    location: "Kenya, Tanzania, Uganda",
    region: "Africa",
    image: "/images/project-1.png",
    description: "Restoring degraded farmland through innovative soil health practices.",
    status: "In Progress",
    timeline: "2024-2027",
    type: "Soil",
  },
  {
    title: "Sustainable Rice Cultivation",
    location: "Vietnam, Thailand, Cambodia",
    region: "Asia",
    image: "/images/project-2.png",
    description: "Reducing water usage and methane emissions in rice production.",
    status: "In Progress",
    timeline: "2024-2026",
    type: "Water",
  },
  {
    title: "Agroforestry Implementation",
    location: "Brazil, Colombia, Peru",
    region: "Americas",
    image: "/images/project-3.png",
    description: "Integrating trees with crops for improved biodiversity and yields.",
    status: "In Progress",
    timeline: "2024-2028",
    type: "Biodiversity",
  },
  {
    title: "Mediterranean Drought Resilience",
    location: "Spain, Italy, Greece",
    region: "Europe",
    image: "/images/project-4.png",
    description: "Developing farming systems resilient to increasing drought conditions.",
    status: "Planning",
    timeline: "2025-2028",
    type: "Water",
  },
  {
    title: "Indigenous Knowledge Integration",
    location: "Mexico, Guatemala, Belize",
    region: "Americas",
    image: "/images/project-5.png",
    description: "Combining traditional farming wisdom with modern regenerative approaches.",
    status: "In Progress",
    timeline: "2024-2026",
    type: "Soil",
  },
  {
    title: "Pastoral Systems Regeneration",
    location: "Mongolia, Kazakhstan",
    region: "Asia",
    image: "/images/project-6.png",
    description: "Restoring grasslands through improved grazing management practices.",
    status: "In Progress",
    timeline: "2024-2027",
    type: "Soil",
  },
  {
    title: "Urban Farming Network",
    location: "Germany, France, Netherlands",
    region: "Europe",
    image: "/images/project-7.png",
    description: "Creating regenerative urban farming systems in major European cities.",
    status: "In Progress",
    timeline: "2024-2026",
    type: "Biodiversity",
  },
  {
    title: "Sahel Desertification Reversal",
    location: "Senegal, Mali, Niger",
    region: "Africa",
    image: "/images/project-8.png",
    description: "Combating desertification through water harvesting and agroforestry.",
    status: "In Progress",
    timeline: "2024-2029",
    type: "Water",
  },
  {
    title: "Island Resilience Program",
    location: "Philippines, Indonesia, Fiji",
    region: "Asia",
    image: "/images/project-9.png",
    description: "Building climate-resilient food systems for island communities.",
    status: "Planning",
    timeline: "2025-2028",
    type: "Biodiversity",
  },
]

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge variant={project.status === "In Progress" ? "default" : "outline"}>{project.status}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {project.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-4">
          <Calendar className="h-3 w-3" />
          <span>{project.timeline}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="px-0">
          <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center">
            View details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
