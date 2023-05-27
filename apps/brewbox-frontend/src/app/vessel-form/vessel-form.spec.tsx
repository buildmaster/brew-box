import { render } from '@testing-library/react';

import VesselForm from './vessel-form';

describe('VesselForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VesselForm />);
    expect(baseElement).toBeTruthy();
  });
});
