
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RtlService } from '@fundamental-ngx/core/utils';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCoreModule, FdDatetimeModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ShellbarSideNavExampleComponent } from './shellbar-side-nav-example.component';


@NgModule({
    declarations: [
        ShellbarSideNavExampleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FundamentalNgxCoreModule, FdDatetimeModule,
        FundamentalNgxPlatformModule,
        HttpClientModule,
        CdkTableModule,
        DragDropModule,
        RouterModule.forRoot([{path: '#', component:ShellbarSideNavExampleComponent}], { useHash: true }),
    ],
    providers: [
        RtlService,
        
    ],
    entryComponents: [
        
    ],
    bootstrap: [
        ShellbarSideNavExampleComponent
    ]
})
export class AppModule {}
