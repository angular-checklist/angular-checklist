import { Routes } from '@angular/router';
import { ChecklistDetailViewComponent } from './checklist-detail-view/checklist-detail-view.component';
import { ChecklistFavoritesViewComponent } from './checklist-favorites-view/checklist-favorites-view.component';
import { ListViewComponent } from './checklist-list-view/checklist-list-view.component';
import { ChecklistOverviewComponent } from './checklist-overview/checklist-overview.component';
import { ChecklistComponent } from './checklist.component';
import { ProjectExistsGuard } from './project-exists.guard';
import { AddCheckListViewComponent } from './add-checklist-view/add-checklist-view.component';

export const CHECKLIST_ROUTES: Routes = [
  {
    path: ':project/checklist',
    component: ChecklistComponent,
    canActivate: [ProjectExistsGuard],
    children: [
      { path: 'favorites', component: ChecklistFavoritesViewComponent },
      { path: 'add', component: AddCheckListViewComponent },
      {
        path: '',
        component: ChecklistOverviewComponent,
        children: [
          { path: ':category', component: ListViewComponent },
          { path: ':category/:item', component: ChecklistDetailViewComponent },
          { path: ':category/:item/edit', component: AddCheckListViewComponent }
        ]
      }
    ]
  }
];
