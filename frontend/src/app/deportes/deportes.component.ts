import { Component, OnInit } from '@angular/core';
import { DeportesProvider } from 'src/providers/DeportesProvider';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {

  listaDeportes: any = [];

  constructor(private deportesProvider: DeportesProvider) { 
    this.getDeportes();
  }

  ngOnInit(): void {
  }

 getDeportes(){
   this.deportesProvider.getDeportes().subscribe(data => {

     this.listaDeportes = data;
  })
}

}
