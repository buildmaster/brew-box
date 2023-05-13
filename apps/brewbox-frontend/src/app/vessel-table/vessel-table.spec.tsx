import { render } from '@testing-library/react';

import VesselTable from './vessel-table';

describe('VesselTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VesselTable />);
    expect(baseElement).toBeTruthy();
  });
});
