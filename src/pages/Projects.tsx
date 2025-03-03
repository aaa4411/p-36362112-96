
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, GraduationCap, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "AI-Powered Student Support System",
      description: "An intelligent system that uses natural language processing to answer student queries about courses, deadlines, and campus resources.",
      category: "Artificial Intelligence",
      team: "Faculty-led Research Team",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 2,
      title: "Secure Campus IoT Network",
      description: "Implementation of a secure IoT framework for smart classroom and laboratory management with enhanced privacy controls.",
      category: "Cybersecurity / IoT",
      team: "Graduate Research Project",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 3,
      title: "Virtual Reality Lab Simulator",
      description: "A VR application that simulates laboratory environments for remote learning in computer hardware and networking courses.",
      category: "Virtual Reality / Education",
      team: "Faculty-Student Collaboration",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 4,
      title: "Data Visualization for Academic Performance",
      description: "Interactive dashboards that help analyze student performance across different courses and programs.",
      category: "Data Science / Analytics",
      team: "Student Capstone Project",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 5,
      title: "Blockchain-based Academic Credential System",
      description: "A secure and verifiable system for issuing and verifying academic credentials using blockchain technology.",
      category: "Blockchain / Security",
      team: "Industry Partnership",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 6,
      title: "Adaptive Learning Platform",
      description: "A learning management system that adapts content difficulty based on student progress and learning patterns.",
      category: "Educational Technology / AI",
      team: "PhD Research Project",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-primary text-white py-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Project Showcase</h1>
          <p className="mt-4 text-lg max-w-3xl">
            Explore innovative projects created by our students, faculty, and research teams that demonstrate the application of cutting-edge technology.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Code className="mr-3 text-primary" /> Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map(project => (
                <Card key={project.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="h-48 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-500 text-sm flex items-center mt-1">
                      <Users size={14} className="mr-1" />
                      {project.team}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        View Project <ExternalLink size={14} className="ml-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-3 text-primary" /> Submit Your Project
              </h2>
              <p className="text-gray-700 mb-6">
                Are you a student or faculty member with an exciting project to showcase? We welcome submissions from all departments related to computer science and information technology.
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Button>Submit Project</Button>
                <span className="text-gray-500 text-sm">
                  Projects are reviewed and published on a monthly basis.
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
