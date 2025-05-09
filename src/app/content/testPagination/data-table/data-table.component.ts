import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from '@angular/core';
import { PaginationService } from '../../../service/pagination.service';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  // Dữ liệu tour cho trang hiện tại
  danhSachTour: any[] = [];
  // Tổng số bản ghi từ server
  tongSoBanGhi: number = 0;

  // Phân trang
  soBanGhiTrenTrang = 3;
  trangHienTai = 0; // 0-based index

  constructor(
    public phanTrangService: PaginationService,
    public thongTinTour: infoTour
  ) {}

  ngOnInit() {
    // Đầu tiên lấy tổng số bản ghi
    this.phanTrangService.getCount().subscribe((ketQuaDem) => {
      this.tongSoBanGhi = ketQuaDem.total;
      // Sau đó load trang đầu tiên
      this.taiTrang(0);
    });
  }

  /** Load dữ liệu page từ API */
  taiTrang(trang: number) {
    this.phanTrangService
      .getPaginated(trang, this.soBanGhiTrenTrang)
      .subscribe((danhSach) => {
        this.danhSachTour = danhSach;
        this.trangHienTai = trang;
      });
  }

  /** Tính tổng số trang */
  get tongSoTrang(): number {
    return Math.ceil(this.tongSoBanGhi / this.soBanGhiTrenTrang);
  }

  /** Danh sách chỉ số trang để hiển thị */
  get cacTrangHienThi(): number[] {
    const soTrangToiDa = 9;
    const tong = this.tongSoTrang;
    const motNua = Math.floor(soTrangToiDa / 2);
    let batDau = 0;
    if (this.trangHienTai > motNua) {
      batDau = Math.min(this.trangHienTai - motNua, tong - soTrangToiDa);
      batDau = Math.max(0, batDau);
    }
    const soLuong = Math.min(tong, soTrangToiDa);
    return Array.from({ length: soLuong }, (_, i) => batDau + i);
  }

  denTrangDau() {
    if (this.trangHienTai > 0) this.taiTrang(0);
  }
  denTrangTruoc() {
    if (this.trangHienTai > 0) this.taiTrang(this.trangHienTai - 1);
  }
  denTrang(trang: number) {
    if (trang !== this.trangHienTai) this.taiTrang(trang);
  }
  denTrangSau() {
    if (this.trangHienTai < this.tongSoTrang - 1)
      this.taiTrang(this.trangHienTai + 1);
  }
  denTrangCuoi() {
    if (this.trangHienTai < this.tongSoTrang - 1)
      this.taiTrang(this.tongSoTrang - 1);
  }
}
