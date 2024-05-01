import React from 'react';
import { shallow } from 'enzyme';
import { dashboardConfig } from '@/config/dashboard';
import DashboardNav from './dashboard-nav';
import { Icons } from '../icons';


describe('DashboardNav Component', () => {
    it('renders without crashing', () => {
      shallow(<DashboardNav items={dashboardConfig.sidebarNav} />);
    });
  
    it('renders correct number of items', () => {
      const wrapper = shallow(<DashboardNav items={dashboardConfig.sidebarNav} />);
      expect(wrapper.find('nav').children()).toHaveLength(dashboardConfig.sidebarNav.length);
    });
  
    it('renders items with correct text and icons', () => {
      const wrapper = shallow(<DashboardNav items={dashboardConfig.sidebarNav} />);
      dashboardConfig.sidebarNav.forEach(item => {
        const Icon = Icons[item.icon || "arrowRight"]
        expect(wrapper.contains(item.title)).toEqual(true);
        expect(wrapper.find(Icon)).toHaveLength(1);
      });
    });
  
  });