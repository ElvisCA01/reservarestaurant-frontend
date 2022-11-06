import { OnInit, Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormGroup,FormBuilder,Validators} from "@angular/forms";


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-booking-people-data',
  templateUrl: './booking-people-data.component.html',
  styleUrls: ['./booking-people-data.component.scss'],
})

export class BookingPeopleDataComponent implements OnInit {
  form: FormGroup;


  constructor(private titulo:Title, private fb:FormBuilder) {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido:['',Validators.required],
    })
    titulo.setTitle('Tus datos')
  }

  ngOnInit(): void {

  }

}
