import React, { MouseEvent, MouseEventHandler, useState, useEffect } from 'react';
import FormInput from './FormInput';
import { ReactComponent as CloseButton } from '../../assets/close-outline.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Project } from '../../api/type';
import { fixRequestBody } from 'http-proxy-middleware';

type createProjectProps = {
  userId: string;
  className?: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closable: boolean;
  maskClosable: boolean;
  children?: string;
};
interface ProjectModal {}

const CreateProject = ({
  userId,
  className,
  modalOpen,
  setModalOpen,
  closable,
  maskClosable,
  children,
}: createProjectProps) => {
  const [values, setValues] = useState<any>({
    pName: '',
    pKey: '',
    tags: [''],
    description: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'projectName',
      type: 'text',
      placeholder: 'Project Name',
      label: 'Project Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'projectKey',
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
      placeholder: 'Tags',
      label: 'Tags',
    },
    {
      id: 4,
      name: 'description',
      type: 'text',
      placeholder: 'Description',
      label: 'Description',
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('submit');
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [onClose, setOnclose] = useState(!modalOpen);

  const onMaskClick = (e: MouseEvent<HTMLDivElement>) => {
    // alert('onMaskClick 함수 작동' + e.target + e.currentTarget);
    e.preventDefault();
    if (e.target === e.currentTarget) {
      // alert('다른 범위 누르고 있음');
      setModalOpen((modalOpen) => !modalOpen);
    } else {
      // alert('같은 범위 누르고 있음');
    }
  };

  const close = (e: MouseEvent<SVGSVGElement>) => {
    // alert('onClose 함수 작동');
    if (modalOpen) {
      // e.preventDefault();
      // alert('closeButton');
      setModalOpen((modalOpen) => !modalOpen);
    }
  };

  return (
    <>
      <ProjectModalOverlay modalOpen={modalOpen} />
      <ProjectModalWrapper className={className} onClick={onMaskClick} tabIndex={-1} modalOpen={modalOpen}>
        <ProjectModalInner tabIndex={0} className="modal-inner">
          {closable && <CloseButton className="modal-close" onClick={close} css={CButton} />}
          {
            <form onSubmit={handleSubmit}>
              <h1>Create Project</h1>
              {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
              ))}
              <button className="button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          }
        </ProjectModalInner>
      </ProjectModalWrapper>
    </>
  );
};

export default CreateProject;

const ProjectModalOverlay = styled.div<{ modalOpen: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

const ProjectModalWrapper = styled.div<{ modalOpen: boolean }>`
  box-sizing: border-box;
  position: fixed;
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
`;

const ProjectModalInner = styled.form`
  box-sizing: border-box;
  position: absolute;
  top: 7.5rem;
  left: 25rem;
  border: 1px solid gray;
  min-width: 50rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.95);
`;
const CButton = css`
  display: flex;
  float: right;
  width: 1rem;
  height: 1rem;
`;
