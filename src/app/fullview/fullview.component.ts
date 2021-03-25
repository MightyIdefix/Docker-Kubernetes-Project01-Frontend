import { Component, OnInit } from "@angular/core";
import { toolService } from "../services/toolService";
import { toolboxService } from "../services/toolboxService";
import { handworkerService } from "../services/handworkerService";
import { Tool } from "../models/toolmodel";
import { VaerktoejsKasse} from "../models/toolboxmodel";
import { Handworker } from "../models/handworkermodel";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-fullview",
  templateUrl: "./fullview.component.html",
  styleUrls: ["./fullview.component.css"]
})
export class FullviewComponent implements OnInit {
  tools: Tool[];
  toolboxes: VaerktoejsKasse[];
  handworkers: Handworker[];

  constructor(
    private toolService: toolService,
    private toolboxService: toolboxService,
    private handworkerService: handworkerService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe(res => this.tools = res);
    this.toolboxService.getAllVaerktoejsKasser().subscribe(res => this.toolboxes = res);
    this.handworkerService.getAllHandworkers().subscribe(res => {
      this.handworkers = res;
    });
  }

  onAddTool(): void {
    this.router.navigate(['/addTool']);
  }

  onAddToolbox(): void {
    this.router.navigate(['/addToolbox']);
  }

  onAddHandworker(): void {
    this.router.navigate(['/addHandworker']);
  }

  // deleteToolBox(tbx: ToolBox) {
  //   this.toolboxService.deleteToolBox(tbx.vtkId).subscribe(res => console.log(res));
  // }

  // deleteTool(tool: Tool) {
  //   this.toolService.deleteTool(tool.vtId).subscribe(res => console.log(res));
  // }

  // deleteCraftman(handworker: Handworker) {
  //   this.handworkerService.deleteHandworker(handworker.FirstName).subscribe(res => console.log(res));
  // }

}
