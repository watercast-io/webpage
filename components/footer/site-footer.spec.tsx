import { shallow } from 'enzyme';
import { SiteFooter } from './site-footer';

describe('SiteFooter component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SiteFooter />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct footer text', () => {
    const wrapper = shallow(<SiteFooter />);
    expect(wrapper.find('p').text()).toContain('Watercast');
    expect(wrapper.find('p').text()).toContain(`${new Date().getFullYear()} ©`);
  });

  it('renders a link with correct href attribute', () => {
    const wrapper = shallow(<SiteFooter />);
    expect(wrapper.find('a').prop('href')).toEqual('#');
  });

  it('applies className passed via props', () => {
    const className = 'test-class';
    const wrapper = shallow(<SiteFooter className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });
});
