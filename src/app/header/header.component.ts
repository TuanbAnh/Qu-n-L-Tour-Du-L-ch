import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { infoTour } from '../service/infoTour.service';
import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  dropdown?: MenuItem[]; // Có thể có hoặc không
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSearch: boolean = false;
  hideTimeout: any;
  currentUrl: string = '/home';

  ngOnInit() {
    // Cập nhật đường dẫn hiện tại mỗi khi router thay đổi
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
        console.log('Current URL:', this.currentUrl); // Debug: kiểm tra URL hiện tại
      });
  }

  // chat AI
  hovering = false;
  showChat = false;
  userInput = '';
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  isActive1 = false;
  isLoading = false;
  shouldScrollToBottom = false;

  @ViewChild('chatInput') chatInput!: ElementRef<HTMLInputElement>;
  @ViewChild('chatContent') chatContent!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private http: HttpClient,
    private infoTour: infoTour
  ) {}

  ngAfterViewInit() {
    // Xử lý focus ban đầu nếu chat đang mở
    if (this.showChat) {
      this.focusInput();
    }
  }

  ngAfterViewChecked() {
    // Cuộn xuống dưới cùng nếu cần
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  // Bắt sự kiện click ngoài component
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (
      this.showChat &&
      !this.elementRef.nativeElement.contains(event.target) &&
      !(event.target as Element).closest('.chat-toggle')
    ) {
      this.showChat = false;
      this.hovering = false;
    }
  }

  // Cuộn xuống dưới cùng
  scrollToBottom(): void {
    try {
      const element = this.chatContent.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) {
      console.error('Error scrolling chat:', err);
    }
  }

  // Focus vào input
  focusInput(): void {
    try {
      setTimeout(() => {
        if (this.chatInput && this.chatInput.nativeElement) {
          this.chatInput.nativeElement.focus();
        }
      }, 100);
    } catch (err) {
      console.error('Error focusing input:', err);
    }
  }

  toggleChat() {
    this.showChat = !this.showChat;

    if (this.showChat) {
      this.isActive1 = false;

      // Đánh dấu để cuộn xuống và focus vào input sau khi DOM cập nhật
      setTimeout(() => {
        this.shouldScrollToBottom = true;
        this.focusInput();
      }, 100);
    } else {
      this.hovering = false;
    }
  }

  activateChat() {
    this.isActive1 = true;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage = this.userInput;
    this.messages.push({ text: userMessage, sender: 'user' });
    this.userInput = '';

    // Đánh dấu để cuộn xuống
    this.shouldScrollToBottom = true;

    // Hiển thị thông báo đang trả lời
    this.isLoading = true;

    // Focus lại input ngay sau khi gửi
    this.focusInput();

    this.http
      .post<{ reply: string }>('http://localhost:4000/chat', {
        message: userMessage,
      })
      .subscribe({
        next: (res) => {
          // Xóa trạng thái loading và hiển thị câu trả lời
          this.isLoading = false;
          this.messages.push({ text: res.reply, sender: 'bot' });

          // Đánh dấu để cuộn xuống sau khi nhận phản hồi
          this.shouldScrollToBottom = true;

          // Focus lại vào input sau khi nhận phản hồi
          this.focusInput();
        },
        error: (err) => {
          this.isLoading = false;
          this.messages.push({
            text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.',
            sender: 'bot',
          });

          // Đánh dấu để cuộn xuống và focus lại input
          this.shouldScrollToBottom = true;
          this.focusInput();

          console.error('Error fetching response:', err);
        },
      });
  }

  // ----------------------------------------------------
  // các nút liên hê
  openMessenger(): void {
    const confirmOpen = confirm(
      'Bạn sẽ được chuyển sang Facebook Messenger để nhắn tin. Tiếp tục?'
    );
    if (confirmOpen) {
      window.open(
        'https://www.facebook.com/messages/t/100009922960655',
        '_blank'
      );
    }
  }

  // Toggle ô tìm kiếm
  cancelHide() {
    this.showSearch = true;
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }

  delayedHide() {
    this.hideTimeout = setTimeout(() => {
      this.showSearch = false;
    }, 500);
  }

  // Alert thông tin liên hệ
  phone() {
    alert('Liên hệ: 1900 1234');
  }

  // Điều hướng tới route mới - Đã cập nhật
  // Cải thiện hàm navigateTo trong HeaderComponent
  navigateTo(path: string, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    // Đảm bảo đường dẫn có dấu '/' ở đầu
    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    // Xác định section từ đường dẫn
    if (path.includes('trai-nghiem-khach-hang')) {
      this.infoTour.setCurrentSection('trai-nghiem');
    } else if (path.includes('video')) {
      this.infoTour.setCurrentSection('video');
    }

    // Thêm timeout ngắn để hoàn thành các thao tác DOM
    setTimeout(() => {
      this.router.navigateByUrl(path).then(
        () => console.log('Navigation successful to:', path),
        (err) => console.error('Navigation error:', err)
      );
    }, 10);
  }

  isActive(path: string): boolean {
    // Đảm bảo đường dẫn có dấu '/' ở đầu
    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    const result =
      this.router.url === path || this.router.url.startsWith(path + '/');
    console.log(
      `isActive(${path}): ${result}, current URL: ${this.router.url}`
    ); // Debug
    return result;
  }

  // Danh sách menu với đường dẫn đã cập nhật
  menus: MenuItem[] = [
    {
      label: 'Trang Chủ',
      path: '/home',
      dropdown: [],
    },
    {
      label: 'Tour Du Lịch',
      path: '/tour-du-lich',
      dropdown: [
        {
          label: 'Tour Trong Nước',
          path: '/trong-nuoc',
          dropdown: [
            {
              label: 'Miền Bắc',
              path: '/mien-bac',
              dropdown: [
                { label: 'Hà Nội', path: '/ha-noi' },
                { label: 'Hạ Long', path: '/ha-long' },
                { label: 'Sapa', path: '/sapa' },
                { label: 'Ninh Bình', path: '/ninh-binh' },
              ],
            },
            {
              label: 'Miền Trung',
              path: '/mien-trung',
              dropdown: [
                { label: 'Đà Nẵng', path: '/da-nang' },
                { label: 'Hội An', path: '/hoi-an' },
                { label: 'Huế', path: '/hue' },
                { label: 'Nha Trang', path: '/nha-trang' },
              ],
            },
            {
              label: 'Miền Nam',
              path: '/mien-nam',
              dropdown: [
                { label: 'TP. Hồ Chí Minh', path: '/ho-chi-minh' },
                { label: 'Vũng Tàu', path: '/vung-tau' },
                { label: 'Đà Lạt', path: '/da-lat' },
              ],
            },
            {
              label: 'Miền Tây',
              path: '/mien-tay',
              dropdown: [
                { label: 'Cần Thơ', path: '/can-tho' },
                { label: 'Cà Mau', path: '/ca-mau' },
                { label: 'Bến Tre', path: '/ben-tre' },
                { label: 'An Giang', path: '/an-giang' },
              ],
            },
          ],
        },
        {
          label: 'Tour Nước Ngoài',
          path: '/ngoai-nuoc',
          dropdown: [
            {
              label: 'Châu Á',
              path: '/chau-a',
              dropdown: [
                { label: 'Nhật Bản', path: '/nhat-ban' },
                { label: 'Hàn Quốc', path: '/han-quoc' },
                { label: 'Thái Lan', path: '/thai-lan' },
                { label: 'Singapore', path: '/singapore' },
              ],
            },
            {
              label: 'Châu Âu',
              path: '/chau-au',
              dropdown: [
                { label: 'Pháp', path: '/phap' },
                { label: 'Ý', path: '/y' },
                { label: 'Tây Ban Nha', path: '/tay-ban-nha' },
                { label: 'Thụy Sĩ', path: '/thuy-si' },
              ],
            },
            {
              label: 'Châu Mỹ',
              path: '/chau-my',
              dropdown: [
                { label: 'Mỹ', path: '/my' },
                { label: 'Canada', path: '/canada' },
                { label: 'Brazil', path: '/brazil' },
              ],
            },
            {
              label: 'Châu Úc',
              path: '/chau-uc',
              dropdown: [
                { label: 'Úc', path: '/uc' },
                { label: 'New Zealand', path: '/new-zealand' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Dịch Vụ',
      path: '/dich-vu',
      dropdown: [
        { label: 'Vé Máy Bay', path: '/ve-may-bay' },
        { label: 'Khách Sạn', path: '/khach-san' },
      ],
    },
    {
      label: 'Tin Tức',
      path: '/tin-tuc',
      dropdown: [
        { label: 'Thông tin du lịch ', path: '/tin-moi' },
        { label: 'Thưởng thức ẩm thực ', path: '/' },
        { label: 'Điểm đến du lịch ', path: '/' },
        { label: 'Khám Phá Đảo Ngọc Phú Quốc ', path: '/' },
        { label: 'Nét Đẹp Miền Sông Nước ', path: '/' },
        { label: 'Biến động thị trường', path: '/' },
      ],
    },
    {
      label: 'Thư Viện',
      path: '/thu-vien',
      dropdown: [
        { label: 'Trải Nghiệm Khách Hàng  ', path: '/trai-nghiem-khach-hang' },
        {
          label: 'Video',
          path: '/video',
          dropdown: [
            { label: 'Địa Danh Quốc Tế', path: '/dia-danh-quoc-te' },
            { label: 'Địa Danh Việt Nam', path: '/dia-danh-viet-nam' },
            {
              label: 'Du Lịch Vietnam Travel Group ',
              path: '/du-lich-viet-nam',
            },
          ],
        },
      ],
    },
    {
      label: 'Liên Hệ',
      path: '/lien-he',
    },
    {
      label: 'Giới Thiệu',
      path: '/gioi-thieu',
      dropdown: [
        { label: 'Về Vietnam Travel Group', path: '/vietnam-travel' },
        { label: 'Tuyển dụng', path: '/tuyen-dung' },
      ],
    },
  ];
}
