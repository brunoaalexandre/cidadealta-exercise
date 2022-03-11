import { Main } from "../../components/Main";
import { NewRegister } from "../../components/NewRegister";
import { Login } from "../Login";

export function Register() {
  if (!localStorage.getItem("@pmcda-token")) {
    return <Login />;
  } else {
    return <Main content={<NewRegister />} />;
  }
}
