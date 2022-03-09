import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface PenalCodes {
  id: number;
  nome: string;
  dataCriacao: string;
  multa: number;
  status: number
}

interface PenalCodeInput {
  nome: string;
  descricao: string;
  multa: number;
  status: number
}


interface PenalCodesProviderProps {
  children: ReactNode;
}

interface PenalCodesContextData {
  codes: PenalCodes[];
  loading: boolean;
  createPenalCode: (penalCode: PenalCodeInput) => void;
}

export const PenalCodesContext = createContext<PenalCodesContextData>(
  {} as PenalCodesContextData
);

export function PenalCodesProvider({ children }: PenalCodesProviderProps) {
  const [codes, setCodes] = useState<PenalCodes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('codigopenal')
      .then(response => setCodes(response.data))
      .then(() => setLoading(false));
  }, []);

  async function createPenalCode(penalCode: PenalCodeInput) {
    const response = await api.post('codigopenal', {
      ...penalCode,
      dataCriacao: new Date(),
      id: (Math.random() * (1000 - 5) + 5)
    });
    const { data } = response;

    setCodes([
      ...codes,
      data
    ])

    console.log(codes);
  }

  return (
    <PenalCodesContext.Provider value={{ codes, loading, createPenalCode }}>
      {children}
    </PenalCodesContext.Provider>
  )
}

export function usePenalCodes() {
  const context = useContext(PenalCodesContext)

  return context;
}
