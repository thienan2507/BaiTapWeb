import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string='Nguyễn Thị Thiên Ân'
  public email:string='ngthienan25@gmail.com'
  public nameid:string='nameid'
  public emailid:string='emailid'
  public isDisabled:boolean=true
  public hello:string="Hey! how is going?"
}
