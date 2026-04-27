import { motion } from 'motion/react';
import { CERTIFICATIONS } from '@/src/constants';

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Certifications & <span className="text-primary">Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 flex items-center gap-6 group hover:border-primary/50 transition-all"
            >
              <div className="text-4xl group-hover:scale-125 transition-transform duration-500">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
