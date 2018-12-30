import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    MatToolbarModule
  ]
})
export class UiModule { }
