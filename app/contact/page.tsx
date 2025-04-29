"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    // Example: API call to submit form data
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    setFormSubmitted(true)
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.png"
            alt="Contact AgriX Network"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Have questions or want to get involved? We'd love to hear from you. Reach out to our team using the
              information below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Get in Touch</h2>

              <div className="grid gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Our Headquarters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-muted-foreground">
                      <p>123 Sustainable Way</p>
                      <p>Eco City, EC 12345</p>
                      <p>United States</p>
                    </address>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <a href="tel:+234 911 839 1970" className="hover:text-primary">
                          +234 911 839 1970
                        </a>
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@agrixnetwork.com" className="hover:text-primary">
                          taiwiz@agrix.network
                        </a>
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Regional Offices</h3>
                <Tabs defaultValue="africa" className="w-full">
                  <TabsList className="grid grid-cols-4 h-auto">
                    <TabsTrigger value="africa">Africa</TabsTrigger>
                    <TabsTrigger value="asia">Asia</TabsTrigger>
                    <TabsTrigger value="europe">Europe</TabsTrigger>
                    <TabsTrigger value="americas">Americas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="africa" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Nairobi Office</CardTitle>
                        <CardDescription>East Africa Regional Hub</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <address className="not-italic text-muted-foreground">
                          <p>45 Regenerative Road</p>
                          <p>Nairobi, Kenya</p>
                          <p className="mt-2">
                            <a href="tel:+254123456789" className="hover:text-primary">
                              +254 123 456 789
                            </a>
                          </p>
                          <p>
                            <a href="mailto:africa@agrixnetwork.com" className="hover:text-primary">
                              africa@agrixnetwork.com
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="asia" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Bangkok Office</CardTitle>
                        <CardDescription>Southeast Asia Regional Hub</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <address className="not-italic text-muted-foreground">
                          <p>78 Sustainable Street</p>
                          <p>Bangkok, Thailand</p>
                          <p className="mt-2">
                            <a href="tel:+66123456789" className="hover:text-primary">
                              +66 123 456 789
                            </a>
                          </p>
                          <p>
                            <a href="mailto:asia@agrixnetwork.com" className="hover:text-primary">
                              asia@agrixnetwork.com
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="europe" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Amsterdam Office</CardTitle>
                        <CardDescription>European Regional Hub</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <address className="not-italic text-muted-foreground">
                          <p>23 Eco Boulevard</p>
                          <p>Amsterdam, Netherlands</p>
                          <p className="mt-2">
                            <a href="tel:+31123456789" className="hover:text-primary">
                              +31 123 456 789
                            </a>
                          </p>
                          <p>
                            <a href="mailto:europe@agrixnetwork.com" className="hover:text-primary">
                              europe@agrixnetwork.com
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="americas" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>São Paulo Office</CardTitle>
                        <CardDescription>Latin America Regional Hub</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <address className="not-italic text-muted-foreground">
                          <p>56 Regeneration Avenue</p>
                          <p>São Paulo, Brazil</p>
                          <p className="mt-2">
                            <a href="tel:+55123456789" className="hover:text-primary">
                              +55 123 456 789
                            </a>
                          </p>
                          <p>
                            <a href="mailto:americas@agrixnetwork.com" className="hover:text-primary">
                              americas@agrixnetwork.com
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-primary/10 p-3 mb-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll respond to your inquiry shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (optional)</Label>
                          <Input id="phone" type="tel" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-type">Inquiry Type</Label>
                          <Select defaultValue="general">
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="services">Services Information</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                              <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                              <SelectItem value="media">Media Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>How did you hear about us?</Label>
                          <RadioGroup defaultValue="search">
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="search" id="search" />
                                <Label htmlFor="search">Search Engine</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="social" id="social" />
                                <Label htmlFor="social">Social Media</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="referral" id="referral" />
                                <Label htmlFor="referral">Referral</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" rows={5} required />
                        </div>
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg">
              Visit our headquarters or one of our regional offices around the world.
            </p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden border">
            <Image
              src="/images/map.png"
              alt="Map showing AgriX Network headquarters location"
              fill
              className="object-cover"
            />
            {/* In a real application, this would be an interactive map */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Common questions about contacting and working with us.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer:
                  "We strive to respond to all inquiries within 1-2 business days. For urgent matters, please indicate this in your message subject line.",
              },
              {
                question: "Can I schedule a call or meeting with your team?",
                answer:
                  "Yes, you can request a call or virtual meeting through our contact form. Please provide details about your availability and the purpose of the meeting, and our team will follow up to schedule a time.",
              },
              {
                question: "Do you offer tours of your demonstration farms?",
                answer:
                  "Yes, we offer guided tours of our demonstration farms for educational purposes. These tours need to be scheduled in advance through our contact form or by calling our office directly.",
              },
              {
                question: "How can I get involved as a volunteer or partner?",
                answer:
                  "We welcome volunteers and partners who share our vision for regenerative agriculture. Please select 'Volunteer Opportunities' or 'Partnership Opportunities' in the inquiry type dropdown when contacting us, and provide details about your interests and background.",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Community</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Connect with like-minded individuals and organizations passionate about regenerative agriculture through our
            social media channels and events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="https://twitter.com">Twitter</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="https://facebook.com">Facebook</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="https://instagram.com">Instagram</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="https://linkedin.com">LinkedIn</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="https://youtube.com">YouTube</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
