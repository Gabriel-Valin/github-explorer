import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 36px;
    color: #000;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        padding: 0px 24px;
        flex: 1;
        height: 40px;
        border: 0;
        border-radius: 5px 5px 5px 5px;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        font-size: 14px;
        cursor: pointer;
        height: 40px;
        width: 150px;
        margin-left: 15px;
        background: #04d361;
        border: 0;
        color: #fff;
        font-weight: bold;
        border-radius: 5px 5px 5px 5px;
        transition: background-color 0.2s;
        
        &:hover {
            background: ${shade(0.2, '#04d361')}
        }

    }
`