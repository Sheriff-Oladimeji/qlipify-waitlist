import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Timer,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col w-[90%] mx-auto">
      {/* Header */}
      <header className="w-[90%] mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Qlipify</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
          </nav>
          <ModeToggle />
          <Button size="sm" className="hidden md:flex">
            Join Waitlist
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-[90%] mx-auto py-12 md:py-24 px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <Badge variant="outline" className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
              Say goodbye to brainrot
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
                Transform
              </span>{" "}
              Your Learning Experience
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              Qlipify turns long, boring YouTube videos into concise, interactive study materials. Get summaries,
              quizzes, flashcards, and an AI study buddy in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex-1 max-w-md">
                <Input type="email" placeholder="Enter your email" className="h-12" />
              </div>
              <Button size="lg" className="px-8 h-12 gap-2">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Early access coming soon</span>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <div className="relative w-full aspect-square md:aspect-video max-w-[500px] mx-auto">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Qlipify App Demo"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl object-cover z-10 relative overflow-hidden"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/20 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/30 rounded-xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted/50 py-16 md:py-24">
          <div className="w-[90%] mx-auto px-4 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">How Qlipify Works</h2>
              <p className="text-muted-foreground text-lg">
                Transform any YouTube video into personalized study materials in just a few clicks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-none shadow-lg bg-background hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Youtube className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Paste YouTube URL</h3>
                  <p className="text-muted-foreground">Simply copy and paste any YouTube video link into Qlipify</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-background hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Timer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Choose Summary Length</h3>
                  <p className="text-muted-foreground">Select how detailed you want your summary to be</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-background hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Get Study Materials</h3>
                  <p className="text-muted-foreground">Instantly receive summaries, quizzes, flashcards, and AI chat</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="w-[90%] mx-auto px-4 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">
                Powerful Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Learn Better</h2>
              <p className="text-muted-foreground text-lg">
                Qlipify transforms passive watching into active learning with these powerful tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Summaries</h3>
                  <p className="text-muted-foreground">
                    Get concise summaries of any length. Choose from quick overviews to detailed notes based on your
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Quizzes</h3>
                  <p className="text-muted-foreground">
                    Test your knowledge with automatically generated quizzes that focus on the most important concepts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flashcards</h3>
                  <p className="text-muted-foreground">
                    Reinforce your learning with digital flashcards created from key points in the video.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Study Buddy</h3>
                  <p className="text-muted-foreground">
                    Chat with an AI that knows the video content. Ask questions, get clarifications, and take notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-muted/50 py-16 md:py-24 relative overflow-hidden">
          <div className="w-[90%] mx-auto px-4 space-y-12 relative z-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">
                Why Qlipify?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Cure Your Brainrot</h2>
              <p className="text-muted-foreground text-lg">
                Beat endless doomscrolling and transform passive watching into productive learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Student using Qlipify"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-xl object-cover"
                />
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Save Hours of Time</h3>
                  </div>
                  <p className="text-muted-foreground pl-7">
                    Extract key information from long videos in minutes, not hours
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Boost Retention</h3>
                  </div>
                  <p className="text-muted-foreground pl-7">
                    Interactive learning tools help you remember more of what you learn
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Learn On Your Terms</h3>
                  </div>
                  <p className="text-muted-foreground pl-7">
                    Study at your own pace with materials tailored to your learning style
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Turn Watching into Doing</h3>
                  </div>
                  <p className="text-muted-foreground pl-7">
                    Transform passive content consumption into active learning experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="w-[90%] mx-auto px-4 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">
                Early Feedback
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">What Early Users Are Saying</h2>
              <p className="text-muted-foreground text-lg">
                Join these happy learners who've transformed their YouTube experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background border shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-semibold text-primary">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">Jamie D.</p>
                      <p className="text-sm text-muted-foreground">Computer Science Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Qlipify saved me during finals week. I turned a 2-hour lecture into a 15-minute summary and ace'd
                    my exam!"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-semibold text-primary">AK</span>
                    </div>
                    <div>
                      <p className="font-medium">Alex K.</p>
                      <p className="text-sm text-muted-foreground">Self-taught Developer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The flashcards feature is a game-changer. I'm actually retaining what I learn from coding tutorials
                    now."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-semibold text-primary">MT</span>
                    </div>
                    <div>
                      <p className="font-medium">Mia T.</p>
                      <p className="text-sm text-muted-foreground">High School Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I used to get distracted watching educational videos. Qlipify helps me focus on what matters and
                    study effectively."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="w-[90%] mx-auto px-4 text-center space-y-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Learning?</h2>
            <p className="text-primary-foreground/80 text-lg">
              Join the waitlist today and be among the first to experience the future of YouTube learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button size="lg" variant="secondary" className="px-8 h-12">
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Created by an indie hacker tired of long, boring YouTube videos. Join me in making learning more
              efficient!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="w-[90%] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold">Qlipify</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Qlipify. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

