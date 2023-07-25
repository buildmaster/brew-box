import { render } from '@testing-library/react';

import PumpTable from './pump-table';

describe('PumpTable', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<PumpTable />);
    expect(baseElement).toBeTruthy();
  });
  
});
