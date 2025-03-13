import { Button } from "@/components/ui/button"
import { Users, ArrowRight } from "lucide-react"

export default function JoinTeam() {
  return (
    <section id="team" className="py-20 bg-green-700 text-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-white/20">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Join Our Growing Team</h2>
            <p className="mb-6 text-lg text-green-100">
              We're looking for passionate individuals who share our vision for a sustainable future. Join us in making
              a positive impact on the world through innovative solutions and collaborative teamwork.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                <span>Collaborative work environment</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                <span>Professional growth opportunities</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                <span>Meaningful work with global impact</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                <span>Competitive benefits package</span>
              </li>
            </ul>
            <Button className="bg-white text-green-700 hover:bg-gray-100">
              View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-green-800 bg-opacity-50"
                style={{
                  backgroundImage: "url('/placeholder.svg?height=800&width=800')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlend: "overlay",
                }}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-600 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-800 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

