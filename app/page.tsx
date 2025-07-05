"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, Award, Heart, Shield, Users, Star, Menu, X, Stethoscope, Cross } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('animate-on-scroll');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "Dr. Hahm completely transformed my approach to health. Her preventive care program helped me identify potential issues early, and her compassionate guidance made all the difference in my wellness journey.",
      rating: 5,
      condition: "Preventive Care"
    },
    {
      name: "Michael Chen",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "After struggling with diabetes management for years, Dr. Hahm's personalized treatment plan and ongoing support helped me achieve better control than I ever thought possible. She truly cares about her patients.",
      rating: 5,
      condition: "Diabetes Management"
    },
    {
      name: "Emily Rodriguez",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "The comprehensive women's health care I received was exceptional. Dr. Hahm took time to understand my concerns and provided solutions that fit my lifestyle. I finally feel heard and cared for.",
      rating: 5,
      condition: "Women's Health"
    },
    {
      name: "David Thompson",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "As a busy executive, I needed healthcare that worked with my schedule. Dr. Hahm's executive physical program was thorough, efficient, and gave me peace of mind about my health.",
      rating: 5,
      condition: "Executive Physical"
    },
    {
      name: "Lisa Park",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "Dr. Hahm's holistic approach to treating my chronic condition has been life-changing. She doesn't just treat symptoms; she addresses the whole person. I'm healthier and happier than I've been in years.",
      rating: 5,
      condition: "Chronic Disease Management"
    },
    {
      name: "Robert Kim",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "The urgent care I received was prompt and professional. Dr. Hahm made sure I understood my treatment plan and followed up to ensure my recovery was progressing well. Outstanding care!",
      rating: 5,
      condition: "Urgent Care"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-600/95 via-purple-600/95 to-indigo-700/95 backdrop-blur-md border-b border-white/20 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center animate-fade-in-left">
              {/* Professional Healthcare Logo */}
              <div className="flex items-center bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover-lift">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                    <Stethoscope className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce-in">
                    <Cross className="h-2.5 w-2.5 text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-white font-bold text-lg tracking-tight font-display">Healthcare</span>
                  <span className="block text-indigo-200 text-xs font-medium -mt-1 font-body">Professional</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block animate-fade-in-right">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('hero')} className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-sm font-body hover-lift">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-sm font-body hover-lift">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-sm font-body hover-lift">
                  Services
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-sm font-body hover-lift">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-sm font-body hover-lift">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-white/20 text-white hover:bg-white/30 px-6 py-2 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-sm border border-white/30 font-body hover-lift">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover-lift"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-bottom">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-indigo-600/98 via-purple-600/98 to-indigo-700/98 backdrop-blur-md border-t border-white/20">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-body">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-body">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-body">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-body">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-body">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-body">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover parallax"
          >
            <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-800/60 to-indigo-900/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight font-display animate-fade-in-up">
              <span className="gradient-text-emerald">Compassionate Healthcare</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-indigo-200 mt-2 animate-fade-in-up animate-delay-200">
                for Your Wellbeing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light font-body animate-fade-in-up animate-delay-400">
              Providing personalized, evidence-based medical care with a focus on preventive health and patient-centered treatment approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-600">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 border-2 border-emerald-400 font-body hover-lift animate-pulse-glow"
              >
                Schedule Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 border-2 border-cyan-400 font-body hover-lift"
              >
                View Services
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display gradient-text-blue">About Dr. Jennifer Hahm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Dedicated to providing exceptional healthcare with a personal touch, combining years of experience with the latest medical advances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll animate-delay-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">My Approach to Medicine</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-body">
                I believe in treating the whole person, not just the symptoms. With over 15 years of experience in internal medicine, 
                I focus on building long-term relationships with my patients and providing comprehensive care that addresses both 
                immediate health concerns and long-term wellness goals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-body">
                My practice emphasizes preventive care, patient education, and collaborative treatment planning. I stay current with 
                the latest medical research and technologies to ensure my patients receive the best possible care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center hover-lift animate-on-scroll animate-delay-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Board Certified</h4>
                    <p className="text-sm text-gray-600 font-body">Internal Medicine</p>
                  </div>
                </div>
                <div className="flex items-center hover-lift animate-on-scroll animate-delay-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">15+ Years</h4>
                    <p className="text-sm text-gray-600 font-body">Clinical Experience</p>
                  </div>
                </div>
                <div className="flex items-center hover-lift animate-on-scroll animate-delay-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Fellowship</h4>
                    <p className="text-sm text-gray-600 font-body">Preventive Medicine</p>
                  </div>
                </div>
                <div className="flex items-center hover-lift animate-on-scroll animate-delay-600">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Top Rated</h4>
                    <p className="text-sm text-gray-600 font-body">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll animate-delay-300">
              {/* Doctor Images Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative group hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Dr. Jennifer Hahm in consultation"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group hover-lift animate-delay-100">
                  <img 
                    src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Dr. Jennifer Hahm with medical team"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group hover-lift animate-delay-200 col-span-2">
                  <img 
                    src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Dr. Jennifer Hahm in medical office"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Education & Training */}
              <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display gradient-text">Education & Training</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-gradient-to-b from-blue-500 to-indigo-600 pl-6 hover-lift animate-on-scroll animate-delay-400">
                    <h4 className="font-semibold text-gray-900 font-body">MD, Internal Medicine</h4>
                    <p className="text-gray-600 font-body">Harvard Medical School</p>
                    <p className="text-sm text-gray-500 font-body">2005-2009</p>
                  </div>
                  <div className="border-l-4 border-gradient-to-b from-emerald-500 to-teal-600 pl-6 hover-lift animate-on-scroll animate-delay-500">
                    <h4 className="font-semibold text-gray-900 font-body">Residency</h4>
                    <p className="text-gray-600 font-body">Johns Hopkins Hospital</p>
                    <p className="text-sm text-gray-500 font-body">2009-2012</p>
                  </div>
                  <div className="border-l-4 border-gradient-to-b from-purple-500 to-pink-600 pl-6 hover-lift animate-on-scroll animate-delay-600">
                    <h4 className="font-semibold text-gray-900 font-body">Fellowship</h4>
                    <p className="text-gray-600 font-body">Mayo Clinic - Preventive Medicine</p>
                    <p className="text-sm text-gray-500 font-body">2012-2013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-teal-300/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-36 h-36 bg-gradient-to-br from-cyan-200/40 to-blue-300/40 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display gradient-text-emerald">Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Comprehensive healthcare services tailored to your individual needs and health goals.
            </p>
          </div>

          {/* Services Hero Image */}
          <div className="mb-16 animate-on-scroll animate-delay-200">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Modern Medical Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-teal-800/50 to-cyan-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center font-display">
                  State-of-the-Art Medical Care
                </h3>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-emerald-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  Comprehensive annual physicals, health screenings, and preventive measures to maintain optimal health and catch potential issues early.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-teal-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-400">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Chronic Disease Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  Ongoing care and management of chronic conditions including diabetes, hypertension, heart disease, and other long-term health conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-500">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Women's Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  Specialized care for women's health needs including reproductive health, hormonal balance, and age-specific health concerns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-600">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Executive Physicals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  Comprehensive health assessments for busy professionals, including advanced diagnostic testing and personalized health optimization plans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-indigo-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Urgent Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  Same-day appointments for non-emergency medical concerns, minor injuries, and acute illnesses that require prompt attention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Wellness Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  Personalized guidance on nutrition, exercise, stress management, and lifestyle modifications to promote overall wellbeing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display gradient-text">Patient Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Real stories from patients who have experienced exceptional care and improved health outcomes.
            </p>
          </div>

          {/* Testimonials Hero Image */}
          <div className="mb-16 animate-on-scroll animate-delay-200">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Happy Patients"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-purple-800/50 to-pink-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center font-display">
                  Transforming Lives Through Care
                </h3>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white/90 to-indigo-50/90 backdrop-blur-sm hover-lift animate-on-scroll animate-delay-${300 + (index * 100)}`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover-lift animate-bounce-in">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 font-display">{testimonial.name}</CardTitle>
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current animate-bounce-in" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium font-body">
                    {testimonial.condition}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm italic font-body">
                    "{testimonial.experience}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-12 right-12 w-20 h-20 bg-gradient-to-br from-gray-200/40 to-slate-300/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-12 left-12 w-24 h-24 bg-gradient-to-br from-slate-200/40 to-blue-300/40 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display gradient-text-blue">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 font-body">
              Common questions about our practice and medical services.
            </p>
          </div>

          {/* FAQ Hero Image */}
          <div className="mb-16 animate-on-scroll animate-delay-200">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Medical Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-slate-800/50 to-blue-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center font-display">
                  Your Questions Answered
                </h3>
              </div>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200/50 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-lg hover-lift animate-on-scroll animate-delay-300">
              <AccordionTrigger className="text-left hover:no-underline font-display text-gray-900">
                How do I schedule my first appointment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body">
                You can schedule your first appointment by calling our office at (555) 123-4567 or using our online contact form. 
                We'll need your insurance information and a brief overview of your health concerns or the type of visit you're seeking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200/50 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-lg hover-lift animate-on-scroll animate-delay-400">
              <AccordionTrigger className="text-left hover:no-underline font-display text-gray-900">
                What should I bring to my appointment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body">
                Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records 
                from previous doctors. If you have specific concerns or questions, write them down beforehand so we can address them during your visit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200/50 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-lg hover-lift animate-on-scroll animate-delay-500">
              <AccordionTrigger className="text-left hover:no-underline font-display text-gray-900">
                Do you accept my insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body">
                We accept most major insurance plans including Medicare and Medicaid. Please contact our office to verify that 
                your specific insurance plan is accepted. Our staff can also help you understand your coverage and any potential out-of-pocket costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200/50 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-lg hover-lift animate-on-scroll animate-delay-600">
              <AccordionTrigger className="text-left hover:no-underline font-display text-gray-900">
                How long are typical appointments?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body">
                Initial consultations typically last 45-60 minutes, while follow-up appointments are usually 15-30 minutes. 
                The duration depends on the complexity of your health concerns and the type of care you need. We always ensure adequate time for thorough evaluation and discussion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200/50 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-lg hover-lift animate-on-scroll animate-delay-700">
              <AccordionTrigger className="text-left hover:no-underline font-display text-gray-900">
                Can I get same-day appointments for urgent concerns?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body">
                Yes, we reserve time slots each day for urgent care needs. If you have a non-emergency medical concern that requires 
                prompt attention, please call our office as early as possible. We'll do our best to accommodate same-day appointments when medically necessary.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200/50 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-lg hover-lift animate-on-scroll animate-delay-800">
              <AccordionTrigger className="text-left hover:no-underline font-display text-gray-900">
                Do you offer telemedicine appointments?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-body">
                Yes, we offer secure telemedicine consultations for appropriate medical concerns, follow-up visits, and routine check-ins. 
                Telemedicine appointments are convenient for patients who have difficulty traveling to the office or for certain types of consultations that don't require physical examination.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-emerald-200/50 to-teal-300/50 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-teal-200/50 to-cyan-300/50 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display gradient-text-emerald">Get in Touch</h2>
            <p className="text-xl text-gray-600 font-body">
              Ready to take control of your health? Contact us to schedule your consultation.
            </p>
          </div>

          {/* Contact Hero Image */}
          <div className="mb-16 animate-on-scroll animate-delay-200">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Modern Medical Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-teal-800/50 to-cyan-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center font-display">
                  Schedule Your Visit Today
                </h3>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll animate-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-display">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Phone</h4>
                    <p className="text-gray-600 font-body">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Email</h4>
                    <p className="text-gray-600 font-body">info@drjenniferhahm.com</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Address</h4>
                    <p className="text-gray-600 font-body">123 Medical Center Drive<br />Suite 200, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-body">Office Hours</h4>
                    <p className="text-gray-600 font-body">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll animate-delay-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-display">Schedule a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 font-body">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white/90 backdrop-blur-sm border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 font-body"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-body">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white/90 backdrop-blur-sm border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 font-body"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 font-body">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 bg-white/90 backdrop-blur-sm border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 font-body"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 font-body">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 bg-white/90 backdrop-blur-sm border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 font-body"
                    placeholder="Tell us about your health concerns or questions..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-body hover-lift"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-12 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-gray-600/20 to-slate-700/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-slate-600/20 to-gray-700/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm hover-lift">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center shadow-lg">
                      <Stethoscope className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Cross className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <div className="ml-2">
                    <span className="text-white font-bold text-sm font-display">Healthcare</span>
                    <span className="block text-indigo-200 text-xs -mt-1 font-body">Professional</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-body">
                Providing compassionate, personalized healthcare with a focus on preventive medicine and patient wellbeing.
              </p>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors font-body hover-lift">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors font-body hover-lift">Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors font-body hover-lift">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors font-body hover-lift">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors font-body hover-lift">Contact</button></li>
              </ul>
            </div>
            <div className="animate-fade-in-up animate-delay-400">
              <h4 className="text-lg font-semibold mb-4 font-display">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li>(555) 123-4567</li>
                <li>info@drjenniferhahm.com</li>
                <li>123 Medical Center Drive<br />Suite 200, New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up animate-delay-600">
            <p className="font-body">&copy; 2024 Dr. Jennifer Hahm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}