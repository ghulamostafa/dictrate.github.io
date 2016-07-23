import { Component } from '@angular/core';

import { WordService } from './word/word.service';
import { UserService } from './user/user.service';
import { WordComponent } from './word/word.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives:[WordComponent],
    providers: [WordService, UserService]
})
export class AppComponent { }
