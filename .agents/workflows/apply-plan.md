---
description: Hướng dẫn các bước áp dụng và thực thi một bản kế hoạch (plan) đã được phê duyệt
---

# Workflow Thực Thi Kế Hoạch (Plan Execution Workflow)

Workflow này được sử dụng SAU KHI một bản kế hoạch (plan) đã được thống nhất hoặc một `implementation_plan.md` đã được tạo ra. Mục tiêu của workflow này là thực thi kế hoạch một cách cẩn thận, từng bước một, tránh làm hỏng hệ thống hiện tại.

## Bước 1: Xem lại toàn bộ Kế hoạch (Review Plan)

- Đọc lại bản kế hoạch gần nhất hoặc mở artifact `implementation_plan.md` (nếu có).
- Đảm bảo bạn hiểu rõ tất cả các bước cần thực thi. Nếu kế hoạch chưa rõ ràng hoặc thiếu logic, yêu cầu làm rõ trước khi bắt đầu code.

## Bước 2: Thực thi Từng Bước (Step-by-Step Execution)

- Xử lý các bước trong kế hoạch một cách **tuần tự**. Đừng cố gắng hoàn thành mọi thứ trong một lần cập nhật duy nhất trừ khi task thực sự rất nhỏ.
- Tại mỗi phân đoạn (ví dụ: xong Backend API, chuyển sang Frontend UI):
  - Viết/Chỉnh sửa code với sự cẩn thận về Convention và Architecture của dự án.
  - Sau khi xong một thành phần cấu trúc lớn, có thể tóm tắt ngắn gọn lại những gì vừa làm cho người dùng cập nhật tiến độ.

## Bước 3: Kiểm chứng Định kỳ (Verification)

- Sau khi hoàn thành một bước quan trọng (hoặc tạo xong các component/hàm), hãy tự kiểm tra xem mình import đủ không, gọi hàm đúng chưa thông qua grep_search hoặc view_file.
- Đề nghị người dùng kiểm tra lại hoặc chạy thử/run build nếu cần thiết để đảm bảo bước hiện tại không phá hỏng cái gì khác, trước khi đi sang phần tiếp theo.

## Bước 4: Thích ứng & Cập nhật Kế hoạch (Adapt & Update Plan)

- Nếu trong lúc code phát hiện vấn đề kỹ thuật không lường trước (như thư viện không hỗ trợ, sai khác logic, code cũ bị bug):
  - Dừng lại và báo cáo vấn đề ngay cho người dùng.
  - Đề xuất hướng giải quyết mới.
  - Nếu cần, cập nhật lại bản kế hoạch/artifact `implementation_plan.md` cho phù hợp với tình hình thực tế.

## Bước 5: Hoàn tất & Tổng kết (Completion)

- Khi toàn bộ các bước đã được implement xong, hãy review tổng thể một lượt.
- Báo cáo với người dùng rằng kế hoạch đã hoàn tất và tóm tắt những tính năng/thay đổi thiết yếu vừa được tích hợp vào dự án.
- Gợi ý người dùng chạy toàn trình (End-to-End) tính năng vừa làm để nghiệm thu.
