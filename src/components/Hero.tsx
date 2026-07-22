import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Send } from 'lucide-react';
const Akash = '/Akash1.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 inline-block border border-primary/20"
          >
            Available for new opportunities
          </motion.span>

          <h1 className="text-5xl mb-4 leading-tight">
            Hi, I'm <span className="gradient-text">Akash Dighe</span>
          </h1>

          <div className="text-2xl md:text-3xl font-display font-medium text-blue-600 mb-4 h-10">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'Full-Stack Developer', 2000,
                'ReactJS Developer', 2000,
                'NodeJS Developer', 2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Full Stack Developer with 3+ years of experience building scalable web applications and high-performance APIs. I specialize in modern JavaScript ecosystems <span className='font-bold'>(React, Next.js, Node.js) </span> and robust database architectures 
            <span className='font-bold'>(MongoDB, PostgreSQL, MySQL)</span>. Passionate about clean architecture, performance optimization, and crafting intuitive, responsive user experiences that turn complex problems into seamless digital products
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="/Akash_Dighe_Full_Stack_Developer_MERN_3_Years_Exp.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold flex items-center gap-2 transition-all"
            >
              Download Resume <Download size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 rounded-xl font-bold flex items-center gap-2 transition-all"
            >
              Contact Me <Send size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Circular Image Container */}
          <div className="relative z-10 w-64 h-64 lg:w-120 lg:h-120 rounded-full overflow-hidden ring-4 ring-primary/20 mx-auto group">
            <img
              src={Akash}
              alt="Akash Dighe Coding"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent rounded-full" />


            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-2 py-1 shadow-2xl shadow-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-bold text-white">3 Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



