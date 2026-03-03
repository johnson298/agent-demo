---
description: How to commit code following the project's specific commit message conventions
---

This workflow guides you through committing code using the project's specific conventions based on Jira ticket IDs, commit types, and scopes.

1. **Check Git Status**
   First, check your current git status to see what files are modified and staged.

```bash
git status
```

2. **Stage your changes**
   Stage the files you want to include in this commit.

```bash
git add .
```

3. **Determine the Commit Format**
   Based on the project's history, your commit message must follow one of these formats:

**Format A: Single Ticket (Conventional Commits Style - Most Common)**
Structure: `{Ticket-ID} {type}({scope}): {description}`
_Examples:_

- `M29CMCCF-1317 fix(inhouse/settlement): 상생 브랜드 검색 필터 로딩 처리 및 성능 개선`
- `MIT-264 feat(inhouse/mother): CS 취소접수 모달 구현`
- `MIT-108 feat(inhouse/mother,partner/mother): 정산진행내역(배송완료기준) 목록 마이그레이션`
- `M29CMCCF-1283 feat(partner/auth): 토큰 과정 skip 하는 기능 추가`

**Format B: Multiple Tickets**
Structure: `[{Ticket-ID1}, {Ticket-ID2}, ...]: {description}`
_Example:_

- `[MXS-5950, MXS-5951, MXS-5952]: add blue and yellow nudge in the top ...`

**Format C: Custom Prefix**
Structure: `{Ticket-ID} [{prefix}] {description}`
_Example:_

- `M29CMCCF-1301 [보안정책_29CM] session storage 에서 쿠키로 변경`

4. **Identify the Components**

- **Ticket ID**: Usually starts with a project prefix like `M29CMCCF-`, `MIT-`, or `MXS-` followed by numbers.
- **Type**: `feat` for features, `fix` for bug fixes.
- **Scope**: Represents the domain/module (e.g., `inhouse/settlement`, `inhouse/mother`, `partner/auth`, `partner/mother`). Multiple scopes can be supported by separating them with a comma (e.g., `inhouse/mother,partner/mother`).
- **Description**: A clear and concise description of the changes.

_(Note: The `(#5966)` PR numbers shown in history are automatically appended by GitHub when a Pull Request is merged. Do not include them in your local commit message.)_

5. **Generate and Execute the Commit Command**
   After constructing your commit message, run the git commit command:

```bash
# Substitute the placeholder with your actual message based on the formats above
git commit -m "[YOUR_CONSTRUCTED_MESSAGE]"
```

6. **Push the Changes**
   Finally, push your code to the remote repository if you are ready.

```bash
git push
```
