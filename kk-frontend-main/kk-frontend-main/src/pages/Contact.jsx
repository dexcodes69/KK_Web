import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast.success('Message sent successfully! We\'ll get back to you soon.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white font-sans text-gray-900">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      {/* --- HERO HEADER --- */}
      <div className="text-center pt-20 pb-16 px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-black mb-4">Get in Touch</h1>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
          Whether you have a question about our collections or need assistance with your order, our concierge team is here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          {/* --- LEFT: CONTACT INFORMATION (Dark Luxury Card) --- */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden h-full">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <h2 className="text-3xl font-serif mb-10">Contact Information</h2>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-1">Visit Our Store</h3>
                    <p className="text-lg leading-relaxed">555, Rex Textiles<br />I Block, Satabalipuram<br />Gwalior, M.P. - 474020</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-1">Call Us</h3>
                    <a href="tel:8770520050" className="text-lg hover:text-gray-300 transition-colors">+91 8770520050</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-1">Email Us</h3>
                    <a href="mailto:textiles.rex@gmail.com" className="text-lg hover:text-gray-300 transition-colors">textiles.rex@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-1">Opening Hours</h3>
                    <p className="text-lg">Mon - Sat: 10:00 AM - 8:00 PM<br /><span className="text-white/50 text-base">Sunday: Closed</span></p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-16 pt-8 border-t border-white/10 flex gap-6">
                <a href="#" className="hover:scale-110 transition-transform"><Facebook size={24}/></a>
                <a href="#" className="hover:scale-110 transition-transform"><Instagram size={24}/></a>
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTACT FORM (Clean Minimalist) --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white p-4 md:p-8">
              <h2 className="text-4xl font-serif mb-2 text-gray-900">Send a Message</h2>
              <p className="text-gray-500 mb-10">We usually respond within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pb-3 border-b border-gray-300 bg-transparent text-lg focus:border-black focus:outline-none transition-colors peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="absolute left-0 top-0 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold">
                    Full Name
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-gray-300 bg-transparent text-lg focus:border-black focus:outline-none transition-colors peer"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="email" className="absolute left-0 top-0 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold">
                      Email Address
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-gray-300 bg-transparent text-lg focus:border-black focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label htmlFor="phone" className="absolute left-0 top-0 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pb-3 border-b border-gray-300 bg-transparent text-lg focus:border-black focus:outline-none transition-colors peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="subject" className="absolute left-0 top-0 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold">
                    Subject
                  </label>
                </div>

                <div className="group relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pb-3 border-b border-gray-300 bg-transparent text-lg focus:border-black focus:outline-none transition-colors resize-none peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-0 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold">
                    How can we help?
                  </label>
                </div>

                <button
                  type="submit"
                  className="group bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mt-4"
                >
                  Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- FULL WIDTH MAP --- */}
      <div className="w-full h-[500px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.376451676632!2d78.17235227618997!3d26.217036689622567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42171c773e3%3A0x6d90d7966453003e!2sRex%20Textiles!5e0!3m2!1sen!2sin!4v1709923847231!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;