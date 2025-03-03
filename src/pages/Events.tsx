
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI and Machine Learning Workshop",
      description: "A hands-on workshop introducing the fundamentals of artificial intelligence and machine learning.",
      date: "Oct 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus, Room 302",
      category: "Workshop",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "Research Symposium 2024",
      description: "Annual symposium showcasing current research by faculty and graduate students.",
      date: "Nov 05, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      category: "Conference",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Industry Partnership Day",
      description: "Connect with industry professionals and explore internship and career opportunities.",
      date: "Nov 18, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "University Hall",
      category: "Networking",
      registrationLink: "#"
    },
    {
      id: 4,
      title: "Cybersecurity Challenges Competition",
      description: "Test your skills in identifying and addressing security vulnerabilities in a competitive environment.",
      date: "Dec 03, 2024",
      time: "9:00 AM - 7:00 PM",
      location: "Computer Lab, Building 5",
      category: "Competition",
      registrationLink: "#"
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      description: "Intensive three-day bootcamp covering modern web development frameworks and best practices.",
      date: "Dec 10-12, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Innovation Center",
      category: "Bootcamp",
      registrationLink: "#"
    },
    {
      id: 6,
      title: "Graduate Studies Information Session",
      description: "Learn about graduate programs, application requirements, and funding opportunities.",
      date: "Jan 15, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Virtual Event",
      category: "Information Session",
      registrationLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-primary text-white py-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events & Activities</h1>
          <p className="mt-4 text-lg max-w-3xl">
            Stay updated with workshops, conferences, competitions, and academic events happening at the College of Computers and Information.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <section className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold flex items-center">
                <Calendar className="mr-3 text-primary" /> Upcoming Events
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter size={16} className="mr-2" /> Filter
                </Button>
                <Button variant="outline" size="sm">View Calendar</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full mb-2">
                          {event.category}
                        </span>
                        <CardTitle className="text-xl mb-1">{event.title}</CardTitle>
                      </div>
                      <div className="bg-primary/10 text-primary rounded-lg p-3 text-center flex-shrink-0">
                        <div className="text-sm font-medium">{event.date.split(" ")[0]}</div>
                        <div className="text-xl font-bold">{event.date.split(" ")[1].replace(",", "")}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-gray-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex justify-end">
                    <Button asChild>
                      <a href={event.registrationLink}>Register</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4">Submit an Event</h2>
              <p className="text-gray-700 mb-6">
                Organizing a workshop, seminar, or competition related to computer science or information technology? 
                Submit your event to be featured in our calendar.
              </p>
              <Button>Submit Event</Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
