---
description: Hướng dẫn các bước lập kế hoạch chi tiết trước khi thực hiện viết code cho một task
---

# Workflow Lập Kế Hoạch Task (Task Planning Workflow)

Khi bắt đầu một task mới, để đảm bảo chất lượng code và đi đúng hướng, việc lập kế hoạch là bắt buộc. Hãy thực hiện tuần tự các bước dưới đây để tạo ra một kế hoạch rõ ràng **TRƯỚC KHI** tiến hành viết hoặc sửa code.

## Bước 1: Phân tích Yêu cầu (Requirement Analysis)

- Đọc kỹ yêu cầu task để hiểu **mục tiêu cốt lõi** và kết quả đầu ra mong đợi (Definition of Done).
- Chủ động đặt câu hỏi với người dùng nếu có bất kỳ điểm nào không rõ ràng, mơ hồ hoặc nếu bạn phát hiện ra các trường hợp ngoại lệ (Edge cases) cần xử lý.

## Bước 2: Thu thập Ngữ cảnh Dự án (Context Gathering)

- Tra cứu các file source code liên quan thông qua các công cụ tìm kiếm và xem nội dung file.
- Nắm bắt Architecture, **quy chuẩn (Conventions)** và **mẫu thiết kế (Design Patterns)** đang được dự án sử dụng để đảm bảo tính đồng nhất.
- Đọc lướt qua các đoạn code cũ hoặc các Knowledge Items (KIs) có liên quan (nếu có) để có giải pháp tối ưu hóa đúng ngữ cảnh.

## Bước 3: Xác định Phạm vi Công việc (Scope Definition)

- Định nghĩa rõ ràng danh sách **các file cần sửa đổi** và **các file cần tạo mới**.
- Phân tích rủi ro phụ thuộc (Dependencies): Thay đổi này sẽ ảnh hưởng tới các modules, components, hay test cases nào khác trong hệ thống.

## Bước 4: Xây dựng Kế hoạch Thực thi (Step-by-step Execution Plan)

Chia nhỏ task thành các bước thực thi rõ ràng, sắp xếp theo một trình tự logic (Ví dụ: DB/Schema -> API/Backend -> State Management -> UI/Frontend -> Tests).
Dành cho mỗi bước, hãy liệt kê tóm tắt:

1. **Tên Bước**: Công việc cụ thể là gì? (vd: Xây dựng UI Component `InvoiceForm`).
2. **Chi tiết Implement**: Triển khai giải pháp hoặc logic xử lý cốt lõi bằng cách nào? (Công nghệ sử dụng, cấu trúc dữ liệu, v.v.).

## Bước 5: Viết File Kế Hoạch & Chọn Phê Duyệt (Output & Review)

- **Bắt buộc:** Bạn phải tạo ra một output file cho bản kế hoạch này (ví dụ lưu dưới dạng artifact `implementation_plan.md` hoặc một file `.md` trong thư mục dự án) để người dùng dễ theo dõi và review. Không chỉ in kế hoạch ra màn hình chat.
- Trình bày đường link tới file kế hoạch vừa tạo cho người dùng thấy.
- Tham khảo ý kiến và xin xác nhận.
- **Quan trọng:** CHỈ bắt tay vào giai đoạn Code / Execution (sử dụng `/apply-plan`) **SAU KHI** người dùng đã phê duyệt hoặc xác nhận đồng ý với file kế hoạch được đề xuất.
