import { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'neutral';
}

export function Section({ children, className = '', id, variant = 'white' }: SectionProps) {
  const bgClass = variant === 'neutral' ? 'bg-neutral-50' : 'bg-white';

  return (
    <section
      id={id}
      className={`py-10 sm:py-14 md:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 ${bgClass} ${className}`}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow';
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const maxWidthClass = size === 'narrow' ? 'max-w-4xl' : 'max-w-container';

  return (
    <div className={`${maxWidthClass} mx-auto w-full ${className}`}>
      {children}
    </div>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`text-center mb-16 ${className} transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
