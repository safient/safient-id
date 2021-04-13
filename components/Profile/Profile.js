import React, { useState } from 'react';
import { Button, Avatar, Spacer, Input, Grid, Card } from '@geist-ui/react';
import { FormBottom, ProfileHeader, IconContainer, Form } from '../Profile';
import {
  TextMedium16,
  TextSemi20,
  HeaderText,
  HeadingSemi,
  TextSemi,
} from '../../utils';
import { Twitch } from 'react-feather';

const MockItem = () => {
  return <Card shadow style={{ width: '100%', height: '50px' }} />;
};

function Profile() {
  // edit-btn if it's true, text inputs will be enabled
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Bengaluru');
  const [website, setWebsite] = useState('');
  const [dob, setDob] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [employer, setEmployer] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  console.log(dob);

  return (
    <>
      <ProfileHeader>
        <div className='profile-header'>
          <div className='profile-header__left'>
            <div className='profile-header__meta'>
              <div className='profile-header__meta-image'>
                <Avatar
                  src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                  size='large'
                  isSquare={true}
                />
              </div>

              <div className='profile-header__meta-name'>
                <TextSemi20>Koushith</TextSemi20>
                <Spacer y={0.2} />
                <TextMedium16>0x337b2aF19e840E8...</TextMedium16>
              </div>
            </div>
          </div>

          <div className='profile-header__right'>
            <Button
              auto
              className='btn btn-primary'
              onClick={(e) => setEdit(true)}
            >
              {' '}
              Edit Profile
            </Button>
          </div>
        </div>
        <IconContainer>
          <div className='icons-meta'>
            <img
              src='/assets/icons/location.svg'
              alt='location'
              srcSet='/assets/icons/location.svg'
            />
            <div className='icons-meta__title'>
              <TextSemi>Bangalore</TextSemi>
            </div>
          </div>
          <div className='icons-meta'>
            <img src='/assets/icons/email.svg' alt='email' />
            <div className='icons-meta__title'>
              <TextSemi>koushith@consensolabs.com</TextSemi>
            </div>
          </div>
        </IconContainer>
      </ProfileHeader>

      {/* form section */}

      <Form>
        <HeadingSemi>Basic</HeadingSemi>
        <div className='form-group'>
          <div className='form-group__fields'>
            <div className='form-group__input'>
              <TextSemi>Name</TextSemi>
              <Spacer y={0.2} />
              <Input
                value={name}
                readOnly={!edit}
                placeholder='John Doe'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Location</TextSemi>
              <Spacer y={0.2} />
              <Input
                value={location}
                readOnly={!edit}
                placeholder={location}
                className='form-group__input input'
              />
            </div>
          </div>

          <div className='form-group__fields'>
            <div className='form-group__input'>
              <TextSemi>Website</TextSemi>
              <Spacer y={0.2} />
              <Input
                value={website}
                readOnly={!edit}
                placeholder='John Doe'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>DOB</TextSemi>
              <Spacer y={0.2} />
              <Input
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                readOnly={!edit}
                type='date'
                placeholder='John Doe'
                className='form-group__input input'
              />
            </div>
          </div>
        </div>
      </Form>

      <Form>
        <HeadingSemi>Verified Accounts</HeadingSemi>
        <div className='form-group'>
          <div className='form-group__fields'>
            <div className='form-group__input'>
              <TextSemi>GitHub</TextSemi>
              <Spacer y={0.2} />

              <Input
                value={twitter}
                readOnly={!edit}
                label='https://github.com/'
                placeholder='koushith'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Twitter</TextSemi>
              <Spacer y={0.2} />

              <Input
                value={twitter}
                readOnly={!edit}
                label='https://twitter.com/'
                placeholder='koushith'
                className='form-group__input input'
              />
            </div>
          </div>
        </div>
      </Form>

      <Form>
        <HeadingSemi>Contact</HeadingSemi>
        <div className='form-group'>
          <div className='form-group__fields'>
            <div className='form-group__input'>
              <TextSemi>Email</TextSemi>
              <Spacer y={0.2} />
              <Input
                value={email}
                readOnly={!edit}
                type='email'
                placeholder='Johndoe@domain.com'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Phone</TextSemi>
              <Spacer y={0.2} />
              <Input
                value={phone}
                readOnly={!edit}
                placeholder='99-99-99-99-99'
                className='form-group__input input'
              />
            </div>
          </div>
        </div>
      </Form>

      <Form>
        <HeadingSemi>Work</HeadingSemi>
        <div className='form-group'>
          <div className='form-group__fields'>
            <div className='form-group__input'>
              <TextSemi>Employer</TextSemi>
              <Spacer y={0.2} />
              <Input
                value={employer}
                readOnly={!edit}
                placeholder='Consenso Labs'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Job Title</TextSemi>
              <Spacer y={0.2} />
              <Input
                onClick={(e) => setJobTitle(e.target.value)}
                readOnly={!edit}
                value={jobTitle}
                placeholder='Blockchain Engineer'
                className='form-group__input input'
              />
            </div>
          </div>
        </div>
      </Form>
      <FormBottom>
        <Button auto className='btn-secondary'>
          Cancel
        </Button>
        <Button auto primary className='btn-primary'>
          Save
        </Button>
      </FormBottom>
    </>
  );
}

export default Profile;
