import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Award, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    trackConversion?: (eventName: string, eventType: string) => void;
  }
}

const HomePage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Outstanding craftsmanship! They transformed our kitchen with beautiful custom cabinets. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      text: "Professional, reliable, and affordable. The deck they built exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Chen",
      text: "Quick response time and excellent quality work. Will definitely hire them again!",
      rating: 5
    }
  ];

  const achievements = [
    { icon: Calendar, number: "15+", text: "Years Experience" },
    { icon: Users, number: "500+", text: "Happy Customers" },
    { icon: Award, number: "100%", text: "Satisfaction Rate" }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Carpenter Services | Custom Carpentry & Woodworking | CraftMaster</title>
        <meta name="description" content="Expert carpenter with 15+ years experience in custom carpentry, kitchen cabinets, decks, and home renovations. Licensed, insured, and affordable rates. Free quotes!" />
        <meta name="keywords" content="carpenter near me, custom carpentry, kitchen cabinets, deck building, home renovation, woodworking, furniture repair, affordable carpenter, licensed carpenter" />
        <meta property="og:title" content="Professional Carpenter Services | CraftMaster Carpentry" />
        <meta property="og:description" content="Transform your home with expert carpentry services. Custom cabinets, decks, and renovations. 15+ years experience, licensed & insured." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Expert <span className="text-amber-600">Carpenter</span> Services for Your Dream Home
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your space with professional carpentry services. From custom cabinets to deck building, 
                  we deliver quality craftsmanship with over 15 years of experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                    onClick={() => window.trackConversion?.('hero_cta_click', 'lead_generation')}
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                  >
                    View Services
                  </Link>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Licensed & Insured
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Free Estimates
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sweetcaptcha.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fhome-remodeling-living-room-ideas.jpg&f=1&nofb=1&ipt=a75359020caa88ea69d56a8b5138d4cb3784ca4238118147ed3e7a324bfc388e"
                  alt="Professional carpenter working on custom kitchen cabinets"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center text-amber-600">
                    <Star className="h-5 w-5 fill-current mr-1" />
                    <span className="font-bold">5.0</span>
                    <span className="text-gray-600 ml-1">(200+ reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About CraftMaster Carpentry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 15 years of experience in professional carpentry, we specialize in custom woodworking, 
                home renovations, and quality craftsmanship that stands the test of time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatlaspaintingremodeling.com%2Fwp-content%2Fuploads%2F2024%2F03%2FDeck.webp&f=1&nofb=1&ipt=5a1c7a875833dfa3cea986ad1c63b4d0d6f0e157372a61eb87bc01a6831d8666"
                  alt="Master carpenter with tools and certifications"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Master Craftsman & Licensed Professional</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm John Smith, a certified carpenter with extensive experience in residential and commercial projects. 
                  My commitment to quality craftsmanship and customer satisfaction has earned me a reputation as the 
                  go-to carpenter for custom woodworking and home renovations.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Licensed Carpenter (License #CAR123456)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Fully Insured & Bonded</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>OSHA Safety Certified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Member of Local Carpenters Union</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <achievement.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                      <div className="text-sm text-gray-600">{achievement.text}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it - hear from satisfied customers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                Get a free estimate today and transform your space with professional carpentry services. 
                Quality work guaranteed!
              </p>
              <Link
                to="/contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
                onClick={() => window.trackConversion?.('bottom_cta_click', 'lead_generation')}
              >
                Get Your Free Quote Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;