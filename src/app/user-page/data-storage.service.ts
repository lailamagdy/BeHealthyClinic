import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'selenium-webdriver/http';
import * as firebase from 'firebase';




@Injectable()
export class DataStorageService{
    public products  = []; 
    // perserveSnapchot :true;


    constructor(private httpClient: HttpClient){

    }
    storeUserInfo(userForm){
        return this.httpClient.post('https://firstapp-b872b.firebaseio.com/userForm.json',userForm);
    }
    getUserInfo(){
        this.httpClient.get('https://firstapp-b872b.firebaseio.com/userForm.json').subscribe(
            (response:Response)=>{
                
                    console.log(response);

            //                  
                 
                   });
                // console.log(response['-LWFHUHmkYlrMnGrtrBW']);
            }
        }
            // (res : any[])=>{
            //     // console.log(res);
            //     this.products = res;
            //     console.log(this.products[1])  ;  

            //     } 
           
            
            // (response)=>{
            //     console.log(profiles[0]);
                // const users: []= response.json();
                
//                 response[0].forEach(res => {
//                     console.log(res);
// let i=res.p
            
//              });

               
            
            
        
 