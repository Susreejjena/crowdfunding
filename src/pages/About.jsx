import { Heart, Users, Globe, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#f4f0fa] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Circular Photo */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80" // New picture of helping others
              alt="FundHope"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#4c3cb2] mb-4">About FundHope</h1>
            <p className="text-lg text-gray-700 mb-4">
              FundHope is a global charity platform dedicated to empowering communities and transforming lives. We connect donors with impactful causes, from education and healthcare to environmental sustainability.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to bring hope to those in need by providing resources, funding, and support. Together, we create lasting change and build a brighter future for everyone.
            </p>
            <p className="text-lg text-gray-700">
              Join us today and be a part of the change. Every donation, no matter how small, makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c3cb2] mb-8">Why We Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Medical Aid */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576765974257-b414b9ea0051?auto=format&fit=crop&w=500&q=80" // Medical aid image
                alt="Medical Aid"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                <p className="text-white text-lg text-center">
                  We started FundHope to provide medical aid to underserved communities, ensuring everyone has access to healthcare.
                </p>
              </div>
            </div>

            {/* NGO Support */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80" // NGO support image
                alt="NGO Support"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                <p className="text-white text-lg text-center">
                  We empower NGOs to amplify their impact, helping them reach more people and create sustainable change.
                </p>
              </div>
            </div>

            {/* Animal Welfare */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=500&q=80" // Animal welfare image
                alt="Animal Welfare"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                <p className="text-white text-lg text-center">
                  We advocate for animal welfare, supporting shelters and rescue organizations to protect and care for animals in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the About Page */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Successful Projects</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">$25M+</div>
            <div className="text-gray-600">Funds Raised</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Global Supporters</div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600">We believe in the power of empathy and helping others in need.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Building strong connections between donors and causes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">Making a difference across borders and cultures.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">Ensuring clear and honest communication in every project.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;