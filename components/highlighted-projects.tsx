"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import philippine from "@/assets/philippine-hear-center.png";

// Project categories
const CATEGORIES = [
  "ALL",
  "OR_ICU_CCU_PACU",
  "CSSD",
  "RADIOLOGY",
  "OXYGEN_PLANT",
  "MORTUARY",
  "MEDICAL_WASTE",
];

// Category display names mapping
const CATEGORY_NAMES: Record<string, string> = {
  ALL: "All Projects",
  OR_ICU_CCU_PACU: "O.R/ ICU/CCU/PACU COMPLEX",
  CSSD: "CSSD PROJECTS",
  RADIOLOGY: "RADIOLOGY PROJECTS",
  OXYGEN_PLANT: "OXYGEN PLANT PROJECTS",
  MORTUARY: "MORTUARY FACILITY",
  MEDICAL_WASTE: "MEDICAL WASTE TREATMENT PLANT",
};

// Project data
const PROJECTS = [
  {
    id: 1,
    title: "Modern Operating Room Complex",
    description: "State-of-the-art operating room with advanced equipment",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: philippine,
    category: "OR_ICU_CCU_PACU",
    location: "Central Hospital, Metro City",
  },
  {
    id: 2,
    title: "Intensive Care Unit Renovation",
    description: "Complete renovation of ICU with 20 beds capacity",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=220&text=Regional+Medical+Center",
    category: "OR_ICU_CCU_PACU",
    location: "Regional Medical Center, North Province",
  },
  {
    id: 3,
    title: "CSSD Facility Upgrade",
    description: "Modernization of Central Sterile Services Department",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=180&text=University+Hospital",
    category: "CSSD",
    location: "University Hospital, East District",
  },
  {
    id: 4,
    title: "CSSD Equipment Installation",
    description: "Installation of new sterilization equipment",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=190&text=Community+Hospital",
    category: "CSSD",
    location: "Community Hospital, South Region",
  },
  {
    id: 5,
    title: "MRI Center Development",
    description: "Construction of dedicated MRI facility with 3T scanner",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=170&text=Diagnostic+Center",
    category: "RADIOLOGY",
    location: "Diagnostic Center, West City",
  },
  {
    id: 6,
    title: "Radiology Department Expansion",
    description: "Expansion of radiology services with new equipment",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=160&text=General+Hospital",
    category: "RADIOLOGY",
    location: "General Hospital, Central District",
  },
  {
    id: 7,
    title: "Oxygen Generation Plant",
    description:
      "Installation of oxygen generation plant with 200 L/min capacity",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=150&text=Rural+Hospital",
    category: "OXYGEN_PLANT",
    location: "Rural Hospital, Mountain Province",
  },
  {
    id: 8,
    title: "Medical Gas Pipeline System",
    description: "Complete medical gas pipeline system for 100-bed hospital",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=180&text=District+Hospital",
    category: "OXYGEN_PLANT",
    location: "District Hospital, Coastal Region",
  },
  {
    id: 9,
    title: "Modern Mortuary Facility",
    description: "Construction of mortuary with advanced refrigeration system",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=190&text=City+Medical+Center",
    category: "MORTUARY",
    location: "City Medical Center, Downtown",
  },
  {
    id: 10,
    title: "Mortuary Renovation Project",
    description: "Renovation of existing mortuary with capacity expansion",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=200&text=Memorial+Hospital",
    category: "MORTUARY",
    location: "Memorial Hospital, Historic District",
  },
  {
    id: 11,
    title: "Medical Waste Incinerator",
    description:
      "Installation of medical waste incinerator with emission control",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=180&text=Regional+Hospital",
    category: "MEDICAL_WASTE",
    location: "Regional Hospital, Industrial Zone",
  },
  {
    id: 12,
    title: "Waste Management System",
    description: "Comprehensive medical waste management system",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=190&text=Children's+Hospital",
    category: "MEDICAL_WASTE",
    location: "Children's Hospital, Suburban Area",
  },
  {
    id: 13,
    title: "PACU Modernization",
    description:
      "Post-Anesthesia Care Unit modernization with monitoring systems",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=170&text=Surgical+Center",
    category: "OR_ICU_CCU_PACU",
    location: "Surgical Center, Technology Park",
  },
  {
    id: 14,
    title: "CCU Development Project",
    description: "Development of Coronary Care Unit with 15 beds",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=160&text=Heart+Institute",
    category: "OR_ICU_CCU_PACU",
    location: "Heart Institute, Medical Campus",
  },
  {
    id: 15,
    title: "CSSD Workflow Optimization",
    description: "Redesign of CSSD workflow for improved efficiency",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=180&text=Veterans+Hospital",
    category: "CSSD",
    location: "Veterans Hospital, Northern District",
  },
  {
    id: 16,
    title: "X-Ray Department Renovation",
    description: "Complete renovation of X-Ray department with digital systems",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=190&text=Emergency+Hospital",
    category: "RADIOLOGY",
    location: "Emergency Hospital, City Center",
  },
  {
    id: 17,
    title: "Oxygen Distribution Network",
    description: "Hospital-wide oxygen distribution network installation",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=200&text=Pulmonary+Hospital",
    category: "OXYGEN_PLANT",
    location: "Pulmonary Hospital, Riverside",
  },
  {
    id: 18,
    title: "Mortuary Cooling System",
    description: "Advanced cooling system for mortuary facility",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=170&text=County+Hospital",
    category: "MORTUARY",
    location: "County Hospital, Rural Area",
  },
  {
    id: 19,
    title: "Autoclave Waste Treatment",
    description: "Autoclave-based medical waste treatment system",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo: "/placeholder.svg?height=60&width=180&text=Research+Hospital",
    category: "MEDICAL_WASTE",
    location: "Research Hospital, Science Park",
  },
  {
    id: 20,
    title: "Hybrid Operating Theater",
    description:
      "Construction of hybrid operating theater with imaging capabilities",
    image: "/placeholder.svg?height=400&width=600",
    hospitalLogo:
      "/placeholder.svg?height=60&width=210&text=Cardiovascular+Center",
    category: "OR_ICU_CCU_PACU",
    location: "Cardiovascular Center, Lake City",
  },
];

export default function HighlightedProjects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const projectsPerPage = 8;

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(
        PROJECTS.filter((project) => project.category === activeCategory)
      );
    }
    setCurrentPage(1); // Reset to first page when changing filters
  }, [activeCategory]);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section
    document.getElementById("projects-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="space-y-8">
        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <Tabs
            defaultValue="ALL"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent">
              {CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm md:text-base transition-all",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  {CATEGORY_NAMES[category]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div id="projects-grid" className="scroll-mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className="bg-white/80 backdrop-blur-sm"
                    >
                      {CATEGORY_NAMES[project.category].split(" ")[0]}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="relative h-12 w-full my-2">
                    <Image
                      src={project.hospitalLogo || "/placeholder.svg"}
                      alt={`${project.location} Logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-1 text-xs"
                  >
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {currentProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "w-8 h-8",
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : ""
                    )}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
