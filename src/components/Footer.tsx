import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 text-2xl font-display font-bold text-white">
          <Code2 className="text-primary w-8 h-8" />
          <span>AD<span className="text-primary">.</span></span>
        </div>

        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm mb-2">
            © 2026 <span className="text-white font-bold">Akash Dighe</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with <span className="text-primary">React</span> + <span className="text-secondary">TypeScript</span> + <span className="text-accent">Motion</span>
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/AKASHDIGHE2205" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/akash-dighe-006958239/" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:akashdighe2205@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
