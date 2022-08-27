import React, { useState, useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import './formInput.css';

const FormInput = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const inputRef = useRef(null);

  const handleFocus = useCallback((e: any) => {
    e.preventDefault();
    setFocused((focused) => !focused);
  }, []);

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        className="projectInput"
        {...inputProps}
        ref={inputRef}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => setFocused(() => true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
