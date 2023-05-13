import { render } from '@testing-library/react';

import ApplicationSidebar from './application-sidebar';

describe('ApplicationSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplicationSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
