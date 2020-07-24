import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import ChatSlider from './basic/slider';
import ChatChecks from './basic/checks';
import ChatRadios from './basic/radios';

const Settings = () => {
  return (
    <React.Fragment>
      <ChatSlider />
      <ChatChecks />
      <ChatRadios />
    </React.Fragment>
  );
};

export default observer(Settings);
