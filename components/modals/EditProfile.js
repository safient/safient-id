import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Input, Spacer, Textarea } from '@geist-ui/react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
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
  const [residenceCountry, setResidenceCountry] = useState('IN');
  const [city, setCity] = useState('Bangalore');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);

  // get country from dropdown

  console.log('residance', residenceCountry);
  const selectCountry = useMemo(() => countryList().getData(), []);
  const changeHandler = (residenceCountry) => {
    setResidenceCountry(residenceCountry);
    setCity('');
  };

  useEffect(() => {
    async function init() {
      try {
        const res = await idx.get('basicProfile', idx.id);
        if (res) {
          setName(res.name);
          setHomeLocation(res.homeLocation);
          setResidenceCountry(res.residenceCountry);
          setEmail(res.url);
          setDescription(res.description);
        }
      } catch (err) {
        console.log(err);
      }
    }
    init();
  }, [modal]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await idx.set('basicProfile', {
        name: name,
        description: description,
        url: email,
        homeLocation: homeLocation,
        residenceCountry: residenceCountry,
      });
      setLoading(false);
      setModal(false);
      setProfileEdit(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ModalContainer>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        disableBackdropClick={true}
        wrapClassName='test'
        width='700px'
      >
        <Form>
          <HeadingSemi>Update Profile</HeadingSemi>

          <div className='form-group'>
            <div className='form-group__items items'>
              <div className='group'>
                <TextSemi>Name</TextSemi>
                <Spacer y={0.2} />
                <Input
                  placeholder={name}
                  className='form-group__input '
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Spacer y={0.6} />
              </div>

              <div className='group'>
                <TextSemi>Email</TextSemi>
                <Spacer y={0.2} />
                <Input
                  placeholder={email}
                  className='form-group__input '
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Spacer y={0.6} />
              </div>
            </div>

            <div className='form-group__items items'>
              <div className='group'>
                <TextSemi>Country</TextSemi>
                <Spacer y={0.2} />
                <Select
                  className='form-group__input '
                  placeholder='Select Country'
                  options={selectCountry}
                  value={residenceCountry}
                  onChange={changeHandler}
                />

                <Spacer y={0.6} />
              </div>

              <div className='group'>
                <TextSemi>City</TextSemi>
                <Spacer y={0.2} />
                <Input
                  value={city}
                  placeholder='Enter City'
                  className='form-group__input '
                  onChange={(e) => setCity(e.target.value)}
                />
                <Spacer y={0.6} />
              </div>
            </div>

            <TextSemi>Bio</TextSemi>
            <Spacer y={0.2} />
            <Textarea
              placeholder={description}
              className=' text-area'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Spacer y={0.6} />
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
