import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'

import Loading from "../../layouts/loading/Loading";
import Container from "../../layouts/container/Container";
import LinkButton from "../../layouts/linkButton/LinkButton"
import Message from '../../layouts/message/Message'
import ServiceForm from "../../service/serviceForm/ServiceForm";
import ProjectForm from "../../project/projectForm/ProjectForm";
import ServiceCard from "../../service/serviceCard/ServiceCard";

import "./ProjectModule.css";

export default function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
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
          setServices(data.services)
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(project){
    setMessage('')
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

  function createService(){
    setMessage('')

    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if (newCost > parseFloat(project.budget)){
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then(resp => resp.json())
    .then(data => {
      setShowServiceForm(false)
    })
    .catch(err => console.log(err))
  }

  function removeService(id, cost){
    setMessage('')
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    )

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectUpdated)
    })
    .then(resp => resp.json())
    .then(data => {
      setProject(projectUpdated)
      setServices(servicesUpdated)
      setMessage('Serviço removido com sucesso!')
      setType('success')
    })
    .catch(err => console.log(err))
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
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
            <div className="service_form_container">
                <h2>Adicione um servico:</h2>
                <button className="btn" onClick={toggleServiceForm}>
                  {!showServiceForm ? 'Adicinar serviço' : 'Fechar'}
                </button>
                <div className="project_info">
                  {showServiceForm && (
                    <ServiceForm
                    handleSubmit={createService}
                    btnText={'Adicionar serviço'}
                    projectData={project}
                    />
                  )}
                </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass={"start"}>
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))
              }
              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
