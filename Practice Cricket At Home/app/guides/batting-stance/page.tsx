'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function BattingStanceGuide() {
  const stanceElements = [
    {
      title: 'Foot Positioning',
      description: 'Foundation of a proper batting stance',
      details: [
        'Stand with feet shoulder-width apart',
        'Front foot pointing toward bowler',
        'Back foot parallel to crease',
        'Weight evenly distributed on both feet',
        'Slight bend in knees for flexibility'
      ],
      commonMistakes: ['Standing too narrow or wide', 'Pointing back foot toward bowler', 'Keeping legs too straight']
    },
    {
      title: 'Bat Grip Technique',
      description: 'How to hold the bat for maximum control',
      details: [
        'Form V-shape with thumbs and index fingers',
        'Both Vs should point toward right shoulder',
        'Grip firmly but not too tight',
        'Hands close together on handle',
        'Top hand controls direction, bottom hand provides power'
      ],
      commonMistakes: ['Gripping too tightly', 'Hands too far apart', 'Vs not aligned properly']
    },
    {
      title: 'Body Position',
      description: 'Correct body alignment for effective batting',
      details: [
        'Stand sideways to the bowler',
        'Head still and eyes level',
        'Shoulders aligned with bat',
        'Slight forward lean toward bowler',
        'Relaxed but alert posture'
      ],
      commonMistakes: ['Facing bowler too square', 'Tilting head', 'Tense shoulders']
    },
    {
      title: 'Bat Position',
      description: 'Where to hold your bat before the ball arrives',
      details: [
        'Bat held high behind back pad',
        'Blade of bat facing bowler',
        'Elbow of top hand raised',
        'Bat close to back leg',
        'Ready to move forward or back'
      ],
      commonMistakes: ['Holding bat too low', 'Bat too far from body', 'Bottom hand dominant']
    }
  ];

  const practiceRoutines = [
    {
      name: 'Mirror Practice',
      duration: '10-15 minutes',
      description: 'Perfect your stance using a mirror or reflection',
      steps: [
        'Stand in front of a mirror or window',
        'Practice taking your stance repeatedly',
        'Check each element: feet, grip, body position',
        'Hold stance for 30 seconds each time',
        'Make corrections and repeat'
      ],
      equipment: 'Cricket bat, mirror or window'
    },
    {
      name: 'Shadow Batting',
      duration: '15-20 minutes',
      description: 'Practice stance and basic shots without a ball',
      steps: [
        'Take your batting stance',
        'Practice lifting the bat slowly',
        'Execute different shots in slow motion',
        'Focus on maintaining stance throughout',
        'Return to original stance position'
      ],
      equipment: 'Cricket bat only'
    },
    {
      name: 'Wall Stance Practice',
      duration: '10-15 minutes',
      description: 'Use a wall to ensure proper back foot alignment',
      steps: [
        'Stand with your back foot against a wall',
        'Take your batting stance',
        'Ensure back foot stays against wall',
        'Practice small bat movements',
        'Check that stance remains consistent'
      ],
      equipment: 'Cricket bat, wall space'
    }
  ];

  const gripTypes = [
    {
      name: 'Orthodox Grip',
      description: 'Most common grip for right-handed batsmen',
      suitedFor: 'Most batting situations',
      advantages: ['Good all-around control', 'Natural hand position', 'Easy to learn'],
      image: 'Cricket batsman demonstrating orthodox grip on bat handle with proper hand positioning, close-up view of hands on cricket bat grip, instructional sports photography'
    },
    {
      name: 'Strong Grip',
      description: 'Hands rotated more to the right on handle',
      suitedFor: 'Attacking shots, leg side play',
      advantages: ['More power on leg side', 'Good for aggressive batting', 'Natural for some players'],
      image: 'Cricket batting strong grip demonstration with hands positioned for power shots, detailed view of bat handle grip technique, professional sports instruction'
    },
    {
      name: 'Weak Grip',
      description: 'Hands rotated more to the left on handle',
      suitedFor: 'Off side play, defensive shots',
      advantages: ['Better off side control', 'Good for precise placement', 'Easier defensive play'],
      image: 'Cricket batting weak grip showing precise hand placement for off side shots, technical batting grip instruction, professional cricket coaching photography'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Cricket%20batsman%20demonstrating%20proper%20batting%20stance%20and%20grip%20in%20garden%20setting%2C%20cricket%20bat%20and%20protective%20gear%20visible%2C%20professional%20sports%20instruction%20photography%2C%20detailed%20stance%20demonstration&width=1920&height=600&seq=battingstance&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Stance and Grip Fundamentals
            </h1>
            <p className="text-xl mb-6">
              Master the foundation of cricket batting with proper stance and grip technique
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Beginner Essential</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">12 min read</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Batting Fundamentals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stance Elements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Stance Elements</h2>
            <p className="text-xl text-gray-600">Master each component for a solid batting foundation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stanceElements.map((element, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-gray-600 mb-4">{element.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Key Points:
                  </h4>
                  <ul className="space-y-1">
                    {element.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2 flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    Avoid These Mistakes:
                  </h4>
                  <ul className="space-y-1">
                    {element.commonMistakes.map((mistake, mistakeIndex) => (
                      <li key={mistakeIndex} className="flex items-start text-sm text-red-700">
                        <span className="text-red-600 mr-2">×</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grip Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cricket Grips</h2>
            <p className="text-xl text-gray-600">Choose the right grip for your batting style</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gripTypes.map((grip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bgrip.image%7D&width=400&height=250&seq=grip${index}&orientation=landscape`}
                  alt={grip.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{grip.name}</h3>
                  <p className="text-gray-600 mb-3">{grip.description}</p>
                  
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-900 mb-1">Best for:</div>
                    <div className="text-sm text-gray-600">{grip.suitedFor}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Advantages:</div>
                    <ul className="space-y-1">
                      {grip.advantages.map((advantage, advantageIndex) => (
                        <li key={advantageIndex} className="flex items-start text-sm text-gray-600">
                          <i className="ri-check-line text-green-600 mr-1 mt-0.5 text-xs"></i>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Routines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Routines</h2>
            <p className="text-xl text-gray-600">Drills to perfect your stance and grip at home</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {practiceRoutines.map((routine, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{routine.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <i className="ri-time-line mr-1"></i>
                    {routine.duration}
                  </div>
                  <p className="text-gray-600 mb-3">{routine.description}</p>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Equipment:</strong> {routine.equipment}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Steps:</h4>
                  <ol className="space-y-1">
                    {routine.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-600 font-medium mr-2">{stepIndex + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pre-Shot Checklist</h2>
            <p className="text-xl text-gray-600">Use this checklist before every shot</p>
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <i className="ri-checkbox-line text-green-600 mr-2"></i>
                  Stance Check
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Feet shoulder-width apart
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Weight evenly distributed
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Knees slightly bent
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Sideways to bowler
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <i className="ri-checkbox-line text-green-600 mr-2"></i>
                  Grip & Bat Check
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    V-shape with thumbs aligned
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Comfortable grip pressure
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Bat held high behind pad
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-gray-400 mr-2"></i>
                    Top hand elbow raised
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Your Batting Foundation
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Take your stance and grip to the next level with personalized coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Get Personal Coaching
            </Link>
            <Link href="/guides" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
              More Batting Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}