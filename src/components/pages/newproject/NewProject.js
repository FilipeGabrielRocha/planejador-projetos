import ProjectForm from '../../project/projectForm/ProjectForm';
import './NewProjectModule.css'

function NewProject() {
  return (
    <div className="newproject_container">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  )
}

export default NewProject;
