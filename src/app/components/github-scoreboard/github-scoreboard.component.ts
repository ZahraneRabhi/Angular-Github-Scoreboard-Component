import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-scoreboard',
  templateUrl: './github-scoreboard.component.html',
  styleUrls: ['./github-scoreboard.component.css']
})

export class GithubScoreboardComponent {
  githubData: any;
  avatarUrl: string = "";
  repositories: any;
  commits: any = [];
  stargazers: any = [];
  profileName: string = "";
  
  readonly userName: string = "ZAHRANERABHI" // your-github-user-name
  readonly repoName: string = "twitter-api" // your-github-repo-name

  constructor(private githubService: GithubService) {}

  getRepos() {
    this.githubService.getRepos(this.userName).subscribe((data: any) => {
      this.repositories = data;
      this.getTotalCommits();
      this.getStars();
    });
  }

  getRepoCommits() {
    this.githubService.getRepoCommits(this.repoName, this.userName).subscribe((data: any) => {
      this.commits = data;
    });
  }

  getStars() {
    if (this.repositories) {
      this.stargazers = []; 
      this.repositories.forEach((repo: any) => {
        this.githubService.getStars(repo.name, this.userName).subscribe((data: any) => {
          if (data) {
            this.stargazers = [...this.stargazers, ...data];
          }
        });
      });
    }
  }
  
  getTotalCommits() {
    if (this.repositories) {
      this.repositories.forEach((repo: any) => {
        this.githubService.getRepoCommits(repo.name, this.userName).subscribe((data: any) => {
          if (data) {
            this.commits = [...this.commits, ...data];
          }
        });
      });
    }
  }
  
  ngOnInit() {
    this.githubService.getData(this.userName).subscribe((data: any) => {
      this.githubData = data;
      this.avatarUrl = data.avatar_url;
      this.profileName = data.login;
    });
    this.getRepos();
  }
}
