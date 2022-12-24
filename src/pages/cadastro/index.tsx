import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Column, Container, LoginText, Row, SubtitleCad, Title, TitleCad, Wrapper } from "./styles"

import { MdEmail, MdLock, MdPerson } from "react-icons/md"


const Cadastro = () => {

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, 
                dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleCad>Comece agora grátis</TitleCad>
                    <SubtitleCad>Crie sua conta e make the change._</SubtitleCad>
                    <form>
                        <Input placeholder="Nome completo" name='nome' type='text' leftIcon={<MdPerson />}/>
                        <Input placeholder="E-mail" name='email' type='text' leftIcon={<MdEmail/>}/>
                        <Input placeholder="Senha" name='password' type='password' leftIcon={<MdLock/>}/>
                        <Button title='Criar minha conta' variant="secondary" type='submit' />
                    </form>
                    <Row>
                        <SubtitleCad>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleCad>
                    </Row>
                    <Row>
                        <LoginText>Já tenho conta. <a href="/login">Fazer login</a> </LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}
export {Cadastro}