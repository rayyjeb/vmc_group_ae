import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Shield, Heart, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';

const stats = [
  { number: '500+', label: 'Satisfied Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Cold Chain' },
  { number: '100%', label: 'Quality Guarantee' }
];

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We maintain the highest standards in food safety and quality control, ensuring every product meets international standards.'
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. We build lasting relationships through exceptional service and reliability.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With extensive networks across UAE and GCC, we connect local businesses to global opportunities and markets.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously evolve our services and adopt new technologies to better serve our clients and improve efficiency.'
  }
];

const milestones = [
  {
    year: '2008',
    title: 'Company Founded',
    description: 'VMC UAE Group was established with a vision to transform the food supply chain in the UAE.'
  },
  {
    year: '2012',
    title: 'GCC Expansion',
    description: 'Extended our services across the GCC region, establishing distribution networks in key markets.'
  },
  {
    year: '2016',
    title: 'ISO Certification',
    description: 'Achieved ISO certification and HACCP compliance, reinforcing our commitment to quality and safety.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Implemented advanced tracking systems and digital solutions to enhance supply chain visibility.'
  },
  {
    year: '2024',
    title: 'Sustainability Initiative',
    description: 'Launched comprehensive sustainability programs focusing on eco-friendly packaging and operations.'
  }
];

const certifications = [
  'HACCP Certified',
  'ISO 22000:2018',
  'FDA Registered',
  'Dubai Municipality Approved',
  'Halal Certified',
  'Emirates Authority for Standardization'
];

const AboutUs = () => (
  <div className="min-h-screen bg-white">
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-vmc-navy to-vmc-charcoal text-custom-text-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl tracking-tighter mb-6">
                VMC General Trading LLC
              </h1>
              <p className="text-lg mb-8 text-custom-text-200 leading-relaxed">
                Leading the transformation of food supply chains across the UAE and GCC region since 2008,
                with a commitment to quality, innovation, and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-vmc-green">{stat.number}</div>
                    <div className="text-custom-text-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/vmc.jpg" // Replace with your actual group/team photo path if available
                alt="VMC UAE Group Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl tracking-tight text-custom-text-100 font-medium mb-4">Our Mission</h2>
                <p className="text-custom-text-100 leading-relaxed">
                  To provide comprehensive, reliable, and innovative food solutions that enable our clients
                  to succeed in their markets while maintaining the highest standards of quality, safety,
                  and sustainability throughout the entire supply chain.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl tracking-tight text-custom-text-100 font-medium mb-4">Our Vision</h2>
                <p className="text-custom-text-100 leading-relaxed">
                  To be the leading food solutions provider in the GCC region, recognized for our innovation,
                  reliability, and commitment to excellence, while contributing to the sustainable growth
                  of the food industry ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              Our Core Values
            </h2>
            <p className="text-lg mb-8 text-custom-text-200 leading-relaxed">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-text-100 mb-4">{value.title}</h3>
                  <p className="text-custom-text-100">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-custom-text-200 max-w-3xl mx-auto">
              From a local startup to a regional leader - our milestones tell the story of growth, innovation, and success.
            </p>
          </div>
          <Timeline
            data={milestones.map(m => ({
              title: `${m.year}`,
              content: <p className="text-neutral-700 dark:text-neutral-300">{m.description}</p>
            }))}
          />
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-custom-text-200 max-w-3xl mx-auto mb-8">
            Our dedicated team of professionals is the driving force behind our success.
          </p>
          <Image
            width={800}
            height={500}
            src="/logo.png"
            alt="VMC UAE Group Team"
            className="w-full bg-black max-w-2xl mx-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-custom-text-200 max-w-3xl mx-auto mb-8">
              Our commitment to quality and safety is validated by internationally recognized certifications and standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-brand mr-3" />
                <span className="text-vmc-navy font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default AboutUs;