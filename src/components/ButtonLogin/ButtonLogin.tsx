import { Button } from '@mui/material';
import React from 'react'
import { useAuth } from '../../context/AuthContext';

export const ButtonLogin = () => {
    const { googleSignIn } = useAuth();
  return (
    <Button style={{textAlign:'center', padding: '10px'}} onClick={googleSignIn}>Iniciar sesión con google</Button>
  )
}
