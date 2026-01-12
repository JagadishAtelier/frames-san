import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ number, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.5,    // Starts when 50% of the card is visible
  });

  return (
    <div 
      ref={ref}
      className="flex lg:w-40 w-35 flex-col items-center justify-center lg:py-4 py-1 bg-[#121212] rounded-2xl border border-white/5 shadow-2xl transition-transform hover:scale-105"
    >
      <h2 className="lg:text-3xl text-lg font-bold text-white lg:mb-2">
        {inView ? <CountUp end={number} duration={2.5} separator="," /> : '0'}
        {suffix}
      </h2>
      <p className="text-gray-500 text-sm text-center">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: 5, suffix: '+', label: 'Years in Business' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 10, suffix: '+', label: 'Photography Awards' },
    { number: 2, suffix: '+', label: 'International Shoots', prefix: '0' },
    { number: 10000, suffix: '+', label: 'Social Media Followers' },
    { number: 90, suffix: '%', label: 'Client Retention Rate' },
  ];

  return (
    <section className="flex items-center justify-center relative z-50 mx-auto">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-3 grid grid-cols-2 md:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <StatCard 
            key={index} 
            number={stat.number} 
            suffix={stat.suffix} 
            label={stat.label} 
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;