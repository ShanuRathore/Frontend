import React from 'react';

const features = [
  {
    icon: '🍳',
    title: 'Easy-to-Follow Recipes',
    description: 'Step-by-step instructions to help you cook delicious meals.'
  },
  {
    icon: '🔍',
    title: 'Advanced Search',
    description: 'Find recipes based on ingredients, cuisine, or dietary needs.'
  },
  {
    icon: '📝',
    title: 'Personalized Recommendations',
    description: 'Get recipe suggestions tailored to your taste preferences.'
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    description: 'Access recipes and create shopping lists on the go.'
  }
];

const Features = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Feature = () => (
  <section className="py-20 bg-gradient-light dark:bg-gradient-dark h-full md:h-[100vh]">
    <div className="container mx-auto px-4">
      <h2 className="text-7xl font-bold text-center mb-12 mt-10 dark:text-slate-200">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Features 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </div>
  </section>
);

export default Feature;
