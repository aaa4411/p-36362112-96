
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Graduation, BookOpen, Calendar, Users, Award, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-primary text-white py-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">College of Computers and Information</h1>
          <p className="mt-4 text-lg max-w-3xl">
            Empowering the next generation of technology leaders through education, research, and innovation in computer science and information technology.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Graduation className="mr-3 text-primary" /> About Our College
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The College of Computers and Information was established to advance education and research in computer science and information technology. We are committed to developing skilled professionals who can meet the challenges of the rapidly evolving digital landscape.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed">
              Our programs blend rigorous academic study with hands-on practical experience, preparing students for successful careers in technology and research. Our faculty consists of internationally recognized experts who are dedicated to both teaching and advancing the frontiers of knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="mr-2 text-primary" size={20} /> Our Mission
                </h3>
                <p className="text-gray-700">
                  To provide exceptional education in computing and information sciences, conduct cutting-edge research, and serve as a resource for technological innovation in our community and beyond.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-primary" size={20} /> Our Vision
                </h3>
                <p className="text-gray-700">
                  To be a globally recognized center of excellence in computing and information education, research, and innovation that drives technological advancement and societal progress.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Users className="mr-3 text-primary" /> Academic Programs
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a comprehensive range of undergraduate and graduate programs designed to provide students with the knowledge and skills needed for success in the rapidly evolving fields of computer science and information technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Computer Science</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Programs focusing on algorithms, programming languages, software development, and theoretical foundations of computing.
                </p>
                <Link to="/programs/computer-science">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Information Systems</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Programs focusing on the application of computing and information technology in organizational contexts.
                </p>
                <Link to="/programs/information-systems">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Artificial Intelligence</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Programs focusing on machine learning, natural language processing, and intelligent systems.
                </p>
                <Link to="/programs/artificial-intelligence">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-primary" /> Research Areas
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our faculty and students are engaged in cutting-edge research across a variety of areas in computing and information sciences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Artificial Intelligence & Machine Learning</h3>
                <p className="text-gray-700 text-sm">
                  Research in neural networks, deep learning, computer vision, natural language processing, and robotics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Cybersecurity</h3>
                <p className="text-gray-700 text-sm">
                  Research in network security, cryptography, secure systems design, and digital forensics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Data Science & Big Data</h3>
                <p className="text-gray-700 text-sm">
                  Research in data mining, visualization, predictive analytics, and large-scale data management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Human-Computer Interaction</h3>
                <p className="text-gray-700 text-sm">
                  Research in user experience design, accessibility, interactive systems, and usability engineering.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Calendar className="mr-3 text-primary" /> Upcoming Events
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Stay updated with our academic calendar, workshops, seminars, and conferences.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center">
                <div className="bg-primary/10 text-primary rounded-lg p-3 text-center md:mr-6 mb-4 md:mb-0 md:w-24 flex-shrink-0">
                  <div className="text-sm font-medium">OCT</div>
                  <div className="text-2xl font-bold">15</div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-1">AI and Machine Learning Workshop</h3>
                  <p className="text-gray-600 text-sm mb-2">10:00 AM - 4:00 PM | Main Campus, Room 302</p>
                  <p className="text-gray-700 text-sm">A hands-on workshop introducing the fundamentals of artificial intelligence and machine learning.</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <Button variant="outline">Register</Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center">
                <div className="bg-primary/10 text-primary rounded-lg p-3 text-center md:mr-6 mb-4 md:mb-0 md:w-24 flex-shrink-0">
                  <div className="text-sm font-medium">NOV</div>
                  <div className="text-2xl font-bold">05</div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-1">Research Symposium 2024</h3>
                  <p className="text-gray-600 text-sm mb-2">9:00 AM - 5:00 PM | Conference Center</p>
                  <p className="text-gray-700 text-sm">Annual symposium showcasing current research by faculty and graduate students.</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <Button variant="outline">Register</Button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/events">
                <Button>View All Events</Button>
              </Link>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FileText className="mr-3 text-primary" /> Contact Information
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have questions about our programs, research opportunities, or upcoming events? We're here to help.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> University Campus, Building 5, Floor 3
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> info@collegeofcomputing.edu
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Student Support:</strong> support@collegeofcomputing.edu
                  </p>
                  <p className="text-gray-700">
                    <strong>Admissions:</strong> admissions@collegeofcomputing.edu
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
