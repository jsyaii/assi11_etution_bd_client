import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate, FaUserShield } from "react-icons/fa6";
import { MdOutlineSchool } from "react-icons/md";




const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-16">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-wide">
          About <span className="text-teal-400">eTuitionBD</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          eTuitionBD is a smart tuition management platform that connects 
          students with qualified tutors while ensuring quality through 
          admin verification and secure transactions.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">🎯 Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to simplify the tuition hiring process by providing
            a transparent, reliable, and secure platform where students can
            find the right tutor and tutors can access verified tuition
            opportunities.
          </p>
        </div>

        <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <MdOutlineSchool className="text-6xl text-teal-400 mb-4" />
          <p className="text-gray-300">
            We believe quality education should be accessible, organized, 
            and trusted by everyone.
          </p>
        </div>
      </section>

      {/* Platform Roles */}
      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How eTuitionBD Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Student */}
          <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 hover:scale-105 transition">
            <FaUserGraduate className="text-5xl text-teal-400 mb-5" />
            <h3 className="text-xl font-semibold mb-3">For Students</h3>
            <p className="text-gray-400">
              Students can post tuition requests, review tutor applications,
              make secure payments, and manage their tuition journey easily.
            </p>
          </div>

          {/* Tutor */}
          <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 hover:scale-105 transition">
            <FaChalkboardTeacher className="text-5xl text-teal-400 mb-5" />
            <h3 className="text-xl font-semibold mb-3">For Tutors</h3>
            <p className="text-gray-400">
              Tutors can apply for verification, browse tuition jobs, apply
              securely, and get paid through an integrated payment system.
            </p>
          </div>

          {/* Admin */}
          <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 hover:scale-105 transition">
            <FaUserShield className="text-5xl text-teal-400 mb-5" />
            <h3 className="text-xl font-semibold mb-3">For Admins</h3>
            <p className="text-gray-400">
              Admins ensure platform quality by verifying tutors, approving
              tuitions, managing users, and monitoring transactions.
            </p>
          </div>

        </div>
      </section>

      {/* Footer Note */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <p className="text-gray-500">
          Built with ❤️ to empower education and simplify tuition management in Bangladesh.
        </p>
      </section>

    </div>
  );
};

export default About;
