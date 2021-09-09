import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {

  populateusers(users:any){
    let api_data = "";
        for(let user of users){
            api_data += `<tr><td>${user.id}</td><td>${user.login}</td><td>${user.type}</td><td>${user.site_admin}</td><td>${user.node_id}</td></tr>`;
        }
        
        let one =  document.getElementById("result")
        let tr = document.createElement("tr");
        
      
        tr.innerHTML = api_data
        one?.appendChild(tr);

        // result.innerHTML = html_data
    
  }
  
  fetchdetails(){
    fetch('https://api.github.com/users').then(resp => resp.json()).then(data => this.populateusers(data));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
