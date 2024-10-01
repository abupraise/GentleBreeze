import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Gallery = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className={`bg-gray-200 rounded-lg overflow-hidden shadow-lg ${
              index % 5 === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <ReactPlayer
                url={item.src}
                controls
                playing={index === 0}
                muted={index === 0}
                loop={index === 0}
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload'
                    }
                  }
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;