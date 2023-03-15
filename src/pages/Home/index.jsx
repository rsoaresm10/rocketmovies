import { Container,Form, NewMovie,  } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi"
import { Note } from "../../components/Note";
export function Home () {
return (
    <Container>
<Header></Header>
<main>
       <Form>
        <header>
    <h2>Meus filmes</h2>
<NewMovie>
    <FiPlus></FiPlus>
    Adicionar Filme
</NewMovie>
</header>

<Note data={{
            title: 'Interestelar', 
            tags: [
                {id: '1' , name: 'Ficção'},
                {id: '2' , name: 'Drama'},
                {id: '3' , name: 'Familia'}
            ]
            
            }}/>

<Note data={{
            title: 'Interestelar', 
            tags: [
                {id: '1' , name: 'Ficção'},
                {id: '2' , name: 'Drama'},
                {id: '3' , name: 'Familia'}
            ]
            
            }}/>
            <Note data={{
            title: 'Interestelar', 
            tags: [
                {id: '1' , name: 'Ficção'},
                {id: '2' , name: 'Drama'},
                {id: '3' , name: 'Familia'}
            ]
            
            }}/>
</Form>
</main>


    </Container>
)
}