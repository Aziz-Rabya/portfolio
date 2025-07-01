import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Rabya Aziz
          </h3>
          <p className="text-slate-400 mt-1">Full-Stack Developer & UI/UX Designer</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-slate-500">
        <p className="flex justify-center items-center gap-2 text-sm">
          Made with <Heart className="h-4 w-4 text-red-500" /> by Rabya Aziz © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
