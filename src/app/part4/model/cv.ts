export class Cv {
  public id : number;
  public name : string;
  public firstname : string;
  public age : number;
  public cin : number;
  public job : string;
  public path : string;

  constructor(id: number, name: string, firstName: string, age: number, cin: number, job: string, path: string) {
    this.id = id;
    this.firstname = firstName;
    this.name = name;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }
}
