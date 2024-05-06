import '@testing-library/jest-dom'
import {render, waitFor, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import IndexPage from '../page';

import { shallow } from 'enzyme';

describe('IndexPage', () => {
  it('renders content correctly', async () => {
    shallow(<IndexPage />);
  });

  it('should render the main heading', () => {
    const wrapper = shallow(<IndexPage />);
    const heading = wrapper.find('h1');
    expect(heading.text()).toEqual('Te ayudamos a gestionar tu estrategia de agua');
  });

  it('should render the description paragraph', () => {
    const wrapper = shallow(<IndexPage />);
    const description = wrapper.find('p');
    expect(description.text()).toEqual('Utilizamos inteligencia artificial para proporcionar una evaluación en tiempo real del riesgo hídrico y ofreciendo opciones de adaptación y mitigación');
  });

  it('should render the Contactar button', () => {
    const wrapper = shallow(<IndexPage />);
    const contactButton = wrapper.find('ForwardRef(LinkComponent)');
    expect(contactButton.text()).toEqual('Contactar');
    expect(contactButton.prop('href')).toEqual('mailto:sergio.cardenas@watercast.io?subject=Contacto&cc=lorenzo.danese@watercast.io');
  });

  it('should render the image', () => {
    const wrapper = shallow(<IndexPage />);
    const image = wrapper.find('img');
    expect(image.prop('alt')).toEqual('Descripción de la imagen');
    expect(image.prop('src')).toEqual('images/background/recycle_drop_color.svg');
  });
});
