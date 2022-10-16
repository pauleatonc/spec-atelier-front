import React from 'react';
import { Circles } from 'react-loader-spinner';

import { PRIMARY } from '../../config/constants/styled-vars';

import { LoadingContainer } from './loading.styles';

const Loading = () => (
  <LoadingContainer>
    <Circles width="50" color={PRIMARY} />
  </LoadingContainer>
);

export default Loading;
