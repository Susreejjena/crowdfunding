import { useParams } from 'react-router-dom';
import { Heart, Share2, AlertCircle } from 'lucide-react';

const campaigns = [
  {
    id: '1',
    title: 'Help Build a Community Garden',
    description: 'Creating a sustainable garden to provide fresh produce for local families in need. This project aims to transform an unused lot into a thriving community space where people can grow their own food, learn about sustainable agriculture, and build stronger community bonds.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    goal: 10000,
    raised: 7500,
    daysLeft: 15,
    creator: 'Sarah Johnson',
    creatorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    updates: [
      {
        date: '2024-03-10',
        content: 'We\'ve secured the location and obtained all necessary permits!',
      }
    ]
  },
  {
    id: '2',
    title: 'Education for Rural Children',
    description: 'Providing educational resources and supplies to children in remote areas.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    goal: 15000,
    raised: 9000,
    daysLeft: 20,
    creator: 'NGO Foundation',
    creatorImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    updates: [
      {
        date: '2024-03-12',
        content: 'First batch of books and supplies delivered!',
      }
    ]
  },
  {
    id: '3',
    title: 'Clean Water Initiative',
    description: 'Installing water purification systems in communities without access to clean water.',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285',
    goal: 20000,
    raised: 12000,
    daysLeft: 25,
    creator: 'WaterAid Group',
    creatorImage: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
    updates: [
      {
        date: '2024-03-15',
        content: 'Pilot installation successfully completed in one village!',
      }
    ]
  }
];

const CampaignDetail = () => {
  const { id } = useParams();
  const campaign = campaigns.find(c => c.id === id) || campaigns[0];
  
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{campaign.title}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={campaign.creatorImage}
                alt={campaign.creator}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-600">Created by</p>
                <p className="font-semibold">{campaign.creator}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8">{campaign.description}</p>

            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Updates</h2>
              {campaign.updates.map((update, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-4 mb-4">
                  <p className="text-sm text-gray-600">{update.date}</p>
                  <p className="text-gray-700">{update.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">₹{campaign.raised.toLocaleString()}</span>
                  <span className="text-gray-600">raised of ₹{campaign.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{Math.round(progress)}% Funded</span>
                  <span>{campaign.daysLeft} days left</span>
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-purple-700">
                Support this project
              </button>

              <div className="flex justify-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                  <Heart className="h-5 w-5" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                  <AlertCircle className="h-5 w-5" />
                  <span>Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
