---
description: Hướng dẫn các bước tự động commit, push code và tạo Pull Request (PR)
---

# Workflow: Commit, Push and Create Pull Request

Workflow này sẽ hướng dẫn các bước để commit code, push lên một nhánh và tạo pull request vào một nhánh đích.

**Inputs yêu cầu:**

- `source_branch`: Nhánh chứa code chứa thay đổi (để commit và push).
- `target_branch`: Nhánh đích để tạo pull request vào (VD: main, develop).
- `commit_message`: Nội dung commit.
- `pr_title`: Tiêu đề của pull request.
- `pr_body` (tuỳ chọn): Nội dung mô tả của pull request.

## Các bước thực hiện:

1. **Kiểm tra trạng thái các file thay đổi (Git Status)**
   Kiểm tra xem có những file nào đã bị thay đổi để đảm bảo commit đúng file.
   // turbo
   Chạy lệnh terminal: `git status`

2. **Chuyển / Tạo nhánh mới (`source_branch`)**
   Đảm bảo bạn đang ở đúng nhánh `source_branch`. Nếu nhánh chưa tồn tại, hãy tạo mới.
   Chạy lệnh terminal: `git checkout -B <source_branch>`

3. **Stage và Commit code**
   Thêm các file thay đổi vào staging và thực hiện commit. (Có thể sử dụng skill `git-commit` nếu cần format chuẩn).
   Chạy lệnh terminal:
   `git add .`
   `git commit -m "<commit_message>"`

4. **Push code lên remote repository**
   Push nhánh `source_branch` lên remote (`origin`).
   // turbo
   Chạy lệnh terminal: `git push -u origin <source_branch>`

5. **Tạo Pull Request**
   Sử dụng tool MCP của GitHub (`mcp_github-mcp-server_create_pull_request`) để tạo pull request:
   - `head`: `<source_branch>`
   - `base`: `<target_branch>`
   - `title`: `<pr_title>`
   - `body`: `<pr_body>`
     _(Lưu ý: Bạn cũng có thể dùng `gh pr create --base <target_branch> --head <source_branch> --title "<pr_title>" --body "<pr_body>"` nếu Git CLI được yêu cầu)_

6. **Thông báo hoàn tất**
   Báo cáo lại cho người dùng với link tới Pull Request vừa tạo.
