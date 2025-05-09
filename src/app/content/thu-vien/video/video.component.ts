import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  videoList = [
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-1.jpg?t=1648701605',
      title: 'Khám phá ẩm thực đường phố Việt Nam ',
      video: 'https://youtu.be/FlRwssZYRM0?si=JpeTom10TrcU72gb',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-2.jpg?t=1648701607',
      title: 'Việt Nam - Vùng đất của những bí mật cổ xưa',
      video: 'https://youtu.be/wk4lP5t-Sw0?si=masU37e8rOrVuA7K',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-3.jpg?t=1648701605',
      title:
        '100 đô la có thể kiếm được gì ở VIỆT NAM (Quốc gia có chi phí rẻ nhất thế giới)',
      video: 'https://youtu.be/Mp-v65Fl9HM?si=mD4M6xwz9Mv4PaP5',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-4.jpg?t=1648701605',
      title: 'Những địa điểm tham quan tuyệt vời ở Việt Nam - Video Du lịch',
      video: 'https://youtu.be/Au6LqK1UH8g?si=k1r3xd37ifnMBtcv',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-8.jpg?t=1648701605',
      title: '10 Những điều bạn KHÔNG nên làm ở Việt Nam',
      video: 'https://youtu.be/OPGX05FW_58?si=wxdpiloTtYYMBjun',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-9.jpg?t=1648701605',
      title: 'Hướng dẫn Du lịch Kỳ nghỉ tại Seoul',
      video: 'https://youtu.be/sr3O7ArQTYY?si=thMW5oyQNKBXNpxO',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-91.jpg?t=1648701605',
      title: 'Hướng dẫn du lịch - Top 10 Seoul',
      video: 'https://youtu.be/_aNcrt7Qbs0?si=-iKTtX6lyOSw7o0r',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-92.jpg?t=1648701605',
      title:
        'Làm thế nào để dành 14 ngày ở Nhật Bản - Hành trình du lịch Nhật Bản',
      video: 'https://youtu.be/IuTDuvYr7f0?si=jM3XVaRsoGTGh4UZ',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-93.jpg?t=1648701605',
      title: 'Chuyến tàu một mình xuyên qua vùng nông thôn Nhật Bản',
      video: 'https://youtu.be/mLyeX0EQF10?si=Za71TjZJBk2rZK77',
    },
    {
      img: 'https://sakos.vn/wp-content/uploads/2024/09/5-13.jpg',
      title:
        'Những Cảnh Đẹp Và Kì Quan Trên Thế Giới Mà Vietnam Travel Group Đã Sưu Tầm Về Để Gửi Đến Các Bạn !!!',
      video: 'https://youtu.be/NSnkb1IAjbE?si=4kdXERaYNB4PIDe1',
    },
    {
      img: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-05/Vi%E1%BB%87t%20Nam%20l%C3%A0%20m%E1%BB%99t%20trong%20nh%E1%BB%AFng%20%C4%91i%E1%BB%83m%20%C4%91%E1%BA%BFn%20du%20l%E1%BB%8Bch%20tuy%E1%BB%87t%20v%E1%BB%9Di%20nh%E1%BA%A5t%20t%E1%BA%A1i%20ch%C3%A2u%20%C3%81.jpg',
      title: 'Trải nghiệm cuộc sống tại đồng bằng sông Cửu Long',
      video: 'https://youtu.be/cxKlw3e_kQE?si=wAEEF9oWn_IYL92a',
    },
  ];
}
