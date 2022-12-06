import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //   if (req.url === '/api/company')
    console.log('Request is on its way');
    // console.log(req.url);
    return next.handle(req);
  }
}
