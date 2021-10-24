import styled, { css } from 'styled-components'
import { shade } from 'polished'

type FormProps = {
    hasError: boolean
}

export const Title = styled.h1`
    font-size: 36px;
    color: #000;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        padding: 0px 24px;
        flex: 1;
        height: 40px;
        border: 0;
        border-radius: 5px 5px 5px 5px;
        border: 2px solid #fff;

        ${(props) => props.hasError && css`
            border-color: red;
        `}

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

export const Repositories = styled.div`
    margin-top: 60px;
    max-width: 700px;

    a {
        background: #ffffff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #3d3d4d;
        }
    }
`

export const Error = styled.span`
    display: block;
    color: red;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.1px;
    margin-top: 18px;
`