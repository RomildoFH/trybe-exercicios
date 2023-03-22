export default class Student {
  private _matricula: string;  
  private _nome: string;
  private _notas_provas: number[];
  private _notas_trabalhos: number[];

  constructor(m: string, n: string, np: number[], nt: number[]) {
    this._matricula = m;
    this._nome = n;
    this._notas_provas = np;
    this._notas_trabalhos = nt;
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get notas_provas(): number[] {
    return this._notas_provas;
  }
  public set notas_provas(value: number[]) {
    this._notas_provas = value;
  }
  public get notas_trabalhos(): number[] {
    return this._notas_trabalhos;
  }
  public set notas_trabalhos(value: number[]) {
    this._notas_trabalhos = value;
  }
}

const student1 = new Student('101010', 'Miguel Silva', [10, 9, 8, 10], [8, 9]);
console.log(student1);

const student2 = new Student('202020', 'Victoria Silva', [10, 10, 7, 5], [10, 7]);
console.log(student2);