import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }