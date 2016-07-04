import { Component } from '@angular/core'; 
import { ROUTER_DIRECTIVES} from '@angular/router';
import { LoginService  } from '../../services/login.service'; 
import { ReadBookService } from '../../services/readbook.service'; 


@Component({
	providers: [ReadBookService],
  	templateUrl: 'app/modules/ReadBookComponent/readbook.component.html',
  	styleUrls: ['app/modules/ReadBookComponent/readbook.component.css'],
    directives: [ROUTER_DIRECTIVES]
})


export class ReadBookComponent {
	public getBooksList;

	constructor(private readBookService: ReadBookService) { }

	ngOnInit() { 
		this.getBooks();
	}


	// Get Books
	getBooks() {
	    // now it's a simple subscription to the observable
	    this.readBookService.getBooksData()
	        .subscribe(
	          data => {
	          	var tempArray = [];
	            tempArray.push(data.Message);
	            this.getBooksList = tempArray[0];
	          },
	          err => alert(err),
	          () => { }
	        );
	}
};