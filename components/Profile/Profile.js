import React from 'react';
import { Button, Avatar, Spacer, Input, Grid, Card } from '@geist-ui/react';
import { FormBottom, ProfileHeader, IconContainer, Form } from '../Profile';
import {
  TextMedium16,
  TextSemi20,
  HeaderText,
  HeadingSemi,
  TextSemi,
} from '../../utils';

const MockItem = () => {
  return <Card shadow style={{ width: '100%', height: '50px' }} />;
};

function Profile() {
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
            <Button auto className='btn btn-primary'>
              {' '}
              Edit Profile
            </Button>
          </div>
        </div>
        <IconContainer>
          <div className='icons-meta'>
            <img src='/assets/icons/location.svg' alt='location' srcset='' />
            <div className='icons-meta__title'>
              <TextSemi>Bangalore</TextSemi>
            </div>
          </div>
          <div className='icons-meta'>
            <img src='/assets/icons/email.svg' alt='email' srcset='' />
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
                size='small'
                placeholder='John Doe'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Location</TextSemi>
              <Spacer y={0.2} />
              <Input
                size='small'
                placeholder='John Doe'
                className='form-group__input input'
              />
            </div>
          </div>

          <div className='form-group__fields'>
            <div className='form-group__input'>
              <TextSemi>Website</TextSemi>
              <Spacer y={0.2} />
              <Input
                size='small'
                placeholder='John Doe'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>DOB</TextSemi>
              <Spacer y={0.2} />
              <Input
                type='date'
                size='small'
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
                placeholder='https://github/'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Twitter</TextSemi>
              <Spacer y={0.2} />
              <Input
                size='small'
                placeholder='https://twitter.com/johndoe'
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
                type='email'
                size='small'
                placeholder='Johndoe@domain.com'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Phone</TextSemi>
              <Spacer y={0.2} />
              <Input
                size='small'
                placeholder='99 99 99 99 99'
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
                size='small'
                placeholder='Consenso Labs'
                className='form-group__input input'
              />
            </div>
            <div className='form-group__input'>
              <TextSemi>Job Title</TextSemi>
              <Spacer y={0.2} />
              <Input
                size='small'
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
