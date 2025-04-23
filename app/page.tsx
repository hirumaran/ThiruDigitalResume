import React from 'react';
import AnimatedSection from './components/AnimatedSection';
import { BuildingOffice2Icon, AcademicCapIcon, UserGroupIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40 relative overflow-hidden border-b-2 border-blue-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-50/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-slate-100/30 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center -ml-[40rem]">
          <div className="relative w-[950px] h-[950px] transition-transform duration-700 hover:scale-105 ml-[32rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent rounded-3xl" />
            <img
              src="/ThiruDigitalResume/Images/Thiru2.JPG"
              alt="Thirumaran Deepak"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="relative flex-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100/20 to-slate-100/20 blur" />
            <AnimatedSection className="relative">
              <span className="block text-blue-600/80 text-2xl font-medium mb-4">Hello, I'm</span>
              <h1 className="text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Thirumaran Deepak
              </h1>
              <p className="text-2xl text-secondary/80 font-medium">Software Developer & High School Student</p>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-secondary/60 text-sm mb-2">Scroll Down</span>
          <svg 
            className="w-6 h-6 text-secondary/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50/30 to-slate-100/40 relative border-b-2 border-slate-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-6xl w-full mx-auto px-8 relative z-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm py-12">
          <h2 className="text-5xl font-bold mb-12">Profile Summary</h2>
          <p className="text-xl text-secondary leading-relaxed max-w-4xl">
            Passionate high school junior skilled in coding, healthcare technology, and interdisciplinary innovation.
            Combines expertise in JavaScript, Python, and cloud development with hands-on experience in medical
            settings to create solutions that bridge healthcare and tech. Committed to advancing patient care through
            scalable software tools and data-driven systems.
          </p>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-blue-100/40 relative border-b-2 border-blue-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-6xl w-full mx-auto px-8 relative z-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm py-8 my-16">
          <h2 className="text-5xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <BuildingOffice2Icon className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold">Software Developer Intern</h3>
              </div>
              <p className="text-lg text-secondary font-semibold mb-2">Google • Oct 2024 - Present</p>
              <p className="text-base leading-relaxed">Led full-stack development of a security bulletin board website that processes 1000+ CVEs using Gemini AI and
                osv.dev API, automating vulnerability analysis and reducing engineers' manual review time by 40%. Designed a
                user-friendly interface with search/filter functionality, translating raw JSON data into AI-summarized insights for 15+
                product teams to prioritize critical threats.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <BuildingOffice2Icon className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold">Student Intern</h3>
              </div>
              <p className="text-lg text-secondary font-semibold mb-2">Lakehills Orthodontics • Sep 2023 - Jun 2024</p>
              <p className="text-base leading-relaxed">Designed a patient progress-tracking system using Microsoft Dynamics 365, standardizing data collection
                and reducing clinical workflow delays by 25%. Monitored app deployment timelines, delivering the tool 2
                weeks early while auditing 50+ records to improve data reliability by 40%.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <BuildingOffice2Icon className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold">App Development Intern</h3>
              </div>
              <p className="text-lg text-secondary font-semibold mb-2">Quadrant Technologies • Nov 2022 - Jun 2023</p>
              <p className="text-base leading-relaxed">Built a Python/JavaScript app to streamline patient data management, reducing retrieval time by 30% and
                hospital staff workload. Coordinated with project managers to align app development with compliance
                guidelines, reducing unnecessary costs by 15% through budget tracking.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50/30 to-slate-100/40 relative border-b-2 border-slate-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-6xl w-full mx-auto px-8 relative z-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm py-12">
          <h2 className="text-5xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <p className="text-lg"><span className="font-semibold">Languages:</span> JavaScript, Python, Java, HTML, C++, C#, SQL</p>
                <p className="text-lg"><span className="font-semibold">Tools:</span> React, Microsoft Dynamics 365, Azure Cloud Services, Git</p>
              </div>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
              <div className="space-y-4">
                <p className="text-lg">Team Leadership | Critical Thinking | Project Management | Cross-Cultural Communication</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Education Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-blue-100/40 relative border-b-2 border-blue-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-6xl w-full mx-auto px-8 relative z-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm py-12">
          <h2 className="text-5xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <AcademicCapIcon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Bellevue Big Picture High School</h3>
              </div>
              <p className="text-xl text-secondary font-semibold">Bellevue, WA • 2022–2026 (Expected) • GPA: 3.9</p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <AcademicCapIcon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Bellevue College (Running Start)</h3>
              </div>
              <p className="text-xl text-secondary font-semibold">Bellevue, WA • 2024–2026 (Expected) • GPA: 4.0</p>
              <p className="text-lg text-secondary mt-2">CS101, CS210, CS211</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Activities Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50/30 to-slate-100/40 relative border-b-2 border-slate-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-6xl w-full mx-auto px-8 relative z-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm py-12">
          <h2 className="text-5xl font-bold mb-12">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <UserGroupIcon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Medicine Club</h3>
              </div>
              <p className="text-xl text-secondary font-semibold">Co-Leader</p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <UserGroupIcon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Coding Club</h3>
              </div>
              <p className="text-xl text-secondary font-semibold">Co-Leader</p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <UserGroupIcon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Newspaper Club</h3>
              </div>
              <p className="text-xl text-secondary font-semibold">Co-Leader (Article Editor)</p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <UserGroupIcon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Salvation Army</h3>
              </div>
              <p className="text-xl text-secondary font-semibold">Community Volunteer</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-blue-100/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-6xl w-full mx-auto px-8 relative z-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm py-12">
          <h2 className="text-5xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <a href="mailto:thirumaran.dk@gmail.com" className="text-secondary hover:text-primary transition-colors text-lg">
                      thirumaran.dk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <a href="tel:+14255911475" className="text-secondary hover:text-primary transition-colors text-lg">
                      (425) 591-1475
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinIcon className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-lg">Location</p>
                    <p className="text-secondary text-lg">Bellevue, WA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/thirumaran-deepak-0772722b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-lg">Connect on LinkedIn</span>
                </a>
                <a
                  href="mailto:thirumaran.dk@gmail.com"
                  className="flex items-center gap-4 p-6 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  <EnvelopeIcon className="h-8 w-8" />
                  <span className="text-lg">Send me an email</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
} 