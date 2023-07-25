import { render } from '@testing-library/react';

import Pump from './pump';

describe('Pump', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<Pump />);
    expect(baseElement).toBeTruthy();
  });
  
});
