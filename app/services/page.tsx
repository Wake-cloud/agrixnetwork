"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Users, FileText, Sprout, BarChart, Globe } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="AgriX Network Services"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-lg md:text-xl">
              Comprehensive solutions to support the transition to regenerative agriculture across the entire value
              chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How We Can Help</h2>
            <p className="text-muted-foreground text-lg">
              AgriX Network offers specialized services designed to support sustainable and regenerative agricultural
              practices at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regenerative Farming Consultation",
                description:
                  "Expert guidance on implementing regenerative practices tailored to your specific context.",
                icon: <Sprout className="h-10 w-10 text-primary mb-2" />,
                features: [
                  "Soil health assessment",
                  "Biodiversity integration planning",
                  "Water management strategies",
                  "Transition planning from conventional methods",
                ],
              },
              {
                title: "Sustainable Supply Chain Development",
                description: "Building resilient, transparent supply chains that support regenerative agriculture.",
                icon: <Globe className="h-10 w-10 text-primary mb-2" />,
                features: [
                  "Supply chain mapping and analysis",
                  "Sustainability metrics development",
                  "Stakeholder engagement",
                  "Transparency and traceability solutions",
                ],
              },
              {
                title: "Agricultural Research Collaboration",
                description: "Connecting researchers with farmers to develop and test innovative practices.",
                icon: <FileText className="h-10 w-10 text-primary mb-2" />,
                features: [
                  "On-farm research trials",
                  "Data collection and analysis",
                  "Research partnership facilitation",
                  "Knowledge dissemination",
                ],
              },
              {
                title: "Farmer Training Programs",
                description: "Comprehensive education on regenerative techniques and sustainable farm management.",
                icon: <Users className="h-10 w-10 text-primary mb-2" />,
                features: [
                  "Hands-on workshops",
                  "Online learning modules",
                  "Peer-to-peer knowledge exchange",
                  "Field demonstrations",
                ],
              },
              {
                title: "Certification and Compliance Support",
                description: "Guidance through certification processes for regenerative and organic standards.",
                icon: <CheckCircle className="h-10 w-10 text-primary mb-2" />,
                features: [
                  "Standards interpretation",
                  "Documentation preparation",
                  "Audit readiness assessment",
                  "Continuous improvement planning",
                ],
              },
              {
                title: "Market Access Facilitation",
                description: "Connecting regenerative farmers with markets that value sustainable practices.",
                icon: <BarChart className="h-10 w-10 text-primary mb-2" />,
                features: [
                  "Buyer-supplier matchmaking",
                  "Market trend analysis",
                  "Value proposition development",
                  "Marketing and storytelling support",
                ],
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="px-0">
                    <Link href="/contact" className="flex items-center">
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Service Process</h2>
            <p className="text-muted-foreground text-lg">
              We follow a structured approach to ensure our services deliver maximum value and impact.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>

            {/* Process steps */}
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description:
                    "We begin with a thorough assessment of your needs, goals, and current situation to understand how we can best support you.",
                },
                {
                  step: "2",
                  title: "Customized Plan Development",
                  description:
                    "Our experts develop a tailored plan that addresses your specific challenges and opportunities, with clear objectives and timelines.",
                },
                {
                  step: "3",
                  title: "Implementation Support",
                  description:
                    "We provide hands-on guidance and resources throughout the implementation phase, ensuring you have the support you need.",
                },
                {
                  step: "4",
                  title: "Monitoring and Evaluation",
                  description:
                    "Regular check-ins and data collection help us track progress and make adjustments as needed to optimize results.",
                },
                {
                  step: "5",
                  title: "Continuous Improvement",
                  description:
                    "We work with you to refine approaches based on outcomes and evolving best practices, ensuring long-term success.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-sm font-medium">{item.step}</span>
                  </div>
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-card rounded-lg p-6 border">
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

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              See how our services have helped organizations and communities achieve their regenerative agriculture
              goals.
            </p>
          </div>

          <Tabs defaultValue="case1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="case1">Small-Scale Farm</TabsTrigger>
              <TabsTrigger value="case2">Regional Cooperative</TabsTrigger>
              <TabsTrigger value="case3">Corporate Supply Chain</TabsTrigger>
            </TabsList>

            <TabsContent value="case1" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/case-study-1.png"
                    alt="Small-scale farm case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Family Farm Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    A 50-acre family farm in Kenya transitioned from conventional to regenerative practices with our
                    support, resulting in improved soil health, increased biodiversity, and 30% higher yields within
                    three years.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our services included soil health assessment, transition planning, training workshops, and ongoing
                    consultation.
                  </p>
                  <Button asChild>
                    <Link href="/resources/case-studies">Read Full Case Study</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="case2" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/case-study-2.png"
                    alt="Regional cooperative case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Cooperative Success Story</h3>
                  <p className="text-muted-foreground mb-4">
                    A cooperative of 200 coffee farmers in Colombia implemented water conservation and agroforestry
                    practices with our guidance, resulting in improved coffee quality and a 25% premium for their beans.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our services included group training programs, certification support, and market access
                    facilitation.
                  </p>
                  <Button asChild>
                    <Link href="/resources/case-studies">Read Full Case Study</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="case3" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/case-study-3.png"
                    alt="Corporate supply chain case study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Corporate Supply Chain Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    A global food company worked with us to transition 15,000 acres of their supply chain to
                    regenerative practices, reducing their carbon footprint by 40% and improving farmer livelihoods.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our services included supply chain mapping, farmer training programs, data collection systems, and
                    impact reporting.
                  </p>
                  <Button asChild>
                    <Link href="/resources/case-studies">Read Full Case Study</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Service Packages</h2>
            <p className="text-muted-foreground text-lg">
              We offer flexible service packages to meet the needs of different organizations and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                description: "For small-scale farmers and organizations beginning their regenerative journey.",
                price: "$1,500",
                features: [
                  "Initial assessment and recommendations",
                  "Basic training workshop (1 day)",
                  "3 months of email support",
                  "Access to online resources",
                ],
              },
              {
                name: "Standard",
                description: "For established farms and organizations ready for comprehensive implementation.",
                price: "$5,000",
                featured: true,
                features: [
                  "Comprehensive assessment and detailed plan",
                  "Extended training program (3 days)",
                  "6 months of ongoing support",
                  "Quarterly progress reviews",
                  "Customized resource toolkit",
                  "Network connection opportunities",
                ],
              },
              {
                name: "Premium",
                description: "For large operations and supply chains requiring in-depth transformation.",
                price: "Custom",
                features: [
                  "Full-scale assessment and strategic planning",
                  "Tailored training program for multiple stakeholders",
                  "12 months of dedicated support",
                  "Monthly progress reviews",
                  "Custom data collection and reporting",
                  "Market connection facilitation",
                  "Certification preparation support",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.featured ? "border-primary shadow-lg relative" : ""}>
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 text-3xl font-bold">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={plan.featured ? "w-full" : "w-full"}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            All packages can be customized to meet your specific needs. Contact us for a personalized quote and to
            discuss how we can best support your regenerative agriculture journey.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Common questions about our services and how we can help you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it typically take to see results from regenerative practices?",
                answer:
                  "While some benefits can be observed within the first growing season, such as improved water retention and reduced erosion, the full benefits of regenerative agriculture typically develop over 3-5 years as soil health builds. Significant improvements in soil organic matter, biodiversity, and crop resilience usually become more apparent in years 2-3.",
              },
              {
                question: "Do you work with farms of all sizes?",
                answer:
                  "Yes, we work with agricultural operations of all scales, from small family farms to large commercial operations. Our services are customized to meet the specific needs, resources, and goals of each client, regardless of size.",
              },
              {
                question: "What regions do you currently serve?",
                answer:
                  "AgriX Network operates globally, with active projects on six continents. Our team includes experts familiar with diverse agricultural systems and climates, allowing us to provide relevant support regardless of your location.",
              },
              {
                question: "How do you measure the success of your services?",
                answer:
                  "We use a combination of ecological, economic, and social metrics to evaluate success, including soil health indicators, biodiversity measures, yield data, profitability analysis, and farmer satisfaction. We establish baseline measurements at the beginning of our engagement and track progress over time.",
              },
              {
                question: "Can you help with certification processes?",
                answer:
                  "Yes, we provide comprehensive support for various certification processes, including organic, regenerative, and sustainability certifications. Our team can guide you through standard requirements, documentation preparation, and implementation of necessary practices.",
              },
              {
                question: "Do you offer financial assistance or help accessing funding?",
                answer:
                  "While we don't provide direct financial assistance, we do help clients identify and apply for relevant grants, subsidies, and incentive programs. We also connect farmers with impact investors and buyers who pay premiums for regeneratively produced goods.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Transform Your Agricultural Practices?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can support your transition to regenerative agriculture and
            help you achieve your sustainability goals.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Add a service request form at the bottom of the page */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Request a Custom Service Package</CardTitle>
                <CardDescription>
                  Tell us about your specific needs and we'll create a tailored solution for your organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    // Form submission logic would go here
                    alert("Thank you for your service request! We will contact you shortly.")
                    e.target.reset()
                  }}
                  className="space-y-6"
                >
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="org-name">Organization name</Label>
                        <Input id="org-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact name</Label>
                        <Input id="contact-name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-interest">Services of Interest</Label>
                      <Select defaultValue="consultation">
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Regenerative Farming Consultation</SelectItem>
                          <SelectItem value="supply-chain">Sustainable Supply Chain Development</SelectItem>
                          <SelectItem value="research">Agricultural Research Collaboration</SelectItem>
                          <SelectItem value="training">Farmer Training Programs</SelectItem>
                          <SelectItem value="certification">Certification and Compliance Support</SelectItem>
                          <SelectItem value="market">Market Access Facilitation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea id="requirements" rows={4} required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
