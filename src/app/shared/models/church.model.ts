export interface Church {
  id: number;
  pais: string;
  estado: string;
  uf: string;
  regiao: string;
  cidade: string;
  tipoLocalidade: string;
  nomeCongregacao: string;
  enderecoLogradouro: string | null;
  numero: string | null;
  complemento: string | null;
  bairro: string | null;
  cep: string | null;
  quantidadeMembros: number | null;
  observacoes: string | null;
}
