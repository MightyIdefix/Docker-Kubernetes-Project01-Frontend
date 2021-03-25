import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Handworker } from '../models/handworkermodel';
import { handworkerService } from '../services/handworkerService';

@Component({
  selector: 'app-add-handworker',
  templateUrl: './add-handworker.component.html',
  styleUrls: ['./add-handworker.component.css']
})
export class AddHandworkerComponent implements OnInit {

  constructor(private handworkerService: handworkerService, private ActivatedRoute: ActivatedRoute) { }

  @Input() model: Handworker = new Handworker(null, null, null, null, null);

  isUpdated: boolean = false;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id != null) {
        this.handworkerService.getHandworker(id).subscribe(res => this.model = res);
        console.log("håndværker her", this.model);
        this.isUpdated = true;
      }
    });
  }

  onSubmit() {

    if (this.isUpdated) {
      this.handworkerService.updateHandworker(this.model).subscribe(res => {
        console.log("håndværker update her", res);
      },
        err => console.log("FEJL håndværker update her", err)
      );
    }
    else {
      this.handworkerService.addHandworker(this.model).subscribe(res => {
        console.log("håndværker create her", res);
      },
        err => console.log("FEJL håndværker create her", err)
      );
    }
  }

}
