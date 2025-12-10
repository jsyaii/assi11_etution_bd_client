import React from 'react';

const Works = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">How the Platform Works</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
        <p className="text-gray-600">Create your account easily and access all features in minutes.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold mb-2">Explore Courses</h3>
        <p className="text-gray-600">Browse our platform and find the courses or resources you need.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
        <p className="text-gray-600">Engage, practice, and track your progress with our interactive tools.</p>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Works;
