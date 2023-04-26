import { render } from '@testing-library/react';

import Vessel from './vessel';

describe('Vessel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vessel />);
    expect(baseElement).toBeTruthy();
  });
});
