import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import * as colorsJson from '../../data/heliverse_mock_data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'heliverse';
  list = colorsJson as Array<Item>;
  userData: any;
  first = 0;
  rows = 20;
  searchTerm = '';
  paginatedData: any;
  filteredValue!: any[];

  domain: any[] = [];
  gender: any[] = [];
  available: any[] = [];
  id: any;
  selectedUser: any[] = [];
  selectedHome = true;

  ngOnInit(): void {
    this.userData = Object.values(this.list).map((data: any) => ({
      ...data,
      selected: false,
    }));
  
    this.paginatedData = this.userData.slice(
      this.first,
      this.first + this.rows
    );

    this.filteredValue = [
      {
        label: 'Domain',
        value: 'domain',
        items: [
          { label: 'Sales', value: 'Sales' },
          { label: 'Finance', value: 'Finance' },
          { label: 'Marketing', value: 'Marketing' },
          { label: 'IT', value: 'IT' },
          { label: 'Management', value: 'Management' },
          { label: 'UI Designing', value: 'UI Designing' },
          { label: 'Business Development', value: 'Business Development' },
        ],
      },
      {
        label: 'Gender',
        value: 'gender',
        items: [
          { label: 'Female', value: 'Female' },
          { label: 'Male', value: 'Male' },
          { label: 'Agender', value: 'Agender' },
          { label: 'Bigender', value: 'Bigender' },
          { label: 'Polygender', value: 'Polygender' },
          { label: 'Non-binary', value: 'Non-binary' },
          { label: 'Genderfluid', value: 'Genderfluid' },
          { label: 'Genderqueer', value: 'Genderqueer' },
        ],
      },
      {
        label: 'Available',
        value: 'available',
        items: [{ label: 'True', value: true }],
      },
    ];
  }

  searchValue(event: any) {
    this.searchTerm = event;
  }

  filterData(event: any, label: string) {
    if (event.target.checked) {
      if (label === 'Domain') {
        this.domain.push(event.target.value);
      } else if (label === 'Gender') {
        this.gender.push(event.target.value);
      } else if (label === 'Available') {
        this.available.push(true);
      }
    } else {
      if (label === 'Domain') {
        const index = this.domain.findIndex(
          (data: any) => data === event.target.value
        );
        this.domain.splice(index, 1);
      } else if (label === 'Gender') {
        const index = this.gender.findIndex(
          (data: any) => data === event.target.value
        );
        this.gender.splice(index, 1);
      } else if (label === 'Available') {
        this.available = [];
      }
    }

    if (
      this.domain.length === 0 &&
      this.gender.length === 0 &&
      this.available.length === 0
    ) {
      this.userData = Object.values(this.list).map((data: any) => ({
        ...data,
        selected: false,
      }));
    } else {
      this.userData = Object.values(this.list)
        .map((data: any) => ({
          ...data,
          selected: false,
        }))
        .filter((item: any) => {
          const domainCondition =
            this.domain.length === 0 ||
            this.domain.some((value) => item.domain?.includes(value));
          const genderCondition =
            this.gender.length === 0 ||
            this.gender.some((value) => item.gender?.includes(value));
          const availableCondition =
            this.available.length === 0 ||
            this.available.some((value) => item.available === true);

          return domainCondition && genderCondition && availableCondition;
        });

      this.paginatedData = this.userData.slice(
        this.first,
        this.first + this.rows
      );
    }

    console.log(this.domain);
    console.log(this.gender);
    console.log(this.available);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.paginatedData = this.userData.slice(
      this.first,
      this.rows + this.first
    );
  }
  onClick(event: any) {
    const index = this.userData.findIndex((data: any) => data.id === event);

    if (index !== -1) {
      if (this.userData[index].available && !this.userData[index].selected) {
        this.userData[index].selected = true;
        this.selectedUser.push(this.userData[index]);
      } else {
        this.userData[index].selected = false;
        const indexInSelected = this.selectedUser.findIndex(
          (data: any) => data.id === event
        );
        if (indexInSelected !== -1) {
          this.selectedUser.splice(indexInSelected, 1);
        }
      }

      console.log(this.selectedUser);
    } else {
      console.error(`User with id ${event} not found in userData.`);
    }
  }

  backClick() {
    this.selectedHome =! this.selectedHome;
  }

  onSubmit() {
    console.log('button clicked');
    this.selectedHome = !this.selectedHome;
  }
}
