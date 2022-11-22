import { AfterViewInit, Component, OnInit , ViewChild , ChangeDetectorRef} from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'depart', 'role', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: RestapiService, private dialog: MatDialog) { }
  myArray : any ; 
  ngOnInit(): void {
    this.getAllPeople();
    this.afficheAllUsers(); 
   
  }
  afficheAllUsers(){
    this.api.getAllUsers().subscribe(
      data => { this.myArray = data ; 
        console.log(this.myArray) ;} ) ;
    
  }
 
  getAllPeople(){
    this.api.getAllUsers()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  editPerson(user: any){
    this.dialog.open(DialogBoxComponent, {
      width:'30%',
      data:user
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getAllPeople()
      }
    })
  }
  deletePerson(id: number){
    this.api.DeleteUsers(id)
    .subscribe({
      next:()=>{
        alert("Product Deleted Successfully")
        this.getAllPeople()
      }, error:(error)=>{
        alert(error)
      }
      })
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(action : string ,obj : any ) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data:obj
    });

    dialogRef.afterClosed().subscribe((result: { event: string; data: any; }) => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj : any){
    var d = new Date();

    this.myArray.push({
      id:row_obj.id,
      name:row_obj.name,
      depart:row_obj.depart,
      role:row_obj.role
    });
    this.myArray = [...this.myArray];
    this.myArray.renderRows();
    this.api.CreatelUsers({ id : row_obj.id , 
      name : row_obj.name , 
      depart: row_obj.departt , 
     role :row_obj.role ,  });
  }

  updateRowData(row_obj : any ){
    this.myArray = this.myArray.filter((value : any ,key : any )=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.depart = row_obj.depart;
        value.role = row_obj.role;
      }
      return true;
    });
  }
  deleteRowData(row_obj : any ){
    this.myArray = this.myArray.filter((value : any ,key : any)=>{
      return value.id != row_obj.id;
    });
  }

}