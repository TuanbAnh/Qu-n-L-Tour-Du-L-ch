import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class infoTour {
  constructor() {}

  // video
  videoList = [
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-1.jpg?t=1648701605',
      title: 'Khám phá ẩm thực đường phố Việt Nam ',
      video: 'https://www.youtube.com/embed/FlRwssZYRM0',
      category: 'trong nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-2.jpg?t=1648701607',
      title: 'Việt Nam - Vùng đất của những bí mật cổ xưa',
      video: 'https://www.youtube.com/embed/wk4lP5t-Sw0',
      category: 'trong nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-3.jpg?t=1648701605',
      title:
        '100 đô la có thể kiếm được gì ở VIỆT NAM (Quốc gia có chi phí rẻ nhất thế giới)',
      video: 'https://www.youtube.com/embed/Mp-v65Fl9HM',
      category: 'trong nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-4.jpg?t=1648701605',
      title: 'Những địa điểm tham quan tuyệt vời ở Việt Nam - Video Du lịch',
      video: 'https://www.youtube.com/embed/Au6LqK1UH8g',
      category: 'trong nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-8.jpg?t=1648701605',
      title: '10 Những điều bạn KHÔNG nên làm ở Việt Nam',
      video: 'https://www.youtube.com/embed/OPGX05FW_58',
      category: 'trong nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-9.jpg?t=1648701605',
      title: 'Hướng dẫn Du lịch Kỳ nghỉ tại Seoul',
      video: 'https://www.youtube.com/embed/sr3O7ArQTYY',
      category: 'ngoài nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-91.jpg?t=1648701605',
      title: 'Hướng dẫn du lịch - Top 10 Seoul',
      video: 'https://www.youtube.com/embed/_aNcrt7Qbs0',
      category: 'ngoài nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-92.jpg?t=1648701605',
      title:
        'Làm thế nào để dành 14 ngày ở Nhật Bản - Hành trình du lịch Nhật Bản',
      video: 'https://www.youtube.com/embed/IuTDuvYr7f0',
      category: 'ngoài nước',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/video-93.jpg?t=1648701605',
      title: 'Chuyến tàu một mình xuyên qua vùng nông thôn Nhật Bản',
      video: 'https://www.youtube.com/embed/mLyeX0EQF10',
      category: 'ngoài nước',
    },
    {
      img: 'https://sakos.vn/wp-content/uploads/2024/09/5-13.jpg',
      title:
        'Những Cảnh Đẹp Và Kì Quan Trên Thế Giới Mà Vietnam Travel Group Đã Sưu Tầm Về Để Gửi Đến Các Bạn !!!',
      video: 'https://www.youtube.com/embed/NSnkb1IAjbE',
      category: 'ngoài nước',
    },
    {
      img: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-05/Vi%E1%BB%87t%20Nam%20l%C3%A0%20m%E1%BB%99t%20trong%20nh%E1%BB%AFng%20%C4%91i%E1%BB%83m%20%C4%91%E1%BA%BFn%20du%20l%E1%BB%8Bch%20tuy%E1%BB%87t%20v%E1%BB%9Di%20nh%E1%BA%A5t%20t%E1%BA%A1i%20ch%C3%A2u%20%C3%81.jpg',
      title: 'Trải nghiệm cuộc sống tại đồng bằng sông Cửu Long',
      video: 'https://www.youtube.com/embed/cxKlw3e_kQE',
      category: 'trong nước',
    },
  ];

  // album Slider
  slides: any = [
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/Th%C3%A0nh-c%E1%BB%95-T%C3%B9ng-Phan-ivivu-4.jpg',
      title: 'Việt Nam - Từ trên cao',
      description:
        'Khám phá vẻ đẹp của những dãy núi và thung lũng Việt Nam từ góc nhìn trên cao',
    },
    {
      img: 'https://cdn3.ivivu.com/2023/04/C%E1%BB%ADu-Tr%E1%BA%A1i-Ch%C3%A2u-ivivu-14.jpg',
      title: 'Hành trình đến Việt Nam | A Cinematic Travel Video',
      description:
        'Trải nghiệm hành trình du lịch tại Việt Nam qua góc nhìn điện ảnh',
    },
    {
      img: 'https://booking.pystravel.vn/uploads/posts/avatar/1678419921.png',
      title: 'Việt Nam - Vùng đất của những bí mật cổ xưa',
      description:
        'Khám phá những di sản văn hóa và lịch sử đầy bí ẩn của Việt Nam',
    },
    {
      img: 'https://datviettour.com.vn/uploads/images/tin-tuc-SEO-NN-chau-a/trung-quoc/danh-thang/nhung-con-duong.jpeg',
      title: 'Ẩm thực Việt Nam - Hương vị đặc trưng',
      description: 'Trải nghiệm nền ẩm thực đa dạng và phong phú của Việt Nam',
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/Thaophuongnguyen-182701092759-cn-1-compressed.jpg',
      title: 'Con người Việt Nam - Nụ cười thân thiện',
      description:
        'Gặp gỡ những con người hiếu khách và những nét văn hóa đặc sắc',
    },
  ];

  // trai-nghiem, trai-nghiem2
  traiNghiem: any = [
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/dich-vu/Xe/z6226795170237_d673a744ebedd26eaee33651b908053f.jpg?t=1737346344',
      title: 'Kỉ niệm Thái Lan',
      date: '6/2023',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-7.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-8.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-9.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour%20t6/362263870_240220488880899_7617990603008146134_n.jpg',
      title: 'Du lịch Đà Nẵng',
      date: '7/2023',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-7.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-8.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-9.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-91.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-92.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour%20t6/361666672_715498010615575_4858650398047546333_n.jpg',
      title: 'Khám phá Ba Lan',
      date: '8/2023',
      continent: 'Châu Âu', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-3.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-5.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-phu-quoc-1.jpg?t=1648701607',
      title: 'Nghỉ dưỡng Đà Lạt',
      date: '9/2023',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-1.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-3.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-5.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-ninh-binh-8.jpg?t=1648701606',
      title: 'Leo núi Hà Lan',
      date: '10/2023',
      continent: 'Châu Âu', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-5.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-7.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-nha-trang-1.jpg?t=1648701606',
      title: 'Tham quan Hạ Long',
      date: '11/2023',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-1.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-3.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-5.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-7.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-8.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-9.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-91.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-92.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-2.png?t=1648701606',
      title: 'Trải nghiệm Long An',
      date: '12/2023',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-8.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-9.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-91.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-92.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/tour-trung-quoc-1.jpg?t=1648701607',
      title: 'Tây Ninh',
      date: '1/2024',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-5.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-7.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-canada-1.jpg?t=1648701605',
      title: 'Phượt Tây Bắc',
      date: '2/2024',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-5.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-my-2.jpg?t=1648701606',
      title: 'Biển đảo Phú Quốc',
      date: '3/2024',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-3.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-4.png?t=1648701606',
        },
      ],
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-da-nang-1.jpg?t=1648701605',
      title: 'Thành phố Hồ Chí Minh',
      date: '4/2024',
      continent: 'Châu Á', // Ngẫu nhiên
      info: [
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-6.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-7.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-8.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-9.jpg?t=1648701606',
        },
        {
          img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-han-quoc-91.png?t=1648701606',
        },
      ],
    },
  ];

  // main/page5
  imgList = [
    { link: '/tour-du-lich', name: 'Châu Á', img: 'anh-bia/chau-a.jpg' },
    { link: '', name: 'Châu Âu', img: 'anh-bia/chau-au.jpg' },
    { link: '', name: 'Châu Mỹ', img: 'anh-bia/chau-my.jpg' },
    { link: '', name: 'Châu Úc - Châu Phi', img: 'anh-bia/chau-uc-phi.jpg' },
    { link: '', name: 'Đông Nam Á', img: 'anh-bia/dong-nam-a.jpg' },
    { link: '', name: 'Mièn Bắc', img: 'anh-bia/mien-bac.jpg' },
    { link: '', name: 'Miền Nam', img: 'anh-bia/mien-nam.jpg' },
    { link: '', name: 'Miền Trung', img: 'anh-bia/mien-trung.jpg' },
    { link: '', name: 'Tây Nguyên', img: 'anh-bia/tay-nguyen.jpg' },
  ];

  arr = [
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/anh-da-lat-43.jpg',
      title: 'TRẢI NGHIỆM SAPA MÙA HOA ĐẸP NHẤT',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe giường nằm',
      hotel: 'Khách sạn 3 sao',
      week: 'Thứ 6 hằng tuần',
      discount: 1890000,
      original: 2590000,
      quantity: 10,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/image_ggp1668074193.jpg',
      title: 'KHÁM PHÁ VỊNH HẠ LONG – DI SẢN THIÊN NHIÊN',
      date: '3 Ngày 2 Đêm',
      cart: 'Tàu + Ô tô',
      hotel: 'Resort 4 sao',
      week: 'Cuối tuần',
      discount: 2990000,
      original: 3490000,
      quantity: 25,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/%E1%BA%A2nh%20T%E1%BA%BFt/DALAT.jpg',
      title: 'THIÊN ĐƯỜNG BIỂN PHÚ QUỐC 4 NGÀY 3 ĐÊM',
      date: '4 Ngày 3 Đêm',
      cart: 'Máy bay',
      hotel: 'Resort 5 sao',
      week: 'Thứ 5 hằng tuần',
      discount: 4590000,
      original: 5690000,
      quantity: 21,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/hinh-anh-da-lat-mo-suong-sang-som_085718200.jpg',
      title: 'HÀNH TRÌNH DI SẢN MIỀN TRUNG: HUẾ – ĐÀ NẴNG – HỘI AN',
      date: '5 Ngày 4 Đêm',
      cart: 'Máy bay + Ô tô',
      hotel: 'Khách sạn 4 sao',
      week: 'Hàng tuần',
      discount: 3790000,
      original: 4890000,
      quantity: 15,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/mien-tay/grand-world.jpg',
      title: 'TRẢI NGHIỆM SAPA MÙA HOA ĐẸP NHẤT',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe giường nằm',
      hotel: 'Khách sạn 3 sao',
      week: 'Thứ 6 hằng tuần',
      discount: 1890000,
      original: 2590000,
      quantity: 10,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/mien-tay/phu-quoc.jpg',
      title: 'KHÁM PHÁ VỊNH HẠ LONG KỲ VĨ',
      date: '3 Ngày 2 Đêm',
      cart: 'Xe limousine',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 7 hằng tuần',
      discount: 2990000,
      original: 3890000,
      quantity: 8,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/mien-tay/grand-world-phu-quoc.jpg',
      title: 'DU LỊCH ĐÀ LẠT MÙA HOA DÃ QUỲ',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe giường nằm',
      hotel: 'Khách sạn 3 sao',
      week: 'Chủ nhật hằng tuần',
      discount: 1790000,
      original: 2390000,
      quantity: 12,
    },
    {
      img: 'https://toquoc.mediacdn.vn/Uploaded/duchoang/2017_12_26/Anh_1_LXOA.jpg',
      title: 'THƯỞNG NGOẠN PHÚ QUỐC ĐẢO NGỌC',
      date: '4 Ngày 3 Đêm',
      cart: 'Máy bay',
      hotel: 'Resort 5 sao',
      week: 'Thứ 5 hằng tuần',
      discount: 5990000,
      original: 7990000,
      quantity: 6,
    },
    {
      img: 'https://localvietnam.nl/wp-content/uploads/2019/12/ba-na-hills-gouden-brug-vietnam.jpg',
      title: 'HÀNH TRÌNH MIỀN TÂY SÔNG NƯỚC',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe ô tô',
      hotel: 'Homestay',
      week: 'Thứ 7 hằng tuần',
      discount: 1290000,
      original: 1790000,
      quantity: 15,
    },
    {
      img: 'https://www.vietfuntravel.com.vn/image/data/Da-Nang/ba-na-hill/lac-vao-lang-phap-dep-nhu-tien-canh-o-ba-na-hills-h1.jpg',
      title: 'KHÁM PHÁ CỐ ĐÔ HUẾ',
      date: '3 Ngày 2 Đêm',
      cart: 'Tàu hỏa',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 6 hằng tuần',
      discount: 2490000,
      original: 3290000,
      quantity: 9,
    },
    {
      img: 'https://culaochamtour.com/wp-content/uploads/cu-lao-cham.jpg',
      title: 'NHA TRANG - THÀNH PHỐ BIỂN XINH ĐẸP',
      date: '3 Ngày 2 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 7 hằng tuần',
      discount: 3490000,
      original: 4590000,
      quantity: 7,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/7-compressed.jpg',
      title: 'ĐẢO CÔ TỐ - THIÊN ĐƯỜNG BIỂN ĐẢO',
      date: '2 Ngày 1 Đêm',
      cart: 'Tàu cao tốc',
      hotel: 'Resort 3 sao',
      week: 'Chủ nhật hằng tuần',
      discount: 2190000,
      original: 2990000,
      quantity: 11,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/Gyeongbokgung.jpg',
      title: 'MỘC CHÂU - MÙA HOA CẢI TRẮNG',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe giường nằm',
      hotel: 'Khách sạn 3 sao',
      week: 'Thứ 7 hằng tuần',
      discount: 1590000,
      original: 2190000,
      quantity: 13,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/SGL.jpg',
      title: 'HÀ GIANG - CON ĐƯỜNG HẠNH PHÚC',
      date: '3 Ngày 2 Đêm',
      cart: 'Xe ô tô',
      hotel: 'Homestay',
      week: 'Thứ 6 hằng tuần',
      discount: 1990000,
      original: 2790000,
      quantity: 10,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/Namtso-lake2.jpg',
      title: 'TAM ĐẢO - NÉT ĐẸP HOÀI CỔ',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe ô tô',
      hotel: 'Biệt thự',
      week: 'Chủ nhật hằng tuần',
      discount: 1690000,
      original: 2290000,
      quantity: 14,
    },
  ];

  arr2 = [
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/Th%C3%A0nh-c%E1%BB%95-T%C3%B9ng-Phan-ivivu-4.jpg',
      title: 'TRẢI NGHIỆM SAPA MÙA HOA ĐẸP NHẤT',
      date: '2 Ngày 1 Đêm',
      cart: 'Xe giường nằm',
      hotel: 'Khách sạn 3 sao',
      week: 'Thứ 6 hằng tuần',
      discount: 1890000,
      original: 2590000,
      quantity: 10,
    },
    {
      img: 'https://cdn3.ivivu.com/2023/04/C%E1%BB%ADu-Tr%E1%BA%A1i-Ch%C3%A2u-ivivu-14.jpg',
      title: 'KHÁM PHÁ NHA TRANG - THIÊN ĐƯỜNG BIỂN XANH',
      date: '3 Ngày 2 Đêm',
      cart: 'Máy bay + Xe du lịch',
      hotel: 'Resort 4 sao ven biển',
      week: 'Thứ 5 & Chủ nhật',
      discount: 2990000,
      original: 3690000,
      quantity: 8,
    },
    {
      img: 'https://booking.pystravel.vn/uploads/posts/avatar/1678419921.png',
      title: 'THAM QUAN ĐÀ NẴNG – HỘI AN – BÀ NÀ HILLS',
      date: '4 Ngày 3 Đêm',
      cart: 'Xe du lịch',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 7 hàng tuần',
      discount: 3590000,
      original: 4190000,
      quantity: 12,
    },
    {
      img: 'https://datviettour.com.vn/uploads/images/tin-tuc-SEO-NN-chau-a/trung-quoc/danh-thang/nhung-con-duong.jpeg',
      title: 'DU LỊCH HÀN QUỐC MÙA HOA ANH ĐÀO',
      date: '5 Ngày 4 Đêm',
      cart: 'Máy bay khứ hồi',
      hotel: 'Khách sạn 4 sao trung tâm',
      week: 'Thứ 3 hàng tuần',
      discount: 18900000,
      original: 21900000,
      quantity: 5,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/Thaophuongnguyen-182701092759-cn-1-compressed.jpg',
      title: 'DU LỊCH NHẬT BẢN MÙA HOA ANH ĐÀO',
      date: '6 Ngày 5 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 2 hàng tuần',
      discount: 32900000,
      original: 37900000,
      quantity: 15,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/1648545995-compressed.jpg',
      title: 'KHÁM PHÁ HÀN QUỐC – SEOUL – JEJU',
      date: '5 Ngày 4 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 3 sao',
      week: 'Thứ 3 hàng tuần',
      discount: 25900000,
      original: 28900000,
      quantity: 10,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/du-lich-zaanse-schans2.jpg',
      title: 'DU LỊCH THÁI LAN – BANGKOK – PATTAYA',
      date: '5 Ngày 4 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 5 hàng tuần',
      discount: 15900000,
      original: 19900000,
      quantity: 20,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/thap-eiffel-va-hanh-trinh-kham-pha-nuoc-phap-1-compressed.jpg',
      title: 'TRẢI NGHIỆM SINGAPORE – MALAYSIA',
      date: '6 Ngày 5 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 6 hàng tuần',
      discount: 18900000,
      original: 22900000,
      quantity: 15,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/palais-grand-ducal-luxembourg-cidp_l-compressed.jpg',
      title: 'DU LỊCH ĐÀI LOAN – ĐÀI BẮC – CAO HÙNG',
      date: '5 Ngày 4 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 3 sao',
      week: 'Thứ 4 hàng tuần',
      discount: 17900000,
      original: 21900000,
      quantity: 12,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/1654916501_782_Tokyo-Skytree-Nhat-Ban-%E2%80%93-thap-truyen-hinh-cao-nhat.jpg',
      title: 'KHÁM PHÁ TRUNG QUỐC – BẮC KINH – THƯỢNG HẢI',
      date: '7 Ngày 6 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 2 hàng tuần',
      discount: 27900000,
      original: 30900000,
      quantity: 10,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/z4165029828864_ae4c790d75a4ccf8836e80f1593e31b4.jpg',
      title: 'DU LỊCH ÚC – SYDNEY – MELBOURNE',
      date: '7 Ngày 6 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Chủ nhật hằng tuần',
      discount: 47900000,
      original: 51900000,
      quantity: 8,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/sing.jpeg',
      title: 'KHÁM PHÁ CHÂU ÂU – PHÁP – Ý – THỤY SĨ',
      date: '10 Ngày 9 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 7 hàng tuần',
      discount: 84900000,
      original: 89900000,
      quantity: 5,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/TOUR%20SINGAPO-%20Jewel%20Changi.jpg',
      title: 'DU LỊCH MỸ – LOS ANGELES – LAS VEGAS',
      date: '8 Ngày 7 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 4 sao',
      week: 'Thứ 6 cách tuần',
      discount: 74900000,
      original: 79900000,
      quantity: 6,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/TOUR%20SINGAPO%20-%20V%C6%B0%C6%A1%CC%80n%20treo%20Flora%20Fantasy%203.jpg',
      title: 'KHÁM PHÁ DUBAI – EMIRATES HUYỀN BÍ',
      date: '6 Ngày 5 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 5 sao',
      week: 'Thứ 5 cách tuần',
      discount: 51900000,
      original: 56900000,
      quantity: 7,
    },
    {
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/aerial-view-of-dubai-palm-jumeirah-island_united-arab-emirates%20%281%29-compressed.jpg',
      title: 'LOS ANGELES – LAS VEGAS – EMIRATES HUYỀN BÍ',
      date: '4 Ngày 3 Đêm',
      cart: 'Máy bay',
      hotel: 'Khách sạn 2 sao',
      week: 'Thứ 2 cách tuần',
      discount: 74900000,
      original: 56900000,
      quantity: 7,
    },
  ];

  //  tin tức - tour-du-lich
  news = [
    {
      category: 'ẩm thực',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/Screenshot%202025-04-29%20092455.png',
      date: '25/04/2025',
      title:
        'Toàn Cảnh Các Hoạt Động Kỷ Niệm 50 Năm Giải Phóng Miền Nam, Thống Nhất Đất Nước',
      content:
        'Hàng loạt sự kiện hoành tráng diễn ra trên cả nước, từ lễ diễu hành, triển lãm đến bắn pháo hoa, tái hiện những mốc son lịch sử của dân tộc.',
    },
    {
      category: 'du lịch',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/-Siem-Reap-Main-compressed.jpg?t=1676628604',
      date: '28/04/2025',
      title:
        'Khánh Thành Cầu Cửa Đại - Công Trình Giao Thông Trọng Điểm Tại Quảng Nam',
      content:
        'Cầu Cửa Đại với tổng đầu tư hơn 3.000 tỷ đồng sẽ giảm ùn tắc giao thông và thúc đẩy phát triển kinh tế vùng biển Quảng Nam.',
    },
    {
      category: 'ẩm thực',
      img: 'https://hnm.1cdn.vn/2025/04/28/cd873cca8e/a783.drone.jpg',
      date: '22/04/2025',
      title:
        'Hội Nghị Thượng Đỉnh ASEAN 2023: Cam Kết Về An Ninh Khu Vực Và Phát Triển Bền Vững',
      content:
        'Các nhà lãnh đạo ASEAN nhất trí tăng cường hợp tác chống khủng bố, an ninh mạng và phát triển kinh tế xanh.',
    },
    {
      category: 'thị trường',
      img: 'https://hnm.1cdn.vn/2025/04/28/cd873cca8e/a784.mapping.jpg',
      date: '30/04/2025',
      title: 'Việt Nam Đăng Cai Giải Vô Địch Bóng Đá U23 Châu Á 2024',
      content:
        'Giải đấu quy tụ 16 đội tuyển hàng đầu châu Á sẽ diễn ra tại 5 sân vận động lớn ở Hà Nội, TP.HCM và Đà Nẵng.',
    },
    {
      category: 'ẩm thực',
      img: 'https://thamhiemmekong.com/wp-content/uploads/2019/05/langdulichmykhanh-2.jpg',
      date: '01/05/2025',
      title:
        'Ra Mắt Sách "Lịch Sử Việt Nam Từ Nguồn Gốc Đến Hiện Đại" Của GS Phan Huy Lê',
      content:
        'Cuốn sách dày 1.200 trang tổng hợp nghiên cứu mới nhất về lịch sử Việt Nam, từ thời tiền sử đến giai đoạn hiện đại.',
    },
    {
      category: 'du lịch',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/w-phao-hoa-1-97855.jpg?t=1745207004',
      date: '26/04/2025',
      title: 'Lễ Hội Áo Dài Quốc Tế 2023 Thu Hút Hàng Nghìn Du Khách',
      content:
        'Hơn 2.000 người mẫu và nghệ sĩ tham gia trình diễn áo dài truyền thống và cách tân tại phố cổ Hội An.',
    },
    {
      category: 'thị trường',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/92af86da6d8bded5879a.jpg?t=1744622528',
      date: '24/04/2025',
      title: 'Phát Hiện Di Chỉ Khảo Cổ Mới Tại Thành Nhà Hồ - Di Sản Thế Giới',
      content:
        'Các nhà khảo cổ tìm thấy nhiều hiện vật quý từ thời nhà Hồ, gồm đồ gốm, vũ khí và dấu tích kiến trúc cổ.',
    },
    {
      category: 'du lịch',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/brando2.png',
      date: '29/04/2025',
      title:
        'Hội Thảo Quốc Tế Về Biến Đổi Khí Hậu Và Giải Pháp Cho Đồng Bằng Sông Cửu Long',
      content:
        'Các chuyên gia đề xuất giải pháp chống xâm nhập mặn và phát triển nông nghiệp thông minh thích ứng với biến đổi khí hậu.',
    },
    {
      category: 'ẩm thực',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/w-phao-hoa-1-97855.jpg?t=1745207004',
      date: '27/04/2025',
      title:
        'Triển Lãm Nghệ Thuật Đương Đại "Tầm Nhìn Mới" Tại Bảo Tàng Mỹ Thuật Việt Nam',
      content:
        'Trưng bày hơn 100 tác phẩm hội họa, điêu khắc và sắp đặt của 50 nghệ sĩ tiêu biểu trong nước và quốc tế.',
    },
    {
      category: 'thị trường',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/drone-in-hcmc-read-only-1693968808432357524632.jpg?t=1745809222',
      date: '23/04/2025',
      title:
        '28/4 Có Sự Kiện Gì? Tổng Duyệt Màn Trình Diễn 10.500 Thiết Bị Bay Không Người Lái',
      content:
        'Khám phá màn tổng duyệt 10.500 drone tại TP.HCM vào tối 28/4, chuẩn bị cho sự kiện lớn kỷ niệm 50 năm Ngày Giải phóng miền Nam.',
    },
    {
      category: 'du lịch',
      img: 'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tin-tuc/tin-du-lich-3/day-tu-4h-sang-check-in-nhung-noi-ngam-binh-minh-dep-nhat-con-dao-1.webp',
      date: '02/05/2025',
      title:
        'Khởi Công Dự Án Tuyến Metro Số 3 Tại Hà Nội - Kết Nối Nam Từ Liêm Với Hoàng Mai',
      content:
        'Tuyến metro dài 12km với tổng vốn đầu tư 40.000 tỷ đồng dự kiến hoàn thành vào năm 2030, giảm ùn tắc cho khu vực phía Tây Hà Nội.',
    },
  ];

  // thanh tìm kiếm - main/page2
  categories = [
    { name: 'Tour lẻ', children: [] },
    {
      name: 'Trong nước',
      children: [
        {
          name: 'Miền Bắc',
          subChildren: ['Miền Bắc 1', 'Miền Bắc 2', 'Miền Bắc 3'],
        },
        {
          name: 'Miền Trung',
          subChildren: ['Miền Trung 1', 'Miền Trung 2', 'Miền Trung 3'],
        },
        {
          name: 'Miền Nam',
          subChildren: ['Miền Nam 1', 'Miền Nam 2', 'Miền Nam 3'],
        },
      ],
    },
    {
      name: 'Ngoài nước',
      children: [
        { name: 'Châu Á', subChildren: ['Châu Á 1', 'Châu Á 2', 'Châu Á 3'] },
        {
          name: 'Châu Âu',
          subChildren: ['Châu Âu 1', 'Châu Âu 2', 'Châu Âu 3'],
        },
        {
          name: 'Châu Mỹ',
          subChildren: ['Châu Mỹ 1', 'Châu Mỹ 2', 'Châu Mỹ 3'],
        },
        {
          name: 'Châu Phi',
          subChildren: ['Châu Phi 1', 'Châu Phi 2', 'Châu Phi 3'],
        },
      ],
    },
  ];

  date = [
    '5 ngay 4 dem',
    '4 ngay 3 dem',
    '3 ngay 2 dem',
    '2 ngay 1 dem',
    '1 ngay ',
  ];

  formatVND(value: number): string {
    return new Intl.NumberFormat('vi-VN').format(value);
  }

  // -----xử lý tìm kiếm danh mục Main/page2.ts----------
  filterCategoryOptions(categories: any[], searchTerm: string) {
    if (!searchTerm.trim()) {
      return [...categories];
    }

    const searchTermLower = searchTerm.toLowerCase();

    return categories
      .map((parent) => {
        const filteredParent = { img: parent.img, children: [] };

        const parentMatches = parent.img
          .toLowerCase()
          .includes(searchTermLower);

        if (parent.children) {
          filteredParent.children = parent.children
            .map((child: any) => {
              const filteredChild = { img: child.img, subChildren: [] };
              const childMatches = child.img
                .toLowerCase()
                .includes(searchTermLower);

              if (child.subChildren) {
                filteredChild.subChildren = child.subChildren.filter(
                  (grandChild: any) =>
                    grandChild.toLowerCase().includes(searchTermLower)
                );
              }

              if (
                childMatches ||
                (filteredChild.subChildren &&
                  filteredChild.subChildren.length > 0)
              ) {
                return filteredChild;
              }
              return null;
            })
            .filter((child: any) => child !== null);
        }

        if (
          parentMatches ||
          (filteredParent.children && filteredParent.children.length > 0)
        ) {
          return filteredParent;
        }
        return null;
      })
      .filter((parent) => parent !== null);
  }

  filterSimpleOptions(list: string[], searchTerm: string) {
    if (!searchTerm.trim()) {
      return [...list];
    }

    const searchTermLower = searchTerm.toLowerCase();
    return list.filter((item) => item.toLowerCase().includes(searchTermLower));
  }
}
