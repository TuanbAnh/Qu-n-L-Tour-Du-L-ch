import { Component, Input, OnInit } from '@angular/core';
import { infoTour } from '../../../service/infoTour.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  // Input để nhận dữ liệu từ component cha
  @Input() duLieuTour: any[] = [];
  @Input() soItemTrenTrang: number = 9;
  @Input() tieuDe: string = 'Tour Du Lịch';
  @Input() tenClass: string = 'domestic-tour-list'; // Class để có thể tùy chỉnh style

  trangHienTai = 0;

  constructor(public infoTour: infoTour) {}

  ngOnInit() {
    // Không cần gán giá trị từ service nữa vì sẽ nhận từ Input
  }

  get tongSoTrang(): number {
    return Math.ceil(this.duLieuTour.length / this.soItemTrenTrang);
  }

  get mangPhanTrang() {
    const batDau = this.trangHienTai * this.soItemTrenTrang;
    return this.duLieuTour.slice(batDau, batDau + this.soItemTrenTrang);
  }

  get cacTrangHienThi(): number[] {
    const soTrangToiDaHienThi = 9;
    const tong = this.tongSoTrang;
    const motNua = Math.floor(soTrangToiDaHienThi / 2);
    let batDau = 0;
    if (this.trangHienTai > motNua) {
      batDau = Math.min(this.trangHienTai - motNua, tong - soTrangToiDaHienThi);
      batDau = Math.max(0, batDau);
    }
    const soLuong = Math.min(tong, soTrangToiDaHienThi);
    return Array.from({ length: soLuong }, (_, i) => batDau + i);
  }

  denTrang(trang: number) {
    if (trang >= 0 && trang < this.tongSoTrang) {
      this.trangHienTai = trang;
    }
  }

  denTrangDau() {
    this.trangHienTai = 0;
  }

  denTrangTruoc() {
    if (this.trangHienTai > 0) this.trangHienTai--;
  }

  denTrangSau() {
    if (this.trangHienTai < this.tongSoTrang - 1) this.trangHienTai++;
  }

  denTrangCuoi() {
    this.trangHienTai = this.tongSoTrang - 1;
  }
}
