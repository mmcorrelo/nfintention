import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgb(103,107,211);
  border-radius: 4px;
  color: white;
  background: rgb(103,107,211);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;