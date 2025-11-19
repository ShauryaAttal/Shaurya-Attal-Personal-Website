import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Eye, Heart, Compass } from 'lucide-react';

export default function Mission() {
  const content = {
    mission: "To leverage technology, particularly artificial intelligence, to address societal challenges and bridge the gap between innovation and real-world impact. Through organizations like OmniTech Careers, I aim to empower students worldwide to connect their passions with emerging tech trends. My mission is to make complex technologies accessible and practical, while exploring the critical intersection between AI and public policymaking to shape a more equitable future.",
    vision: "To become a leader at the forefront of AI policy and ethics, creating frameworks that ensure technology serves humanity's best interests. I envision a world where every student has access to quality tech education and mentorship, where AI systems are designed with fairness and transparency, and where the next generation of leaders is equipped to navigate the challenges and opportunities of an AI-driven world.",
    values: [
      { title: "Innovation with Purpose", description: "Leveraging cutting-edge technology to solve real societal challenges and create meaningful impact" },
      { title: "Accessibility & Equity", description: "Making complex technologies accessible to all students and ensuring AI systems minimize bias and promote fairness" },
      { title: "Cross-Disciplinary Thinking", description: "Bridging computer science, public policy, and social impact to create holistic solutions" },
      { title: "Resilience & Discipline", description: "Drawing on lessons from 11 years of classical singing and competitive swimming to persevere through challenges" },
      { title: "Empowering Others", description: "Building platforms and creating opportunities for students worldwide to explore tech careers and develop their potential" }
    ]
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Compass className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Mission & Vision</h1>
          <p className="text-xl text-gray-600">The principles and aspirations that guide my journey</p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8 shadow-xl border-2 border-blue-100 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-900 to-blue-600"></div>
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl">Mission Statement</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {content.mission}
            </p>
          </CardContent>
        </Card>

        {/* Vision Statement */}
        <Card className="mb-8 shadow-xl border-2 border-amber-100 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
          <CardHeader className="bg-gradient-to-r from-amber-50 to-white pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl">Vision Statement</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {content.vision}
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card className="shadow-xl border-2 border-green-100 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-green-600 to-green-500"></div>
          <CardHeader className="bg-gradient-to-r from-green-50 to-white pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl">Core Values</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {content.values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
              </div>
              </CardContent>
        </Card>

        {/* Inspirational Quote */}
        <Card className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-xl">
          <CardContent className="p-8 text-center">
            <p className="text-2xl font-medium italic mb-4">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </p>
            <p className="text-blue-200">— Simon Sinek</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
