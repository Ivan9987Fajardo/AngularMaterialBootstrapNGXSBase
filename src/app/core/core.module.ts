import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BootstrapModule } from '../styles/bootstrap/bootstrap.module';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [DemoComponent, HeaderComponent, DemoModalComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, BootstrapModule],
  exports: [FormsModule, HttpClientModule, BootstrapModule],
})
export class CoreModule {}
