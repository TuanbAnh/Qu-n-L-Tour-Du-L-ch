import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrl: './lien-he.component.scss',
})
export class LienHeComponent implements OnInit {
  contactForm!: FormGroup;
  captchaCode = '';
  formMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      message: ['', Validators.required],
      captchaInput: ['', Validators.required],
    });

    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.captchaCode = Array.from(
      { length: 5 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.formMessage = 'Vui lòng điền đầy đủ vào các ô có dấu *';
      return;
    }

    const inputCaptcha = this.contactForm.get('captchaInput')?.value;
    if (inputCaptcha !== this.captchaCode) {
      this.formMessage = 'Mã bảo mật không đúng, vui lòng thử lại.';
      this.generateCaptcha();
      return;
    }

    this.formMessage = 'Gửi liên hệ thành công!';
    this.contactForm.reset();
    this.generateCaptcha();
  }

  onReset(): void {
    this.contactForm.reset();
    this.formMessage = '';
    this.generateCaptcha();
  }
}
