import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StepContentProps {
  title: string;
  description?: string;
  children?: ReactNode;
  highlight?: string;
  icon?: ReactNode;
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

export function StepContent({ title, description, children, highlight, icon }: StepContentProps) {
  return (
    <div className="text-center">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
      >
        {icon && <div className="mb-4 flex justify-center">{icon}</div>}
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-muted-foreground mb-6"
        >
          {description}
        </motion.p>
      )}
      
      {children}
      
      {highlight && (
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/30"
        >
          <p className="text-accent-foreground font-medium">{highlight}</p>
        </motion.div>
      )}
    </div>
  );
}

interface CardGridProps {
  children: ReactNode;
}

export function CardGrid({ children }: CardGridProps) {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
    >
      {children}
    </motion.div>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
  pros?: string;
  cons?: string;
  icon?: ReactNode;
  featured?: boolean;
}

export function InfoCard({ title, description, pros, cons, icon, featured }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border transition-colors ${
        featured 
          ? 'bg-primary/10 border-primary/30' 
          : 'bg-card border-border hover:border-primary/30'
      }`}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className={`font-semibold ${featured ? 'text-primary' : 'text-foreground'}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          
          {pros && (
            <div className="mt-2">
              <p className="text-xs font-medium text-green-600 dark:text-green-400">✓ {pros}</p>
            </div>
          )}
          
          {cons && (
            <div className="mt-1">
              <p className="text-xs font-medium text-red-600 dark:text-red-400">✗ {cons}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
