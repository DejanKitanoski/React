import React, { useState } from 'react';
import NameInput from './components/NameInput';
import EmailInput from './components/EmailInput';
import GenderInput from './components/GenderInput';
import InterestsInput from './components/InterestsInput';
import CountrySelect from './components/CountrySelect';
import SubmitButton from './components/SubmitButton';


  return (
    <div >

        <NameInput/>
        <EmailInput/>
        <GenderInput/>
        <InterestsInput/>
        <CountrySelect/>
        <SubmitButton/>
      
    </div>
  );
