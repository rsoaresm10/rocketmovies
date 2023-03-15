import { Container, Form } from "./styles";
import {Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Textarea} from "../../components/Textarea"
import { Section } from "../../components/Section"
import {NoteItem} from "../../components/NoteItem"
import { Button } from "../../components/Button";
import {BlackButton } from "../../components/BlackButton";
import { Link } from "react-router-dom";



export function New (){
    return (
        <Container>


<Header></Header>

<Form>
<Link to="/"> <FiArrowLeft className="icon"/> Voltar </Link>
<h1>Novo Filme</h1>
<div className="input">
<Input placeholder="Titulo"></Input>
<Input placeholder="Sua nota de 0 a 5"></Input>
</div>
<Textarea placeholder="Observações"/>

<Section title="Marcadores">
<div className="tags">
            <NoteItem value="Drama" ></NoteItem>
            <NoteItem value="Nova tag" isNew ></NoteItem>
            </div>
</Section>

<div className="button">
    <BlackButton title="Excluir filme"></BlackButton>
<Button title="Salvar alterações"></Button>
</div>

</Form>



        </Container>
    )
}