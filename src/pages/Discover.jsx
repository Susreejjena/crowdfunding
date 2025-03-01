import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CampaignCard from '../components/CampaignCard';

const CATEGORIES = ['All', 'Education', 'Environment', 'Healthcare', 'Technology', 'Community'];

const SAMPLE_CAMPAIGNS = [
  {
    id: '1',
    title: 'Help Build a Community Garden',
    description: 'Creating a sustainable garden to provide fresh produce for local families in need.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    goal: 10000,
    raised: 7500,
    daysLeft: 15,
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Education for Rural Children',
    description: 'Providing educational resources and supplies to children in remote areas.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    goal: 15000,
    raised: 9000,
    daysLeft: 20,
    category: 'Education'
  },
  {
    id: '3',
    title: 'Clean Water Initiative',
    description: 'Installing water purification systems in communities without access to clean water.',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285',
    goal: 20000,
    raised: 12000,
    daysLeft: 25,
    category: 'Community'
  },
  {
    id: '4',
    title: 'Medical Equipment for Local Clinic',
    description: 'Upgrading medical equipment for a community health clinic serving underprivileged areas.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
    goal: 30000,
    raised: 18000,
    daysLeft: 30,
    category: 'Healthcare'
  },
  {
    id: '5',
    title: 'Coding Workshop for Youth',
    description: 'Teaching programming skills to underprivileged youth to prepare them for future careers.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    goal: 12000,
    raised: 4000,
    daysLeft: 40,
    category: 'Technology'
  },
  {
    id: '6',
    title: 'Sustainable Energy Project',
    description: 'Installing solar panels in rural communities to provide clean and reliable energy.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    goal: 25000,
    raised: 15000,
    daysLeft: 35,
    category: 'Environment'
  }
];

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredCampaigns = SAMPLE_CAMPAIGNS.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 appearance-none"
              >
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="newest">Newest First</option>
                <option value="mostFunded">Most Funded</option>
                <option value="endingSoon">Ending Soon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredCampaigns.length} campaigns found
          </h2>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No campaigns found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;