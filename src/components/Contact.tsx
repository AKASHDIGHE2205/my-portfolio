import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-8 leading-tight">
              Let’s Build Something <span className="gradient-text">Impactful</span> 🚀
            </h2>
            <p className="text-sm text-gray-400 mb-12 max-w-lg leading-relaxed">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Me</p>
                  <a href="mailto:akashdighe2205@gmail.com" className="text-white">akashdighe2205@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call Me</p>
                  <a href="tel:+919370331608" className="text-white">+91 9370331608</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://github.com/AKASHDIGHE2205" className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akash-dighe-006958239/" className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
