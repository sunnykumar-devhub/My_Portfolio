
import React from 'react';
import { SxProps } from '@mui/system';

type CustomButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'contained' | 'outlined'; // Add this line
  target?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  sx?: SxProps;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  href,
  onClick,
  className,
  variant = 'contained', // Default to 'contained'
  fullWidth = false, // Default to false
}) => {
  const baseStyles: React.CSSProperties = {
    borderRadius: '999px',
    padding: '12px 32px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
  };

  const containedStyles: React.CSSProperties = {
    backgroundColor: '#8e24aa',
    color: '#fff',
    border: 'none',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
  };

  const outlinedStyles: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: '#8e24aa',
    border: '2px solid #8e24aa',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  };

  const hoverStyles: React.CSSProperties =
    variant === 'contained'
      ? { backgroundColor: '#7b1fa2' }
      : { backgroundColor: '#8e24aa', color: '#fff' };

  const [isHovered, setIsHovered] = React.useState(false);

  const style = {
    ...baseStyles,
    ...(variant === 'contained' ? containedStyles : outlinedStyles),
    ...(isHovered ? hoverStyles : {}),
  };

  const commonProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className,
    style,
  };

  return href ? (
    <a href={href} {...commonProps}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
