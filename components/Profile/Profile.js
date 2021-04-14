import React, { useState, useEffect } from 'react';
import {
  Button,
  Avatar,
  Spacer,
  Input,
  Grid,
  Card,
  Textarea,
} from '@geist-ui/react';
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

function Profile(props) {
  // edit-btn if it's true, text inputs will be enabled
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Bengaluru');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    async function init () {
      try{
        const res = await props.idx.get("basicProfile", props.idx.id)
        console.log("Result", res);
        console.log("IDX", props.idx)
        console.log("Did", props.idx.id)
        setUserData(res)
      }catch(err){
        console.log(err)
      }
    }
    init()
  },[])

  return (
    <>
      {
        userData ? (
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
                  <TextSemi20>{userData.name}</TextSemi20>
                  <Spacer y={0.2} />
                  <TextMedium16>{props.idx.id}</TextMedium16>
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
                <TextSemi>{userData.homeLocation}, {userData.residenceCountry}</TextSemi>
              </div>
            </div>
            <div className='icons-meta'>
              <img src='/assets/icons/email.svg' alt='email' />
              <div className='icons-meta__title'>
                <TextSemi>{userData.url}</TextSemi>
              </div>
            </div>
          </IconContainer>
        </ProfileHeader>
  
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
                  placeholder={userData.name}
                  className='form-group__input input'
                />
              </div>
              <div className='form-group__input'>
                <TextSemi>Location</TextSemi>
                <Spacer y={0.2} />
                <Input
                  value={location}
                  readOnly={!edit}
                  placeholder={userData.homeLocation}
                  className='form-group__input input'
                />
              </div>
            </div>
  
            <div className='form-group__fields'>
              {/* <div className='form-group__input'>
                <TextSemi>ULR</TextSemi>
                <Spacer y={0.2} />
                <Input
                  value={website}
                  readOnly={!edit}
                  placeholder='https://www.domain.com'
                  className='form-group__input input'
                />
              </div> */}
              <div className='form-group__input'>
                <TextSemi>Bio</TextSemi>
                <Spacer y={0.2} />
                <Textarea
                  width='100%'
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  readOnly={!edit}
                  placeholder={userData.description}
                  className='form-group__input input text-area'
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
                  placeholder={userData.url}
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
        ) : (
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
                  <TextSemi20></TextSemi20>
                  <Spacer y={0.2} />
                  <TextMedium16></TextMedium16>
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
        </ProfileHeader>
        )
      }
    </>
  );
}

export default Profile;
