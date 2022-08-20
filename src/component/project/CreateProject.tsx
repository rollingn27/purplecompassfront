import React, { useState } from 'react';
import FormInput from './FormInput';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Project } from '../../api/type';
import { fixRequestBody } from 'http-proxy-middleware';

type createProjectProps = {
  userId: string;
  className?: any;
  visible: boolean;
  children?: any;
};
const CreateProject = ({ userId, className, visible, children }: createProjectProps) => {
  const [values, setValues] = useState<any>({
    pName: '',
    pKey: '',
    tags: [''],
    password: '',
    confirmPassword: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'projectname',
      type: 'text',
      placeholder: 'Project Name',
      label: 'Project Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'projectkey',
      type: 'text',
      placeholder: 'Project Key',
      errorMessage: 'It should be 3~16 ',
      label: 'Project Key',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 3,
      name: 'tags',
      type: 'text',
      placeholder: 'tags',
      label: 'tags',
    },
    {
      id: 4,
      name: 'description',
      type: 'text',
      placeholder: 'description',
      label: 'description',
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    console.log(userId, values.username);
  };
  return (
    <>
      <ProjectStyle visible={visible}>
        <form onSubmit={handleSubmit}>
          <h1 onClick={onClick}>Project</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button className="button" onClick={onClick}>
            Submit
          </button>
        </form>
      </ProjectStyle>
    </>
  );
};

export default CreateProject;

const ProjectStyle = styled.form<{ visible: boolean }>`
  position: fixed;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  top: 7.5rem;
  left: 25rem;
  border: 1px solid gray;
  min-width: 50rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  z-index: 1000;
  background: white;
`;
