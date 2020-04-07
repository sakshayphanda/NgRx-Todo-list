import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({message: simpleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
