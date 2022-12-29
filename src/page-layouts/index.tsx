import React, { PropsWithChildren } from 'react';

import { BaseProvider } from 'baseui';
import theme from './theme';

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <BaseProvider theme={theme}>{children}</BaseProvider>;
};

export default PageLayout;
