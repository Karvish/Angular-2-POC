import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HomeComponent } from '../modules/HomeComponent/home.component';
import { ContactComponent } from '../modules/ContactComponent/contact.component';
import { ReadBookComponent } from '../modules/ReadBookComponent/readbook.component';
import { SearchBookComponent } from '../modules/SearchBookComponent/searchbook.component';

@Component({
    selector: 'TechAspect',
    template: `  
       <div class="container">
           <nav>
                <ul class="nav nav-pills">
                    <li role="presentation"><a [routerLink]="['/home']">Home</a></li>
                    <li role="presentation"><a [routerLink]="['/books']">ReadBooks</a></li>
                    <li role="presentation"><a [routerLink]="['/search']">SearchBooks</a></li>
                    <li role="presentation"><a [routerLink]="['/contact']">Contact US</a></li>                    
                </ul>
           </nav> 
           <div class="content">
                <router-outlet></router-outlet>
           </div>
           <footer> 
              <span> Copy Rights - TechAspect Solutions </span> 
           </footer>                
        </div> 
        
    `,
    directives: [ROUTER_DIRECTIVES]
})

@Routes([     
    {path: '/home', component: HomeComponent},    
    {path: '/contact', component: ContactComponent},
    {path: '/books', component: ReadBookComponent},
    {path: '/search', component: SearchBookComponent }     
    
    //{ path: '**', redirectTo: ['Home'] }
])

export class AppComponent {
    
}
