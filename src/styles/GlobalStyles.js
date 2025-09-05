import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --charcoal: #2C2C2C;
    --blue: #1E90FF;
    --orange: #FF8C00;
    --grey: #D3D3D3;
    --dark-grey: #1A1A1A;
    --light-grey: #F5F5F5;
    --card-bg: rgba(30, 30, 30, 0.7);
    --transition: all 0.3s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
    background-color: var(--charcoal);
    color: var(--grey);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--blue);
    transition: var(--transition);
  }

  a:hover {
    color: var(--orange);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: var(--blue);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: var(--transition);
  }

  button:hover {
    background: var(--orange);
  }

  input {
    padding: 0.5rem;
    border: 1px solid var(--dark-grey);
    border-radius: 4px;
    background-color: var(--dark-grey);
    color: var(--grey);
    outline: none;
    transition: var(--transition);
  }

  input:focus {
    border-color: var(--blue);
  }

  .card {
    background-color: var(--card-bg);
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .dashboard-layout {
      flex-direction: column;
    }
  }
`;

export default GlobalStyles;