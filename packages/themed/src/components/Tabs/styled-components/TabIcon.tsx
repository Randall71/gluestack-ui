import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    mr: 12,
  },
  {
    componentName: 'TabsTabIcon',
    ancestorStyle: ['_icon'],
  } as const
);
