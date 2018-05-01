import React from "react";
import { storiesOf } from '@storybook/react';

import Canvas from './canvas';

storiesOf('Test', module)
  .add('Issue', () => (
    <div style={{ width: 500, height: 500, margin: '0 auto' }}>
      <Canvas color="tomato" />
    </div>
  ))
  .add('Expected', () => (
    <div style={{ width: 500, height: 500, margin: '0 auto' }}>
      <Canvas color="lightgreen" fix />
    </div>
  ))