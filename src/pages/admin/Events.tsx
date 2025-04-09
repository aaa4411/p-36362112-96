import React, { useState } from "react";
import { Search, Calendar, MapPin, Clock, MoreHorizontal, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Reuse the event data from Events.tsx
const upcomingEvents = [
  {
    id: 1,
    title: "AI and Machine Learning Workshop",
    description: "A hands-on workshop introducing the fundamentals of artificial intelligence and machine learning.",
    date: "Oct 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus, Room 302",
    category: "Workshop",
    registrationLink: "#",
    registrations: 42,
    status: "Published"
  },
  {
    id: 2,
    title: "Research Symposium 2024",
    description: "Annual symposium showcasing current research by faculty and graduate students.",
    date: "Nov 05, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Center",
    category: "Conference",
    registrationLink: "#",
    registrations: 78,
    status: "Published"
  },
  {
    id: 3,
    title: "Industry Partnership Day",
    description: "Connect with industry professionals and explore internship and career opportunities.",
    date: "Nov 18, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "University Hall",
    category: "Networking",
    registrationLink: "#",
    registrations: 35,
    status: "Published"
  },
  {
    id: 4,
    title: "Cybersecurity Challenges Competition",
    description: "Test your skills in identifying and addressing security vulnerabilities in a competitive environment.",
    date: "Dec 03, 2024",
    time: "9:00 AM - 7:00 PM",
    location: "Computer Lab, Building 5",
    category: "Competition",
    registrationLink: "#",
    registrations: 15,
    status: "Draft"
  },
  {
    id: 5,
    title: "Web Development Bootcamp",
    description: "Intensive three-day bootcamp covering modern web development frameworks and best practices.",
    date: "Dec 10-12, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Innovation Center",
    category: "Bootcamp",
    registrationLink: "#",
    registrations: 28,
    status: "Published"
  },
  {
    id: 6,
    title: "Graduate Studies Information Session",
    description: "Learn about graduate programs, application requirements, and funding opportunities.",
    date: "Jan 15, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Virtual Event",
    category: "Information Session",
    registrationLink: "#",
    registrations: 12,
    status: "Draft"
  }
];

const AdminEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(upcomingEvents);

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const publishedEvents = filteredEvents.filter(event => event.status === "Published");
  const draftEvents = filteredEvents.filter(event => event.status === "Draft");

  const handleEventAction = (action: string, eventId: number) => {
    const eventTitle = events.find(e => e.id === eventId)?.title;
    
    switch (action) {
      case 'view':
        toast(`Viewing details for "${eventTitle}"`);
        break;
      case 'edit':
        toast(`Editing event: "${eventTitle}"`);
        break;
      case 'publish':
        setEvents(events.map(event => 
          event.id === eventId ? {...event, status: 'Published'} : event
        ));
        toast.success(`Event "${eventTitle}" has been published`);
        break;
      case 'unpublish':
        setEvents(events.map(event => 
          event.id === eventId ? {...event, status: 'Draft'} : event
        ));
        toast.success(`Event "${eventTitle}" has been unpublished`);
        break;
      case 'delete':
        setEvents(events.filter(event => event.id !== eventId));
        toast.success(`Event "${eventTitle}" has been deleted`);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Event Management</h1>
        <Button>
          <CalendarPlus className="mr-2 h-4 w-4" /> Create Event
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search events..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Events ({filteredEvents.length})</TabsTrigger>
          <TabsTrigger value="published">Published ({publishedEvents.length})</TabsTrigger>
          <TabsTrigger value="drafts">Drafts ({draftEvents.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <EventList 
            events={filteredEvents} 
            onEventAction={handleEventAction} 
          />
        </TabsContent>
        
        <TabsContent value="published">
          <EventList 
            events={publishedEvents} 
            onEventAction={handleEventAction} 
          />
        </TabsContent>
        
        <TabsContent value="drafts">
          <EventList 
            events={draftEvents} 
            onEventAction={handleEventAction} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface EventListProps {
  events: typeof upcomingEvents;
  onEventAction: (action: string, eventId: number) => void;
}

const EventList = ({ events, onEventAction }: EventListProps) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg border">
        <Calendar className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium">No events found</h3>
        <p className="mt-1 text-gray-500">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <Badge className={event.status === "Published" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                  {event.status}
                </Badge>
                <div className="mt-2">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge variant="outline" className="mt-1">
                    {event.category}
                  </Badge>
                </div>
              </div>
              <div className="bg-primary/10 text-primary rounded-lg p-3 text-center flex-shrink-0">
                <div className="text-sm font-medium">{event.date.split(" ")[0]}</div>
                <div className="text-xl font-bold">{event.date.split(" ")[1].replace(",", "")}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">
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
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-sm">
                <span className="font-medium">{event.registrations}</span> registrations
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4 mr-1" />
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Event Actions</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => onEventAction('view', event.id)}>
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onEventAction('edit', event.id)}>
                    Edit Event
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {event.status === "Published" ? (
                    <DropdownMenuItem onClick={() => onEventAction('unpublish', event.id)}>
                      Unpublish
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={() => onEventAction('publish', event.id)}>
                      Publish
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem 
                    onClick={() => onEventAction('delete', event.id)}
                    className="text-red-600"
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminEvents;
