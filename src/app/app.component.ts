import { Component , ViewChild} from '@angular/core';
import { User } from './_models/User';
import { UsersService } from './_Service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LPMfrontend';

}
