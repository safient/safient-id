import React, { useState, useEffect } from 'react';
import { Spacer, Input, Button } from '@geist-ui/react';
import { TextSemi, TextMedium16 } from '../../utils';
import styled from 'styled-components';
import TwitterVerifyModal from '../modals/TwitterVerifyModal';
import { generateSignature } from '../../lib/twitterSigner';
import { definitions } from '../../utils/config.json';

function TwitterVerify({ idx, magicProvider, userAddress }) {
  const [modal, setModal] = useState(false);
  const [twitterUsername, setTwitterUsername] = useState('');
  const [twitterMessage, setTwitterMessage] = useState(null);
  const [address, setAddress] = useState(null);
  const [status, setStatus] = useState(null);

  const VerfiyButton = styled(Button)`
    background-color: #3861fb !important;
    color: #fff !important;
    margin-left: -30px;
  `;

  useEffect(() => {
    async function init() {
      try {
        const verify = await idx.get(definitions.profile, idx.id);
        setStatus(verify);
        console.log(verify);
      } catch (err) {
        console.log(err);
      }
    }
    init();
  }, [modal]);

  const getTweetMessage = (signature, address) => {
    const tweetMessage = `😎 Verifying my Twitter account for SafexID
    addr:${address}
    sig:${signature ?? ''}`;
    setTwitterMessage(tweetMessage);
  };

  const handleClick = async () => {
    if (twitterUsername !== '') {
      if (magicProvider) {
        const { signature, address } = await generateSignature(
          twitterUsername,
          magicProvider
        );
        setAddress(address);
        console.log(signature);
        getTweetMessage(signature, address);
        setModal(true);
      } else {
        const { signature, address } = await generateSignature(
          twitterUsername,
          null
        );
        setAddress(address);
        getTweetMessage(signature, address);
        setModal(true);
      }
    } else {
      console.log('Enter valid username');
    }
  };
  return (
    <>
      {status ? (
        <>
          <TextSemi>Twitter</TextSemi>
          <Spacer y={0.2} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <Input
              label='https://twitter.com/'
              placeholder='username'
              className='form-group__input input'
              readOnly={true}
              value={status.twitter.username}
            />{' '}
            <div>
              <img
                src='/assets/icons/checklist.svg'
                width='50px'
                style={{ marginLeft: '-50px', marginTop: '-15px' }}
              />
            </div>
          </div>
          {/* conditionally render this */}
          <TextMedium16>Your Twitter account has been verified. </TextMedium16>
        </>
      ) : (
        <>
          <TwitterVerifyModal
            modal={modal}
            setModal={setModal}
            twitterMessage={twitterMessage}
            twitterUsername={twitterUsername}
            address={address}
            idx={idx}
          />

          <TextSemi>Twitter</TextSemi>
          <Spacer y={0.2} />

          <Input
            label='https://twitter.com/'
            placeholder='username'
            className='form-group__input input'
            onChange={(e) => setTwitterUsername(e.target.value)}
          />
          <VerfiyButton auto onClick={handleClick}>
            Verify
          </VerfiyButton>
          {/* conditionally render this */}
        </>
      )}
    </>
  );
}

export default TwitterVerify;
