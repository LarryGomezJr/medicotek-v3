import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import BusinessGroups from "@/components/business-groups"
import Partners from "@/components/partners"
import JoinTeam from "@/components/join-team"
import Footer from "@/components/footer"
import HighlightedProjects from "@/components/highlighted-projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BusinessGroups />
      <Partners />
      <HighlightedProjects />
      <JoinTeam />
      <Footer />
    </main>
  )
}

