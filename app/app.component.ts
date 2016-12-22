import { Component } from 'angular2/core'
import { CourseComponent } from './courses.component'
import { TutorComponent } from './tutor.component'

@Component({
    selector: 'my-app',
    template: `<h2>Welcome guys</h2>
    <courses></courses>
    <tutor></tutor>
    `,
    directives:[CourseComponent,TutorComponent]
})

export class AppComponent{
    
}