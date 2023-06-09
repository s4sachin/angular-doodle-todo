import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/todos/component/todos/todos.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent, HeaderComponent],
  imports: [RouterModule.forChild(routes)],
})
export class TodosModule {}
