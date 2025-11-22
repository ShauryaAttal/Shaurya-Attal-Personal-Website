import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, Download, Briefcase, GraduationCap, Award, Code, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Resume() {
  const experiences = [
    {
      title: "Founder and President",
      organization: "OmniTech Careers",
      location: "Atlanta, Georgia",
      dates: "August 2024 - Present",
      description: "Lead student-driven initiative empowering over 6,000 students worldwide to bridge the gap between technology and career readiness. Built and scaled organization from ground up, reaching students across multiple countries. Lead discussions making complex technologies accessible for diverse career paths."
    },
    {
      title: "Lead Mentor, TA, and Beta Tester",
      organization: "GT CEISMC - Seth Bonder Camp",
      location: "Atlanta, Georgia",
      dates: "June 2023 - Present",
      description: "Lead Mentor and TA for Seth Bonder Camp in Computational and Data Science Levels 1-4. Beta Tester for Level 4's inaugural year. Previously attended FBI Cybersecurity Camp, Seth Bonder Levels 2-3, Coded Beats, and Science of Psychology programs."
    },
    {
      title: "Control Account Manager",
      organization: "LearnerSnapshot",
      location: "Atlanta, Georgia",
      dates: "July 2025 - Present",
      description: "Oversee application development and infrastructure initiatives for platform delivering real-time insights into student learning. Manage timelines and deliverables ensuring alignment between technical execution and organizational goals."
    },
    {
      title: "AI/AGI Safety Research Intern",
      organization: "Harvard HUVTSP & Amplify Institute",
      location: "Cambridge, MA",
      dates: "June 2025 - July 2025",
      description: "Participated in Harvard Undergraduate Ventures TECH Summer Program. Interned at Amplify Institute, bringing technology awareness to policymakers. Conducted research on AGI Safety applied to healthcare and education."
    },
    {
      title: "Cybersecurity and Defense Intern",
      organization: "Leadership Initiatives",
      location: "Washington, D.C.",
      dates: "May 2025 - July 2025",
      description: "Served as lead solution architect for nonprofit in Washington D.C. Designed and presented comprehensive AWS migration plan to enhance resilience, scalability, and compliance. Evaluated risks and advised on security policies."
    },
    {
      title: "Travel Team Member & Former VP",
      organization: "Model United Nations",
      location: "Atlanta, Georgia",
      dates: "September 2022 - Present",
      description: "Won Outstanding Delegate at NAIMUN 62. Previously served as VP planning lessons, registering for conferences, and booking travel. Restarted club after pandemic as Conference Chair."
    },
    {
      title: "AI Scholar & Ambassador",
      organization: "Inspirit AI",
      location: "Atlanta, Georgia",
      dates: "July 2024 - November 2024",
      description: "Completed AI Project in Algorithmic Justice analyzing COMPAS dataset. Trained ML model to boost prediction accuracy and minimize racial bias. Selected as AI Ambassador in program taught by MIT and Stanford graduates."
    },
    {
      title: "Venture Fellow - Frontend Developer",
      organization: "Folio",
      location: "Remote",
      dates: "June 2024 - October 2024",
      description: "Worked as intern Frontend Developer using PHP and WordPress system tools in 10-week internship program."
    },
  ];

  const education = [
    {
      school: "Chattahoochee High School",
      degree: "High School Diploma",
      dates: "August 2022 - April 2026",
      details: "Class of 2026 | Varsity Swim Team | National Beta Chapter Webmaster | GHP 61 CS Semifinalist"
    },
    {
      school: "Georgia Institute of Technology",
      degree: "Dual Enrollment",
      dates: "2023 - Present",
      details: "Mathematics and Computer Science"
    },
    {
      school: "Georgia State University Perimeter College",
      degree: "Dual Enrollment",
      dates: "2023 - Present",
      details: ""
    }
  ];

  const skills = {
    technical: ["TypeScript", "Python", "PHP", "Mobile Applications", "AI/ML", "WordPress", "AWS", "Frontend Development"],
    languages: ["Hindi (Native)", "Marwari (Native)", "English (Native)", "Marathi (Full Professional)", "Spanish (Professional Working)", "German (Elementary)"],
    domains: ["Artificial Intelligence", "Cybersecurity", "Public Policy", "Data Science", "AGI Safety", "Education Technology"]
  };

  const certifications = [
    "Inspirit AI Scholars Program",
    "Harvard Undergraduate Ventures TECH Summer Program",
    "Python Programming",
    "Intro to Machine Learning",
    "Intro to Programming",
    "FBI Cybersecurity Camp"
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-xl text-gray-600 mb-6">Shaurya Attal</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">Chattahoochee HS 2026</Badge>
            <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">Founder @ OmniTech Careers</Badge>
            <Badge className="bg-red-100 text-red-800 text-sm px-3 py-1">AI4OPT Lead Mentor</Badge>
            <Badge className="bg-purple-100 text-purple-800 text-sm px-3 py-1">HUVTSP '25</Badge>
            <Badge className="bg-amber-100 text-amber-800 text-sm px-3 py-1">Alpharetta, GA</Badge>
          </div>
        </div>

        {/* Professional Summary */}
        <Card className="shadow-lg mb-8 border-2 border-blue-100">
          <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <CardTitle className="text-2xl">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Student at Chattahoochee High School with a passion for computer science, artificial intelligence, and public policy. 
              Founder of OmniTech Careers, empowering 6,000+ students worldwide in tech career readiness. Experienced in AI research, cybersecurity, 
              data science, and frontend development through internships at Harvard, Leadership Initiatives, and various tech organizations. 
              Also an Indian classical singer for 13 years and competitive swimmer, bringing discipline and resilience to all endeavors.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Briefcase className="w-6 h-6" />
              <span>Experience</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{exp.organization}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2 mb-3">
                    <span>{exp.dates}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education & Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-900">{edu.school}</h3>
                    <p className="text-blue-600 font-semibold">{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.dates}</p>
                    {edu.details && <p className="text-sm text-gray-700 mt-1">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Code className="w-6 h-6" />
              <span>Skills & Expertise</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Languages</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <Badge key={index} className="bg-green-100 text-green-800 px-3 py-1">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Domain Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.domains.map((domain, index) => (
                    <Badge key={index} className="bg-purple-100 text-purple-800 px-3 py-1">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Activities */}
        <Card className="shadow-lg mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond Technology</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border-2 border-blue-100">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">🎵 Indian Classical Music</h4>
                <p className="text-gray-700">13 years of training in Indian classical singing, instilling discipline, focus, and cultural connection</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-blue-100">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">🏊 Competitive Swimming</h4>
                <p className="text-gray-700">Varsity swim team member and club swimmer, building resilience and strong work ethic</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Button */}
        <div className="text-center">
          <Button className="bg-blue-900 hover:bg-blue-800 px-8 py-6 text-lg rounded-xl shadow-lg text-white">
            <Download className="w-5 h-5 mr-2" />
            <a href="/Shaurya_Attal_Resume.pdf" download>Download Resume PDF</a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">Click to download a PDF version of this resume</p>
        </div>
      </div>
    </div>
  );
}