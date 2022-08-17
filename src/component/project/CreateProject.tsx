import React, { useState } from 'react';
import FormInput from './FormInput';
import { css } from '@emotion/react';
import { Project } from '../../api/type';
import { fixRequestBody } from 'http-proxy-middleware';

type createProjectProps = {
  projects: Project;
};
const CreateProject = () => {
  const [values, setValues] = useState<any>({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="app" css={projectStyle}>
        <form onSubmit={handleSubmit}>
          <h1> Register</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button className="button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateProject;

const projectStyle = css`
  position: fixed;
  top: 7.5rem;
  left: 20rem;
  border: 1px solid green;
  min-width: 50rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  z-index: 1;
  background: white;
`;
