'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Drills() {
  const drillCategories = [
    {
      title: 'Batting Drills',
      icon: 'ri-sword-line',
      color: 'green',
      drills: [
        {
          name: 'Shadow Batting Practice',
          duration: '15-20 minutes',
          difficulty: 'Beginner',
          equipment: 'Cricket bat only',
          description: 'Practice your batting technique without a ball to perfect your form and muscle memory.',
          steps: ['Warm up with gentle stretching', 'Practice your stance and grip', 'Execute slow-motion shots', 'Focus on follow-through']
        },
        {
          name: 'Wall Ball Rebounds',
          duration: '20-25 minutes',
          difficulty: 'Intermediate',
          equipment: 'Cricket bat, tennis ball, wall',
          description: 'Use wall rebounds to improve hand-eye coordination and reaction time.',
          steps: ['Stand 3 feet from wall', 'Throw ball against wall', 'Hit rebounds with controlled shots', 'Gradually increase speed']
        },
        {
          name: 'Tee Batting Precision',
          duration: '25-30 minutes',
          difficulty: 'Beginner',
          equipment: 'Batting tee, cricket balls, target markers',
          description: 'Practice hitting specific areas to improve shot placement and accuracy.',
          steps: ['Set up tee at correct height', 'Place target markers', 'Practice different shot angles', 'Track accuracy percentage']
        }
      ]
    },
    {
      title: 'Bowling Drills',
      icon: 'ri-basketball-line',
      color: 'blue',
      drills: [
        {
          name: 'Target Circle Bowling',
          duration: '20-25 minutes',
          difficulty: 'Beginner',
          equipment: 'Cricket balls, target circles, stumps',
          description: 'Improve bowling accuracy by aiming at specific target areas consistently.',
          steps: ['Set up target circles', 'Mark your run-up', 'Bowl with consistent action', 'Record accuracy stats']
        },
        {
          name: 'One Step Bowling',
          duration: '15-20 minutes',
          difficulty: 'Beginner',
          equipment: 'Cricket balls, stumps',
          description: 'Focus on bowling action and accuracy without a full run-up.',
          steps: ['Take one step approach', 'Focus on arm action', 'Maintain consistent line', 'Gradually add pace']
        },
        {
          name: 'Yorker Length Practice',
          duration: '25-30 minutes',
          difficulty: 'Advanced',
          equipment: 'Cricket balls, stumps, length markers',
          description: 'Master the art of bowling yorkers consistently in the blockhole.',
          steps: ['Mark yorker length area', 'Practice slow yorkers first', 'Increase pace gradually', 'Vary angles slightly']
        }
      ]
    },
    {
      title: 'Fielding Drills',
      icon: 'ri-hand-heart-line',
      color: 'purple',
      drills: [
        {
          name: 'Solo Catching Practice',
          duration: '15-20 minutes',
          difficulty: 'Beginner',
          equipment: 'Tennis ball or cricket ball',
          description: 'Improve catching skills through self-toss and reaction exercises.',
          steps: ['Toss ball high above head', 'Practice different catch positions', 'Add movement between tosses', 'Try one-handed catches']
        },
        {
          name: 'Reaction Ball Training',
          duration: '20-25 minutes',
          difficulty: 'Intermediate',
          equipment: 'Reaction balls, wall',
          description: 'Enhance reflexes and hand-eye coordination with unpredictable bounces.',
          steps: ['Throw reaction ball at wall', 'React to unpredictable bounces', 'Practice diving catches', 'Increase throwing speed']
        },
        {
          name: 'Ground Fielding Circuits',
          duration: '25-30 minutes',
          difficulty: 'Intermediate',
          equipment: 'Cricket balls, cones, stumps',
          description: 'Complete circuit training for ground fielding and throwing accuracy.',
          steps: ['Set up cone circuit', 'Practice dive and collect', 'Quick release throws', 'Complete multiple rounds']
        }
      ]
    },
    {
      title: 'Fitness & Agility',
      icon: 'ri-run-line',
      color: 'orange',
      drills: [
        {
          name: 'Cricket Specific Warm-up',
          duration: '10-15 minutes',
          difficulty: 'Beginner',
          equipment: 'None required',
          description: 'Essential warm-up routine specifically designed for cricket movements.',
          steps: ['Light jogging in place', 'Arm circles and stretches', 'Leg swings and lunges', 'Practice cricket movements']
        },
        {
          name: 'Agility Ladder Drills',
          duration: '20-25 minutes',
          difficulty: 'Intermediate',
          equipment: 'Agility ladder or chalk marks',
          description: 'Improve footwork, speed, and coordination essential for cricket.',
          steps: ['Set up ladder pattern', 'Practice different step patterns', 'Increase speed gradually', 'Add cricket-specific movements']
        },
        {
          name: 'Balance and Stability',
          duration: '15-20 minutes',
          difficulty: 'Beginner',
          equipment: 'Balance board (optional)',
          description: 'Develop core strength and balance crucial for all cricket skills.',
          steps: ['Single leg balance holds', 'Practice batting stance balance', 'Add ball toss challenges', 'Close eyes for difficulty']
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
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-purple-500';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className=\"min-h-screen bg-white\">
      <Header />

      {/* Hero Section */}
      <section 
        className=\"relative py-20 bg-cover bg-center\"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Cricket%20training%20session%20in%20backyard%20with%20various%20equipment%20scattered%20around%20including%20cones%2C%20balls%2C%20stumps%20and%20practice%20nets%2C%20professional%20sports%20training%20setup%2C%20green%20grass%20background&width=1920&height=600&seq=drillshero&orientation=landscape')`
        }}
      >
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white\">
          <h1 className=\"text-4xl md:text-5xl font-bold mb-4\">
            Cricket Training Drills
          </h1>
          <p className=\"text-xl mb-8 max-w-2xl mx-auto\">
            Structured practice drills to enhance your cricket skills systematically at home
          </p>
          <div className=\"flex flex-wrap justify-center gap-4\">
            <span className=\"bg-white/20 px-4 py-2 rounded-full text-sm font-medium\">40+ Proven Drills</span>
            <span className=\"bg-white/20 px-4 py-2 rounded-full text-sm font-medium\">All Skill Levels</span>
            <span className=\"bg-white/20 px-4 py-2 rounded-full text-sm font-medium\">Minimal Equipment</span>
          </div>
        </div>
      </section>

      {/* Drills by Category */}
      <section className=\"py-16 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          {drillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`mb-16 ${categoryIndex !== drillCategories.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}>
              <div className=\"flex items-center mb-8\">
                <div className={`w-12 h-12 ${getCategoryColor(category.color)} rounded-full flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h2 className=\"text-2xl md:text-3xl font-bold text-gray-900\">{category.title}</h2>
              </div>

              <div className=\"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6\">
                {category.drills.map((drill, drillIndex) => (
                  <div key={drillIndex} className=\"bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow\">
                    <div className=\"flex items-center justify-between mb-4\">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(drill.difficulty)}`}>
                        {drill.difficulty}
                      </span>
                      <span className=\"text-sm text-gray-500 flex items-center\">
                        <i className=\"ri-time-line mr-1\"></i>
                        {drill.duration}
                      </span>
                    </div>

                    <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">{drill.name}</h3>
                    <p className=\"text-gray-600 mb-4\">{drill.description}</p>

                    <div className=\"mb-4\">
                      <h4 className=\"font-medium text-gray-900 mb-2 flex items-center\">
                        <i className=\"ri-tools-line mr-2 text-gray-500\"></i>
                        Equipment Needed
                      </h4>
                      <p className=\"text-sm text-gray-600\">{drill.equipment}</p>
                    </div>

                    <div className=\"mb-4\">
                      <h4 className=\"font-medium text-gray-900 mb-2 flex items-center\">
                        <i className=\"ri-list-check-line mr-2 text-gray-500\"></i>
                        Quick Steps
                      </h4>
                      <ol className=\"text-sm text-gray-600 space-y-1\">
                        {drill.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className=\"flex items-start\">
                            <span className=\"text-green-600 font-medium mr-2\">{stepIndex + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <button className=\"w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer\">
                      View Detailed Instructions
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Training Plan */}
      <section className=\"py-16 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Suggested Weekly Training Plan
            </h2>
            <p className=\"text-xl text-gray-600\">Structure your practice sessions for maximum improvement</p>
          </div>

          <div className=\"bg-gray-50 rounded-lg p-8\">
            <div className=\"grid grid-cols-1 md:grid-cols-7 gap-4\">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                <div key={day} className={`p-4 rounded-lg ${index === 6 ? 'bg-blue-100 border-blue-200' : 'bg-white'} border`}>
                  <h3 className=\"font-semibold text-gray-900 mb-2\">{day}</h3>
                  {index === 0 && <p className=\"text-sm text-gray-600\">Batting Drills + Fitness</p>}
                  {index === 1 && <p className=\"text-sm text-gray-600\">Bowling Practice</p>}
                  {index === 2 && <p className=\"text-sm text-gray-600\">Fielding Skills</p>}
                  {index === 3 && <p className=\"text-sm text-gray-600\">Mixed Practice</p>}
                  {index === 4 && <p className=\"text-sm text-gray-600\">Technique Focus</p>}
                  {index === 5 && <p className=\"text-sm text-gray-600\">Full Session</p>}
                  {index === 6 && <p className=\"text-sm text-blue-600 font-medium\">Rest Day</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className=\"py-16 bg-green-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Training Tips for Success
            </h2>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-time-line text-green-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Consistency is Key</h3>
              <p className=\"text-gray-600\">Regular short sessions are more effective than occasional long ones. Aim for 20-30 minutes daily.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-focus-line text-blue-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Quality Over Quantity</h3>
              <p className=\"text-gray-600\">Focus on perfect technique rather than speed. Build muscle memory through deliberate practice.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-line-chart-line text-purple-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Track Progress</h3>
              <p className=\"text-gray-600\">Keep a training journal to monitor improvement and identify areas that need more work.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}