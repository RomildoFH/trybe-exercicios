export default class Student {
  private _enrollment: string;
  private _name: string;
  private _testGrades: number[];  
  private _workGrades: number[];

  constructor(
    enrollment: string,
    name: string,
    // testGrades: number[],
    // workGrades: number[],
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._testGrades = [];
    this._workGrades = [];
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get testGrades(): number[] {
    return this._testGrades;
  }

  public set testGrades(value: number[]) {
    try {
      if (value.length > 4) {
        throw new Error(
          'É necessário informar no máximo 4 notas de provas',
        );        
      }
      this._testGrades = value;
    } catch (error) {
      console.log(String(error));
    }
  }

  public get workGrades(): number[] {
    return this._workGrades;
  }

  public set workGrades(value: number[]) {
    try {
      if (value.length > 2) {
        throw new Error(
          'É necessário informar no máximo 2 notas de trabalhos',
        );        
      }
      this._workGrades = value;
    } catch (error) {
      console.log(String(error));
    }
  }

  public sumGrades(): number {
    const allGrades = [...this._testGrades, ...this._workGrades];

    return allGrades.reduce((prevGrade, grade) => {
      const nextSum = grade + prevGrade;

      return nextSum;
    });
  }

  public avarageGrades(): number {
    const sumAll = this.sumGrades();
    const quantityGrades = (this._testGrades.length + this._workGrades.length);
    return Number((sumAll / quantityGrades).toFixed(2));
  }
}