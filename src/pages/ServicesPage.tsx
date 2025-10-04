import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Hammer, 
  Wrench, 
  PaintBucket, 
  ArrowRight, 
  CheckCircle,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Kitchen Cabinets",
      description: "Transform your kitchen with handcrafted custom cabinets designed to maximize storage and enhance your home's value. Quality hardwood construction with modern finishes.",
      features: ["Solid wood construction", "Soft-close hinges", "Custom sizing", "Premium finishes"],
      beforeAfter: {
        before: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.decorhomeideas.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fugly-kitchen-cabinets.jpg&f=1&nofb=1&ipt=9dd6d6b3a2a39c1ee8ca631a22da5f525816183eb21e5f85e374c5d77ce308cb",
        after: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.christianbroscabinets.com%2Fimages%2Fkitchens%2F2347-15.jpg&f=1&nofb=1&ipt=ccd456785806e5ca8d70bc137ffcc38fac07bf5e391ac2fb6ee49f371bebf769"
      }
    },
    {
      icon: Hammer,
      title: "Deck Construction & Repair",
      description: "Build your perfect outdoor living space with custom deck construction. From pressure-treated lumber to composite materials, we create durable decks that last.",
      features: ["Pressure-treated lumber", "Composite options", "Custom railings", "Weatherproof staining"],
      beforeAfter: {
        before: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fadvantageremodelinginc.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fgage-deck-after-1-burlington-ma.jpg&f=1&nofb=1&ipt=54349327e529f764a6e180b4a222d0930ccc90278f7540170a6861ae4872e300",
        after: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdeck-armor.com%2Fwp-content%2Fuploads%2F2024%2F05%2FNewDecks-RockyHarbor-new-01-768x574.jpg&f=1&nofb=1&ipt=26533afb8a8a913936b72692136a863fdf5643330433640e3a7ff8bc181f6966"
      }
    },
    {
      icon: Wrench,
      title: "Home Renovations",
      description: "Complete home renovation services including framing, drywall, flooring installation, and trim work. Turn your vision into reality with professional craftsmanship.",
      features: ["Room additions", "Bathroom remodels", "Basement finishing", "Trim & molding"],
      beforeAfter: {
        before: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.build-review.com%2Fwp-content%2Fuploads%2F2021%2F06%2FHome-renovation.jpg&f=1&nofb=1&ipt=8acb4088c80b991d56271c4f8a053a3799c494dfe0741c3be3be28ad894e1f2a",
        after: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frenovationdesigngroup.com%2Fwp-content%2Fuploads%2F1716383.jpg&f=1&nofb=1&ipt=fcad77a98b9d34a3eec2098d909e0d670d6c17acfde2d4cdba7066b74030ea9e"
      }
    },
    {
      icon: PaintBucket,
      title: "Custom Furniture & Repairs",
      description: "Handcrafted custom furniture pieces and expert furniture repair services. From built-in shelving to antique restoration, we handle all your woodworking needs.",
      features: ["Built-in shelving", "Custom tables", "Furniture restoration", "Wood refinishing"],
      beforeAfter: {
        before: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffurniturerestoring.com%2Fwp-content%2Fuploads%2F2024%2F01%2FIMG_5148.jpg&f=1&nofb=1&ipt=7d3ab4cbf7753927013d8aea179588b43ac9b478d3b89b11a53ea0f3c354ce5d",
        after: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffurniturerestoring.com%2Fwp-content%2Fuploads%2F2024%2F01%2FIMG_5194.jpg&f=1&nofb=1&ipt=c5173888e84418a96630bf16b432a5f9793818b9d6c230679989b82fa14a5e90"
      }
    }
  ];

  const whyChooseUs = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality. Get the best value for your investment."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time completion and clear communication throughout your project. No surprises, just results."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All work comes with our satisfaction guarantee. Licensed, insured, and committed to excellence."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Carpentry Services | Kitchen Cabinets, Decks, Home Renovation | CraftMaster</title>
        <meta name="description" content="Professional carpentry services including custom kitchen cabinets, deck construction, home renovations, and furniture repair. Affordable, reliable, and quality guaranteed." />
        <meta name="keywords" content="kitchen cabinet installation, deck builder, home renovation contractor, custom furniture, trim work, carpentry services, affordable carpenter, quality carpentry work" />
        <meta property="og:title" content="Professional Carpentry Services | CraftMaster" />
        <meta property="og:description" content="Expert carpentry services: custom cabinets, decks, renovations & more. Quality craftsmanship, affordable rates, satisfaction guaranteed." />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="min-h-screen pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-amber-600">Carpentry Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your home with expert carpentry services. From custom cabinets to complete renovations, 
                we deliver quality craftsmanship that enhances your home's beauty and value.
              </p>
              <Link
                to="/contact"
                className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 inline-flex items-center"
                onClick={() => window.trackConversion?.('services_hero_cta', 'lead_generation')}
              >
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
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
                Our Carpentry Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive carpentry solutions for your home improvement needs
              </p>
            </motion.div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <service.icon className="h-10 w-10 text-amber-600 mr-4" />
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 inline-flex items-center"
                      onClick={() => window.trackConversion?.(`service_cta_${index}`, 'lead_generation')}
                    >
                      Get Quote for This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2 font-medium">Before</p>
                        <img
                          src={service.beforeAfter.before}
                          alt={`Before ${service.title.toLowerCase()} work`}
                          className="rounded-lg shadow-md w-full h-48 object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2 font-medium">After</p>
                        <img
                          src={service.beforeAfter.after}
                          alt={`After ${service.title.toLowerCase()} completion`}
                          className="rounded-lg shadow-md w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Choose CraftMaster Carpentry?
              </h2>
              <p className="text-xl text-gray-600">
                Quality craftsmanship you can trust
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <item.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Let's bring your carpentry project to life!
              </p>
              <Link
                to="/contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
                onClick={() => window.trackConversion?.('services_bottom_cta', 'lead_generation')}
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;