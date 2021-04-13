import styled from 'styled-components';

export const ProfileHeader = styled.div`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  width: 1280px;
  padding: 44px;
  border: 1px solid #e3e4eb;
  margin-top: 20px;
  .profile-header {
    display: flex;

    justify-content: space-between;

    border-radius: 5px;

    /* inage and name */
    &__left {
      .profile-header__meta {
        display: flex;

        &-name {
          margin: 6px 0 0 22px;
        }
      }
    }

    /* image and button */

    &__right {
      .btn-primary {
        font-size: 16px;
        line-height: 24px;
        /* or 150% */

        /* neutral-light-100 */
        background: #3861fb;
        /* neutral-dark-100 */

        border: 1px solid #c7c8d9;
        box-sizing: border-box;
        border-radius: 5px;
        color: #ffffff;
      }
    }
  }
`;

export const IconContainer = styled.div`
  width: 1280px;
  margin: 40px auto 0 auto;
  display: flex;

  .icons-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    img {
      margin-right: 8px;
      width: 38px;
    }
  }
`;

export const Form = styled.div`
  width: 1280px;
  margin: 24px auto;

  .form-group {
    background: #fff;
    box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
    border-radius: 5px;
    margin: 22px 0;
    border: 1px solid #e3e4eb;
    padding: 44px;

    &__fields {
      display: flex;
    }

    &__input {
      .input {
        border-radius: 5px;
        width: 350px;
        height: 50px;
        margin-right: 60px;
        margin-bottom: 20px;
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        &::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: grey;
        }
      }
    }
  }
`;

export const FormBottom = styled.div`
  width: 1280px;
  background: #fff;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  border-radius: 5px;
  padding: 44px;
  margin: 24px auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .btn-primary {
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #e3e4eb !important;
    background: #3861fb !important;
    margin-left: 20px;
    border: 1px solid #c7c8d9;
    box-sizing: border-box;
    border-radius: 5px;
    color: #ffffff !important;
  }

  h2 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #555770;
  }
`;
