import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera} from "react-icons/fi";
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function Profile () {
    return (
        <Container>
            <header>
            <Link to="/"><FiArrowLeft/> Voltar</Link>
                
                
            </header>


            <Form>
                <Avatar>
                <img src="https://github.com/rsoaresm10.png" 
                alt="foto do usuario" />

                <label htmlFor="avatar">
                    <FiCamera/>
                    <input  
                    id="avatar"
                    type="file"
                    />
                   
                                 
                    </label>
          
                </Avatar>

            <Input placeholder="Nome" type="text" icon={HiUser} />
            <Input placeholder="E-mail" type="text" icon={HiMail} />
            <Input placeholder="Senha Atual" type="password" icon={HiLockClosed} />
            <Input placeholder="Nova Senha" type="password" icon={HiLockClosed} />
            <Button  title="Salvar"/>
            </Form>
        </Container>
    )
}