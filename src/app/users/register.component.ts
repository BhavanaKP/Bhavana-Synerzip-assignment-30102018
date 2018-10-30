import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alerts: AlertsService
    ) { }

    ngOnInit() {
        // Add the delay after which alert hides out
        // 0 - It won't hide at all
        // number greater than 0 will hide it after the mentioned seconds
        this.alerts.setDefaults('timeout', 5);
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    console.log('Registration successful', true);
                    this.alerts.setMessage('You have registered successfully', 'success');
                    this.router.navigate(['/users/login']);
                },
                error => {
                    console.log("ERROR-" + error);
                    this.alerts.setMessage('Please try with different username', 'error');
                    this.loading = false;
                });
    }
}