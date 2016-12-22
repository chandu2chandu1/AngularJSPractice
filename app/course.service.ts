import { Injectable } from 'angular2/core'

@Injectable()
export class CourseService{
    getCourses():String[] {
        return ["Course 1", "Course 2", "Course 3"];
    }
}