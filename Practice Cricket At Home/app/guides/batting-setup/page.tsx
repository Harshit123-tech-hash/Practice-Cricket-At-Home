'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function BattingSetupGuide() {
  const setupSteps = [
    {
      step: 1,
      title: 'Choose Your Practice Area',
      description: 'Find a suitable space in your backyard or indoor area',
      details: [
        'Minimum 20 feet length for batting practice',
        'Clear area free from windows and obstacles',
        'Level ground surface preferred',
        'Consider safety zones around practice area'
      ],
      tips: 'Mark boundaries with cones or chalk lines for consistent setup'
    },
    {
      step: 2,
      title: 'Set Up Your Batting Tee',
      description: 'Position the tee at the correct height and location',
      details: [
        'Adjust tee height to your comfortable batting stance',
        'Position tee where ball would be in your hitting zone',
        'Ensure stable base that won\'t move during practice',
        'Test different positions for various shot types'
      ],
      tips: 'Start with tee at waist height and adjust based on comfort'
    },
    {
      step: 3,
      title: 'Create Target Areas',
      description: 'Set up target zones to practice shot placement',
      details: [
        'Use cones or markers to create target areas',
        'Position targets at realistic field positions',
        'Create both ground and aerial target zones',
        'Start with larger targets and gradually make them smaller'
      ],
      tips: 'Use different colored markers for different shot types'
    },
    {
      step: 4,
      title: 'Safety Setup',
      description: 'Ensure safe practice environment',
      details: [
        'Install practice net behind target area',
        'Wear appropriate protective gear',
        'Keep spare balls readily accessible',
        'Have first aid kit nearby'
      ],
      tips: 'Always warm up before starting batting practice'
    }
  ];

  const equipmentList = [
    { item: 'Cricket Bat', priority: 'Essential', price: '$80-300' },
    { item: 'Batting Tee', priority: 'Essential', price: '$25-60' },
    { item: 'Cricket Balls (6 pack)', priority: 'Essential', price: '$30-50' },
    { item: 'Practice Net', priority: 'Recommended', price: '$100-400' },
    { item: 'Target Markers', priority: 'Useful', price: '$20-40' },
    { item: 'Batting Gloves', priority: 'Recommended', price: '$25-80' },
    { item: 'Protective Gear', priority: 'Essential', price: '$100-200' }
  ];

  const drillExamples = [
    {
      name: 'Basic Tee Batting',
      duration: '15-20 minutes',
      description: 'Focus on fundamental batting technique using the tee',
      steps: [
        'Set up in proper batting stance',
        'Practice slow, controlled swings',
        'Focus on keeping head still and eyes on ball',
        'Follow through completely',
        'Repeat 20 times, focusing on form'
      ]
    },
    {
      name: 'Target Practice',
      duration: '20-25 minutes',
      description: 'Improve shot placement and accuracy',
      steps: [
        'Place targets at different field positions',
        'Aim for specific targets with each shot',
        'Vary bat angle and swing direction',
        'Track accuracy percentage',
        'Gradually reduce target size'
      ]
    },
    {
      name: 'Shot Variation Practice',
      duration: '25-30 minutes',
      description: 'Practice different types of cricket shots',
      steps: [
        'Start with straight drives',
        'Practice cover drives and square cuts',
        'Work on pull and hook shots',
        'Practice defensive shots',
        'Combine different shots in sequence'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Cricket%20batting%20practice%20setup%20in%20home%20backyard%20with%20batting%20tee%20and%20cricket%20balls%20scattered%20around%2C%20green%20grass%20background%2C%20professional%20sports%20equipment%20photography%2C%20bright%20daylight%2C%20detailed%20setup%20view&width=1920&height=600&seq=battingsetup&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Home Batting Practice Setup Guide
            </h1>
            <p className="text-xl mb-6">
              Create the perfect batting practice area in your backyard with this comprehensive step-by-step guide
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Beginner Friendly</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">15 min read</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Batting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Setup Process</h2>
            <p className="text-xl text-gray-600">Follow these steps to create your ideal batting practice area</p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Points:</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                            <i className="ri-check-line text-green-600 mr-2 mt-0.5 text-xs"></i>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-start">
                        <i className="ri-lightbulb-line text-green-600 mr-2 mt-0.5"></i>
                        <div className="text-sm text-green-800">
                          <strong>Pro Tip:</strong> {step.tips}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Needed */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment You'll Need</h2>
            <p className="text-xl text-gray-600">Essential and recommended equipment for your batting practice setup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentList.map((equipment, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{equipment.item}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    equipment.priority === 'Essential' ? 'bg-red-100 text-red-800' :
                    equipment.priority === 'Recommended' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {equipment.priority}
                  </span>
                </div>
                <div className="text-lg font-bold text-green-600">{equipment.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/equipment" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
              View Equipment Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Drills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Drills to Get Started</h2>
            <p className="text-xl text-gray-600">Once your setup is complete, try these effective batting drills</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {drillExamples.map((drill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{drill.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <i className="ri-time-line mr-1"></i>
                    {drill.duration}
                  </div>
                  <p className="text-gray-600">{drill.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Steps:</h4>
                  <ol className="space-y-1">
                    {drill.steps.map((step, stepIndex) => (
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

          <div className="text-center mt-8">
            <Link href="/drills" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
              View More Drills
            </Link>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Tips</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-time-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consistency is Key</h3>
              <p className="text-gray-600">Practice regularly, even if just for 15-20 minutes daily. Consistent practice builds muscle memory.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-focus-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus on Technique</h3>
              <p className="text-gray-600">Prioritize correct form over power. Good technique forms the foundation for all cricket shots.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-bar-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600">Keep notes on your practice sessions and track improvement in accuracy and technique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Set Up Your Practice Area?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get personalized advice and additional resources to perfect your setup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Get Expert Guidance
            </Link>
            <Link href="/guides" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
              More Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}