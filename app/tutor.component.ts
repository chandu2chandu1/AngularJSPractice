import { Component } from 'angular2/core'

@Component({
    selector: 'tutor',
    template: `<h2>Courses Goes here</h2>
            <ul>
                <li *ngFor='let tutor of tutorList'>{{ tutor }}</li>
            </ul>`    
})

export class TutorComponent{
    tutorList = ["Tutor 1", "Tutor 2", "Tutor 3"];
}