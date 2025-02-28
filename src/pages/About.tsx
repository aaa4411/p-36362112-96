
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Learn more about The Journal and our mission to share insights on design, technology, and creativity.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Journal was founded in 2019 by a group of designers and developers who wanted to create a platform for sharing knowledge and insights about design, technology, and creativity. What started as a small blog has grown into a community of creative professionals from around the world.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission is to provide thoughtful, in-depth content that helps our readers grow professionally and stay informed about the latest trends and best practices in their fields.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading platform for creative professionals to discover, learn, and connect with each other.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-gray-700">
                  Quality over quantity, integrity, inclusivity, and continuous learning.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-700 mb-10 leading-relaxed">
              The Journal is made possible by a diverse team of writers, editors, designers, and developers who are passionate about sharing knowledge and insights with our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                <p className="text-primary">Founder & Editor-in-Chief</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">David Chen</h3>
                <p className="text-primary">Lead Designer</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                    alt="Emily Taylor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Emily Taylor</h3>
                <p className="text-primary">Senior Editor</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have a question, suggestion, or want to contribute to The Journal? We'd love to hear from you.
            </p>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> hello@thejournal.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> San Francisco, CA
              </p>
              <p className="text-gray-700">
                <strong>Social:</strong> Follow us on Twitter, LinkedIn, and GitHub
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
