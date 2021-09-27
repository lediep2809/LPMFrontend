import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first  } from 'rxjs/operators';
import { UsersService } from '../_Service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup ;
    loading = false;
    submitted = false;
    returnUrl!: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,

    ) {}
    set(key: string, data: any): void {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['Admin', Validators.required],
            password: ['Admin', Validators.required]
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // reset alerts on submit

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.usersService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  setTimeout(function() {}, 100);
                this.router.navigate(["/home/linh-vuc"]);
                },
                () => {
                    this.loading = false;
                });
    }
}
