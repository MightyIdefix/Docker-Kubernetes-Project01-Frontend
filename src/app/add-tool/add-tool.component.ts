import { Component, OnInit, Input } from '@angular/core';
import {Tool} from '../models/toolmodel';
import { ActivatedRoute } from '@angular/router';
import { toolService } from '../services/toolService';


@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {

  constructor(private toolService: toolService, private ActivatedRoute: ActivatedRoute) { }

  isUpdated: boolean = false;

  @Input() model: Tool = new Tool(null, null, null, null, null, null);

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id != null) {
        this.toolService.getTool(id).subscribe(res => this.model = res);
        this.isUpdated = true;
      }
    });
  }

  submit() {
    if (this.isUpdated) {
      this.toolService.updateTool(this.model).subscribe(res => {
        console.log("hvis tool updated", res)
      },
        err => console.log("fejl i tool updae", err)
      );
    }
    else {
      this.toolService.addTool(this.model).subscribe(res => {
        console.log("tool create her", res);
      },
        err => console.log("FEJL i tool create her", err)
      );
    }
  }

}
