
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Guides() {
  const categories = [
    {
      id: 'batting',
      title: 'Batting Techniques',
      description: 'Master your batting skills with comprehensive guides',
      icon: 'ri-sword-line',
      color: 'green',
      guides: [
        {
          title: 'Home Batting Practice Setup',
          description: 'Create the perfect batting practice area in your backyard',
          readTime: '15 min',
          difficulty: 'Beginner',
          link: '/guides/batting-setup',
          image: 'Cricket batting practice setup in home backyard with batting tee and cricket balls scattered around, green grass background, professional sports equipment photography, bright daylight'
        },
        {
          title: 'Stance and Grip Fundamentals',
          description: 'Perfect your batting stance and grip technique',
          readTime: '12 min',
          difficulty: 'Beginner',
          link: '/guides/batting-stance',
          image: 'Cricket batsman demonstrating proper batting stance and grip in garden setting, cricket bat and protective gear visible, professional sports instruction photography'
        },
        {
          title: 'Shot Selection Mastery',
          description: 'Learn when and how to play different cricket shots',
          readTime: '20 min',
          difficulty: 'Intermediate',
          link: '/guides/shot-selection',
          image: 'Cricket player executing various batting shots in home practice area, multiple cricket balls and wickets setup, action sports photography'
        }
      ]
    },
    {
      id: 'bowling',
      title: 'Bowling Techniques',
      description: 'Improve your bowling accuracy and speed',
      icon: 'ri-basketball-line',
      color: 'blue',
      guides: [
        {
          title: 'Bowling Accuracy Drills',
          description: 'Precision drills to improve your bowling accuracy',
          readTime: '18 min',
          difficulty: 'Beginner',
          link: '/guides/bowling-accuracy',
          image: 'Cricket bowling practice with cricket stumps and bowling machine in garden setting, green lawn background, cricket training equipment, professional sports photography'
        },
        {
          title: 'Spin Bowling Techniques',
          description: 'Master the art of spin bowling at home',
          readTime: '25 min',
          difficulty: 'Advanced',
          link: '/guides/spin-bowling',
          image: 'Cricket bowler practicing spin bowling technique in backyard with cricket ball and stumps, detailed hand position demonstration, instructional sports photography'
        },
        {
          title: 'Pace Bowling Fundamentals',
          description: 'Build speed and accuracy in your pace bowling',
          readTime: '22 min',
          difficulty: 'Intermediate',
          link: '/guides/pace-bowling',
          image: 'Cricket fast bowler in action during home practice session, cricket equipment and nets visible in background, dynamic sports photography'
        }
      ]
    },
    {
      id: 'fielding',
      title: 'Fielding Skills',
      description: 'Enhance your fielding and catching abilities',
      icon: 'ri-hand-heart-line',
      color: 'purple',
      guides: [
        {
          title: 'Catching & Fielding Skills',
          description: 'Solo practice routines for better fielding',
          readTime: '16 min',
          difficulty: 'Beginner',
          link: '/guides/fielding-skills',
          image: 'Cricket fielding practice with cones and cricket balls on grass field, training equipment setup for catching drills, outdoor sports practice scene'
        },
        {
          title: 'Ground Fielding Techniques',
          description: 'Master ground fielding and ball collection',
          readTime: '14 min',
          difficulty: 'Beginner',
          link: '/guides/ground-fielding',
          image: 'Cricket player practicing ground fielding positions with cricket balls arranged on grass, professional fielding instruction photography'
        },
        {
          title: 'Wicket Keeping Basics',
          description: 'Learn wicket keeping skills for home practice',
          readTime: '20 min',
          difficulty: 'Intermediate',
          link: '/guides/wicket-keeping',
          image: 'Cricket wicket keeper in practice gear behind stumps with gloves and protective equipment, backyard cricket setup, instructional sports photography'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (color: string) => {
    switch(color) {
      case 'green': return 'bg-green-100 text-green-600 border-green-200';
      case 'blue': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'purple': return 'bg-purple-100 text-purple-600 border-purple-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cricket Practice Guides
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Comprehensive step-by-step guides to master cricket skills from home
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">50+ Detailed Guides</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Video Tutorials</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Expert Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, index) => (
            <div key={category.id} className={`mb-16 ${index !== categories.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}>
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getCategoryColor(category.color)}`}>
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.guides.map((guide, guideIndex) => (
                  <div key={guideIndex} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=${guide.image}&width=400&height=250&seq=${category.id}${guideIndex}&orientation=landscape`}
                      alt={guide.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(guide.difficulty)}`}>
                          {guide.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      {guide.link ? (
                        <Link href={guide.link} className="text-green-600 font-medium hover:text-green-700 cursor-pointer whitespace-nowrap">
                          Read Guide →
                        </Link>
                      ) : (
                        <button className="text-green-600 font-medium hover:text-green-700 cursor-pointer whitespace-nowrap">
                          Read Guide →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">Everything you need for successful home practice</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-play-circle-line text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch detailed video demonstrations for each technique</p>
              <Link href="/premium" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">
                Watch Videos →
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-download-line text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Downloadable PDFs</h3>
              <p className="text-gray-600 mb-4">Get offline access to all guides and practice sheets</p>
              <Link href="/premium" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">
                Download →
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-user-star-line text-purple-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Coaching</h3>
              <p className="text-gray-600 mb-4">Get personalized feedback from professional coaches</p>
              <Link href="/premium" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">
                Get Coaching →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Your Skills Further?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Unlock premium content with personalized training plans and expert coaching
          </p>
          <Link href="/premium" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Explore Premium Features
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
