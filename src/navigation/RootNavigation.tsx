import React from 'react';
import { StackNavigation } from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default RootNavigation;
