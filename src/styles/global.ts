import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: #fcf7f7;
        /* background-color: #17181f; */
        -webkit-font-smoothing: antialiased
    }
    
    body, input, button {
        font: 16px Poppins, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
`
