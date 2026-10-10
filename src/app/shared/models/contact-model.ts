export interface Contact {
  id: number;
  congregacao_id: number;
  nome_contato: string | null;
  funcao: string | null;
  telefone_original: string | null;
  telefone_padronizado: string | null;
  operadora: string | null;
  email: string | null;
  observacoes: string | null;
  created_at: string;
  estado: string | null;
  uf: string | null;
  cidade: string | null;
  congregacao: string | null;
}
