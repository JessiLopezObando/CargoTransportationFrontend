import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-information',
  templateUrl: './label-information.component.html',
  styleUrls: ['./label-information.component.scss']
})
export class LabelInformationComponent {

  @Input() label: string = '';
  @Input() information: string = '';

}
