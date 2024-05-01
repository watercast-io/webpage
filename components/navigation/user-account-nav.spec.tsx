// user-account-nav/__tests__/UserAccountNav.test.tsx
import React from 'react';
import { shallow } from 'enzyme';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { UserAccountNav } from './user-account-nav';
import { UserAvatar } from './user-avatar';

describe('UserAccountNav Component', () => {
  it('renders without crashing', () => {
    shallow(<UserAccountNav />);
  });

  it('renders DropdownMenu component', () => {
    const wrapper = shallow(<UserAccountNav />);
    expect(wrapper.find(DropdownMenu)).toHaveLength(1);
  });

  it('renders UserAvatar component inside DropdownMenuTrigger', () => {
    const wrapper = shallow(<UserAccountNav />);
    expect(wrapper.find(DropdownMenuTrigger).find(UserAvatar)).toHaveLength(1);
  });

  it('renders DropdownMenuContent with correct items', () => {
    const wrapper = shallow(<UserAccountNav />);
    const menuContent = wrapper.find(DropdownMenuContent);
    expect(menuContent.find(DropdownMenuSeparator)).toHaveLength(2);
    expect(menuContent.find(DropdownMenuItem)).toHaveLength(4); // Assuming there are 3 menu items
  });

  // You can add more tests here for specific behavior like checking if Sign out works, etc.
});
