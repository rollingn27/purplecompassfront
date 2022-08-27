import React, { MouseEvent, useState, useCallback, useRef, CSSProperties } from 'react';
import FormInput from './FormInput';
import { ReactComponent as CloseButton } from '../../assets/close-outline.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type createProjectProps = {
  userId: string;
  className?: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closable: boolean;
  maskClosable: boolean;
  children?: string;
};

// const fixedCenterStyle: CSSProperties = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
// };

// const fakeScrollableStyle: CSSProperties = {
//   minHeight: '150vh',
//   background: 'linear-gradient(palegreen, palegoldenrod, palevioletred)',
// };

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
    pTags: '',
    pDesc: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'Project Name',
      type: 'text',
      placeholder: 'Project Name',
      errorMessage: '프로젝트명은 3~15의 온전한 문자로 이루어져야 합니다',
      label: 'Project Name',
      pattern: '^[A-Za-z0-9가-힣]{3,15}$',
      required: true,
    },
    {
      id: 2,
      name: 'Project Key',
      type: 'text',
      placeholder: 'Project Key',
      errorMessage: '프로젝트키는 3~15의 영문자 혹은 숫자로 이루어져야 합니다 ',
      label: 'Project Key',
      pattern: '^[A-Za-z0-9]{3,15}$',
      required: true,
    },
    {
      id: 3,
      name: 'Tags',
      type: 'text',
      placeholder: 'Tags',
      label: 'Tags',
    },
    {
      id: 4,
      name: 'Description',
      type: 'text',
      placeholder: 'Description',
      label: 'Description',
    },
  ];

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(
      'name: ' +
        values.pName +
        '\n' +
        'key: ' +
        values.pKey +
        '\n' +
        'tag: ' +
        values.pTags +
        '\n' +
        'desc: ' +
        values.pDesc,
    );
    console.log('what?');
    e.currentTarget.blur();
  }, []);

  const testPost = (e: any) => {
    alert('after click, request are made');
  };

  const onChange = useCallback(
    // (e: React.FormEvent<HTMLInputElement>) => setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value }),
    (e: any) => setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value }),
    [],
  );

  const [onClose, setOnclose] = useState(!modalOpen);

  const onMaskClick = (e: MouseEvent<HTMLDivElement>) => {
    // alert('onMaskClick 함수 작동' + e.target + e.currentTarget);
    e.preventDefault();
    if (e.target === e.currentTarget) {
      // alert('다른 범위 누르고 있음');
      setModalOpen(!modalOpen);
    } else {
      // alert('같은 범위 누르고 있음');
    }
  };

  const close = (e: MouseEvent<SVGSVGElement>) => {
    // alert('onClose 함수 작동');
    if (modalOpen) {
      // e.preventDefault();
      // alert('closeButton');
      setModalOpen(!modalOpen);
    }
  };

  return (
    <>
      <ProjectModalOverlay modalOpen={modalOpen} />
      <ProjectModalWrapper className={className} onClick={onMaskClick} tabIndex={-1} modalOpen={modalOpen}>
        <ProjectModalInner tabIndex={-1} className="modal-inner" onSubmit={testPost}>
          {closable && <CloseButton className="modal-close" onClick={close} css={CButton} />}

          <h1>Create Project</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} setValues={setValues} />
          ))}
          <button className="button" onClick={handleSubmit} tabIndex={0}>
            Submit
          </button>
        </ProjectModalInner>
      </ProjectModalWrapper>
    </>
  );
};

export default React.memo(CreateProject);

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
  width: 2rem;
  height: 2rem;
  &:hover {
    border: 0.1rem ridge #d3d3d3;
  }
`;
