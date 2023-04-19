import styled from "styled-components";

type ContainerProps = {
  isActive: boolean
}

export const Container = styled.button.attrs({
  disabled: true,
  'aria-label':"button"
})<ContainerProps>`

  color: white;
  padding: 8px 20px;
  border-radius: 4px;
  border: none;

  background: ${({theme}) => theme.colors.yellow[400]};

  span {
    font-size: 2rem;

    color: red
    
  }
`