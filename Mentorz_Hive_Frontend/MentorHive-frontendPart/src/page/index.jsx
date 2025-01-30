import React, { useState } from "react";
import heroVideo from "../assets/hero-section.mp4";
import star from "../assets/code-review.png";
import mentor from '../assets/mentor.png';
import trophy from "../assets/trophy.png";
import diamond from "../assets/diamond.png";
import computerchip from "../assets/programming.png";
import graduated from "../assets/graduated.png";
import coding from "../assets/counseling.png";
import TopMentors from "../components/TopMentors";
import { Nav } from "../components/Nav";
import { NavLink } from "react-router-dom";
import {backgroundImg} from '../assets/background.jpg'
import logo1 from '../assets/career-goal.png'
import logo2 from '../assets/career-path.png'
import logo3 from '../assets/counseling.png'
import logo4 from '../assets/decision-making.png'
import logo5 from '../assets/path.png'
import logo6 from '../assets/code-review.png'

// re-export.js
import defaultExport from '../assets/mentorship.jpg';
export const mentorship = defaultExport;


const Home = () => {
  const [isOpen, setIsOpen] = useState({});
  const toggleFAQ = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <Nav />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative text-center bg-gray-color">
          <img
            className="w-14 hidden md:block absolute top-10 left-[15%]"
            src={star}
            alt=""
          />
          <img
            className="w-14 absolute md:block hidden top-[20%] left-48"
            src={graduated}
            alt=""
          />
          <img
            className="w-20 absolute md:block hidden top-8 bottom-10 right-[15%]"
            src={diamond}
            alt=""
          />

          <div className="relative py-10 md:py-20 ">
            <h1 className="mb-4  text-2xl font-bold text-black md:text-6xl">
            <span className="text-3xl   md:text-7xl">MentorzHive:</span>
            Your journey, our guidance {" "}
              
            </h1>
            <p className="my-10 text-base text-black md:my-16 md:text-2xl">
            Every great achiever was inspired by a great mentor
            </p>
            <NavLink to="/mentors">
              <button className="px-8 py-3 text-white transition bg-button-color rounded-lg hover:bg-orange-color">
              Match with a Mentor
              </button>
            </NavLink>
            <img
              className="absolute hidden md:block w-14 left-1/3"
              src={computerchip}
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="absolute hidden md:block w-14 top-40 left-28"
              src={coding}
              alt=""
            />
            <img
              className="absolute hidden md:block w-14 top-3 right-28"
              src={trophy}
              alt=""
            />
            <video
              autoPlay
              loop
              muted
              className="inset-0 object-cover w-full p-2 mx-auto rounded md:p-0 md:w-2/3 h-2/3"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <img
              className="absolute hidden md:block w-14 bottom-96 right-28 "
              src={star}
              alt=""
            />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#F5EEE9]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <img
                  src={mentor}
                  alt=""
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                </svg>
              </div>
              <div className="p-10 bg-gray-50 lg:p-16 lg:pl-12 lg:w-1/2 rounded-lg shadow-lg">
                <h5 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Discover MentorzHive
                </h5>
                <p className="mb-6 text-lg text-gray-700">
    <span className="font-semibold text-gray-900">MentorzHive</span> is your go-to platform for connecting with skilled mentors who can guide your personal and professional growth. 
    Whether it's mastering new skills, building your career, or achieving your dreams, the right mentor is here for you.
  </p>
  <div className="flex flex-col sm:flex-row sm:items-center">
    <button
      type="submit"
      className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 mb-4 sm:mb-0 font-medium tracking-wide text-black bg-yellow-400 rounded-md shadow-lg hover:bg-yellow-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
    >
      Get Started
    </button>
    <a
      href="/"
      aria-label="Learn more about MentorzHive"
      className="inline-flex items-center justify-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-700"
    >
      Learn More
      <svg
  className="inline-block w-4 h-4 ml-2"
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414 8 8 0 0 1 2.448 2.447l3.181 3.181a1 1 0 1 0 1.415-1.414l-3.182-3.181a8 8 0 0 1-2.448-2.447zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
</svg>
    </a>
  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-4 bg-white">
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
              width="52"
              height="24"
            />
          </svg>
        </span>{" "}
        "Unlock Your Potential with Tailored Learning"
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        At MentorzHive, we connect learners with expert mentors who can help you build on your strengths and overcome challenges. Whether you're an aspiring entrepreneur, a creative professional, or someone looking to upskill, our platform offers personalized mentoring that adapts to your specific needs and goals.
      </p>
    </div>
    <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
  <div className="max-w-md sm:mx-auto sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50 sm:mx-auto sm:w-24 sm:h-24">
      <img src={logo1} alt="Expert Career Guidance" className="w-12 h-12 sm:w-16 sm:h-16" />
    </div>
    <h6 className="mb-3 text-xl font-bold leading-5">Expert Career Guidance</h6>
    <p className="mb-3 text-sm text-gray-900">
      Receive mentorship from seasoned professionals who have walked the path you're on. Get career advice that helps you reach your full potential, from building resumes to mastering job interviews.
    </p>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-800"
    >
      Learn more
    </a>
  </div>
  <div className="max-w-md sm:mx-auto sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50 sm:mx-auto sm:w-24 sm:h-24">
      <img src={logo2} alt="Personalized Learning Paths" className="w-12 h-12 sm:w-16 sm:h-16" />
    </div>
    <h6 className="mb-3 text-xl font-bold leading-5">Personalized Learning Paths</h6>
    <p className="mb-3 text-sm text-gray-900">
      Every learner has unique goals and challenges. Our mentors create personalized learning paths to ensure you receive the guidance tailored to your journey.
    </p>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-800"
    >
      Learn more
    </a>
  </div>
  <div className="max-w-md sm:mx-auto sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50 sm:mx-auto sm:w-24 sm:h-24">
      <img src={logo3} alt="Affordable and Flexible" className="w-12 h-12 sm:w-16 sm:h-16" />
    </div>
    <h6 className="mb-3 text-xl font-bold leading-5">Affordable and Flexible</h6>
    <p className="mb-3 text-sm text-gray-900">
      Mentorship should be accessible. Our platform allows you to schedule sessions at a time and price that works for you. Learn without breaking the bank.
    </p>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-800"
    >
      Learn more
    </a>
  </div>
  <div className="max-w-md sm:mx-auto sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50 sm:mx-auto sm:w-24 sm:h-24">
      <img src={logo4} alt="Build Valuable Networks" className="w-12 h-12 sm:w-16 sm:h-16" />
    </div>
    <h6 className="mb-3 text-xl font-bold leading-5">Build Valuable Networks</h6>
    <p className="mb-3 text-sm text-gray-900">
      Mentorship is not just about learning new skills—it's about building relationships. Connect with experts and expand your network to open doors to new opportunities.
    </p>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-800"
    >
      Learn more
    </a>
  </div>
  <div className="max-w-md sm:mx-auto sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50 sm:mx-auto sm:w-24 sm:h-24">
      <img src={logo5} alt="Continuous Progress Tracking" className="w-12 h-12 sm:w-16 sm:h-16" />
    </div>
    <h6 className="mb-3 text-xl font-bold leading-5">Continuous Progress Tracking</h6>
    <p className="mb-3 text-sm text-gray-900">
      Track your progress with our built-in tools that allow you to set goals, measure milestones, and stay motivated as you continue to grow with your mentor.
    </p>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-800"
    >
      Learn more
    </a>
  </div>
  <div className="max-w-md sm:mx-auto sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50 sm:mx-auto sm:w-24 sm:h-24">
      <img src={logo6} alt="Global Mentorship Opportunities" className="w-12 h-12 sm:w-16 sm:h-16" />
    </div>
    <h6 className="mb-3 text-xl font-bold leading-5">Global Mentorship Opportunities</h6>
    <p className="mb-3 text-sm text-gray-900">
      Connect with mentors from around the world. Gain diverse perspectives, explore international opportunities, and broaden your horizons with global mentorship.
    </p>
    <a
      href="/"
      aria-label=""
      className="inline-flex items-center font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-800"
    >
      Learn more
    </a>
  </div>
</div>

  </div>
</section>
        {/* How It Works Section */}
   <section className="px-6 py-10 bg-white">
  <div className="container mx-auto text-center max-w-screen-xl">
    <div className="mb-12">
      <h2 className="text-4xl font-extrabold text-gray-800">
        Take Control of Your Mentorship Journey
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Connect with experts who inspire, guide, and support your growth. Follow this roadmap to a
        more successful you.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative">
        <img
          src={mentorship}
          alt="Roadmap visualization"
          className="rounded-lg shadow-md h-full w-full object-cover"
        />
      </div>
      <div>
        <ul className="space-y-8">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-blue-500 rounded-full">
              1
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-gray-800">Create Your Profile</h3>
              <p className="text-gray-600">
                Kick off your journey by setting up a profile that reflects your goals and interests.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-green-500 rounded-full">
              2
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-gray-800">Discover Mentors</h3>
              <p className="text-gray-600">
                Browse through a diverse network of mentors and filter by skills, experience, or
                industry.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-yellow-500 rounded-full">
              3
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-gray-800">Choose the Perfect Match</h3>
              <p className="text-gray-600">
                Read reviews and evaluate profiles to find a mentor who aligns with your vision.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-pink-500 rounded-full">
              4
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-gray-800">Schedule a Session</h3>
              <p className="text-gray-600">
                Book a session at a time convenient for you and your mentor.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-purple-500 rounded-full">
              5
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold text-gray-800">Achieve Your Goals</h3>
              <p className="text-gray-600">
                Collaborate with your mentor to develop skills, gain insights, and achieve your
                milestones.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

              {/* Mentor Categories Section */}
              <section className="px-8 py-20 bg-gray-color">
          <div className="container mx-auto">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
              <div className="mb-8 md:w-1/3 md:mr-12">
                <h2 className="text-4xl font-extrabold text-gray-900">
                  Discover Your Ideal Mentor
                </h2>
                <p className="mt-4 text-lg text-gray-800">
                  Unlock your potential with mentors tailored to your goals. Whether you're advancing your career, honing new skills, or exploring passions, our mentors are here to guide you every step of the way.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 mt-6 text-white transition duration-300 rounded-md bg-button-color hover:bg-vibrant-green"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="grid flex-grow grid-cols-2 gap-6 md:grid-cols-3">
                <ul className="space-y-6">
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Career Coaches
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Business Mentors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Creative Mentors
                    </a>
                  </li>
                </ul>
                <ul className="space-y-6">
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Tech Experts
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Marketing Gurus
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Finance Advisors
                    </a>
                  </li>
                </ul>
                <ul className="space-y-6">
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Wellness Coaches
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Education Mentors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block p-4 text-center transition duration-300 border rounded-lg hover:shadow-md bg-white-color text-gray-800 border-orange-color hover:bg-orange-color hover:text-white"
                    >
                      Social Impact Leaders
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mt-10">
              <img
                className="object-cover w-full h-56 sm:h-96 rounded-lg shadow-md"
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Mentorship"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg" />
            </div>
          </div>
        </section>

        <section
  style={{
    background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)', // Light gray gradient
    backgroundSize: '200% 200%', // For animation
    animation: 'gradientAnimation 6s ease infinite', // Animation for interactivity
  }}
>
  <div className="container mx-auto">
    <TopMentors />
  </div>
</section>



        {/* Pricing Section */}
        <section className="px-10 py-24 text-center bg-orange-100">
  <h2 className="mb-10 text-5xl font-extrabold text-black">Affordable Pricing Plans</h2>
  <p className="max-w-3xl mx-auto mb-8 text-lg text-black">
    Discover flexible and budget-friendly plans tailored for students and mentors. Start with a free account and unlock premium features that empower your learning journey.
  </p>
  <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg">
    Explore Pricing Options
  </button>
</section>


        {/* FAQs Section */}
        <section className="px-6 py-16 bg-gray-color">
  <div className="max-w-screen-lg mx-auto">
    <h2 className="mb-12 text-5xl font-extrabold text-center text-vibrant-green">
      Frequently Asked Questions
    </h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {[
        {
          question: "What is MentorHive?",
          answer:
            "MentorHive is a dynamic platform connecting mentees with experienced mentors in fields like tech, business, and wellness, helping them achieve their aspirations.",
        },
        {
          question: "How do I sign up as a mentor?",
          answer:
            "Click on 'Become a Mentor', complete your profile with expertise details, and start mentoring once approved!",
        },
        {
          question: "Can I choose my mentor?",
          answer:
            "Absolutely! Browse mentors, explore their expertise, and select the one that aligns with your goals.",
        },
        {
          question: "What are the costs involved?",
          answer:
            "MentorHive offers free and paid mentorship options. Costs depend on mentor experience and session length, clearly displayed upfront.",
        },
        {
          question: "How does the mentoring process work?",
          answer:
            "After selecting a mentor, schedule sessions via the platform. Communication methods include video calls, messages, or emails.",
        },
        {
          question: "Is there a support system if I face issues?",
          answer:
            "Yes! MentorHive's dedicated support team assists with issues like finding mentors, payment queries, or platform concerns.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <button
            className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-vibrant-green"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span
              className={`ml-4 transition-transform transform ${
                isOpen[index] ? "rotate-180" : "rotate-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            className={`mt-4 text-gray-700 transition-all duration-300 ease-in-out ${
              isOpen[index] ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-12 text-center">
      <button
        className="px-8 py-4 text-lg font-semibold text-white rounded-lg hover:shadow-lg"
        style={{ backgroundColor: "#FFDD40", transition: "transform 0.3s" }}
      >
        Still Have Questions? Contact Us!
      </button>
    </div>
  </div>
</section>


        {/* Call to Action */}
        <section className="px-8 py-20 text-center bg-gray-color">
  <div className="max-w-3xl mx-auto">
    <h2 className="mb-6 text-5xl font-extrabold text-orange-color">
      Start Your Mentorship Journey Today!
    </h2>
    <p className="mb-10 text-lg text-gray-800 leading-relaxed">
      Discover the perfect mentor to guide you on your path to success. Whether you're 
      looking to grow your career or develop new skills, MentorHive has you covered.
    </p>
    <div className="flex justify-center gap-4">
      <button
        className="px-8 py-4 font-semibold text-white transition rounded-lg hover:scale-105 hover:shadow-lg"
        style={{ backgroundColor: "#fec200" }}
      >
        Join Now
      </button>
      <button
        className="px-8 py-4 font-semibold text-orange-color transition bg-white border-2 border-orange-color rounded-lg hover:bg-orange-color hover:text-white hover:shadow-lg"
      >
        Learn More
      </button>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="px-8 py-12 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
  <div className="max-w-6xl mx-auto text-center space-y-6">
    <h2 className="text-xl font-semibold">Stay Connected</h2>
    <p className="text-sm text-gray-400">
      Follow us on social media for updates, inspiration, and mentorship tips!
    </p>
    <div className="flex justify-center space-x-6">
      <a
        href="#"
        className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300"
        aria-label="Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.672v-3.622h3.148V8.413c0-3.118 1.902-4.815 4.678-4.815 1.33 0 2.475.099 2.807.143v3.256h-1.923c-1.51 0-1.802.718-1.802 1.771v2.32h3.6l-.468 3.622h-3.132V24h6.144c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
        </svg>
      </a>
      <a
        href="#"
        className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300"
        aria-label="Twitter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.924-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.188 1.402 4.768 2.221 7.548 2.221 9.142 0 14.307-7.721 14.307-14.417 0-.219-.005-.436-.015-.653.983-.713 1.833-1.6 2.506-2.614z" />
        </svg>
      </a>
      <a
        href="#"
        className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300"
        aria-label="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M22.23 0H1.77C.79 0 0 .774 0 1.725v20.55C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.275V1.725C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.084h3.56v11.368zm-1.78-12.85c-1.14 0-2.06-.927-2.06-2.065a2.063 2.063 0 1 1 4.12 0c0 1.138-.92 2.065-2.06 2.065zm15.172 12.85h-3.56v-5.604c0-1.34-.026-3.062-1.865-3.062-1.865 0-2.152 1.454-2.152 2.959v5.707h-3.56V9.084h3.42v1.548h.05c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.268 2.368 4.268 5.452v6.218z" />
        </svg>
      </a>
    </div>
    <p className="text-xs text-gray-500">© 2024 MentorHub. All Rights Reserved.</p>
  </div>
</footer>

      </div>
    </>
  );
};

export default Home;
