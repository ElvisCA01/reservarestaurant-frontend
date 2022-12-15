import {ReservaItem} from "./reserva-item.model"

export class Reserva {

  id:number;
  personas:string;
  nombre:string;
  papellido:string;
  sapellido:string;
  horario: string;
  evento: string;
  fecha: String;
  items: ReservaItem[];

}

