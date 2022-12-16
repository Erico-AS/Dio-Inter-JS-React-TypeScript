import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md"
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles"
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom"


export function Login() {

    const navigate = useNavigate()

    const handleClickSingIn = () => {
        navigate('/feed')
    }

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
                    <form>
                        <Input placeholder='E-mail' leftIcon={<MdEmail/>}/>
                        <Input placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
                        <Button title='Entrar' variant="secondary" onClick={handleClickSingIn}/>
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
