import { Container , Profile} from "./styles";
import { Input } from "../Input";

export function Header ( ) {
    return (
        <Container>

             <h1>RocketMovies</h1>
             
             <Input placeholder="pesquisar pelo titulo"/>
           
          <Profile>
          <div>
            <span>Rafael Soares</span>
                <strong>sair</strong>
               
            </div>
         
         
          <img src="https://github.com/rsoaresm10.png" 
                alt="foto do usuario" />
          
            
            </Profile>


            
            
        </Container>
    )
}