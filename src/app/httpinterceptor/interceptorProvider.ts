import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { globalInterceptor } from "./globalInterceptor";

export const httpInterceptProviders=[
    {provide:HTTP_INTERCEPTORS,useClass:globalInterceptor,multi:true},
]