import { PenalCodesProvider } from "./hooks/usePenalCodes";
import RoutesApp from "./routes";

export function App() {
  return (
    <PenalCodesProvider>
      <RoutesApp />
    </PenalCodesProvider>
  )
}
