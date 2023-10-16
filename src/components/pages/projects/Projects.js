import Message from "../../layouts/message/Message"

import { useLocation } from "react-router-dom"

function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
        console.log(message);
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message msg={message} type={"success"} />}
        </div>
    )
}

export default Projects