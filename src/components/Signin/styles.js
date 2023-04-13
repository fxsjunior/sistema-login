import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .6rem;
    height: 100vh;
`

export const Form = styled.form`
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #fff;
    max-width: 21rem;
    padding: 1.2rem;
    border-radius: .6rem;

`

export const Label = styled.label`
    font-size: 1.1rem;
    font-weight: 600;
    color: #676767;

`

export const LabelSignup = styled.label`
    font-size: 1rem;
    color: #676767;

`

export const labelError = styled.label`
    font-size: .8rem;
    color: red;

`

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #676767;
    }

`