interface CTAButtonProps {
    inverted?: boolean;
    className?: string;
  }
  
  export default function CTAButton({ 
    inverted = false,
    className = '',
  }: CTAButtonProps) {
    const baseClasses = "px-8 py-3 rounded-md text-lg font-medium transition-colors";
    const standardClasses = "bg-red-600 text-white hover:bg-red-700";
    const invertedClasses = "bg-white text-red-600 hover:bg-gray-100 border border-red-600";
    
    return (
      <button 
        className={`${baseClasses} ${inverted ? invertedClasses : standardClasses} ${className}`}
      >
        Take The Assessment
      </button>
    );
  }