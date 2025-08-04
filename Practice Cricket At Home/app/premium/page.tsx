'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started with premium features',
      features: [
        'All premium video tutorials',
        'Personalized training plans',
        'Monthly live coaching sessions',
        'Progress tracking tools',
        'Offline guide downloads',
        'Priority email support',
        'Community forum access'
      ],
      popular: false
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      price: '$199',
      period: '/year',
      originalPrice: '$348',
      description: 'Best value with 43% savings and exclusive benefits',
      features: [
        'Everything in Monthly Plan',
        'Weekly live coaching sessions',
        'One-on-one video analysis',
        'Custom equipment recommendations',
        'Exclusive masterclass access',
        'Priority phone support',
        '14-day money back guarantee'
      ],
      popular: true
    },
    {
      id: 'lifetime',
      name: 'Lifetime Access',
      price: '$599',
      period: 'one-time',
      description: 'Complete cricket mastery with lifetime benefits',
      features: [
        'Everything in Annual Plan',
        'Unlimited coaching sessions',
        'Personal coach assignment',
        'Advanced analytics dashboard',
        'Exclusive content library',
        'Future content updates included',
        'VIP community access'
      ],
      popular: false
    }
  ];

  const premiumFeatures = [
    {
      icon: 'ri-video-line',
      title: 'HD Video Tutorials',
      description: 'Over 200 professional quality video lessons covering every aspect of cricket',
      preview: 'Watch 50+ technique breakdowns'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Personal Coaching',
      description: 'One-on-one sessions with certified cricket coaches and former professionals',
      preview: 'Book weekly coaching calls'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Custom Training Plans',
      description: 'Personalized practice routines based on your skill level and goals',
      preview: 'Get your tailored 12-week plan'
    },
    {
      icon: 'ri-download-cloud-line',
      title: 'Offline Access',
      description: 'Download guides, videos, and training materials for offline practice',
      preview: 'Download entire library'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Progress Analytics',
      description: 'Detailed tracking of your improvement across all cricket skills',
      preview: 'View detailed skill reports'
    },
    {
      icon: 'ri-live-line',
      title: 'Live Sessions',
      description: 'Join weekly live training sessions and Q&A with expert coaches',
      preview: 'Join next session Tuesday 7PM'
    }
  ];

  const testimonials = [
    {
      name: 'David Miller',
      role: 'Club Captain',
      avatar: 'DM',
      comment: 'The premium coaching transformed my batting average from 23 to 45 in just 3 months. The personalized training plan was exactly what I needed.',
      rating: 5,
      improvement: '+22 batting average'
    },
    {
      name: 'Priya Sharma',
      role: 'Youth Coach',
      avatar: 'PS',
      comment: 'As a coach, the video library is invaluable. I use these tutorials to train my entire team. Worth every penny for the quality content.',
      rating: 5,
      improvement: 'Coaches 25+ students'
    },
    {
      name: 'James Wilson',
      role: 'Weekend Warrior',
      avatar: 'JW',
      comment: 'Started as a complete beginner 6 months ago. Now I\'m playing in local league matches thanks to the structured learning approach.',
      rating: 5,
      improvement: 'Beginner to league player'
    }
  ];

  return (
    <div className=\"min-h-screen bg-white\">
      <Header />

      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h1 className=\"text-4xl md:text-6xl font-bold mb-6\">
              Unlock Your Cricket Potential
            </h1>
            <p className=\"text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto\">
              Get access to professional coaching, exclusive content, and personalized training plans trusted by over 10,000 cricket enthusiasts worldwide
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center items-center\">
              <button 
                onClick={() => setShowVideoModal(true)}
                className=\"bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center whitespace-nowrap cursor-pointer\"
              >
                <i className=\"ri-play-circle-line mr-2 text-xl\"></i>
                Watch Preview
              </button>
              <span className=\"text-green-100 text-sm\">2 min overview of premium features</span>
            </div>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 text-center\">
            <div className=\"bg-white/10 backdrop-blur p-6 rounded-lg\">
              <div className=\"text-3xl font-bold mb-2\">200+</div>
              <div className=\"text-green-100\">Video Tutorials</div>
            </div>
            <div className=\"bg-white/10 backdrop-blur p-6 rounded-lg\">
              <div className=\"text-3xl font-bold mb-2\">50+</div>
              <div className=\"text-green-100\">Expert Coaches</div>
            </div>
            <div className=\"bg-white/10 backdrop-blur p-6 rounded-lg\">
              <div className=\"text-3xl font-bold mb-2\">10k+</div>
              <div className=\"text-green-100\">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Choose Your Training Path
            </h2>
            <p className=\"text-xl text-gray-600\">Start your cricket journey with the plan that fits your goals</p>
          </div>

          <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-8\">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular 
                    ? 'border-green-500 transform scale-105' 
                    : 'border-gray-200 hover:border-green-300'
                } transition-all cursor-pointer`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\">
                    <span className=\"bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium\">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className=\"text-center mb-6\">
                  <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">{plan.name}</h3>
                  <p className=\"text-gray-600 mb-4\">{plan.description}</p>
                  <div className=\"mb-4\">
                    <span className=\"text-4xl font-bold text-gray-900\">{plan.price}</span>
                    <span className=\"text-gray-600\">{plan.period}</span>
                    {plan.originalPrice && (
                      <div className=\"text-sm text-gray-500 mt-1\">
                        <span className=\"line-through\">{plan.originalPrice}</span>
                        <span className=\"text-green-600 font-medium ml-2\">Save 43%</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className=\"space-y-3 mb-8\">
                  {plan.features.map((feature, index) => (
                    <li key={index} className=\"flex items-start\">
                      <i className=\"ri-check-line text-green-500 mt-1 mr-3 flex-shrink-0\"></i>
                      <span className=\"text-gray-600\">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {selectedPlan === plan.id ? 'Selected Plan' : 'Choose Plan'}
                </button>

                {plan.id === 'annual' && (
                  <div className=\"text-center mt-4\">
                    <span className=\"text-sm text-gray-500\">14-day money back guarantee</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className=\"text-center mt-12\">
            <p className=\"text-gray-600 mb-4\">All plans include our 30-day money-back guarantee</p>
            <div className=\"flex justify-center space-x-8 text-sm text-gray-500\">
              <span className=\"flex items-center\">
                <i className=\"ri-shield-check-line text-green-500 mr-1\"></i>
                Secure Payment
              </span>
              <span className=\"flex items-center\">
                <i className=\"ri-customer-service-line text-green-500 mr-1\"></i>
                24/7 Support
              </span>
              <span className=\"flex items-center\">
                <i className=\"ri-refresh-line text-green-500 mr-1\"></i>
                Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Premium Features That Make a Difference
            </h2>
            <p className=\"text-xl text-gray-600\">Everything you need to master cricket from home</p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className=\"bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow\">
                <div className=\"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4\">
                  <i className={`${feature.icon} text-green-600 text-2xl`}></i>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">{feature.title}</h3>
                <p className=\"text-gray-600 mb-4\">{feature.description}</p>
                <div className=\"text-green-600 font-medium text-sm\">{feature.preview}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Real Results from Real Students
            </h2>
            <p className=\"text-xl text-gray-600\">See how premium members are transforming their cricket skills</p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
            {testimonials.map((testimonial, index) => (
              <div key={index} className=\"bg-white rounded-lg shadow-sm p-6\">
                <div className=\"flex items-center mb-4\">
                  <div className=\"w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4\">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900\">{testimonial.name}</h4>
                    <p className=\"text-sm text-gray-600\">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className=\"flex items-center mb-3\">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className=\"ri-star-fill text-yellow-400 text-sm\"></i>
                  ))}
                </div>
                
                <p className=\"text-gray-600 mb-4 italic\">\"{testimonial.comment}\"</p>
                
                <div className=\"bg-green-50 p-3 rounded-lg\">
                  <div className=\"text-sm font-medium text-green-800\">Improvement: {testimonial.improvement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\">
              Frequently Asked Questions
            </h2>
          </div>

          <div className=\"space-y-6\">
            {[
              {
                question: 'What makes this different from free cricket tutorials?',
                answer: 'Our premium content includes personalized training plans, one-on-one coaching, detailed progress tracking, and access to professional coaches. Free content provides general tips, while premium offers a structured learning path tailored to your specific needs.'
              },
              {
                question: 'Can I really improve without playing with others?',
                answer: 'Absolutely! Many of our students see significant improvement through home practice. Our structured drills focus on technique, muscle memory, and skill development that translates directly to match performance.'
              },
              {
                question: 'How much time should I dedicate to practice?',
                answer: 'We recommend 30-45 minutes daily for optimal results. Our training plans are designed to fit busy schedules with flexible practice sessions that you can adapt to your available time.'
              },
              {
                question: 'What if I\'m not satisfied with the premium membership?',
                answer: 'We offer a 30-day money-back guarantee on all plans. If you\'re not completely satisfied with your progress and the premium features, we\'ll refund your payment in full.'
              },
              {
                question: 'Do I need expensive equipment to get started?',
                answer: 'No! We provide equipment guides for every budget. Many drills can be done with minimal equipment, and we show you how to create effective practice setups affordably.'
              }
            ].map((faq, index) => (
              <div key={index} className=\"border border-gray-200 rounded-lg p-6\">
                <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">{faq.question}</h3>
                <p className=\"text-gray-600\">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className=\"py-20 bg-gradient-to-br from-green-600 to-green-700 text-white\">
        <div className=\"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8\">
          <h2 className=\"text-3xl md:text-4xl font-bold mb-4\">
            Start Your Cricket Journey Today
          </h2>
          <p className=\"text-xl text-green-100 mb-8\">
            Join thousands of cricket enthusiasts who are already improving their game
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <button className=\"bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer\">
              Start Free Trial
            </button>
            <Link href=\"/guides\" className=\"border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer\">
              Explore Free Content
            </Link>
          </div>
          <p className=\"text-sm text-green-200 mt-4\">No credit card required for trial • Cancel anytime</p>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className=\"fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4\">
          <div className=\"bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden\">
            <div className=\"flex justify-between items-center p-4 border-b\">
              <h3 className=\"text-xl font-semibold\">Premium Features Preview</h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className=\"w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full\"
              >
                <i className=\"ri-close-line text-xl\"></i>
              </button>
            </div>
            <div className=\"p-6 text-center\">
              <div className=\"bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4\">
                <i className=\"ri-play-circle-line text-6xl text-gray-400\"></i>
              </div>
              <p className=\"text-gray-600\">Premium feature preview video would be displayed here showcasing the exclusive content, coaching sessions, and training materials available to premium members.</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}