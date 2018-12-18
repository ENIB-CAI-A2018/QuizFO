import { Component } from '@angular/core';
import {QuizeService} from '../../services/quize.service';
import {Quize} from '../../../quize';
import { Cour } from '../../Cour';

@Component({
  moduleId: module.id,
  selector: 'quize',
  templateUrl: 'quizec.component.html'
})

export class QuizeComponentc { 
    cours: Cour[];
    nom: string;
    description: string;
    constructor(private quizeService:QuizeService){
      this.quizeService.getQuize()
          .subscribe(tasks => {
              this.cours = tasks;
          });
  }
  addCour(){
   console.log("je suis toto");
   console.log(this.nom);
    var newCour = {
        nom: this.nom,
        description: this.description
    }
    this.quizeService.addCour(newCour)
        .subscribe(task => {
            this.cours.push(task);
            this.nom = '';
            this.description = '';
        });
    }
    ajouterquize(){
      console.log("Ajouter Quize");
      var CourUpdate = {
        nom: this.nom,
        description: this.description
    }

    
  }
}