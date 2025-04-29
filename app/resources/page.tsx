"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, FileText, BookOpen, Calendar, Download, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/resources-hero.png"
            alt="AgriX Network Resources"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Resources</h1>
            <p className="text-lg md:text-xl">
              Access our collection of guides, research papers, case studies, and tools to support your regenerative
              agriculture journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-10 h-12" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm">
                Soil Health
              </Button>
              <Button variant="outline" size="sm">
                Water Management
              </Button>
              <Button variant="outline" size="sm">
                Biodiversity
              </Button>
              <Button variant="outline" size="sm">
                Carbon Sequestration
              </Button>
              <Button variant="outline" size="sm">
                Agroforestry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-5 h-auto p-1 mb-12">
              <TabsTrigger value="all" className="rounded-md">
                All
              </TabsTrigger>
              <TabsTrigger value="guides" className="rounded-md">
                Guides
              </TabsTrigger>
              <TabsTrigger value="research" className="rounded-md">
                Research
              </TabsTrigger>
              <TabsTrigger value="case-studies" className="rounded-md">
                Case Studies
              </TabsTrigger>
              <TabsTrigger value="events" className="rounded-md">
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...guides, ...research, ...caseStudies, ...events].slice(0, 9).map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild>
                  <Link href="#">View All Resources</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {research.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Resources</h2>
            <p className="text-muted-foreground text-lg">
              Our most popular and impactful resources to help you get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                <Image
                  src="/images/featured-resource-1.png"
                  alt="Comprehensive Guide to Soil Health"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Guide</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Guide to Soil Health</h3>
                <p className="text-muted-foreground mb-4">
                  Our most popular guide covers everything from soil biology to practical testing methods and
                  regeneration techniques.
                </p>
                <Button asChild>
                  <Link href="#">Download Guide</Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                <Image
                  src="/images/featured-resource-2.png"
                  alt="Regenerative Agriculture Implementation Toolkit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Toolkit</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Regenerative Agriculture Implementation Toolkit</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive set of tools, templates, and checklists to help farmers transition to regenerative
                  practices.
                </p>
                <Button asChild>
                  <Link href="#">Access Toolkit</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">From Our Blog</h2>
              <p className="text-muted-foreground">Latest insights, stories, and updates from the field.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/resources/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Key Indicators of Healthy Soil Every Farmer Should Monitor",
                excerpt:
                  "Learn the essential soil health indicators that can help you assess and improve your farm's soil quality.",
                image: "/images/blog-1.png",
                date: "April 15, 2024",
                author: "Dr. Elena Rodriguez",
              },
              {
                title: "Success Story: How a Small Farm Tripled Biodiversity in Two Years",
                excerpt:
                  "A case study of a 20-acre farm that transformed from conventional to regenerative practices with remarkable results.",
                image: "/images/blog-2.png",
                date: "April 8, 2024",
                author: "Michael Chen",
              },
              {
                title: "Water Management Innovations for Drought-Prone Regions",
                excerpt:
                  "Exploring cutting-edge techniques for conserving and efficiently using water in increasingly dry climates.",
                image: "/images/blog-3.png",
                date: "April 1, 2024",
                author: "Amara Okafor",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>By {post.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="px-0">
                    <Link href="#" className="flex items-center">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to receive the latest resources, event announcements, and updates from AgriX
              Network.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Newsletter signup logic would go here
                alert("Thank you for subscribing to our newsletter!")
                e.target.reset()
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                placeholder="Your email address"
                type="email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button type="submit" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

// Resource data
const guides = [
  {
    title: "Beginner's Guide to Regenerative Agriculture",
    description: "An introduction to core principles and practices for those new to regenerative farming.",
    image: "/images/guide-1.png",
    type: "Guide",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    action: "Download Guide",
    link: "#",
  },
  {
    title: "Soil Health Assessment Manual",
    description: "Step-by-step instructions for testing and interpreting soil health indicators on your farm.",
    image: "/images/guide-2.png",
    type: "Guide",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    action: "Download Guide",
    link: "#",
  },
  {
    title: "Water Management Strategies",
    description: "Techniques for efficient water use and management in various agricultural contexts.",
    image: "/images/guide-3.png",
    type: "Guide",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    action: "Download Guide",
    link: "#",
  },
]

const research = [
  {
    title: "Carbon Sequestration Potential of Regenerative Grazing",
    description: "Research findings on the carbon capture capabilities of different grazing management systems.",
    image: "/images/research-1.png",
    type: "Research Paper",
    icon: <FileText className="h-4 w-4 text-primary" />,
    action: "Read Paper",
    link: "#",
  },
  {
    title: "Economic Analysis of Transition to Regenerative Practices",
    description: "A study of the financial implications of transitioning from conventional to regenerative farming.",
    image: "/images/research-2.png",
    type: "Research Paper",
    icon: <FileText className="h-4 w-4 text-primary" />,
    action: "Read Paper",
    link: "#",
  },
  {
    title: "Biodiversity Impact Assessment of Agroforestry Systems",
    description: "Research on how different agroforestry configurations affect local biodiversity.",
    image: "/images/research-3.png",
    type: "Research Paper",
    icon: <FileText className="h-4 w-4 text-primary" />,
    action: "Read Paper",
    link: "#",
  },
]

const caseStudies = [
  {
    title: "Small-Scale Farm Transformation in Kenya",
    description:
      "How a 10-acre farm increased yields by 40% while reducing input costs through regenerative practices.",
    image: "/images/case-study-1.png",
    type: "Case Study",
    icon: <FileText className="h-4 w-4 text-primary" />,
    action: "View Case Study",
    link: "#",
  },
  {
    title: "Corporate Supply Chain Regeneration",
    description: "A global food company's journey to implement regenerative practices across their supply network.",
    image: "/images/case-study-2.png",
    type: "Case Study",
    icon: <FileText className="h-4 w-4 text-primary" />,
    action: "View Case Study",
    link: "#",
  },
  {
    title: "Community-Led Watershed Restoration",
    description: "How a rural community restored their watershed through collaborative regenerative efforts.",
    image: "/images/case-study-3.png",
    type: "Case Study",
    icon: <FileText className="h-4 w-4 text-primary" />,
    action: "View Case Study",
    link: "#",
  },
]

const events = [
  {
    title: "Annual Regenerative Agriculture Conference",
    description: "Join us for our flagship event featuring keynote speakers, workshops, and field demonstrations.",
    image: "/images/event-1.png",
    type: "Event",
    icon: <Calendar className="h-4 w-4 text-primary" />,
    action: "Register Now",
    link: "#",
    date: "October 15-17, 2024",
  },
  {
    title: "Soil Health Masterclass Webinar Series",
    description: "A six-part online series diving deep into all aspects of building and maintaining healthy soil.",
    image: "/images/event-2.png",
    type: "Webinar",
    icon: <Calendar className="h-4 w-4 text-primary" />,
    action: "Register Now",
    link: "#",
    date: "Monthly, starting May 2024",
  },
  {
    title: "Field Day: Regenerative Grazing Demonstration",
    description: "Hands-on demonstration of regenerative grazing techniques at our partner farm.",
    image: "/images/event-3.png",
    type: "Field Day",
    icon: <Calendar className="h-4 w-4 text-primary" />,
    action: "Register Now",
    link: "#",
    date: "June 10, 2024",
  },
]

// Resource Card Component
function ResourceCard({ resource }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {resource.icon}
          <span className="text-sm text-muted-foreground">{resource.type}</span>
        </div>
        <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
        {resource.date && (
          <CardDescription className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {resource.date}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{resource.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={resource.link} className="flex items-center justify-center gap-2">
            {resource.action}
            {resource.action.includes("Download") ? (
              <Download className="h-4 w-4" />
            ) : (
              <ExternalLink className="h-4 w-4" />
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
