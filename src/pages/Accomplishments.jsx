import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, Trophy, Star, Calendar } from 'lucide-react';

export default function Accomplishments() {
  const accomplishments = [
    {
      id: 1,
      title: 'Outstanding Delegate at NAIMUN 62',
      description: 'Won Outstanding Delegate award at NAIMUN 62, a prestigious international Model UN conference',
      date: '2024-2025',
      category: 'Award',
      placeholder: false
    },
    {
      id: 2,
      title: 'Founded OmniTech Careers',
      description: 'Built and scaled organization from ground up, reaching over 6,000 students worldwide to bridge gap between technology and career readiness',
      date: '2024',
      category: 'Achievement',
      placeholder: false
    },
    {
      id: 3,
      title: 'Distinguished Delegation - Germany',
      description: 'Received Distinguished Delegation award representing Germany at Model UN conference',
      date: '2024',
      category: 'Award',
      placeholder: false
    },
    {
      id: 4,
      title: 'National Current Events League - District 3rd Place',
      description: 'Placed 3rd in district-level National Current Events League competition',
      date: '2024',
      category: 'Award',
      placeholder: false
    },
    {
      id: 5,
      title: 'Harvard HUVTSP Research',
      description: 'Selected for Harvard Undergraduate Ventures TECH Summer Program. Conducted research on AGI Safety applied to healthcare and education at Amplify Institute',
      date: '2025',
      category: 'Achievement',
      placeholder: false
    },
    {
      id: 6,
      title: 'Inspirit AI Scholars Program',
      description: 'Completed AI Scholars Program focusing on Algorithmic Justice. Trained ML model to minimize racial bias in recidivism prediction',
      date: '2024',
      category: 'Certification',
      placeholder: false
    },
    {
      id: 7,
      title: 'Master of Code',
      description: 'Recognized for excellence in computer programming and development',
      date: '2024',
      category: 'Award',
      placeholder: false
    },
    {
      id: 8,
      title: 'Fan Favorite Research Project',
      description: 'Research project recognized as fan favorite by peers and evaluators',
      date: '2024',
      category: 'Award',
      placeholder: false
    },
    {
      id: 9,
      title: 'Excellent Performance in Spanish',
      description: 'Honored for exceptional achievement in Spanish language studies',
      date: '2024',
      category: 'Award',
      placeholder: false
    },
    {
      id: 10,
      title: 'GHP 61 CS Semifinalist',
      description: 'Selected as semifinalist for Georgia Governor\'s Honors Program in Computer Science',
      date: '2024',
      category: 'Achievement',
      placeholder: false
    },
    {
      id: 11,
      title: 'Lead Mentor - GT CEISMC',
      description: 'Promoted to Lead Mentor, TA, and Beta Tester for Seth Bonder Camp in Computational and Data Science at Georgia Tech',
      date: '2025',
      category: 'Achievement',
      placeholder: false
    },
    {
      id: 12,
      title: 'Student Leadership North Class of 2026',
      description: 'Selected as Student Leader for Class of 2026, developing leadership and civic engagement skills',
      date: '2024',
      category: 'Achievement',
      placeholder: false
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Award':
        return <Trophy className="w-6 h-6" />;
      case 'Achievement':
        return <Star className="w-6 h-6" />;
      case 'Certification':
        return <Award className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Award':
        return 'from-amber-500 to-amber-600';
      case 'Achievement':
        return 'from-blue-600 to-blue-700';
      case 'Certification':
        return 'from-green-600 to-green-700';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <Trophy className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Accomplishments & Awards</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of achievements, recognitions, and milestones throughout my professional journey
          </p>
        </div>


        {/* Accomplishments Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {accomplishments.map((item) => (
            <Card 
              key={item.id} 
              className={`group hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden ${
                item.placeholder ? 'border-dashed border-gray-300 bg-gray-50/50' : 'border-gray-200'
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(item.category)}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {item.category}
                      </span>
                      {item.date && (
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </div>
  );
}