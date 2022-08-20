import { useState } from 'react';
import './formInput.css';

const FormInput = (props: any) => {
  const [focused, setFocused] = useState(true);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(false);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
