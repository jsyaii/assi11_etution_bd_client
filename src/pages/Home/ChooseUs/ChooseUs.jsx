import React from 'react';

const ChooseUs = () => {
    return (
        <div>
          <section className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div className="p-8 border rounded-2xl hover:shadow-xl transition duration-300">
        <div className="text-blue-500 text-4xl mb-4">
          🚀
        </div>
        <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
        <p className="text-gray-600">Get started quickly without any hassle. Simple, intuitive platform for everyone.</p>
      </div>
      {/* Feature 2 */}
      <div className="p-8 border rounded-2xl hover:shadow-xl transition duration-300">
        <div className="text-blue-500 text-4xl mb-4">
          🎓
        </div>
        <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
        <p className="text-gray-600">All courses are created by industry experts to ensure quality learning.</p>
      </div>
      {/* Feature 3 */}
      <div className="p-8 border rounded-2xl hover:shadow-xl transition duration-300">
        <div className="text-blue-500 text-4xl mb-4">
          💡
        </div>
        <h3 className="text-xl font-semibold mb-2">Innovative Tools</h3>
        <p className="text-gray-600">Interactive features, progress tracking, and smart learning aids for better results.</p>
      </div>
    </div>
  </div>
</section>
  
        </div>
    );
}

export default ChooseUs;
