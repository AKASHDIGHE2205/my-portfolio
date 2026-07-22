import { motion } from 'motion/react';
import { EXPERIENCES } from '@/src/constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl mb-4"
          >
            Professional <span className="text-primary">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A timeline of my career, focusing on technical growth and business impact.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background shadow-lg shadow-primary/50 z-10" />

                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className="glass-card p-8 hover:border-primary/50 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">
                        {exp.period}
                      </span>
                      {exp.isIntern && (
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full border border-secondary/20">
                          Internship
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                      <Briefcase size={14} />
                      <span className="font-medium text-gray-300">{exp.company}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
