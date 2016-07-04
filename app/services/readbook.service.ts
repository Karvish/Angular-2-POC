import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadBookService {
	constructor(public http: Http) { }

  	// ReadBookService getBooksData function
	getBooksData() {
	    // return an observable
	    return this.http.get('http://service.techaspect.com:5000/lms/getBooks')
					    .map(responseData => responseData.json());
  	}

  	// ReadBookService getBookDeatils function
  	getBookDeatils(isbn) {
	    // return an observable
	    return this.http.get('http://service.techaspect.com:5000/lms/getBooks/'+ isbn)
					    .map(responseData => responseData.json());
  	}
  	

} // end ReadBookService class