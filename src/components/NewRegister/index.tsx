import { FormEvent, useState, useContext } from "react";
import { usePenalCodes } from "../../hooks/usePenalCodes";

import { ButtonContainer, Container, RadioBox } from "./styles";

export function NewRegister() {
  const { createPenalCode } = usePenalCodes();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(1);


  async function handleCreateNewRegister(event: FormEvent) {
    event.preventDefault()

    await createPenalCode({
      nome: name,
      descricao: description,
      multa: value,
      status: status
    })

    setName('');
    setDescription('');
    setTime(0);
    setValue(0);
    setStatus(1);
  }

  return (
    <Container>
      <form onSubmit={handleCreateNewRegister}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Ex: Dinheiro ilícito"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />

        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Ex: Estar em posse de dinheiro não declaro ou de nat..."
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />

        <label>Multa:</label>
        <input
          type="number"
          placeholder="Ex: 900"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          required
        />
        <label>Tempo de Prisão:</label>
        <input
          type="number"
          placeholder="Ex: 15"
          value={time}
          onChange={event => setTime(Number(event.target.value))}
          required
        />
        <label>Status:</label>
        <RadioBox
          type="button"
          onClick={() => setStatus(1)}
          isActive={status === 1}
          activeColor="green"
        >
          Ativo
        </RadioBox>
        <RadioBox
          type="button"
          onClick={() => setStatus(2)}
          isActive={status === 2}
          activeColor="red"
        >
          Inativo
        </RadioBox>

        <ButtonContainer>
          <button type="submit">
            Cadastrar
          </button>
        </ButtonContainer>
      </form>
    </Container>
  );
}
