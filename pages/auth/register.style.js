import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login__form {
    width: 610px;
    background: #fff;
    border-radius: 5px;
    margin-top: 56px;
    padding: 34px 118px;
    box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
    &-heading {
      text-align: center;
      margin-bottom: 30px;
    }

    &-input-group {
      margin-bottom: 20px;
      &-label {
        margin-bottom: 10px;
      }
      &-input {
        width: 374px !important;
        height: 50px !important;
      }
    }
    &-signup-groups {
      &-btn {
        width: 374px !important;
        height: 50px !important;
        color: #fff !important;
        background: #3861fb !important;
        border-radius: 5px;
      }
    }
  }
`;

export const HelperText = styled.div`
  margin: 20px 0;
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .social__login {
    &-helperText {
      margin-bottom: 20px;
    }
    &-btn {
      width: 374px !important;
      height: 50px !important;
      margin-bottom: 20px;
      font-weight: 500 !important;
      font-size: 16px;
      line-height: 24px;

      /* neutral-dark-300 */

      color: #555770 !important;
    }
  }
`;
