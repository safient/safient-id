import React, { useState , useEffect} from 'react';
import { Modal, Input, Spacer, Textarea } from '@geist-ui/react';

import { Form, FormBottom, ModalContainer } from './EditProfile.styles';
import {
  TextMedium16,
  TextSemi20,
  HeaderText,
  HeadingSemi,
  TextSemi,
} from '../../utils';

const EditProfile = ({ modal, setModal, idx }) => {


  const [name, setName] = useState('');
  const [homeLocation, setHomeLocation] = useState('');
  const [residenceCountry, setResidenceCountry] = useState('IN')
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function init() {
      try {
        const res = await idx.get('basicProfile', idx.id);
        if(res){
          setName(res.name);
          setHomeLocation(res.homeLocation)
          setResidenceCountry(res.residenceCountry)
          setEmail(res.url)
          setDescription(res.description)
        }
      } catch (err) {
        console.log(err);
      }
    }
    init();
  }, [modal]);

  const handleSubmit = async () => {
    try{
      setLoading(true)
      await idx.set('basicProfile', {
        name: name,
        description: description,
        url: email,
        homeLocation: homeLocation,
        residenceCountry: residenceCountry,
      });
      setLoading(false)
      setModal(false)
      setProfileEdit(true)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <ModalContainer>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
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
                <Input placeholder={name} className='form-group__input ' value={name} onChange={e => setName(e.target.value)} />
                <Spacer y={0.6} />
              </div>
              <div className='group'>
                <TextSemi>City</TextSemi>
                <Spacer y={0.2} />
                <Input placeholder={homeLocation} className='form-group__input ' value={homeLocation} onChange={e => setHomeLocation(e.target.value)} />
                <Spacer y={0.6} />
              </div>
            </div>

            <TextSemi>Bio</TextSemi>
            <Spacer y={0.2} />
            <Textarea
              placeholder={description}
              className=' text-area'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Spacer y={0.6} />

            <div className='form-group__items items'>
              <div className='group'></div>
            </div>

            <div className='form-group__items items'>
              <div className='group'>
                <TextSemi>Email</TextSemi>
                <Spacer y={0.2} />
                <Input placeholder={email} className='form-group__input ' value={email} onChange={e => setEmail(e.target.value)}/>
                <Spacer y={0.6} />
              </div>
            </div>
          </div>
        </Form>

        <Modal.Action passive onClick={() => setModal(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={handleSubmit}>Submit</Modal.Action>
      </Modal>
    </ModalContainer>
  );
};

export default EditProfile;
