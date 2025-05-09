import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LightboxModule } from 'ngx-lightbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './content/componentService/search/search.component';
import { GioiThieuComponent } from './content/gioi-thieu/gioi-thieu.component';
import { TuyenDungComponent } from './content/gioi-thieu/tuyen-dung/tuyen-dung.component';
import { VietnamTravelComponent } from './content/gioi-thieu/vietnam-travel/vietnam-travel.component';
import { LienHeComponent } from './content/lien-he/lien-he.component';
import { CategoryComponent } from './content/testPagination/category/category.component';
import { DataTableComponent } from './content/testPagination/data-table/data-table.component';
import { PaginationComponent } from './content/testPagination/pagination/pagination.component';
import { PhanTrangComponent } from './content/testPagination/phan-trang/phan-trang.component';
import { ProductComponent } from './content/testPagination/product/product.component';
// import { TourListComponent } from './content/testPagination/tour-list/tour-list.component';
import { ThuVienComponent } from './content/thu-vien/thu-vien.component';
import { TraiNghiemKhComponent } from './content/thu-vien/trai-nghiem-kh/trai-nghiem-kh.component';
import { TraiNghiemKh2Component } from './content/thu-vien/trai-nghiem-kh/trai-nghiem-kh2/trai-nghiem-kh2.component';
import { VideoComponent } from './content/thu-vien/video/video.component';
import { Video2Component } from './content/thu-vien/video/video2/video2.component';
import { TinTucComponent } from './content/tin-tuc/tin-tuc.component';
import { NgoaiNuocComponent } from './content/tour-du-lich/ngoai-nuoc/ngoai-nuoc.component';
import { TourDuLichComponent } from './content/tour-du-lich/tour-du-lich.component';
import { TrongNuocComponent } from './content/tour-du-lich/trong-nuoc/trong-nuoc.component';
import { MainComponent } from './content/trang-chu/main.component';
import { SlideComponent } from './content/trang-chu/page1SlideHome/slide.component';
import { Page2Component } from './content/trang-chu/page2TourHot/page2.component';
import { Page3TourNewComponent } from './content/trang-chu/page3TourNew/page3-tour-new.component';
import { Page4TourNewComponent } from './content/trang-chu/page4-video/page4-tour-new.component';
import { Page5TourNewComponent } from './content/trang-chu/page5-tin-tuc/page5-tour-new.component';
import { Page6FooterComponent } from './content/trang-chu/page6-footer/page6-footer.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginationService } from './service/pagination.service';

import { SliderAlbumComponent } from './content/testPagination/slider-album/slider-album.component';

import { TourSliderComponent } from './content/testPagination/tour-slider/tour-slider.component';
import { TourListComponent } from './content/testPagination/tour-list/tour-list.component';
import { NewsContentComponent } from './content/testPagination/news-content/news-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SlideComponent,
    Page2Component,
    Page3TourNewComponent,
    Page4TourNewComponent,
    Page5TourNewComponent,
    Page6FooterComponent,
    NgoaiNuocComponent,
    TourDuLichComponent,
    PaginationComponent,
    DataTableComponent,
    CategoryComponent,

    ProductComponent,
    // TourListComponent,
    SearchComponent,
    TrongNuocComponent,
    TinTucComponent,
    PhanTrangComponent,
    LienHeComponent,
    GioiThieuComponent,
    VietnamTravelComponent,
    TuyenDungComponent,
    ThuVienComponent,
    TraiNghiemKhComponent,
    TraiNghiemKh2Component,
    VideoComponent,
    Video2Component,

    SliderAlbumComponent,
    TourSliderComponent,

    TourListComponent,
      NewsContentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightboxModule,
    RouterModule,
  ],
  providers: [PaginationService], // Service
  bootstrap: [AppComponent],
  exports: [
    // TourListComponent, // để dùng lại ở module khác
  ],
})
export class AppModule {}
