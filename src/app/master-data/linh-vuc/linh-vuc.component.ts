import { Component, OnInit } from '@angular/core';
import { LinhVuc } from 'src/app/_models/LinhVuc';
import {LinhVucService} from 'src/app/_Service/linhvuc.service' ;
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-linh-vuc',
  templateUrl: './linh-vuc.component.html',
  styleUrls: ['./linh-vuc.component.css']
})
export class LinhVucComponent implements OnInit {
  public Stt:string =""
  datas:LinhVuc[]=[];
  LinhvucService: any;
  searchText: string="";
  constructor(private linhvucService: LinhVucService) {
   }

  ngOnInit(): void {
    this.searchText;
    this.getAll();
  }

  Modaledit(id: number): void {
    let modal = new bootstrap.Modal(<HTMLElement>document.getElementById('edit_'+id),
    {
      keyboard: false,
    })
    modal.show();
  }

  Modaldelete(id: number): void {
    let modal = new bootstrap.Modal(<HTMLElement>document.getElementById('delete_'+id),
    {
      keyboard: false,
    })
    modal.show();
  }

  getAll(){
    this.linhvucService.getAll().subscribe((res:any)=>{
      this.datas = res;
    console.log(this.datas)
    })
  }

  Add(Ma: string , Ten:string , Mota:string, Trangthai:string ):void {
    Ma =Ma.trim();
    Ten =Ten.trim();
    Mota =Mota.trim();

    const newLinhvuc:LinhVuc = new LinhVuc();
    newLinhvuc.mA_LINH_VUC= Ma;
    newLinhvuc.teN_LINH_VUC= Ten;
    newLinhvuc.mO_TA= Mota;
    newLinhvuc.tranG_THAI= Number(Trangthai);

    this.linhvucService.Creat(newLinhvuc).subscribe(data => {
      console.log(data);
      },error => {
      console.log(error.status);
      if(error.status == 200 ){
        window.alert("Thêm mới thành công")
      }else{
        window.alert("Mã Lĩnh Vực trùng")
      }
      })
  }

  Edit(Id:number ,Ma: string , Ten:string , Mota:string, Trangthai:string ):void {

    Ma =Ma.trim();
    Ten =Ten.trim();
    Mota =Mota.trim();
    const ID =Number(this.datas[Id].id);
    const newLinhvuc:LinhVuc = new LinhVuc();
    newLinhvuc.id= ID;
    newLinhvuc.mA_LINH_VUC= Ma;
    newLinhvuc.teN_LINH_VUC= Ten;
    newLinhvuc.mO_TA= Mota;
    newLinhvuc.tranG_THAI= Number(Trangthai);
    // console.log(newLinhvuc)
    // window.alert("Sửa thành công")


    this.linhvucService.Edit(ID, newLinhvuc).subscribe(
      (data: any) => {
        console.log(data);
     },status => {
      console.log(status.status);
      if(status.status == 200 ){
        window.alert("Sửa thành công")
      }else{
        window.alert("Có lỗi sảy ra")
      }
      })
  }

  Delete(id: number): void {
    const ID = Number(this.datas[id].id);
    this.linhvucService.Delete(ID).subscribe(
    (data: any) => {
      window.location.href = "/home/linh-vuc";
    },status => {
     console.log(status.status);
     if(status.status == 404 ){
      window.alert("có lỗi sảy ra");
      window.location.href = "/home/linh-vuc";
     }

     })
  }
  Search(){
    this.datas = this.datas.filter(res =>{
      return res.mA_LINH_VUC?.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
    } )
  }
  test(item:any){
    console.log(item);
    // this.linhvucService.Delete(ID).subscribe(
    // (data: any) => {
    //   window.location.href = "/home/linh-vuc";
    // },status => {
    //  console.log(status.status);
    //  if(status.status == 404 ){
    //   window.alert("có lỗi sảy ra");
    //   window.location.href = "/home/linh-vuc";
    //  }

    //  })
  }
}
