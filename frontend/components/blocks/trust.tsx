
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Clock, MapPin, Star, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const TrustIndicators = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'HACCP Certified',
      description: 'Hazard Analysis Critical Control Points certification ensuring food safety.',
      badge: 'HACCP',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'ISO 22000:2018',
      description: 'International standard for food safety management systems.',
      badge: 'ISO',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock cold chain management and customer support.',
      badge: '24/7',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'UAE Licensed',
      description: 'Fully licensed and compliant with UAE food safety regulations.',
      badge: 'UAE',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Across UAE & GCC',
      icon: Star,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      number: '16+',
      label: 'Years Experience',
      description: 'Since 2008',
      icon: Award,
      color: 'from-blue-400 to-purple-500'
    },
    {
      number: '99.9%',
      label: 'Quality Rate',
      description: 'Customer Satisfaction',
      icon: CheckCircle,
      color: 'from-green-400 to-emerald-500'
    },
    {
      number: '10K+',
      label: 'Products Delivered',
      description: 'Monthly Average',
      icon: TrendingUp,
      color: 'from-pink-400 to-rose-500'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-32 animate-bounce" style={{ animationDuration: '3s' }}>
        <Zap className="w-8 h-8 text-emerald-400/50" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-yellow-400/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our commitment to quality, safety, and reliability has earned us the trust of
            hundreds of businesses across the UAE and GCC region since 2008.
          </p>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with Gradient Background */}
                <div className="relative mb-6 mx-auto w-20 h-20">
                  <div className={`w-full h-full bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Floating Sparkle */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                </div>

                <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>

                <div className="text-xl font-semibold mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {stat.label}
                </div>

                <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Enhanced Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {cert.badge}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center animate-fade-in">
          <div className="relative bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl p-12 border border-white/20 backdrop-blur-sm overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZGlhbW9uZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjAgMGwxMCAyMC0xMCAyMEwxMCAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkaWFtb25kKSIvPjwvc3ZnPg==')]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Experience the VMC
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Difference
                </span>
              </h3>

              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who trust VMC UAE Group for their food packaging,
                distribution, and supply chain needs. Quality guaranteed, excellence delivered.
              </p>

              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center">
                  View Our Certifications
                  <Star className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
