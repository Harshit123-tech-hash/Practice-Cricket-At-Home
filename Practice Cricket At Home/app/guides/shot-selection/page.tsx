'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ShotSelectionGuide() {
  const shotTypes = [
    {
      name: 'Defensive Shots',
      category: 'Defense',
      color: 'blue',
      description: 'Protect your wicket and build your innings',
      shots: [
        {
          name: 'Forward Defense',
          when: 'Good length balls on or outside off stump',
          technique: 'Step forward, head over ball, soft hands',
          practice: 'Use batting tee, focus on dead bat technique'
        },
        {
          name: 'Back Defense',
          when: 'Short of length deliveries',
          technique: 'Step back, get behind the line, play with soft hands',
          practice: 'Practice against wall rebounds'
        },
        {
          name: 'Leave',
          when: 'Wide balls outside off stump',
          technique: 'Lift bat high, watch ball into keeper\'s gloves',
          practice: 'Practice judgment with thrown balls'
        }
      ]
    },
    {
      name: 'Attacking Shots',
      category: 'Attack',
      color: 'red',
      description: 'Score runs and put pressure on bowlers',
      shots: [
        {
          name: 'Straight Drive',
          when: 'Full balls on middle/off stump',
          technique: 'Step to the pitch, high elbow, full follow through',
          practice: 'Use batting tee, focus on timing and placement'
        },
        {
          name: 'Cover Drive',
          when: 'Full balls outside off stump',
          technique: 'Step across and forward, hit through the line',
          practice: 'Target practice with cones in cover region'
        },
        {
          name: 'Pull Shot',
          when: 'Short balls on body/leg stump',
          technique: 'Quick feet, pivot on back foot, horizontal bat',
          practice: 'Use tennis balls thrown short'
        }
      ]
    },
    {
      name: 'Placement Shots',
      category: 'Rotation',
      color: 'green',
      description: 'Rotate strike and find gaps in the field',
      shots: [
        {
          name: 'Leg Glance',
          when: 'Balls on leg stump line',
          technique: 'Close bat face, use wrists, guide to leg side',
          practice: 'Practice with balls fed to leg side'
        },
        {
          name: 'Cut Shot',
          when: 'Short wide balls outside off',
          technique: 'Step back, horizontal bat, hit square',
          practice: 'Use reaction balls for timing'
        },
        {
          name: 'Nudge to Third Man',
          when: 'Balls just outside off stump',
          technique: 'Open bat face late, soft hands',
          practice: 'Practice fine placement with target zones'
        }
      ]
    }
  ];

  const decisionFactors = [
    {
      factor: 'Ball Length',
      icon: 'ri-ruler-line',
      description: 'The most important factor in shot selection',
      guidelines: [
        'Full balls - Drive shots or defensive blocks',
        'Good length - Defensive shots or careful attacking',
        'Short balls - Pull, cut, or hook shots',
        'Yorkers - Dig out or flick to leg side'
      ]
    },
    {
      factor: 'Ball Line',
      icon: 'ri-compass-line',
      description: 'Where the ball is pitched determines shot options',
      guidelines: [
        'Off stump line - Drives, cuts, or defensive shots',
        'Middle stump - Straight drives or leg side shots',
        'Leg stump - Flicks, glances, or pulls',
        'Wide outside off - Cut shots or leave alone'
      ]
    },
    {
      factor: 'Field Placement',
      icon: 'ri-team-line',
      description: 'Look for gaps in the field setting',
      guidelines: [
        'Attacking fields - Look for quick singles',
        'Defensive fields - Find gaps for boundaries',
        'Leg side heavy - Play through off side',
        'Off side packed - Work the leg side'
      ]
    },
    {
      factor: 'Match Situation',
      icon: 'ri-time-line',
      description: 'Game context affects shot choice',
      guidelines: [
        'Early innings - Build foundation with defense',
        'Middle overs - Rotate strike and find boundaries',
        'Death overs - Maximize scoring opportunities',
        'Chasing target - Calculate required run rate'
      ]
    }
  ];

  const practiceScenarios = [
    {
      scenario: 'Building an Innings',
      situation: 'Early in your batting, bowlers are fresh',
      approach: 'Focus on defensive shots and selective attacking',
      shots: ['Forward defense', 'Back defense', 'Straight drive', 'Leg glance'],
      practice: 'Spend 70% time on defensive shots, 30% on safe attacking shots'
    },
    {
      scenario: 'Accelerating',
      situation: 'You\'re set and looking to score',
      approach: 'Identify scoring opportunities and execute confidently',
      shots: ['Cover drive', 'Pull shot', 'Cut shot', 'Lofted drives'],
      practice: 'Practice shot selection drills with different ball lengths'
    },
    {
      scenario: 'Tight Game',
      situation: 'Close match requiring careful batting',
      approach: 'Singles and twos, avoid unnecessary risks',
      shots: ['Nudges', 'Glances', 'Soft hands', 'Quick singles'],
      practice: 'Practice placement shots with specific target areas'
    },
    {
      scenario: 'Pressure Situation',
      situation: 'Need quick runs or under pressure',
      approach: 'Balance aggression with calculated risks',
      shots: ['Boundary shots', 'Innovative shots', 'Power hitting'],
      practice: 'Practice under time pressure with specific targets'
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'red': return 'bg-red-100 text-red-800 border-red-200';
      case 'green': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Cricket%20player%20executing%20various%20batting%20shots%20in%20home%20practice%20area%2C%20multiple%20cricket%20balls%20and%20wickets%20setup%2C%20action%20sports%20photography%20showing%20shot%20selection%20techniques&width=1920&height=600&seq=shotselection&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shot Selection Mastery
            </h1>
            <p className="text-xl mb-6">
              Learn when and how to play different cricket shots for maximum effectiveness
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">20 min read</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Advanced Batting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shot Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cricket Shot Categories</h2>
            <p className="text-xl text-gray-600">Understanding different types of shots and when to use them</p>
          </div>

          {shotTypes.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`mb-12 ${categoryIndex !== shotTypes.length - 1 ? 'border-b border-gray-200 pb-12' : ''}`}>
              <div className="flex items-center mb-6">
                <div className={`px-4 py-2 rounded-full border-2 ${getColorClass(category.color)} mr-4`}>
                  <span className="font-semibold">{category.category}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.shots.map((shot, shotIndex) => (
                  <div key={shotIndex} className="bg-white rounded-lg shadow-sm border p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{shot.name}</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">When to use:</div>
                        <div className="text-sm text-gray-600">{shot.when}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">Technique:</div>
                        <div className="text-sm text-gray-600">{shot.technique}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">Practice tip:</div>
                        <div className="text-sm text-green-700">{shot.practice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Factors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Decision Factors</h2>
            <p className="text-xl text-gray-600">Consider these factors when choosing your shot</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisionFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className={`${factor.icon} text-green-600 text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{factor.factor}</h3>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {factor.guidelines.map((guideline, guideIndex) => (
                    <li key={guideIndex} className="flex items-start text-sm text-gray-700">
                      <i className="ri-arrow-right-line text-green-600 mr-2 mt-0.5 text-xs"></i>
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Scenarios</h2>
            <p className="text-xl text-gray-600">Train for different match situations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practiceScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{scenario.scenario}</h3>
                <p className="text-gray-600 mb-4">{scenario.situation}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Approach:</div>
                  <div className="text-sm text-gray-700 mb-3">{scenario.approach}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Key shots:</div>
                  <div className="flex flex-wrap gap-2">
                    {scenario.shots.map((shot, shotIndex) => (
                      <span key={shotIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {shot}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-800 mb-1">Practice focus:</div>
                  <div className="text-sm text-blue-700">{scenario.practice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Tree */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shot Selection Decision Tree</h2>
            <p className="text-xl text-gray-600">Quick reference for shot choice</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                Ball Delivered
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg mb-3 font-medium">
                  Full Ball
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Straight drive</li>
                  <li>• Cover drive</li>
                  <li>• On drive</li>
                  <li>• Defensive block</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg mb-3 font-medium">
                  Good Length
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Forward defense</li>
                  <li>• Back defense</li>
                  <li>• Leave (if wide)</li>
                  <li>• Careful drive</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg mb-3 font-medium">
                  Short Ball
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Pull shot</li>
                  <li>• Hook shot</li>
                  <li>• Cut shot</li>
                  <li>• Back defense</li>
                </ul>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Remember: Consider line, field placement, and match situation</p>
              <p>Always prioritize playing with a straight bat when possible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Drills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shot Selection Drills</h2>
            <p className="text-xl text-gray-600">Improve your decision-making skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Length Recognition Drill</h3>
              <div className="text-sm text-gray-600 mb-3">Practice identifying ball length and choosing appropriate shot</div>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Have someone feed balls at different lengths</li>
                <li>• Call out length before choosing shot</li>
                <li>• Execute appropriate shot for each length</li>
                <li>• Track accuracy of length recognition</li>
              </ul>
              <div className="text-xs text-green-700">Duration: 20-25 minutes</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Field Placement Awareness</h3>
              <div className="text-sm text-gray-600 mb-3">Practice finding gaps in different field settings</div>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Set up cones as fielders</li>
                <li>• Practice hitting into gaps</li>
                <li>• Change field settings regularly</li>
                <li>• Focus on shot selection based on field</li>
              </ul>
              <div className="text-xs text-green-700">Duration: 25-30 minutes</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pressure Situation Practice</h3>
              <div className="text-sm text-gray-600 mb-3">Simulate match pressure and practice shot selection</div>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Set specific targets (runs needed)</li>
                <li>• Practice under time pressure</li>
                <li>• Make decisions quickly</li>
                <li>• Focus on high-percentage shots</li>
              </ul>
              <div className="text-xs text-green-700">Duration: 20-25 minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Shot Selection
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Take your batting intelligence to the next level with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Get Advanced Training
            </Link>
            <Link href="/drills" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Practice Drills
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}