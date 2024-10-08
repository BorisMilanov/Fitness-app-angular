import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import this

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { PythonComponent } from './python/python.component';
import { RComponent } from './r/r.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PythonComponent,
    RComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
