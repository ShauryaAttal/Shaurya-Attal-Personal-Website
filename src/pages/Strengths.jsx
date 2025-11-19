import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Zap, Trophy, Users, Lightbulb, Target, Heart, Calendar } from 'lucide-react';

export default function Strengths() {
  const [strengths] = useState([
    {
      id: 1,
      name: 'Communication',
      icon: Users,
      description: 'People with strong Communication talents generally find it easy to put their thoughts into words. They are good conversationalists and presenters, able to articulate ideas clearly and engage audiences effectively.',
      application: 'This strength drives my success in Model UN (Outstanding Delegate at NAIMUN 62), leading OmniTech Careers discussions with 6,000+ students worldwide, and presenting technical concepts to diverse audiences. My multilingual abilities (5+ languages) amplify this strength, allowing me to connect across cultures. Whether pitching AWS migration plans at Leadership Initiatives or teaching computational science at GT CEISMC, I translate complex ideas into compelling narratives that inspire action.',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Woo',
      icon: Heart,
      description: 'Woo stands for Winning Others Over. People with strong Woo talents love the challenge of meeting new people and getting them to like them. They derive satisfaction from breaking the ice and making connections with others.',
      application: 'Building OmniTech Careers from scratch to reach 6,000+ students worldwide demonstrates my natural ability to win people over and build networks. In Model UN, I excel at forming alliances and persuading delegates (Distinguished Delegation representing Germany). My comfort meeting new people helps me bridge communities - from connecting students with tech opportunities, to networking at Harvard HUVTSP, to building partnerships across international organizations. I thrive on creating those initial connections that lead to meaningful collaborations.',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      id: 3,
      name: 'Competition',
      icon: Trophy,
      description: 'People with strong Competition talents measure their progress against the performance of others. They strive to win and love contests, measuring success by comparing themselves to others.',
      application: 'My competitive drive shows through consistent wins - Outstanding Delegate at NAIMUN 62, District 3rd Place in National Current Events League, GHP CS Semifinalist, and Master of Code award. As a varsity swimmer and club competitor, I channel competitive energy into measurable achievements. This strength pushes me to not just participate but excel - whether building OmniTech Careers to be the largest student tech organization or conducting research at Harvard. Competition fuels my continuous improvement and drives me to set ambitious benchmarks for success.',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      textColor: 'text-amber-600'
    },
    {
      id: 4,
      name: 'Achiever',
      icon: Target,
      description: 'People with strong Achiever talents have a constant need for achievement. They have internal drive and motivation to accomplish more each day, taking great satisfaction from being productive and busy.',
      application: 'My Achiever drive is evident in the sheer volume of what I accomplish - founding and scaling OmniTech Careers, maintaining varsity swimming and club competitions, 11 years of classical singing, dual enrollment at GT and GSU, leading Model UN, mentoring at GT CEISMC, conducting research at Harvard, and managing infrastructure at LearnerSnapshot. I\'m energized by full schedules and feel most fulfilled when checking off accomplishments. Each day offers new opportunities to achieve, and I set high standards for productivity across all my commitments.',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      id: 5,
      name: 'Analytical',
      icon: Lightbulb,
      description: 'People with strong Analytical talents search for reasons and causes. They have the ability to think about all the factors that might affect a situation, examining data and patterns to understand the root of problems.',
      application: 'My Analytical strength drives my approach to AI and technology. At Inspirit AI, I analyzed the COMPAS dataset to identify and minimize racial bias in recidivism prediction. At Harvard HUVTSP, I conducted structured research on AGI Safety in healthcare and education. When architecting AWS migration plans at Leadership Initiatives, I systematically evaluated risks and security policies. This strength helps me see patterns others miss, question assumptions about AI ethics, and build data-driven solutions at OmniTech Careers. I naturally break down complex technical problems into logical components.',
      color: 'from-rose-600 to-rose-700',
      bgColor: 'bg-rose-50',
      iconBg: 'bg-rose-100',
      textColor: 'text-rose-600'
    }
  ]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">My Top 5 Strengths</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on strengths assessment training, these core capabilities shape my leadership approach and professional impact
          </p>
        </div>

        {/* Info Notice */}
        <Card className="mb-12 bg-blue-50 border-2 border-blue-200">
          <CardContent className="p-6 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CliftonStrengths Assessment Results</h3>
              <p className="text-gray-700 leading-relaxed">
                These are my Top 5 CliftonStrengths identified through the official Gallup assessment. Each strength represents 
                a natural pattern of thinking, feeling, and behaving that I leverage to achieve goals and drive impact across my 
                various leadership roles and technical pursuits.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Strengths Cards */}
        <div className="space-y-8">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Card 
                key={strength.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${strength.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${strength.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Strength Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg ${strength.iconBg} flex items-center justify-center`}>
                          <IconComponent className={`w-5 h-5 ${strength.textColor}`} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{strength.name}</h2>
                      </div>

                      {/* Description */}
                      <div className={`p-4 rounded-lg ${strength.bgColor} mb-4`}>
                        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                          What This Means
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {strength.description}
                        </p>
                      </div>

                      {/* Application */}
                      <div className="pl-4 border-l-4 border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                          How I Apply This Strength
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {strength.application}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info Card */}
        <Card className="mt-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <CardContent className="p-8 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-2xl font-bold mb-3">Understanding Strengths-Based Leadership</h3>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
              By focusing on these core strengths rather than fixing weaknesses, I can maximize my potential, 
              increase engagement, and create more meaningful impact in leadership roles. Each strength works 
              synergistically to create a unique leadership signature.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}