import { Component } from 'angular2/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    templateUrl: './app/view/courses.html' ,
    providers:[CourseService]
})
export class CourseComponent{
    name: String = "This is Chandra's first ang2 Program";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}