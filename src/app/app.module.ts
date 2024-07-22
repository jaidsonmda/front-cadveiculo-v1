import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {ConfirmationService, MessageService} from "primeng/api";
import {ApiVeiculoService} from "./api-veiculo.service";
import {HttpClientModule} from "@angular/common/http";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ProgressBarModule} from "primeng/progressbar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ContextMenuModule} from "primeng/contextmenu";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    AppRoutingModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
