import styled from 'styled-components';

const Button = styled.button`
    font-family: sans-serif;
    font-size: 1.3rem;
    border: none;
    border-radius: 15px;
    background-color: ${(props) => props.buttonColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: #fff;
    padding: 5px;
    margin: 10px;
    &:hover
    {
        background-color: ${(props) => props.hoverColor};
    }
`
export default Button;