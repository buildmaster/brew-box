import { render } from '@testing-library/react';

import FermentationDashboard from './fermentation-dashboard';

describe('FermentationDashboard', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<FermentationDashboard />);
    expect(baseElement).toBeTruthy();
  });
  
});
