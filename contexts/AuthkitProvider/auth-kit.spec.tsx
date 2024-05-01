import { mount } from 'enzyme';
import React from 'react';
import { AuthkitContextType } from '@/types';
import { AuthkitContext, AuthkitProvider } from './authkit-provider';

describe('AuthkitProvider', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AuthkitProvider session={undefined}>
        <div />
      </AuthkitProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('provides AuthkitContext to its children', () => {
    const ChildComponent = () => {
      const context = React.useContext(AuthkitContext);
      return <div>{context ? 'Context found' : 'Context not found'}</div>;
    };

    const wrapper = mount(
      <AuthkitProvider session={undefined}>
        <ChildComponent />
      </AuthkitProvider>
    );

    expect(wrapper.text()).toContain('Context found');
  });

  it('provides the correct initial context value', () => {
    const ChildComponent = () => {
      const context = React.useContext(AuthkitContext);
      const session = context?.session;
      return <div>{typeof session === "undefined" ? 'Session doesnt exist' : 'Session exists'}</div>;
    };

    const initialContextValue: AuthkitContextType = {
      session: undefined,
    };

    const wrapper = mount(
      <AuthkitContext.Provider value={initialContextValue}>
        <AuthkitProvider session={undefined}>
          <ChildComponent />
        </AuthkitProvider>
      </AuthkitContext.Provider>
    );

    expect(wrapper.text()).toContain('Session doesnt exist');
  });
});
