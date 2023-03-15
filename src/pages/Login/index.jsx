import { Container, Content, But, Image } from "./style"
import { Input } from "../../components/Input"
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function Login (){
return (
    <Container>
        <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
         <Input  placeholder="E-mail" icon={HiMail}></Input>
         <Input  placeholder="E-mail" icon={HiLockClosed} type='password'></Input>
       <But>
        <Button title="Entrar"></Button>
        </But>

        <Link to="/logup">Criar conta</Link>
         </Content>

         <Image></Image>
    </Container>

)
}