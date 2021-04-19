import styled from 'styled-components';
import { Modal } from '@geist-ui/react';

export const Form = styled.div`
  width: auto;
  overflow: hidden;
  .form-group {
    background: #fff;
    box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
    border-radius: 5px;
    margin: 22px 0;
    border: 1px solid #e3e4eb;
    padding: 22px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 18px;
    .text-area {
      width: 84%;
    }
    .form-group__items {
      display: flex;
      justify-content: flex-start;
      .group {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px;
      }
      .text-area {
        background: red;
        width: 100%;
      }
    }
    &__input {
      width: 300px !important;
      height: 50px !important;
    }

    . text-area {
      height: auto;
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

export const ModalContainer = styled.div`
  .test {
    background: red !important;
    width: 100vw;
  }
`;
