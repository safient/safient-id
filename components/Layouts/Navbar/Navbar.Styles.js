import styled from 'styled-components';

export const NavBar = styled.nav`
  height: 72px;
  background: #fff;
  padding: 0 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  position: sticky;
  z-index: 50;
  top: 0;
  .navbar-items {
    display: flex;
    align-items: baseline;
    justify-content: center;
    &__text {
      margin-right: 1em;
    }
    &__btn {
      font-weight: 600;
      font-size: 1rem;
      color: #555770;
      border: 1px solid #e3e4eb !important;
      a {
        text-decoration: none;
        color: #555770;
      }
    }
  }
`;
