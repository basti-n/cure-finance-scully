import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextInputComponent],
  declarations: [TextInputComponent],
})
export class TextInputModule {}
