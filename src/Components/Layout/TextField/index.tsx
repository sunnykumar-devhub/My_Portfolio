import React from 'react';
import { SxProps } from '@mui/system';

type CustomTextFieldProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
  name?: string;
    multiline?: boolean;
    minRows?: number;
    sx?: SxProps;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  fullWidth = false,
  error = false,
  helperText = '',
  className,
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: fullWidth ? '100%' : 'auto',
    marginBottom: '1rem',
  };

  const inputStyle: React.CSSProperties = {
    padding: '12px',
    borderRadius: '6px',
    border: error ? '2px solid red' : '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: '6px',
    fontWeight: 500,
  };

  const helperTextStyle: React.CSSProperties = {
    color: error ? 'red' : '#666',
    fontSize: '0.875rem',
    marginTop: '4px',
  };

  return (
    <div style={containerStyle} className={className}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
      />
      {helperText && <span style={helperTextStyle}>{helperText}</span>}
    </div>
  );
};

export default CustomTextField;
