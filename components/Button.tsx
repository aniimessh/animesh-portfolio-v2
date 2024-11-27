import type React from "react";

type CTAButtonProps = {
  title?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  Icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
};

const CTAButton: React.FC<CTAButtonProps> = ({
  title,
  onClick,
  type = "button",
  Icon,
}) => {
  return (
    <button
      className="bg-transparent shadow-md hover:shadow-white/10 px-4 py-1 text-sm border border-white/10 rounded-md transition-all duration-200 flex items-center justify-center gap-2"
      type={type}
      onClick={onClick}
    >
      {Icon && <Icon className="w-4 h-4" />} {/* Render Icon if provided */}
      {title && <span>{title}</span>} {/* Render title if provided */}
    </button>
  );
};

export default CTAButton;
