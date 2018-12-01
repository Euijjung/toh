import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // 리터럴(문자그대로의) 객체로 객체 생성 자바스크립트에서는
  // 리터럴 객체로 객체를 생성한다.
  /*hero: Hero = {
    id: 1,
    name: 'WinStorm'
  }*/

  hero: Hero;
  isSpecial = false;
  heroes = HEROES;

  constructor() {
    // new로 객체 생성
    this.hero = new Hero();
    this.hero.id = 1;
    this.hero.name = 'WinStorm';
  }

  ngOnInit() {
  }

  onSave(e) {
    console.log(e);
    alert('hi');
  } /*onSave 라는 메소드 생성*/

}
