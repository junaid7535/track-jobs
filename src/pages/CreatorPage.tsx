import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Coffee } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { FaPaypal } from 'react-icons/fa';

const CreatorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About the Creator - JobTrac</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-dark-bg dark:via-black dark:to-dark-card/20 amoled:from-amoled-bg amoled:via-black amoled:to-amoled-card/20 text-slate-800 dark:text-slate-200">
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-4xl mx-auto bg-white/60 dark:bg-dark-card/50 amoled:bg-amoled-card/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50 dark:border-dark-border/50 amoled:border-amoled-border/50"
          >
            <div className="md:flex">
              {/* Left Side: Image and Bio */}
              <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white flex flex-col items-center justify-center text-center">
                <motion.img 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  src="https://ik.imagekit.io/halcyonweb/me.jpg" 
                  alt=""
                  className="w-32 h-32 rounded-full border-4 border-white/50 shadow-lg"
                />
                <h2 className="mt-4 text-2xl font-bold">Junaid</h2>
                <p className="mt-2 text-sm text-indigo-100">Full Stack Engineer </p>
              </div>

              {/* Right Side: Content and CTAs */}
            
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CreatorPage;