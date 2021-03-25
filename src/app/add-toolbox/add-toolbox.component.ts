import { Component, OnInit, Input} from '@angular/core';
import { toolboxService } from '../services/toolboxService';
import { ActivatedRoute } from '@angular/router';
import { VaerktoejsKasse } from '../models/toolboxmodel';


@Component({
  selector: 'app-add-toolbox',
  templateUrl: './add-toolbox.component.html',
  styleUrls: ['./add-toolbox.component.css']
})
export class AddToolboxComponent implements OnInit {

  constructor(private toolboxService: toolboxService, private ActivatedRoute: ActivatedRoute) { }

  @Input() model: VaerktoejsKasse = new VaerktoejsKasse(null, null, null, null, null, null, null)
  
  isUpdated: boolean = false;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id != null) {
        this.toolboxService.getVaerktoejsKasse(id).subscribe(res => this.model = res);
        console.log("get toolbox her", this.model);
        this.isUpdated = true;
      }
    });
  }

  submit() {
    if (this.isUpdated) {
      this.toolboxService.updateVaerktoejsKasse(this.model).subscribe(res => {
        console.log("toolbox update her", res);
      },
        err => console.log("FEJL i toolbox update her", err)
      );
    }
    else {
      this.toolboxService.addVaerktoejsKasse(this.model).subscribe(res => {
        console.log("toolbox create her", res);
      },
        err => console.log("FEJL toolbox create her", err)
      );
    }
  }
}
