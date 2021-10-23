import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayradiobutton',
  templateUrl: './arrayradiobutton.page.html',
  styleUrls: ['./arrayradiobutton.page.scss'],
})
export class ArrayradiobuttonPage implements OnInit {

  title: string = "Check Box Task";
  
public form = [
  {val: 'Pepperoni', pic: 'assets/news1.jpg', isChecked: true },
  {val: 'Sausage', pic: 'assets/favicon.png', isChecked: true  },
  {val: 'Mushroom', pic: 'assets/nugget.jpg', isChecked: true },
  {val: 'Sausage', pic: 'assets/favicon.png', isChecked: true  },
  {val: 'Mushroom', pic: 'assets/nugget.jpg', isChecked: true },
  {val: 'Sausage', pic: 'assets/favicon.png', isChecked: true  },
  {val: 'Mushroom', pic: 'assets/nugget.jpg', isChecked: true },
];


  constructor() { }

  ngOnInit() {
  }

}

