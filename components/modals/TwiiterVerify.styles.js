import styled from 'styled-components';

export const TwitterVerify = styled.div`
  .twitter-container {
    &__verify {
      margin: 20px;
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      text-align: left !important;
      align-items: flex-start;
      .verify-btn {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 16px;

        .btn {
          background: #3861fb !important;
          color: #fff;
        }
      }
      .verify {
        overflow: hidden;
        border-top: 1px solid #555770;
        margin: 10px;
        max-width: 50%;

        p {
          text-align: start !important;
          color: #555770 !important;
        }
        &-steps {
          background-color: aliceblue;
          color: #555770;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          padding: 14px;
          margin-top: 18px;
        }
        &-didContainer {
          border: 1px solid #3861fb !important;
          overflow: hidden;
          padding: 10px !important;
          min-height: 150px;
          max-width: 350px;
          border-radius: 5px;
          background-color: aliceblue;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            width: -webkit-fill-available;
            text-align: center;
            padding: 0 28px;
            color: #555770 !important;
          }
        }
      }
    }
  }
`;
