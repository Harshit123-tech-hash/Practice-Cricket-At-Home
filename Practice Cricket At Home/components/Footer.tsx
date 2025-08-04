
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <i className="ri-cricket-line text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>CricketHome</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Master cricket skills from the comfort of your home with our comprehensive practice guides and training programs.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-facebook-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-twitter-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-instagram-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-youtube-fill text-lg"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/guides" className="text-gray-300 hover:text-white cursor-pointer">Practice Guides</Link></li>
              <li><Link href="/drills" className="text-gray-300 hover:text-white cursor-pointer">Training Drills</Link></li>
              <li><Link href="/equipment" className="text-gray-300 hover:text-white cursor-pointer">Equipment Guide</Link></li>
              <li><Link href="/premium" className="text-gray-300 hover:text-white cursor-pointer">Premium Plans</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white cursor-pointer">Help Center</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white cursor-pointer">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white cursor-pointer">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 CricketHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
