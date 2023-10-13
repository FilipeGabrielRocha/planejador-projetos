import "./ProjectFormModule.css";

import Input from "../../form/input/Inpu";
import Select from "../../form/select/Select";
import SubmitButton from "../../form/submitButton/SubmitButton";

import { useEffect, useState } from "react";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <Select
        name={"category_id"}
        text={"Selecione a categoria"}
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
