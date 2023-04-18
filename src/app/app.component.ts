import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StakeholderService } from './services/stakeholder/stakeholder.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stakeForm!: FormGroup;
  stake: any;
  user: any;


  constructor(
    public fb: FormBuilder,
    public stakeholderService: StakeholderService,
    public userService: UserService

  ) {
  }

  ngOnInit(): void {
    this.stakeForm = this.fb.group({
      b_id: [''],
      b_documen_type: ['', Validators.required],
      v_documen_number: ['', Validators.required],
      v_first_name: ['', Validators.required],
      v_second_name: ['', Validators.required],
      v_first_surname: ['', Validators.required],
      v_second_surname: ['', Validators.required],
      v_full_name: ['', Validators.required],
      d_date_birth: ['', Validators.required],
      v_city: ['', Validators.required],
      i_sex: ['', Validators.required],
      i_enable: ['', Validators.required],
      users: ['', Validators.required],
      t_creation_date: ['', Validators.required],
    }
    );;

    this.stakeholderService.getAllStakeholders().subscribe(resp => {
      this.stake = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );

    this.userService.getAllUsers().subscribe(resp => {
      this.user = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );

  }

  guardar(): void {
  }

  eliminar(stakeholder:any){
    this.stakeholderService.deleteStakeHolder(stakeholder.b_id).subscribe(resp =>{
      console.log(resp)
      if(resp == false){
        this.stake.pop(stakeholder);
      }
    })
  }

  editar(stakeholder:any){
    ({
    })
  }
}
