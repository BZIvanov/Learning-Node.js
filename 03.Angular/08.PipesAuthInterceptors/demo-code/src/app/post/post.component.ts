import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postServie: PostService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler(form: NgForm) {
    const { title, content } = form.value;
    this.postServie.create(title, content).subscribe(data => {
      this.router.navigate(['/home']);
    }, err => console.error(err));
  }

}
