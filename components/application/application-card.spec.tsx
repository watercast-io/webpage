import { shallow } from 'enzyme';
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ApplicationCard } from './application-card';

describe('ApplicationCard component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ApplicationCard />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct card title', () => {
    const wrapper = shallow(<ApplicationCard />);
    expect(wrapper.find(CardTitle).text()).toEqual('NIE: Y8872257K');
  });

  it('renders BellIcon and Switch components', () => {
    const wrapper = shallow(<ApplicationCard />);
    expect(wrapper.find(BellIcon).exists()).toBe(true);
    expect(wrapper.find(Switch).exists()).toBe(true);
  });

  it('renders correct number of notifications', () => {
    const wrapper = shallow(<ApplicationCard />);
    expect(wrapper.find('.flex.flex-col div').length).toEqual(2); // Change the length according to your notifications array
  });

  it('renders Edit Button with CheckIcon', () => {
    const wrapper = shallow(<ApplicationCard />);
    expect(wrapper.find(Button).exists()).toBe(true);
    expect(wrapper.find(CheckIcon).exists()).toBe(true);
  });
});
