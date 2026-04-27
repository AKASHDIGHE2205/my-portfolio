import { motion } from 'motion/react';
import { User, Award, Briefcase, Target } from 'lucide-react';

const highlights = [
  {
    icon: <Briefcase className="text-primary" />,
    title: '2.5+ Years of Experience',
    text: 'Delivering scalable full-stack solutions with a strong focus on enterprise-grade applications.'
  },
  {
    icon: <Award className="text-secondary" />,
    title: 'MERN & SQL Expertise',
    text: 'Proficient in both NoSQL and relational databases, enabling flexible and robust data architectures.'
  },
  {
    icon: <Target className="text-accent" />,
    title: 'Performance-Oriented',
    text: 'Focused on efficient API design, ERP systems, and optimizing application performance at scale.'
  },
  {
    icon: <User className="text-primary" />,
    title: 'Full Lifecycle Developer',
    text: 'Experienced in managing complete development cycles—from concept and design to deployment.'
  }
];

export function About() {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGV8ZW58MHwwfDB8fHww&fm=jpg&q=60&w=3000"
                alt="Akash Dighe"
                className="relative z-10 rounded-3xl w-full h-auto object-cover border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 z-20">
                <p className="text-3xl font-display font-bold gradient-text">2.5+</p>
                <p className="text-sm text-gray-400">Years of Impact</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Crafting Digital <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              I am a dedicated Full Stack Developer with a passion for building scalable and secure web applications. My journey in tech is driven by a commitment to clean code and high-performance architectures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-2xl">
              <h4 className="font-bold text-white mb-2">Core Strengths:</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> End-to-end architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> REST API development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Authentication & RBAC
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Clean & scalable code
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
