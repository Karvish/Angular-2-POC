import { HomeComponent } from '../modules/HomeComponent/home.component';
import { ContactComponent } from '../modules/ContactComponent/contact.component';
import { ReadBookComponent } from '../modules/ReadBookComponent/readbook.component';
import { SearchBookComponent } from '../modules/SearchBookComponent/searchbook.component';
import { LoginComponent } from '../modules/LoginComponent/login.component';
import { BookDetailsComponent } from '../modules/BookDetailsComponent/bookdetails.component';

export const LibraryRoutes = [     
    {path: '',   component: HomeComponent},    
    {path: 'contact',  component: ContactComponent},
    {path: 'readbook', component: ReadBookComponent},
    {path: 'search', component: SearchBookComponent },
    {path: 'login', component: LoginComponent },
    {path: 'readbook/:isbn', component: BookDetailsComponent }     
]
