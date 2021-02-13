import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Poppins', sans-serif;
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

  .show {
    left: 0;
  }

  .active-tab {
    border-bottom: 2px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
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

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
