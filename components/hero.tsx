import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import mlbImage from "@/assets/BG.jpg";
import { Mea_Culpa } from "next/font/google";

const meaCulpa = Mea_Culpa({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="relative overflow-hidden drop-shadow-xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-green-700 bg-opacity-80"
          style={{
            backgroundImage: `url(${mlbImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-24 mx-auto text-center text-white md:py-32 md:px-6">
        <h1
          className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${meaCulpa.className}`}
        >
          Passion. Grit. Success.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
          With decades of industry expertise, MEDICOTEK excels in seamlessly
          integrating medical distribution, project development, healthcare
          information technology and outsourcing services through innovative
          Public-Private Partnerships (PPP) tailored specifically for the
          healthcare sector.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
          <Button className="w-full md:w-auto bg-white text-green-700 hover:bg-gray-100">
            Learn More
          </Button>
          <Button className="w-full md:w-auto border border-white text-white bg-transparent ">
            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

