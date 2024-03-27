import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  accessToken: any;
  constructor(
    private authService: SocialAuthService,

    private http: HttpClient
  ) {}
  ngAfterViewInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user);

      if (user != null) {
        // this.getAccessToken();
        this.getGoogleContacts(user);
      }
    });
  }

  getGoogleContacts(user: any): void {
    const headers = {
      Authorization: `Bearer ${user.idToken}`,
    };

    this.http
      .get('https://people.googleapis.com/v1/people/me/connections', {
        headers,
      })
      .subscribe(
        (response: any) => {
          console.log(response.connections);
          // Handle contacts data here
        },
        (error) => {
          console.error('Error fetching contacts:', error);
        }
      );
  }
}
