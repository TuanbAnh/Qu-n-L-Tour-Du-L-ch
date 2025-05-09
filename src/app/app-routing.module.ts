import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './content/trang-chu/main.component';
import { TourDuLichComponent } from './content/tour-du-lich/tour-du-lich.component';
import { TrongNuocComponent } from './content/tour-du-lich/trong-nuoc/trong-nuoc.component';
import { NgoaiNuocComponent } from './content/tour-du-lich/ngoai-nuoc/ngoai-nuoc.component';
import { TinTucComponent } from './content/tin-tuc/tin-tuc.component';
import { GioiThieuComponent } from './content/gioi-thieu/gioi-thieu.component';
import { TuyenDungComponent } from './content/gioi-thieu/tuyen-dung/tuyen-dung.component';
import { VietnamTravelComponent } from './content/gioi-thieu/vietnam-travel/vietnam-travel.component';
import { LienHeComponent } from './content/lien-he/lien-he.component';
import { TraiNghiemKh2Component } from './content/thu-vien/trai-nghiem-kh/trai-nghiem-kh2/trai-nghiem-kh2.component';
import { TraiNghiemKhComponent } from './content/thu-vien/trai-nghiem-kh/trai-nghiem-kh.component';
import { VideoComponent } from './content/thu-vien/video/video.component';
import { Video2Component } from './content/thu-vien/video/video2/video2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },

  // Tour Du Lịch
  { path: 'tour-du-lich', component: TourDuLichComponent },
  { path: 'trong-nuoc', component: TrongNuocComponent },
  { path: 'ngoai-nuoc', component: NgoaiNuocComponent },

  // Tin Tức
  { path: 'tin-tuc', component: TinTucComponent },

  // Thư Viện
  {
    path: 'thu-vien',
    redirectTo: '/trai-nghiem-khach-hang',
    pathMatch: 'full',
  },
  { path: 'trai-nghiem-khach-hang', component: TraiNghiemKhComponent },
  { path: 'video', component: VideoComponent },
  { path: 'video2', component: Video2Component },

  // Liên Hệ
  { path: 'lien-he', component: LienHeComponent },

  // Giới Thiệu
  { path: 'gioi-thieu', component: GioiThieuComponent },
  { path: 'tuyen-dung', component: TuyenDungComponent },
  { path: 'vietnam-travel', component: VietnamTravelComponent },

  { path: ':slug', component: TraiNghiemKh2Component },

  // Luôn để wildcard route ở cuối cùng
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // <== Thêm dòng này để cuộn lên đầu trang khi chuyển routerLink
      anchorScrolling: 'enabled', // (nếu dùng thẻ #id để cuộn tới vùng nào đó)
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
