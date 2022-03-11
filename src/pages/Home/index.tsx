import { Main } from "../../components/Main";
import { PenalCodeTable } from "../../components/PenalCodeTable";
import { Login } from "../Login";

export function Home() {
  if (!localStorage.getItem("@pmcda-token")) {
    return <Login />
  } else {
    return <Main content={<PenalCodeTable />} />;
  }
}
