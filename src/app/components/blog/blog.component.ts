import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  noticias = [
    {title:"Un algoritmo cerebral rige la toma de decisiones",
      image:"https://tendencias21.levante-emv.com/wp-content/uploads/2021/12/decisiones-geometria.jpg",
      text:"Un algoritmo común que gobierna la toma de decisiones entre especies sugiere que los principios geométricos fundamentales pueden explicar cómo y por qué los animales se mueven de la forma en que lo hacen.",
      date:"2023-04-20"},

    {title:"Prueban en Marte un nuevo sistema de comunicación entre naves espaciales",
      image:"https://tendencias21.levante-emv.com/wp-content/uploads/2021/12/marte-comunicacion-portada.jpg",
      text:"La nave Mars Express de la ESA y el rover chino Zhurong Mars concretaron en noviembre una serie de pruebas experimentales en Marte: trabajan en el desarrollo de un nuevo sistema de comunicación que podría dinamizar el flujo de datos entre las misiones espaciales y la Tierra.",
      date:"2023-01-29"},
  ]

  noticia = {title:"",
  image:"",
  text:"",
  date:""}

  constructor() { }

  ngOnInit(): void {
  }

  agegarNoticia(){
    if(this.noticia.title == "" || this.noticia.image == "" || this.noticia.text == "" || this.noticia.date == ""){
      alert("Existe uno o varios campos vacíos");
    }else{
      this.noticias.push(this.noticia);
      this.noticia = {title:"",
      image:"",
      text:"",
      date:""}
    }

  }

}
