'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Equipment() {
  const equipmentCategories = [
    {
      title: 'Essential Batting Equipment',
      icon: 'ri-sword-line',
      color: 'green',
      items: [
        {
          name: 'Cricket Bat',
          price: '$80 - $300',
          priority: 'Essential',
          description: 'Choose the right size and weight for your height and strength',
          features: ['English willow or Kashmir willow', 'Proper grip size', 'Weight between 2.7-3.1 lbs'],
          image: 'High quality cricket bat with leather grip standing against green grass background, professional sports equipment photography, detailed wood grain visible'
        },
        {
          name: 'Batting Gloves',
          price: '$25 - $80',
          priority: 'Essential',
          description: 'Protect your hands and improve grip during practice',
          features: ['Leather palm for better grip', 'Finger protection', 'Breathable back material'],
          image: 'Professional cricket batting gloves laid out on grass with cricket bat nearby, white leather gloves with protective padding, sports equipment photography'
        },
        {
          name: 'Batting Pads',
          price: '$40 - $120',
          priority: 'Recommended',
          description: 'Leg protection essential for facing bowling practice',
          features: ['Lightweight design', 'Comfortable straps', 'Proper knee roll placement'],
          image: 'Cricket batting pads and protective gear arranged on green field, white protective equipment with straps visible, professional sports photography'
        }
      ]
    },
    {
      title: 'Bowling Practice Gear',
      icon: 'ri-basketball-line',
      color: 'blue',
      items: [
        {
          name: 'Cricket Balls',
          price: '$15 - $40 each',
          priority: 'Essential',
          description: 'Different types for various practice needs',
          features: ['Leather balls for realistic practice', 'Tennis balls for beginners', 'Synthetic for durability'],
          image: 'Collection of cricket balls including leather red ball and tennis balls arranged on grass, different types of cricket balls for practice, sports equipment photography'
        },
        {
          name: 'Cricket Stumps Set',
          price: '$30 - $80',
          priority: 'Essential',
          description: 'Target practice and proper bowling technique development',
          features: ['Adjustable height', 'Easy setup design', 'Durable materials'],
          image: 'Cricket stumps set up on green grass field with bails in place, traditional wooden stumps with metal bails, cricket ground setup photography'
        },
        {
          name: 'Bowling Machine (Budget)',
          price: '$200 - $800',
          priority: 'Optional',
          description: 'Automated ball delivery for consistent practice',
          features: ['Adjustable speed settings', 'Consistent line and length', 'Easy ball loading'],
          image: 'Compact bowling machine on grass field with cricket balls nearby, modern training equipment for home practice, professional sports gear photography'
        }
      ]
    },
    {
      title: 'Fielding Training Tools',
      icon: 'ri-hand-heart-line',
      color: 'purple',
      items: [
        {
          name: 'Reaction Balls',
          price: '$10 - $25',
          priority: 'Recommended',
          description: 'Improve reflexes and hand-eye coordination',
          features: ['Unpredictable bounce pattern', 'Durable rubber construction', 'Various sizes available'],
          image: 'Colorful reaction balls with irregular shapes scattered on grass, unique bouncing training balls for cricket fielding practice, sports training equipment'
        },
        {
          name: 'Training Cones',
          price: '$15 - $30',
          priority: 'Useful',
          description: 'Mark boundaries and create practice circuits',
          features: ['Bright colors for visibility', 'Stackable design', 'Weather resistant'],
          image: 'Orange and yellow training cones arranged in pattern on grass field, sports training markers for cricket practice drills, athletic equipment photography'
        },
        {
          name: 'Agility Ladder',
          price: '$20 - $50',
          priority: 'Useful',
          description: 'Develop footwork and speed for better fielding',
          features: ['Adjustable rung spacing', 'Portable design', 'Durable construction'],
          image: 'Agility ladder laid out on grass with training cones nearby, yellow rope ladder for footwork drills, cricket training equipment setup'
        }
      ]
    },
    {
      title: 'Practice Setup Essentials',
      icon: 'ri-tools-line',
      color: 'orange',
      items: [
        {
          name: 'Cricket Net',
          price: '$100 - $400',
          priority: 'Highly Recommended',
          description: 'Contains balls and creates dedicated practice area',
          features: ['Various sizes available', 'Easy assembly', 'Weather resistant material'],
          image: 'Cricket practice net set up in backyard with green grass background, large protective netting for ball containment, home cricket training setup'
        },
        {
          name: 'Batting Tee',
          price: '$25 - $60',
          priority: 'Recommended',
          description: 'Perfect for technique practice and shot placement',
          features: ['Adjustable height', 'Stable base design', 'Easy ball placement'],
          image: 'Cricket batting tee with ball positioned on top, adjustable height practice equipment on grass field, batting training aid photography'
        },
        {
          name: 'Target Markers',
          price: '$20 - $40',
          priority: 'Useful',
          description: 'Improve accuracy in bowling and batting practice',
          features: ['Bright visibility', 'Various shapes and sizes', 'Easy placement'],
          image: 'Colorful target markers and circles placed on grass field for cricket practice accuracy drills, training aids for precision improvement'
        }
      ]
    }
  ];

  const budgetOptions = [
    {
      title: 'Starter Budget',
      amount: '$150 - $250',
      description: 'Essential items to begin home cricket practice',
      items: ['Basic cricket bat', 'Tennis balls (6 pack)', 'Simple stumps set', 'Basic batting gloves']
    },
    {
      title: 'Standard Setup',
      amount: '$300 - $500',
      description: 'Complete setup for serious home practice',
      items: ['Quality cricket bat', 'Leather cricket balls', 'Professional stumps', 'Batting gloves & pads', 'Practice net']
    },
    {
      title: 'Professional Setup',
      amount: '$600 - $1200',
      description: 'Advanced equipment for comprehensive training',
      items: ['Premium bat & gear', 'Bowling machine', 'Complete protective gear', 'Large practice net', 'Training aids']
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Essential': return 'bg-red-100 text-red-800';
      case 'Recommended': return 'bg-yellow-100 text-yellow-800';
      case 'Highly Recommended': return 'bg-green-100 text-green-800';
      case 'Useful': return 'bg-blue-100 text-blue-800';
      case 'Optional': return 'bg-gray-100 text-gray-800';
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Cricket%20equipment%20collection%20laid%20out%20on%20green%20grass%20including%20bat%2C%20balls%2C%20gloves%2C%20pads%20and%20stumps%2C%20professional%20sports%20gear%20arrangement%2C%20bright%20outdoor%20photography&width=1920&height=600&seq=equiphero&orientation=landscape')`
        }}
      >
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white\">
          <h1 className=\"text-4xl md:text-5xl font-bold mb-4\">
            Cricket Equipment Guide
          </h1>
          <p className=\"text-xl mb-8 max-w-2xl mx-auto\">
            Everything you need to set up your perfect home cricket practice area
          </p>
          <div className=\"flex flex-wrap justify-center gap-4\">
            <span className=\"bg-white/20 px-4 py-2 rounded-full text-sm font-medium\">Expert Recommendations</span>
            <span className=\"bg-white/20 px-4 py-2 rounded-full text-sm font-medium\">Budget Options</span>
            <span className=\"bg-white/20 px-4 py-2 rounded-full text-sm font-medium\">Quality Reviews</span>
          </div>
        </div>
      </section>

      {/* Budget Planning */}
      <section className=\"py-16 bg-green-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Budget Planning Guide
            </h2>
            <p className=\"text-xl text-gray-600\">Choose the setup that fits your needs and budget</p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
            {budgetOptions.map((option, index) => (
              <div key={index} className=\"bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow\">
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">{option.title}</h3>
                <div className=\"text-2xl font-bold text-green-600 mb-4\">{option.amount}</div>
                <p className=\"text-gray-600 mb-4\">{option.description}</p>
                <ul className=\"space-y-2\">
                  {option.items.map((item, itemIndex) => (
                    <li key={itemIndex} className=\"flex items-center text-sm text-gray-600\">
                      <i className=\"ri-check-line text-green-600 mr-2\"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className=\"py-16 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          {equipmentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`mb-16 ${categoryIndex !== equipmentCategories.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}>
              <div className=\"flex items-center mb-8\">
                <div className={`w-12 h-12 ${getCategoryColor(category.color)} rounded-full flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h2 className=\"text-2xl md:text-3xl font-bold text-gray-900\">{category.title}</h2>
              </div>

              <div className=\"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8\">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className=\"bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow\">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=$%7Bitem.image%7D&width=400&height=250&seq=${category.color}${itemIndex}&orientation=landscape`}
                      alt={item.name}
                      className=\"w-full h-48 object-cover object-top\"
                    />
                    <div className=\"p-6\">
                      <div className=\"flex items-center justify-between mb-3\">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                        <span className=\"text-lg font-bold text-green-600\">{item.price}</span>
                      </div>
                      
                      <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">{item.name}</h3>
                      <p className=\"text-gray-600 mb-4\">{item.description}</p>
                      
                      <div className=\"mb-4\">
                        <h4 className=\"font-medium text-gray-900 mb-2\">Key Features:</h4>
                        <ul className=\"space-y-1\">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                              <i className=\"ri-check-line text-green-600 mr-2 text-xs\"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className=\"flex space-x-2\">
                        <button className=\"flex-1 bg-green-600 text-white py-2 px-4 rounded-full font-medium hover:bg-green-700 transition-colors text-sm whitespace-nowrap cursor-pointer\">
                          View Options
                        </button>
                        <button className=\"flex-1 border-2 border-green-600 text-green-600 py-2 px-4 rounded-full font-medium hover:bg-green-600 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer\">
                          Compare
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Setup Tips */}
      <section className=\"py-16 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Equipment Setup Tips
            </h2>
            <p className=\"text-xl text-gray-600\">Make the most of your cricket equipment</p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-ruler-line text-blue-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Space Requirements</h3>
              <p className=\"text-gray-600\">Minimum 20x10 feet for basic setup. Ensure clear area around practice zone for safety.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-shield-check-line text-green-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Safety First</h3>
              <p className=\"text-gray-600\">Always wear protective gear. Check equipment condition regularly and replace worn items.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-tools-line text-purple-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Maintenance</h3>
              <p className=\"text-gray-600\">Clean and store equipment properly. Oil cricket bats regularly and check ball condition.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-money-dollar-circle-line text-orange-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Budget Tips</h3>
              <p className=\"text-gray-600\">Start with essentials and upgrade gradually. Consider buying good quality used equipment.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-weather-line text-red-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Weather Protection</h3>
              <p className=\"text-gray-600\">Store equipment in dry place. Consider weather-resistant options for outdoor storage.</p>
            </div>

            <div className=\"bg-white p-6 rounded-lg shadow-sm\">
              <div className=\"w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4\">
                <i className=\"ri-group-line text-teal-600 text-2xl\"></i>
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Family Setup</h3>
              <p className=\"text-gray-600\">Consider adjustable equipment for multiple users. Different sized bats for family members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=\"py-16 bg-gradient-to-br from-green-600 to-green-700 text-white\">
        <div className=\"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8\">
          <h2 className=\"text-3xl md:text-4xl font-bold mb-4\">
            Ready to Build Your Cricket Setup?
          </h2>
          <p className=\"text-xl text-green-100 mb-8\">
            Get personalized equipment recommendations and setup guidance
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Link href=\"/premium\" className=\"bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer\">
              Get Expert Advice
            </Link>
            <Link href=\"/guides\" className=\"border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer\">
              View Setup Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}