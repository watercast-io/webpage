import { shallow } from 'enzyme';
import { SiteFooter } from './site-footer';
import { siteConfig } from '@/config/site';

describe('SiteFooter component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SiteFooter />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct footer text', () => {
    const wrapper = shallow(<SiteFooter />);
    //expect(wrapper.find('p').text()).toContain('Watercast');
    expect(wrapper.find('p').text()).toContain(`${siteConfig.name} © ${new Date().getFullYear()}. All rights reserved.`);
  });

  it('applies className passed via props', () => {
    const className = 'test-class';
    const wrapper = shallow(<SiteFooter className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });
});
