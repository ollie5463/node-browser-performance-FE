import styled from 'styled-components';

const Button = styled.button`
    font-family: sans-serif;
    font-size: 1.3rem;
    border: none;
    border-radius: 5px;
    background-color: blue;
    background: ${(props) => props.theme.primary};
    color: #fff;
    &:hover
    {
        background-color: red;
    }
`
export default Button;