import React, {useState} from 'react';
import * as C from './styles';
import { toast } from 'react-toastify';


import Input from '../../components/Input/index'
import Button from '../../components/Button/index'

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/userAuth';


function Signup() {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
          setError("Preencha todos os campos");
          return;
        } else if (email !== emailConf) {
          setError("Os e-mails não são iguais");
          return;
        }
        
        const res = signup(email, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        toast.success("Usuário cadatrado com sucesso!");
        navigate("/");
      };

    return (
        <C.Container>
            <C.Label>Sistema de Login</C.Label>
            <C.Form >
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    autoComplete="false"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Inscrever-se" onClick={handleSignup} />
                <C.LabelSignin>
                    Já tem uma conta ?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Form>
        </C.Container>
    )
}

export default Signup;