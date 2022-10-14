import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pet-race',
  templateUrl: './pet-race.component.html',
  styleUrls: ['./pet-race.component.css'],
})
export class PetRaceComponent implements OnInit {
  data: any;
  showText: boolean = false;
  image: any;
  selectedValue: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://dog.ceo/api/breeds/list').subscribe((data) => {
      this.data = data;

      this.data = this.data.message;
    });
  }

  onChange(e: any) {
    this.http
      .get(`https://dog.ceo/api/breed/${e.target.value}/images`)
      .subscribe((data) => {
        this.image = data;

        this.image = this.image.message[0];
      });

    this.showText = true;

    this.selectedValue = e.target.value;
  }
}
