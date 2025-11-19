import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Linkedin, ExternalLink, CreditCard } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'd love to hear from you. Let's connect and explore opportunities to collaborate.
          </p>
        </div>

        {/* Three Cards in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Email */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:shaurya.attal@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    shaurya.attal@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Best way to reach me
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/shaurya-attal-512b5829b" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Connect with me on LinkedIn
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Digital Business Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Business Card</h3>
                  <a 
                    href="https://blinq.me/DwDhcQTDPgVb?bs=db" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 transition-colors flex items-center space-x-1 font-medium"
                  >
                    <span>View Card</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Connect with my digital business card
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200">
          <CardContent className="p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're interested in collaboration, have questions about my work, 
                or simply want to network with fellow professionals, feel free to reach out through 
                any of the contact methods above.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
