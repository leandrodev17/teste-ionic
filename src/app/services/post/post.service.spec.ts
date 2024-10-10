import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { environment } from 'src/environments/environment';
import { PostService } from './post.service';
import { TestBed } from '@angular/core/testing';


describe('PostService', () => {
    let service: PostService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostService);
      });
    
      it('should be created', () => {
        expect(service).toBeTruthy();
      });

      it("Regatar dados da api de posts", async () => {
        const result = await service.findPosts(0,10);
        
        expect(result).toEqual(new Observable<IPost[]>);
      });
});