import React, { useState } from 'react';
import { Modal, Input, Spacer, Textarea } from '@geist-ui/react';

import { Form, FormBottom, ModalContainer } from './EditProfile.styles';
import {
  TextMedium16,
  TextSemi20,
  HeaderText,
  HeadingSemi,
  TextSemi,
} from '../../utils';

const EditProfile = ({ state, setState }) => {
  return (
    <ModalContainer>
      <Modal
        open={state}
        onClose={() => setState(false)}
        disableBackdropClick={true}
        wrapClassName='test'
        width='800px'
      >
        <Form>
          <HeadingSemi>Update Profile</HeadingSemi>

          <div className='form-group'>
            <div className='form-group__items items'>
              <div className='group'>
                <TextSemi>Name</TextSemi>
                <Spacer y={0.2} />
                <Input placeholder='Koushith' className='form-group__input ' />
                <Spacer y={0.6} />
              </div>
              <div className='group'>
                <TextSemi>Location</TextSemi>
                <Spacer y={0.2} />
                <Input placeholder='Bengaluru' className='form-group__input ' />
                <Spacer y={0.6} />
              </div>
            </div>

            <TextSemi>Bio</TextSemi>
            <Spacer y={0.2} />
            <Textarea
              placeholder='I am a Software Engineer...'
              className=' text-area'
            />
            <Spacer y={0.6} />

            <div className='form-group__items items'>
              <div className='group'></div>
            </div>

            <div className='form-group__items items'>
              <div className='group'>
                <TextSemi>GitHub</TextSemi>
                <Spacer y={0.2} />
                <Input
                  label='https://github.com/'
                  placeholder='koushith'
                  className='form-group__input '
                />
                <Spacer y={0.6} />
              </div>
              <div className='group'>
                <TextSemi>Twitter</TextSemi>
                <Spacer y={0.2} />
                <Input
                  label='https://github.com/'
                  placeholder='koushith'
                  className='form-group__input '
                />
                <Spacer y={0.6} />
              </div>
            </div>

            <div className='form-group__items items'>
              <div className='group'>
                <TextSemi>Email</TextSemi>
                <Spacer y={0.2} />
                <Input placeholder='jsfjfd' className='form-group__input ' />
                <Spacer y={0.6} />
              </div>
            </div>
          </div>
        </Form>

        <Modal.Action passive onClick={() => setState(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Submit</Modal.Action>
      </Modal>
    </ModalContainer>
  );
};

export default EditProfile;
