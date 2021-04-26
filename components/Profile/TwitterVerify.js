import React, { useState } from 'react';
import { Spacer, Input, Button } from '@geist-ui/react';
import { TextSemi, TextMedium16 } from '../../utils';
import styled from 'styled-components';
import TwitterVerifyModal from '../modals/TwitterVerifyModal';

function TwitterVerify() {
  const [twitter, setTwitter] = useState('');
  const [modal, setModal] = useState(false);

  const VerfiyButton = styled(Button)`
    background-color: #3861fb !important;
    color: #fff !important;
    margin-left: -30px;
  `;

  return (
    <>
      <TwitterVerifyModal modal={modal} setModal={setModal} />

      <TextSemi>Twitter</TextSemi>
      <Spacer y={0.2} />

      <Input
        value={twitter}
        label='https://twitter.com/'
        placeholder='koushith'
        className='form-group__input input'
      />
      <VerfiyButton auto onClick={(e) => setModal(true)}>
        Verify
      </VerfiyButton>
      {/* conditionally render this */}
      <TextMedium16>Your Twitter account has been verified. </TextMedium16>
    </>
  );
}

export default TwitterVerify;
