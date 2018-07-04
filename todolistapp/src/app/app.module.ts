import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule,Routes} from "@angular/router";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'tasks', component: TasksComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    TasksComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
