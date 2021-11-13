import { Injectable } from "@angular/core";
import {CookieService} from 'ngx-cookie-service'
@Injectable({
    providedIn:'root'
})

export class CookiesService{
    constructor(public myCookieService : CookieService){

    }

    setCookie(cookieName,cookieValue){
        this.myCookieService.set(cookieName,cookieValue)
    }
    getCookies(cookieName){
        this.myCookieService.get(cookieName)
    }
}