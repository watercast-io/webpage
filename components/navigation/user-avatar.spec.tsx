// user-avatar/__tests__/UserAvatar.test.tsx
import React from 'react';
import { shallow } from 'enzyme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserAvatar } from './user-avatar';
import { Icons } from '../icons';

describe('UserAvatar Component', () => {
  const userWithImage = { name: 'John', image: 'example.jpg' };
  const userWithoutImage = { name: 'Sergio', image: null };

  it('renders without crashing', () => {
    shallow(<UserAvatar user={userWithImage} />);
  });

  it('renders Avatar component', () => {
    const wrapper = shallow(<UserAvatar user={userWithImage} />);
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it('renders AvatarImage component when user has image', () => {
    const wrapper = shallow(<UserAvatar user={userWithImage} />);
    expect(wrapper.find(AvatarImage)).toHaveLength(1);
  });

  it('renders AvatarFallback component when user does not have image', () => {
    const wrapper = shallow(<UserAvatar user={userWithoutImage} />);
    expect(wrapper.find(AvatarFallback)).toHaveLength(1);
  });

  it('renders fallback icon when user does not have image', () => {
    const wrapper = shallow(<UserAvatar user={userWithoutImage} />);
    expect(wrapper.find(AvatarFallback).find(Icons.user)).toHaveLength(1);
  });

});
