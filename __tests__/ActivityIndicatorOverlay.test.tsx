import React from 'react';
import { render } from '@testing-library/react-native';
import { ActivityIndicatorOverlay } from '../src/components';
import styles from '../src/components/overlays/ActivityIndicatorOverlayStyles';

describe('ActivityIndicatorOverlay', () => {

  it('renders correctly without label', () => {
    const { queryByText } = render(
      <ActivityIndicatorOverlay />
    );
    expect(queryByText(/./)).toBeNull();
  });

  it('renders correctly with label', () => {
    const testLabel = 'Loading...';
    const { getByText } = render(
      <ActivityIndicatorOverlay label={testLabel} />
    );
    expect(getByText(testLabel)).toBeTruthy();
  });

  it('renders with transparent background when transparent prop is true', () => {
    const { getByTestId } = render(
      <ActivityIndicatorOverlay transparent />,
    );
    const indicator = getByTestId('activityIndicator');
    expect(indicator.props.style).toContainEqual(expect.objectContaining(styles.transparent));
  });

  it('renders without transparent background when transparent prop is false', () => {
    const { getByTestId } = render(
      <ActivityIndicatorOverlay />, // default transparent prop is false
    );
    const indicator = getByTestId('activityIndicator');
    expect(indicator.props.style).not.toContainEqual(expect.objectContaining(styles.transparent));
  });
});