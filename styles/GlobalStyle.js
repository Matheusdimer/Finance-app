import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Lato', sans-serif;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus {
    outline: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: #55a8ff;
  }
  
  a:hover {
    text-decoration: underline;
  }

  .animated-left {
    animation-name: left;
    animation-duration: 500ms;
  }

  @keyframes left {
    from {
      transform: translateX(+100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
