interface ProjectTagProps {
  text: string;
  variant?: 'filled' | 'outline' | 'plain';
  size?: 'sm' | 'md';
}

export default function ProjectTag({ text, variant = 'plain', size = 'sm' }: ProjectTagProps) {
  const baseClasses = "text-[#FF76A2] uppercase tracking-wide z-20 relative";
  
  const variantClasses = {
    filled: "bg-[#FF76A2] text-white rounded-full border-2 border-white",
    outline: "bg-transparent border-2 border-[#FF76A2] rounded-full",
    plain: "bg-transparent"
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base"
  };

  const paddingClasses = variant !== 'plain' ? "px-4 py-2" : "";
  const fontWeightClasses = variant === 'plain' ? "font-normal" : "font-bold";

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${paddingClasses} ${fontWeightClasses}`}>
      {text}
    </span>
  );
}
