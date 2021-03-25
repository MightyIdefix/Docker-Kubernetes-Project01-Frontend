import {Tool} from "./toolmodel";

export class VaerktoejsKasse {
    constructor(
      public VTKAnskaffet: Date,
      public VTKEjesAf: string,
      public VTKFabrikat: string,
      public VTKModel: string,
      public VTKSerienummer: string,
      public VTKFarve: string,
      public Vaerktoej: Tool[],
    ) { }
  }