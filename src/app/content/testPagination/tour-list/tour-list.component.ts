import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss'],
})
export class TourListComponent {
  noi_dung: string = '';
  che_do_thanh_cong_cu: any = 'wrap';

  cau_hinh_tiny = {
    height: 500,
    language: 'vi',
    menubar: 'file edit view insert format tools table',
    plugins: `
      advlist autolink lists link image charmap preview anchor
      searchreplace visualblocks code fullscreen
      insertdatetime media table paste code help wordcount
    `,
    toolbar: `
      undo redo | formatselect | fontselect fontsizeselect | 
      bold italic underline forecolor backcolor | 
      alignleft aligncenter alignright alignjustify |
      bullist numlist outdent indent | 
      link image media table | chen_anh_tuy_chinh | removeformat code | help
    `,
    setup: (editor: any) => {
      editor.ui.registry.addButton('chen_anh_tuy_chinh', {
        text: 'Thêm Media',
        icon: 'image',
        onAction: () => {
          this.chenAnhBase64(editor);
        },
      });
    },
  };

  chenAnhBase64(editor: any) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result as string;
          editor.insertContent(
            `<img src="${base64}" alt="hình ảnh đã tải lên" />`
          );
        };

        reader.readAsDataURL(file);
      }
    };

    input.click();
  }
}
