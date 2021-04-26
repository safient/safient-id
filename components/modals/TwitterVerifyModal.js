import React, { useState } from 'react';
import {
  Modal,
  Input,
  Spacer,
  Textarea,
  Button,
  useToasts,
  useClipboard,
  Spinner,
} from '@geist-ui/react';
import { TextSemi } from '../../utils';
import { TwitterVerify } from './TwiiterVerify.styles';

function TwitterVerifyModal({ modal, setModal }) {
  const [loading, setLoading] = useState(false);

  const [, setToast] = useToasts();
  const { copy } = useClipboard();
  const copyDID = () => {
    copy('did:3:bafyreievdumz26mkf6a57as7ez4yxqwmuyxqiy5w2wzpdhd2updlwwkfxm');
    setToast({ text: 'DID copied.' });
  };

  return (
    <>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        disableBackdropClick={true}
        wrapClassName='test'
        width='900px'
      >
        <TwitterVerify>
          <div className='twitter-container'>
            <TextSemi>Verify your Twitter account</TextSemi>
          </div>

          <div className='twitter-container__verify'>
            <div className='verify'>
              <div className='verify-steps'>1</div>
              <p>Tweet a unique key from the account you want to connect.</p>

              <div onClick={copyDID} className='verify-didContainer'>
                <p>
                  This tweet links my Twitter to my SafeID✅ See my profile at
                  https://safeid.io/
                  did:3:bafyreievdumz26mkf6a57as7ez4yxqwmuyxqiy5
                </p>
              </div>
              <div className='verify-btn'>
                <Button auto onClick={copyDID} className='btn'>
                  Copy
                </Button>
              </div>
            </div>

            <div className='verify'>
              <div className='verify-steps'>2</div>
              <p>
                Check if your Twitter account was successfully verified below!
              </p>

              <div className='verify-didContainer'>
                <p>Twitter is not yet Verified</p>
                {/* <Spinner /> */}
              </div>
              <div className='verify-btn'>
                <Button auto className='btn'>
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </TwitterVerify>
        <Modal.Action passive onClick={() => setModal(false)}>
          Done
        </Modal.Action>
      </Modal>
    </>
  );
}

export default TwitterVerifyModal;
