// pojo - plain ordinary java object  (this is pots - typescript object)
export interface Tea {
  id: number;
  name: string;
}

export interface TeaList {
  more: boolean;
  data: Tea[];
}
