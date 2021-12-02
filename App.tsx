
import React from 'react';
import { MainNavigation } from './src/navigation'; 

import firebase from "firebase";
import { firebaseConfig } from './src/config/firebase.config';

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    
      <MainNavigation/> 
        
  );
}
