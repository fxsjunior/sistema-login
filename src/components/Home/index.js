import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/index'
import useAuth from '../../hooks/userAuth';
import * as C from './styles'


const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

  return (
    <C.Container>
        <C.Title>Home</C.Title>
        <Button text="sair" onClick={() => [signout(), navigate("/")]} >Sair</Button>
    </C.Container>
  )
}

export default Home