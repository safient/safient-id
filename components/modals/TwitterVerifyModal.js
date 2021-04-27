import React, { useState, useEffect } from 'react';
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
import axios from 'axios'
import {definitions} from "../../utils/config.json"

function TwitterVerifyModal({ modal, setModal, twitterMessage, twitterUsername, address, idx }) {
  const [loading, setLoading] = useState(false);
  const [twitterStatus, setTwitterStatus] = useState('Twitter is not yet Verified');


  const [, setToast] = useToasts();


  const { copy } = useClipboard();



  const copyTweet = () => {
    copy(twitterMessage);
    setToast({ text: 'Tweet copied.' });
  };

  const handleVerify = async () => {
    try{
      const url = 'http://localhost:3001/verify'

      const res = await axios.post(url, 
        {account: address, 
         username: twitterUsername, 
         did: idx.id})

      if(res.data.status === 200){
        await idx.set( definitions.profile, {
          twitter: {
            username:twitterUsername,
            status:true
          }
        })
        setTwitterStatus(`🎉 ${twitterUsername} is Verified! `)
      }
      else{
        await idx.set( definitions.profile, {
          twitter: {
            username:twitterUsername,
            status:false
          }
        })
        setTwitterStatus("😟 Not Verified! Something went wrong")
      }
      console.log(res);

    }catch(e){
      console.log(e)
    }
  }

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
              <p>Tweet the following from the account you want to connect.</p>

              <div onClick={copyTweet} className='verify-didContainer'>
              {
                    twitterMessage ? (twitterMessage) : (
                      <p>
                        Something went wrong! Please try again.
                      </p>
                    )
              }
              </div>
              <div className='verify-btn'>
                <Button auto onClick={copyTweet} className='btn'>
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
                <p>{twitterStatus}</p>
                {/* <Spinner /> */}
              </div>
              <div className='verify-btn'>
                <Button auto className='btn' onClick={handleVerify}>
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
