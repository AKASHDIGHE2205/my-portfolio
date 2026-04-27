import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'MCS (Master of Computer Science)',
    year: '2022-2024',
    institution: 'Savitribai Phule Pune University',
    description: ''
  },
  {
    degree: 'BSc CS (Bachelor of Science in Computer Science)',
    year: '2019-2022',
    institution: 'Savitribai Phule Pune University',
    description: ''
  }
];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Academic <span className="text-primary">Background</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:bg-primary/5 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <GraduationCap size={28} />
              </div>
              <div className="flex items-center gap-2 text-primary text-xs font-bold mb-4">
                <Calendar size={14} /> {edu.year}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-300 font-medium mb-4">{edu.institution}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
