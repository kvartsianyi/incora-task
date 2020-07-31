import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {FeedModel} from '../../models/Feed.model';
import {LoginService} from '../../services/login.service';
import {FeedService} from '../../services/feed.service';
import {URL_REGEXP} from '../../constants/regexp';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feedForm: FormGroup;
  userFeeds: [FeedModel];
  feedItems;

  isEditFeedVisibile = false;
  isAddUserFeedInvalid = false;

  editFeedForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient,
    private loginService: LoginService,
    private feedService: FeedService
  ) {
    this.feedForm = formBuilder.group({
      selectFeed: ['']
    });

    this.editFeedForm = formBuilder.group({
      feedName: ['', [Validators.minLength(3), Validators.maxLength(60)]],
      feedLink: ['', [Validators.pattern(URL_REGEXP)]]
    });
  }

  ngOnInit(): void {
    this.feedService.getUserFeeds().subscribe(data => {
      this.userFeeds = data as [FeedModel];

      const [defaultFeed] = this.userFeeds;

      this.feedForm.setValue({selectFeed: defaultFeed.feedLink});
      this.changeFeed();
    }, error => {
      if (error) {
        console.log(error);
      }
    });

  }

  logout() {
    this.loginService.logout();

    this.router.navigate(['']);
  }

  changeFeed() {
    const {selectFeed} = this.feedForm.value;

    this.feedService.getArticlesFromFeed(selectFeed).subscribe(data => {
      this.feedItems = data.items;
    }, error => {
      if (error) {
        console.log(error);
      }
    });
  }

  deleteFeed(feedId) {
    this.feedService.deleteUserFeed(feedId).subscribe(data => {

      this.feedService.getUserFeeds().subscribe(userFeeds => {
        this.userFeeds = userFeeds as [FeedModel];
      });

    }, error => {
      if (error) {
        console.log(error);
      }
    });
  }

  showEditFeeds() {
    this.isEditFeedVisibile = !this.isEditFeedVisibile;
  }

  addUserFeed() {
    const userFeed = this.editFeedForm.value;

    this.isAddUserFeedInvalid = this.editFeedForm.invalid;

    if (this.isAddUserFeedInvalid) {
      return;
    }

    this.feedService.addUserFeed(userFeed).subscribe(data => {

      this.feedService.getUserFeeds().subscribe(userFeeds => {
        this.userFeeds = userFeeds as [FeedModel];
      });
    }, error => {
      if (error) {
        this.isAddUserFeedInvalid = true;
        console.log(error);
      }
    });
  }
}


