-----

### Tổng quan (Overview)

Đây là bộ sưu tập các hàm tiện ích (**utils**) và trợ giúp (**helpers**) toàn diện dành cho JavaScript và TypeScript. Kho lưu trữ này được tổ chức như một cheatsheet, giúp bạn dễ dàng tìm kiếm và sử dụng các hàm để giải quyết các tác vụ phổ biến trong mọi dự án.

Các tiện ích được phân loại rõ ràng thành các nhóm chức năng, từ xử lý dữ liệu cơ bản đến các tác vụ nâng cao liên quan đến giao diện người dùng và nền tảng.

-----

### Danh sách các tiện ích

Dưới đây là danh sách đầy đủ các tiện ích, được sắp xếp theo từng nhóm chức năng cụ thể:

#### 📁 **`array/`**

  - `unique`: Loại bỏ các phần tử trùng lặp trong mảng.
  - `groupBy`: Nhóm các phần tử theo một thuộc tính cụ thể.
  - `shuffle`: Trộn ngẫu nhiên thứ tự các phần tử trong mảng.

#### 📁 **`object/`**

  - `isEmptyObject`: Kiểm tra xem một đối tượng có rỗng không.
  - `deepClone`: Sao chép sâu đối tượng, tránh các vấn đề về tham chiếu.
  - `getProp`: Lấy giá trị của một thuộc tính lồng nhau một cách an toàn.
  - `deepEqual`: So sánh sâu hai đối tượng hoặc mảng.

#### 📁 **`string/`**

  - `capitalize`: Viết hoa chữ cái đầu tiên của chuỗi.
  - `toKebabCase`: Chuyển đổi chuỗi thành định dạng `kebab-case`.
  - `truncate`: Cắt ngắn chuỗi và thêm dấu `...`.

#### 📁 **`number/`**

  - `formatCurrency`: Định dạng số thành định dạng tiền tệ.
  - `isNumber`: Kiểm tra xem một giá trị có phải là số không.

#### 📁 **`date/`**

  - `formatDate`: Định dạng ngày tháng theo một chuỗi format.
  - `timeAgo`: Tính thời gian đã trôi qua kể từ một ngày cho trước.

#### 📁 **`dom/`**

  - `once`: Gắn một sự kiện chỉ chạy một lần duy nhất.
  - `clickOutside`: Phát hiện khi người dùng nhấp chuột ra ngoài một phần tử.
  - `isScrolledToBottom`: Kiểm tra người dùng đã cuộn đến cuối một phần tử chưa.
  - `animateScrollTo`: Cuộn trang mượt mà đến một vị trí cụ thể.
  - `prefersReducedMotion`: Kiểm tra tùy chọn giảm chuyển động của hệ điều hành.
  - `getScrollbarWidth`: Lấy chiều rộng của thanh cuộn của trình duyệt.

#### 📁 **`functional/`**

  - `debounce`: Hạn chế việc gọi một hàm liên tục.
  - `throttle`: Hạn chế việc gọi một hàm nhiều hơn một lần trong một khoảng thời gian.
  - `pRetry`: Tự động thử lại một hàm bất đồng bộ khi nó thất bại.
  - `pAllSettled`: Chờ tất cả các promises hoàn thành, dù thành công hay thất bại.

#### 📁 **`platform/`**

  - `isOnline`: Kiểm tra trạng thái kết nối internet.
  - `copyToClipboard`: Sao chép văn bản vào clipboard của hệ thống.
  - `getSearchParams`: Lấy các tham số từ URL hiện tại.
  - `uuid`: Tạo một chuỗi ID duy nhất.

#### 📁 **`validation/`**

  - `isEmail`: Xác thực địa chỉ email.
  - `isPasswordStrong`: Kiểm tra độ mạnh của mật khẩu.
  - `isValidURL`: Xác thực URL.

#### 📁 **`errors/`**

  - `isAxiosError`: Kiểm tra xem lỗi có phải từ thư viện Axios không.
  - `parseAxiosError`: Phân tích lỗi từ Axios và trả về một thông báo dễ đọc.

-----

### Sử dụng

Bạn có thể sử dụng các tiện ích này bằng cách **sao chép trực tiếp các tệp tin** mà bạn cần vào dự án của mình. Trong tương lai, repo này có thể sẽ được publish lên npm.

```typescript
// Giả sử bạn đã sao chép tệp `deepClone.ts` vào dự án
import { deepClone } from './path/to/deepClone';

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

cloned.b.c = 3;

console.log(original.b.c); // Output: 2
console.log(cloned.b.c);   // Output: 3
```

-----
