import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
// active="";
// ActivateLabel(){
//   this.active="active";
// }

activeIndex: number | null = null;

setActive(index: number): void {
  this.activeIndex = index;
}
}

// $("li.nav-item").on('click', function(e){
//   console.log(e.target, new Date().toString());
//   $("li.nav-item.active").removeClass('active');
//   $(this).addClass('active');
