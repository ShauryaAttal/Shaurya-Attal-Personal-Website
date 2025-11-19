import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Linkedin, ExternalLink, CreditCard, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send an email or save to database
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
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

            {/* Important Notice */}
            <Card className="bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Privacy Note</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      For security reasons, physical addresses are not displayed on this portfolio. 
                      Professional contact is maintained through email and LinkedIn.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-2 border-gray-100">
              <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Send className="w-6 h-6" />
                  <span>Send Me a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="text-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What would you like to discuss?"
                        className="text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me more about your inquiry..."
                        rows={6}
                        className="text-lg"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200">
          <CardContent className="p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're interested in collaboration, have questions about my work, or simply want to 
                network with fellow professionals, I'm always open to meaningful conversations. Feel free to 
                reach out through any of the contact methods above.
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>Response within 24-48 hours</span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}