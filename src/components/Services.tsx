import { Scissors, Sparkles, Users, Clock, CheckCircle } from 'lucide-react';

export default function Services() {
  const barberServices = [
    {
      icon: <Scissors className="text-purple-600" size={32} />,
      title: "Classic Haircut",
      description: "Professional haircut with precision styling",
      price: "₹500+",
      duration: "30 min"
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Beard Trim & Style",
      description: "Expert beard grooming and shaping",
      price: "₹400+",
      duration: "20 min"
    },
    {
      icon: <Scissors className="text-purple-600" size={32} />,
      title: "Hot Towel Shave",
      description: "Traditional luxury shaving experience",
      price: "₹600+",
      duration: "45 min"
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Kids Haircut",
      description: "Gentle haircuts for children",
      price: "₹400+",
      duration: "25 min"
    }
  ];

  const makeupServices = [
    {
      icon: <Sparkles className="text-pink-600" size={32} />,
      title: "Bridal Makeup",
      description: "Complete bridal makeup package",
      price: "₹3,000+",
      duration: "2-3 hours"
    },
    {
      icon: <Sparkles className="text-pink-600" size={32} />,
      title: "Event Makeup",
      description: "Professional makeup for special occasions",
      price: "₹1,600+",
      duration: "1-2 hours"
    },
    {
      icon: <Sparkles className="text-pink-600" size={32} />,
      title: "Makeup Lesson",
      description: "Personal makeup application tutorial",
      price: "₹2,000+",
      duration: "1.5 hours"
    },
    {
      icon: <Sparkles className="text-pink-600" size={32} />,
      title: "Everyday Makeup",
      description: "Natural daily makeup application",
      price: "₹1,000+",
      duration: "45 min"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From classic barber services to professional makeup artistry, 
            we offer everything you need to look and feel your best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Barber Services */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Scissors className="text-purple-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Barber Services</h3>
            </div>
            
            <div className="grid gap-6">
              {barberServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 shadow-sm border border-purple-100">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">{service.price}</span>
                        <div className="flex items-center text-gray-500">
                          <Clock size={14} className="mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Makeup Services */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Sparkles className="text-pink-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Makeup Services</h3>
            </div>
            
            <div className="grid gap-6">
              {makeupServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 shadow-sm border border-pink-100">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">{service.price}</span>
                        <div className="flex items-center text-gray-500">
                          <Clock size={14} className="mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h4>
              <p className="text-gray-600">Professional services with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-pink-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Experienced professionals in both fields</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600">Easy booking and appointment management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
