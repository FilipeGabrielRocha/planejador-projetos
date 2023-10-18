import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loading from "../../layouts/loading/Loading";
import Container from "../../layouts/container/Container";
import LinkButton from "../../layouts/linkButton/LinkButton"
import Message from '../../layouts/message/Message'
import ProjectForm from "../../project/projectForm/ProjectForm";

import "./ProjectModule.css";

export default function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(project){
    if (project.budget < project.cost){
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then(resp => resp.json())
    .then(data => {
      setProject(data)
      setShowProjectForm(false)
      setMessage('Projeto atualizado!')
      setType('success')
    })
    .catch(err => console.log(err))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className="project_details">
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className="details_container">
              <h1>Projeto: {project.name}</h1>
              <div className="btns">
                <LinkButton to={"/projects"} text={"Voltar"} />
                <button className="btn" onClick={toggleProjectForm}>
                  {!showProjectForm ? "Editar projeto" : "Fechar"}
                </button>
              </div>
              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="project_info">
                  <ProjectForm handleSubmit={editPost} btnText={"Concluir edição"} projectData={project} />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
