  class Person{
  
  FName: string;
  LName: string;
  Age: number;
  PhoneNum: number;
  State: string;
  Zip: number;
  Occu: string;
  
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number,
    private phoneNumber: number,
    private state: string,
    private zipCode: number,
    private occupation: string
   ) {
    this.FName = firstName;
    this.LName = lastName;
    this.Age = age;
    this.PhoneNum = phoneNumber;
    this.State = state;
    this.Zip = zipCode;
    this.Occu = occupation;
   }
   
  details(): string{
    return this.FName + this.LName + this.Age + this.PhoneNum + this.State + this.Zip + this.Occu;
  }
}
