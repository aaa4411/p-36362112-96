
import React from "react";

const SuccessStories: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Student Success Stories</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">From Intern to Full-Time Engineer</h3>
              <p className="text-gray-600 italic">"The internship opportunity I found through the college's platform led to my dream job at a top tech company. The experience I gained was invaluable."</p>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=33" alt="Student" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <div className="font-medium">Alex Johnson</div>
                <div className="text-sm text-gray-500">Computer Science, Class of 2023</div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gray-50">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Research Led to Publication</h3>
              <p className="text-gray-600 italic">"The undergraduate research opportunity allowed me to co-author a paper that was published in a prestigious conference. This opened many doors for my graduate studies."</p>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=32" alt="Student" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <div className="font-medium">Samantha Lee</div>
                <div className="text-sm text-gray-500">Data Science, Class of 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
