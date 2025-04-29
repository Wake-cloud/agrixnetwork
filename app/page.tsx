import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Leaf, Sprout, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Regenerative agriculture landscape"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 text-white">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transforming Agriculture for a Sustainable Future
            </h1>
            <p className="text-lg md:text-xl">
              AgriX Network International connects farmers, researchers, and consumers to promote regenerative
              agriculture practices worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-agrix-maroon hover:bg-agrix-maroon/90">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose AgriX Network?</h2>
            <p className="text-muted-foreground text-lg">
              We're dedicated to transforming agricultural practices through innovation, collaboration, and sustainable
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Leaf className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Sustainable Practices</CardTitle>
                <CardDescription>
                  Implementing farming methods that preserve ecosystems and enhance biodiversity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our network promotes techniques that reduce environmental impact while improving soil health and crop
                  resilience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0">
                  <Link href="/services" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Connecting agricultural professionals across continents for knowledge sharing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our diverse community includes farmers, researchers, policymakers, and consumers committed to
                  agricultural transformation.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0">
                  <Link href="/about" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Sprout className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Innovation Hub</CardTitle>
                <CardDescription>
                  Developing and testing cutting-edge agricultural technologies and methods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We facilitate research and implementation of innovative solutions to address modern farming
                  challenges.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0">
                  <Link href="/projects" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Comprehensive Services for Agricultural Transformation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a range of specialized services designed to support sustainable and regenerative agricultural
                practices.
              </p>
              <ul className="space-y-4">
                {[
                  "Regenerative Farming Consultation",
                  "Sustainable Supply Chain Development",
                  "Agricultural Research Collaboration",
                  "Farmer Training Programs",
                  "Certification and Compliance Support",
                  "Market Access Facilitation",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/services-overview.png" alt="Agricultural services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact Around the World</h2>
            <p className="text-muted-foreground text-lg">
              Explore some of our successful projects implementing regenerative agriculture practices globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Soil Regeneration Initiative",
                location: "East Africa",
                image: "/images/project-1.png",
                description: "Restoring degraded farmland through innovative soil health practices.",
              },
              {
                title: "Sustainable Rice Cultivation",
                location: "Southeast Asia",
                image: "/images/project-2.png",
                description: "Reducing water usage and methane emissions in rice production.",
              },
              {
                title: "Agroforestry Implementation",
                location: "South America",
                image: "/images/project-3.png",
                description: "Integrating trees with crops for improved biodiversity and yields.",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <Globe className="h-4 w-4 inline mr-1" /> {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="px-0">
                    <Link href="/projects" className="flex items-center">
                      View project details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 z-0">
              <Image src="/images/cta-bg.png" alt="Join our network" fill className="object-cover brightness-[0.4]" />
            </div>
            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join the AgriX Network Today</h2>
              <p className="text-lg mb-8">
                Be part of a global movement transforming agriculture for a sustainable future. Connect with like-minded
                professionals, access exclusive resources, and contribute to positive environmental change.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-agrix-orange hover:bg-agrix-orange/90 text-white">
                  <Link href="/contact">Become a Member</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
