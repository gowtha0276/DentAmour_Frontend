import { doctor } from "./doctor.model";
import { treatment } from "./treatment.model";

export class patientDiagnosis{
    public patientId:string='';
    public id:string='';
    public treatments:treatment[]=[];
    public primaryDoctor: doctor |undefined;
    public secondaryDoctor:doctor | undefined;
    public primaryDoctorComments:string='';
    public secondaryDoctorComments:string='';
    public date:string='';
   
}