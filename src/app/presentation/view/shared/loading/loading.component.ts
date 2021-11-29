import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/infra/http_interceptor/loading/loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(private loaderService: LoadingService){}

  public loading: Subject<boolean> = this.loaderService.isLoading;


}
