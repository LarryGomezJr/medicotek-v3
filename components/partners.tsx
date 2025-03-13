"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  { id: 1, name: "Partner 1", logo: "/placeholder.svg?height=80&width=180" },
  { id: 2, name: "Partner 2", logo: "/placeholder.svg?height=80&width=180" },
  { id: 3, name: "Partner 3", logo: "/placeholder.svg?height=80&width=180" },
  { id: 4, name: "Partner 4", logo: "/placeholder.svg?height=80&width=180" },
  { id: 5, name: "Partner 5", logo: "/placeholder.svg?height=80&width=180" },
  { id: 6, name: "Partner 6", logo: "/placeholder.svg?height=80&width=180" },
  { id: 7, name: "Partner 7", logo: "/placeholder.svg?height=80&width=180" },
  { id: 8, name: "Partner 8", logo: "/placeholder.svg?height=80&width=180" },
]

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += 0.5

      // Reset position when we've scrolled the width of one logo container
      if (scrollPosition >= 200) {
        scrollPosition = 0
        scrollContainer.style.transform = `translateX(0px)`
      } else {
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Our Trusted Partners</h2>

        <div className="relative overflow-hidden">
          {/* Gradient Overlay - Left */}
          <div className="absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-center py-4 space-x-12 whitespace-nowrap"
              style={{ width: "fit-content" }}
            >
              {/* Double the partners for continuous scrolling effect */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex items-center justify-center px-6 py-4 bg-white rounded-lg shadow-sm h-24 w-44"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain w-auto h-auto max-h-12"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlay - Right */}
          <div className="absolute top-0 bottom-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

