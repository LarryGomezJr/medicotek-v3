import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Stethoscope } from "lucide-react";
import mlbImage from "@/assets/bg-business-group.avif";

export default function BusinessGroups() {
  return (
    <>
      <section id="company" className="py-20 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${mlbImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2, // Adjust this value between 0-1 to control opacity
          }}
        ></div>
        <div className="container px-4 mx-auto md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#188d09] text-transparent bg-clip-text text-gray-900 md:text-4xl">
              Our Business Groups
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We operate through two specialized divisions to deliver
              comprehensive solutions across different sectors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Medical Distribution Group */}
            <Card className="overflow-hidden transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardHeader className="pb-4 space-y-1 bg-green-700 text-white">
                <div className="flex-none md:flex gap-4 items-center">
                  <div className="w-12 h-12 mb-2 rounded-full bg-white/20 flex items-center justify-center">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      Medical Distribution Group
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Sustainable Medical Supplies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Eco-friendly Equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Green Healthcare Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Biodegradable Products</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-600 text-justify">
                  Focusing on quality, innovation, efficiency, and safety are
                  the guiding principles adopted by Medicotek to ensure that it
                  provides customers and partners with products and services
                  that safeguard their trust and investment when partnering with
                  us.
                </p>
              </CardContent>
            </Card>
            {/* Project Development Group */}
            <Card className="overflow-hidden transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardHeader className="pb-4 space-y-1 bg-green-700 text-white">
                <div className="flex-none md:flex gap-4 items-center">
                  <div className="w-12 h-12 mb-2 rounded-full bg-white/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      Project Development Group
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Renewable Energy Projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Green Building Development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Sustainable Urban Planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-700 mr-2"></div>
                    <span>Environmental Consulting</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-600">
                  Our Project Development Group focuses on creating sustainable
                  infrastructure and environmentally conscious development
                  projects that minimize ecological impact while maximizing
                  efficiency and performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
