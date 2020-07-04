import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-news-details',
  templateUrl: './admin-news-details.page.html',
  styleUrls: ['./admin-news-details.page.scss'],
})
export class AdminNewsDetailsPage implements OnInit {

  newsForm: FormGroup;
  id = null;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      link: ['', Validators.required]
    });

    let id = this.route.snapshot.paramMap.get('id');

    if(id != 'null') {
      this.id = id;
      this.newsService.getNewsDetails(this.id).subscribe(res => {
        this.newsForm.patchValue(res);
      });
    }
  }

  async create() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    let news = this.newsForm.value;

    this.newsService.addNews(news).subscribe(
      res => {
        loading.dismiss();
        this.router.navigateByUrl('/admin/news');
      },
      async err => {
        loading.dismiss();

        let alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Failed to add News',
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  delete() {
    this.newsService.deleteNews(this.id).subscribe(res => {
      this.router.navigateByUrl('/admin/news');
    });
  }

}
