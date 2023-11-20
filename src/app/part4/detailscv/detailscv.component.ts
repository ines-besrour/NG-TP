import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CvService } from '../service/cv.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-detailscv',
  templateUrl: './detailscv.component.html',
  styleUrls: ['./detailscv.component.css']
})
export class DetailscvComponent implements OnInit {

  @Input() id!: number
  showedCv! : Cv | undefined
  
  constructor(private route: ActivatedRoute, private cvService : CvService) {
    this.showedCv = cvService.getCvById(this.id)!;
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!
    })

    this.showedCv = this.cvService.getCvById(this.id);
  }
}