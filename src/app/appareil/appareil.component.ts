import { Component, OnInit ,Input} from '@angular/core';
import { AppareilService } from '.././services/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

@Input() appareilName;
@Input() appareilStatus:string ='éteint';
@Input() index:number;

  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
  }

  getStatus():string{
    return this.appareilStatus;
  }
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
      }
    }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.index);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.index);
  }
}
