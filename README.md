
* Typescript: dùng để check tất cả các dữ liệu đầu vào cho 1 function, component sao cho nhất quán, khi data input sai(mặc dù vẫn chạy được đối với js) sẽ bị bắt lỗi => dễ debug và thường sẽ không gặp bug lớn.

### Type trong project này phân làm 4 loại (thực ra loại nào cũng như nhau, để khác thư mục để dễ tìm thôi):
1. Common type:
    - Được định nghĩa trong thư mục common/formatTypes.
    - Dùng để định nghĩa kiểu dữ liệu đầu vào cho các function, API.
2. Design type:
    - Được định nghĩa trong thư mục designs/designTypes
    - Dùng để định nghĩa các type trong thẻ InputYDT, SelectYDT,...

3. Action type:
    - Được định nghĩa trong thư mục redux/types.
    - Mỗi bộ redux cần 1 thư mục type riêng cho nó.
    - Redux type xác định type cho reducer.
4. Props types:
    - Được định nghĩa dạng interface ngay trong file chính của component, chủ yếu để bắt lỗi các prop bị truyền thiếu, thừa, sai định dạng.

### Component: Phân ra nhiều loại component để dễ quản lý
Có 3 loại component chính:

1