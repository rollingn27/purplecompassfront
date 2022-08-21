import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'

type buttonStyleProps = {
  color?: string,
  width?: string,
  height?: string,
  backgroundColor?: string,
  fontSize?: string,
  fontFamily?: string
}

export const Button = styled.button<buttonStyleProps>`
  background: blue;
  color: white;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;  
  fint-size: 1rem;
  border: none;
  height: 2.5rem;
  padding: 1rem;
  font-size: 1.25rem;  
  
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${props => props &&
    css`
      color: ${props.color};
      background: ${props.backgroundColor};
      width: ${props.width}
      height: ${props.height}
      font-size: ${props.fontSize}
      font-family: ${props.fontFamily}
    `
  }
`

