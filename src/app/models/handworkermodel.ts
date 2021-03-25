import { VaerktoejsKasse } from "./toolboxmodel";

export class Handworker {
  constructor(
    public EmployeeDate: Date,
    public LastName: string,
    public Speciality: string,
    public FirstName: string,
    public Vaerktoejskasse: VaerktoejsKasse
  ) {}
}
