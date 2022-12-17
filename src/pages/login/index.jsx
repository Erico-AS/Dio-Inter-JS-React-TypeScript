import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles"

import { MdEmail, MdLock } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

import { api } from "../../services/api.js"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email('Email não válido').required(), 
    passwword: yup.string().min(3, 'No mínimo 3 caracteres').required(), 
  }).required() 


const Login = () => {
    
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onchange',
    });


    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválidos')
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
    };

    console.log(isValid)

    const navigate = useNavigate()

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    Domine as tecnologias ultilizadas pelas empresas mais inovadoras do mundo e
                    encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                    <form onSubmit={handleSubmit[onSubmit]}>
                        <Input control={control} name='email' errorMessage={errors?.email?.message} placeholder='E-mail' leftIcon={<MdEmail/>}/>
                        <Input control={control} name='password' errorMessage={errors?.passwword?.message} placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
                        <Button title='Entrar' variant="secondary" type='submit' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}
export {Login}