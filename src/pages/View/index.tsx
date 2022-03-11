import { useParams } from 'react-router-dom';
import { Main } from "../../components/Main";
import { PenalCode } from "../../components/PenalCode";
import { Login } from "../Login";

export function View() {
  const { id } = useParams();

  if (!localStorage.getItem("@pmcda-token")) {
    return <Login />;
  } else {
    return <Main content={<PenalCode id={`${id}`} />} />;
  }
}
