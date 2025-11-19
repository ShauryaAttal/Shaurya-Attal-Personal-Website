import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-amber-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              {/* Headshot Icon */}
              <div className="flex justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691ccf1a36a617b94c226130/136f1a8ee_54765739257_b9922d2410_o.jpg"
                  alt="Shaurya Attal"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">High School Student & Tech Leader</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Shaurya Attal</span>
              </h1>
              
              <div className="prose prose-lg text-gray-600 space-y-4 max-w-3xl mx-auto">
                <p className="text-xl leading-relaxed">
                  <strong className="text-gray-900">Welcome!</strong> I'm a high school student at Chattahoochee High School with a passion for computer science, artificial intelligence, and public policy. My goal is to leverage technology to address societal challenges while exploring the intersection between AI and policymaking.
                </p>
                <p className="text-lg leading-relaxed">
                  Through leadership roles in organizations like OmniTech Careers (empowering 6,000+ students worldwide) and Model UN, I've developed strong communication, problem-solving, and organizational skills that I aim to apply toward shaping the future of technology and policy.
                </p>
                <p className="text-lg leading-relaxed">
                  <em className="text-gray-700">Beyond tech, I've been an Indian classical singer for 11 years and compete in swimming on both my club and varsity teams. These experiences have instilled discipline, focus, and resilience that complement my technical pursuits.</em>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Resume')}>
                  <Button variant="outline" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl">
                    View Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore My Portfolio</h2>
            <p className="text-xl text-gray-600">Discover my journey, achievements, and vision</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to={createPageUrl('Accomplishments')}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                  <Target className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Accomplishments
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore my achievements, awards, and professional milestones that define my journey.
                </p>
              </Card>
            </Link>

            <Link to={createPageUrl('Mission')}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200 group cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all">
                  <Sparkles className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Mission & Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover the core values and aspirations that guide my professional path.
                </p>
              </Card>
            </Link>

            <Link to={createPageUrl('Strengths')}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                  <Users className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Core Strengths
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn about my top 5 strengths and how they shape my leadership approach.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow professionals.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
              Contact Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}