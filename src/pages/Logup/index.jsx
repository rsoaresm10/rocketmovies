import { Container, Content, But, Image } from "./style"
import { Input } from "../../components/Input"
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";



export function Logup (){
return (
    <Container>
        <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input  placeholder="Nome" icon={HiUser}></Input>

         <Input  placeholder="E-mail" icon={HiMail}></Input>
         <Input  placeholder="E-mail" icon={HiLockClosed} type='password'></Input>
       <But>
        <Button title="Cadastrar"></Button>
        </But>

            
        <Link to="/"> <FiArrowLeft className="icon"/> Voltar para o login </Link>
        
         </Content>

         <Image></Image>
    </Container>

)
}