import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card';

  validateNumber (event: KeyboardEvent) {
    const key = event.keyCode;
    if(key > 31 && (key < 48 || key > 57)){
      return false;
    }
    return true;
  }

  // onKeyUp(event, box){
    onKeyUp(event,boxInput : HTMLInputElement){
      let length = boxInput.value.length ; //this will have the length of the text entered in the input box
      console.log("length===",length, "event===", event);
      if(length === 4 || event.clipboardData){
      this.keytab(event,boxInput);
      }
      if(length === 0){
        this.keytab(event, boxInput)
      }
    }
  // }

  keytab(event, boxInput : HTMLInputElement){
    let length = boxInput.value.length ; 
    if(length === 4 || event.clipboardData)
    
    {console.log("event===",event,"length===", length); 
      let nextInput = event.srcElement.nextElementSibling; // get the sibling element

    var target = event.target || event.srcElement;
    var id = target.id
    console.log(id.maxlength); // prints undefined

    if(nextInput == null)  // check the maxLength from here
        return;
    else
        nextInput.focus();   // focus if not null}
  }else{
    let prevInput = event.srcElement.previousElementSibling;

    var target = event.target || event.srcElement;
    var id = target.id;
    if(prevInput == null)
    return;
      else
      prevInput.focus();

  }
}
}