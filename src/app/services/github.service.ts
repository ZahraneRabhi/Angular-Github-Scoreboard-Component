import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {}

  getData(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  getRepoCommits(reponame: string, username: string) {
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/commits`);
  }

  getRepos(username: string) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }  

  getStars(reponame: string, username: string) {
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/stargazers`);
  }
}
