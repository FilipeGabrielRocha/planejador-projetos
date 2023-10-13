import "./ProjectFormModule.css";

import Input from "../../form/input/Inpu";
import Select from "../../form/select/Select";
import SubmitButton from "../../form/submitButton/SubmitButton";

function ProjectForm({btnText}) {
  return (
    <form className="form">
        <Input
          type="text"
          text="Nome do Projeto"
          name={"name"}
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do Projeto"
          name={"budget"}
          placeholder="Insira o orçamento total"
        />
        <Select name={"category_id"} text={"Selecione a categoria"} />
        <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
