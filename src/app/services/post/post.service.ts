import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  findPosts(start: number, limit:number) {
    return this.http.get(environment.hostApiPosts + `?_start=${start}&_limit=${limit}`).pipe(
      map((response: any) => {
        return Array.from(response).map((post: any) => {
          let _post: IPost = {
            id: post['id'],
            titulo: post['title'],
            corpo: post['body'],
            //TODO: TROCAR POR NOME AUTOR
            autor: 'Robson',
          };
          return _post;
        });
      })
    );
  }
}
