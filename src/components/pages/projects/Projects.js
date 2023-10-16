import Message from "../../layouts/message/Message"
import Container from '../../layouts/container/Container.js'
import LinkButton from "../../layouts/linkButton/LinkButton"

import './ProjectsModule.css'

import { useLocation } from "react-router-dom"

function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div className="project_container">
            <div className="title_container">
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type={"success"} />}
            <Container customClass="start">
                <p>projetos</p>
            </Container>
        </div>
    )
}

export default Projects