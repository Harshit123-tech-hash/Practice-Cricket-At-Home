
'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: 'ri-home-heart-line',
      title: 'Practice at Home',
      description: 'Learn cricket techniques and skills from your backyard or indoor space with our detailed guides.'
    },
    {
      icon: 'ri-video-line',
      title: 'Video Tutorials',
      description: 'Step-by-step video instructions for batting, bowling, and fielding techniques.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Skill Assessment',
      description: 'Track your progress with our comprehensive skill evaluation system.'
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Coaching',
      description: 'Get guidance from professional cricket coaches and former international players.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Cricket Enthusiast',
      comment: 'This platform helped me improve my batting technique significantly. The home practice drills are fantastic!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Parent & Coach',
      comment: 'Perfect for teaching my kids cricket basics. The premium content is worth every penny.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Club Player',
      comment: 'The bowling techniques section transformed my game. Highly recommend the premium membership.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Cricket%20player%20practicing%20batting%20stance%20in%20a%20beautiful%20green%20garden%20backyard%20setting%20with%20cricket%20equipment%2C%20sunny%20day%2C%20professional%20sports%20photography%2C%20clean%20minimal%20background%20with%20grass%20and%20trees%2C%20high%20quality%20detailed%20image&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master Cricket Skills at Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your backyard into a cricket training ground. Learn from professional coaches with comprehensive guides, drills, and personalized training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                Start Learning Today
              </Link>
              <Link href="/premium" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center whitespace-nowrap cursor-pointer">
                Go Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cricket training resources designed for home practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-green-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Practice Guides
            </h2>
            <p className="text-xl text-gray-600">Master these essential cricket skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Cricket%20batting%20practice%20setup%20in%20home%20backyard%20with%20batting%20tee%20and%20cricket%20balls%20scattered%20around%2C%20green%20grass%20background%2C%20professional%20sports%20equipment%20photography%2C%20bright%20daylight&width=400&height=250&seq=guide1&orientation=landscape"
                alt="Batting Practice"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Batting</span>
                  <span className="ml-2 text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Batting Practice Setup</h3>
                <p className="text-gray-600 mb-4">Learn how to create an effective batting practice area in your backyard with minimal equipment.</p>
                <Link href="/guides/batting-setup" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Cricket%20bowling%20practice%20with%20cricket%20stumps%20and%20bowling%20machine%20in%20garden%20setting%2C%20green%20lawn%20background%2C%20cricket%20training%20equipment%2C%20professional%20sports%20photography&width=400&height=250&seq=guide2&orientation=landscape"
                alt="Bowling Practice"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Bowling</span>
                  <span className="ml-2 text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bowling Accuracy Drills</h3>
                <p className="text-gray-600 mb-4">Improve your bowling precision with these effective home practice drills and techniques.</p>
                <Link href="/guides/bowling-drills" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Cricket%20fielding%20practice%20with%20cones%20and%20cricket%20balls%20on%20grass%20field%2C%20training%20equipment%20setup%20for%20catching%20drills%2C%20outdoor%20sports%20practice%20scene&width=400&height=250&seq=guide3&orientation=landscape"
                alt="Fielding Practice"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Fielding</span>
                  <span className="ml-2 text-sm text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Catching & Fielding Skills</h3>
                <p className="text-gray-600 mb-4">Enhance your fielding abilities with solo practice routines you can do anywhere.</p>
                <Link href="/guides/fielding-skills" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/guides" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unlock Premium Cricket Training
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get access to exclusive content, personalized training plans, and one-on-one coaching sessions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-video-chat-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Coaching Sessions</h3>
                <p className="text-green-100">Weekly live sessions with professional coaches</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-file-list-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
                <p className="text-green-100">Custom training programs based on your skill level</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-download-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Offline Access</h3>
                <p className="text-green-100">Download guides and videos for offline practice</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/premium" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">Success stories from cricket enthusiasts worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Cricket Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of cricket enthusiasts who are improving their game from home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
              Explore Free Guides
            </Link>
            <Link href="/premium" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Try Premium Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
