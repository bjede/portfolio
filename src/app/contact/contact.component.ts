import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  send() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let message = (<HTMLInputElement>document.getElementById('text-area')).value;

    let form = new FormData();
    form.append('name', name);
    form.append('message', message);

    fetch('http://aldin-bijedic.developerakademie.net/portfolio/send_mail.php', {
      method: 'POST',
      body: form,
    })
      .then(response => response)
      .then(data => {
        console.log('Success:', data);
        (<HTMLInputElement>document.getElementById('name')).value = '';
        (<HTMLInputElement>document.getElementById('email')).value = '';
        (<HTMLInputElement>document.getElementById('text-area')).value = '';
        this.showSendMessage();
      });
  }

  showSendMessage() {
    (<HTMLInputElement>document.getElementById('send-btn')).textContent = 'Email sent successfully.';
    (<HTMLElement>document.getElementById('send-btn')).classList.add('send');

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('send-btn')).textContent = 'Send message';
      (<HTMLElement>document.getElementById('send-btn')).classList.remove('send');
    }, 5000);
  }

}
