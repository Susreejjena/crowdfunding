import { motion } from "framer-motion";
import CampaignCard from "../components/CampaignCard";

const campaigns = [
  {
    id: "1",
    title: "Help Build a Community Garden",
    description: "Creating a sustainable garden to provide fresh produce for local families in need.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    goal: "₹10,000",
    raised: "₹7,500",
    daysLeft: 15,
  },
  {
    id: "2",
    title: "Education for Rural Children",
    description: "Providing educational resources and supplies to children in remote areas.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    goal: "₹15,000",
    raised: "₹9,000",
    daysLeft: 20,
  },
  {
    id: "3",
    title: "Clean Water Initiative",
    description: "Installing water purification systems in communities without access to clean water.",
    image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285",
    goal: "₹20,000",
    raised: "₹12,000",
    daysLeft: 25,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    message: "This platform helped us raise funds for our local school renovation. So grateful!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Mehta",
    message: "An intuitive and powerful way to support causes I truly care about.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const Home = () => (
  <div className="min-h-screen bg-[#f4f0fa] text-gray-800">
    {/* Header Section */}
    <section
      className="relative bg-cover bg-center text-white py-32 px-4 text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow">
          Empower Change, One Campaign at a Time
        </h1>
        <p className="text-xl text-white mb-6">
          Join hands to support causes that matter — from education to sustainability, your contribution counts.
        </p>
        <p className="text-xl text-white mb-10">
          Every donation, no matter how small, makes a big difference. Together, we can create a better future for everyone.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/discover"
            className="inline-block bg-white text-[#6c63ff] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#ebe7fa] hover:scale-105 transition"
          >
            Explore Campaigns
          </a>
          <a
            href="/donate now"
            className="inline-block bg-[#6c63ff] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#5848d5] hover:scale-105 transition"
          >
            Donate Now
          </a>
        </div>
      </motion.div>
    </section>

    {/* Featured Campaigns */}
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">🌟 Featured Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
            <CampaignCard {...c} />
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">💬 What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-[#f1e9ff] p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-[#dcd6f7] mb-4 shadow-md object-cover"
            />
            <h4 className="text-lg font-semibold mb-2">{t.name}</h4>
            <p className="italic text-gray-700 max-w-md">&quot;{t.message}&quot;</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Newsletter */}
    <section className="bg-[#ebe7fa] py-16 text-center px-6">
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-[#4c3cb2]">📬 Subscribe to Our Newsletter</h3>
        <p className="mb-6 text-[#6a5acd]">Stay updated on new campaigns, success stories, and community highlights.</p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-md border border-gray-300 w-full sm:w-auto" required aria-label="Subscribe to newsletter"/>
          <button type="submit" className="bg-[#6c63ff] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#5848d5] transition">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>

  {/* CTA */}
<section
  className="relative bg-cover bg-center text-gray-900 py-32 px-6 text-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1470&q=80')", // Charity-themed image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
 <div className="absolute inset-0 bg-[#dcd6f7]/50"></div>
 <div className="relative z-10 max-w-4xl mx-auto">
    <h3 className="text-4xl font-bold mb-6 text-[#4c3cb2]">
      Ready to Launch Your Own Campaign?
    </h3>
    <p className="text-xl text-[#6a5acd] mb-8">
      Start creating impact in your community with just a few clicks.
    </p>
    <a
      href="/login"
      className="inline-block bg-white text-[#6c63ff] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#ebe7fa] hover:scale-105 transition"
    >
      Get Started
    </a>
  </div>
</section>

    {/* Footer */}
    <footer className="bg-[#f4f0fa] text-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6c63ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-2xl font-bold ml-2">FundHope</span>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Discover", "About", "Contact"].map((link, i) => (
              <li key={i}>
                <a href={`/${link.toLowerCase()}`} className="hover:text-black transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact#faq" className="hover:text-black transition">FAQs</a>
            </li>
            <li>
              <a href="/contact#privacy" className="hover:text-black transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact#help" className="hover:text-black transition">Help Center</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <h3 className="font-semibold">📧 Email</h3>
              <p className="text-gray-600">support@fundhope.com</p>
            </li>
            <li>
              <h3 className="font-semibold">📞 Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </li>
            <li>
              <h3 className="font-semibold">📍 Address</h3>
              <p className="text-gray-600">
                123 Funding Street<br />
                San Francisco, CA 94105
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ImpactHub. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Home;