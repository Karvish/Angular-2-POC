import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'TechAspect',
    template: `
       <div class="container">
           <nav>
                <ul class="nav nav-pills">                    
                    <li role="presentation"><a [routerLink]="['home']">Home</a></li>
                    <li role="presentation"><a [routerLink]="['readbook']">ReadBooks</a></li>
                    <li role="presentation"><a [routerLink]="['search']">SearchBooks</a></li>                    
                    <li role="presentation"><a [routerLink]="['contact']">Contact US</a></li> 
                    <li role="presentation"><a [routerLink]="['login']">Login</a></li>
                    <li role="presentation"><a [routerLink]="['readbook/:isbn']">ReadDetailsBook</a></li>

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


export class AppComponent {
    
}
