import { Component, OnInit } from '@angular/core';
import { SWService } from '../swservices';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { IPlanet } from '../planetinterface';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { switchMap } from 'rxjs/operators/switchMap';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  model: any = {};
  searchString = new FormControl();
  selectedPlanet:IPlanet;
  emptyResults :string;
  maxpopulation:string;     
  searchCount = 0;
  
  constructor(
      private router: Router,
      private swService: SWService) { 
        if(localStorage.getItem('currentuser')== null){
          this.router.navigateByUrl('./login');
          return;
        }
        this.searchString.valueChanges.pipe(debounceTime(400),switchMap(inputVal => this.swService.getplanets(this.searchString.value))).subscribe(
          data => {
            this.searchCount++;
            
            this.selectedPlanet = null;
            if(this.searchString.value.trim()!==""){
              this.model.planets = data;
              let tmpdata = Object.assign([],data);
              if(tmpdata.length>0){
                this.maxpopulation=tmpdata.sort(function(a,b){
                  return parseInt(b.population) -parseInt(a.population);
                  })[0].population; 
              }
              
              this.emptyResults="";
            }else{
              this.model.planets = [];
            this.emptyResults="No results to display";
            }
            
          },
          error => {
            this.emptyResults="No results to display";
          });
      }

  ngOnInit() {
   
  }
  
 
  onSelect(planet){
    this.selectedPlanet = planet;
  }
  logout(){
    localStorage.removeItem('currentuser');
    this.router.navigateByUrl('./login');
  }
}
