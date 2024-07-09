import { Component } from '@angular/core';
import { MasterService } from '../../../../components/services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  dropdownVisible: boolean = false;
  userDetails: any; // Property to store user details

  constructor(private masterService: MasterService, private router: Router) { }

  ngOnInit(): void {
    this.getData(); // Fetch user details on component initialization
  }
  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = true;
  }

  getData(): void {
    this.masterService.getUserDetails().subscribe(
      details => {
        this.userDetails = details; // Store user details
      },
      error => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  logout(): void {
    this.masterService.logout();
    this.router.navigate(['/']); // Navigate to home page after logout
  }
}
