import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MsgErrorComponent } from './msg-error/msg-error.component';
import { MaterialModule } from '../modules/material/material.module';
import { UtilsModule } from '../modules/utils/utils.module';
import { CardComponent } from './card/card.component';
import { InputTextComponent } from './input/input-text/input-text.component';

@NgModule({
  declarations: [
    ExpansionPanelComponent,
    MsgErrorComponent,
    CardComponent,
    InputTextComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule
  ],
  exports : [
    ExpansionPanelComponent,
    MsgErrorComponent,
    CardComponent,
    InputTextComponent,
  ],
})
export class SharedComponentsModule { }
