export default class Data {
  private _day: number;

  public get day(): number {
    return this._day;
  }

  public set day(value: number) {
    this._day = value;
  }

  private _month: number;
  public get month(): number {
    return this._month;
  }

  public set month(value: number) {
    this._month = value;
  }

  private _year: number;
  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  constructor(d: number, m: number, y: number) {
    if (!Data.validateDate(d, m, y)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = d;
      this._month = m;
      this._year = y;
    }
  }

  private static validateDate(d: number, m: number, y: number): boolean {    
    const dateStr = `${y}-${m}-${d}`;

    if (new Date(dateStr).getDate() !== d) return false;

    return true;
  }

  public getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this._month - 1];
  }

  public isLeapYear(): boolean {
    return ((this._year % 4) === 0);
  }

  public compare(date: Data) {
    const thisDate = `${this.year}-${this.month}-${this.day}`;
    const informedDate = `${date.year}-${date.month}-${date.day}`;

    if (new Date(thisDate) > new Date(informedDate)) return 1;
    if (new Date(thisDate) < new Date(informedDate)) return -1;

    return 0;
  }

  public format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se contem "aa" ou "aaaa"
      (!formatting.match(/m{2}/g) || !formatting.match(/M{1}/g)), // verifica se contém 'mm' ou 'M'
      (!formatting.match(/d{2}/g)), // verifica se contem 'dd'
    ];

    console.log(conditions);

    if (conditions.every((condition) => condition)) {
      // throw new Error(`O formato passado é inválido: ${formatting}`);
      return (`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? `${this.day}` : `0${this.day}`;
    const month = this.month > 9 ? `${this.month}` : `0${this.month}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}