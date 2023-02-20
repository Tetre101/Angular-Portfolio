import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {

// class Project {
//   name: string;
//   link: string;
//   githubLink: string;
//   description: string;
// }

myProject = [
  {
    name: 'Guess-A-number-Js-Game',
    link: 'https://tetre101.github.io/Guess-A-number-Js-Game/',
    githubLink: 'https://github.com/Tetre101/Guess-A-number-Js-Game',
    description: 'Guess a number game using javascript',
  },
  {
    name: 'Roll-A-Dice-Game',
    link: 'https://tetre101.github.io/Roll-A-Dice-Game/',
    githubLink: 'https://github.com/Tetre101/Roll-A-Dice-Game',
    description: 'Roll a dice game using javascript',
  },
];

notify = () => {
  alert('The page will load shortly')
}

ngOnInit() {
  this.notify()
}
}