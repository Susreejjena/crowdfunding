import React from 'react';
import CampaignCard from '../components/CampaignCard';

const SAMPLE_CAMPAIGNS = [
  {
    id: '1',
    title: 'Help Build a Community Garden',
    description: 'Creating a sustainable garden to provide fresh produce for local families in need.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    goal: 10000,
    raised: 7500,
    daysLeft: 15,
  },
  {
    id: '2',
    title: 'Education for Rural Children',
    description: 'Providing educational resources and supplies to children in remote areas.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    goal: 15000,
    raised: 9000,
    daysLeft: 20,
  },
  {
    id: '3',
    title: 'Clean Water Initiative',
    description: 'Installing water purification systems in communities without access to clean water.',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285',
    goal: 20000,
    raised: 12000,
    daysLeft: 25,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
            <p className="text-xl mb-8">Support meaningful causes and help create positive change</p>
          </div>
        </div>
      </div>

      {/* Featured Campaigns */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_CAMPAIGNS.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;