import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Home, FileText, Award, Target, Zap, Mail } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', page: 'Home', icon: Home },
    { name: 'Resume', page: 'Resume', icon: FileText },
    { name: 'Accomplishments', page: 'Accomplishments', icon: Award },
    { name: 'Mission & Vision', page: 'Mission', icon: Target },
    { name: 'Strengths', page: 'Strengths', icon: Zap },
    { name: 'Contact', page: 'Contact', icon: Mail },
  ];

  const isActivePage = (pageName) => {
    return currentPageName === pageName;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        :root {
          --primary: #1e3a8a;
          --primary-light: #3b82f6;
          --accent: #f59e0b;
          --accent-light: #fbbf24;
          --text-dark: #1f2937;
          --text-light: #6b7280;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Name */}
            <Link to={createPageUrl('Home')} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <span className="text-2xl font-bold gradient-text hidden sm:block">
                Shaurya Attal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActivePage(item.page);
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`nav-link px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-all ${
                      active
                        ? 'text-blue-900 bg-blue-50 active'
                        : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActivePage(item.page);
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      active
                        ? 'text-blue-900 bg-blue-50 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shaurya Attal</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Chattahoochee HS 2026 | Founder & President @ OmniTech Careers | AI & Public Policy Enthusiast
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Connect</h4>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>© {new Date().getFullYear()} Shaurya Attal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}