# 시스템사고분과 홈페이지

미래학교자치연구소 시스템사고분과의 공개 사이트입니다. 정적 HTML이라 서버가 필요 없습니다.

## 폴더
- `index.html` 홈 · `about.html` 소개 · `activities.html` 활동 기록 · `policy.html` 정책 분석 · `resources.html` 자료실 · `join.html` 참여·연락
- `assets/` 스타일(style.css)·스크립트(site.js)·아이콘
- `tools/` 브라우저에서 실행하는 도구(워크숍 앱, 시뮬레이터, 활동지)
- `docs/` PDF 자료 · `img/` 이미지

## 내용 고치기
각 `.html` 파일을 메모장이나 VS Code로 열어 글을 고친 뒤 GitHub에 다시 올리면 1~2분 안에 반영됩니다.
- 새 모임 추가: `activities.html`의 `<ol class="timeline">` 안에 `<li>` 한 덩어리를 복사해 날짜·회차·제목·요약을 바꿉니다. `bar b1/b2/b3/b0`이 읽은 책 색입니다.
- 유튜브 영상 넣기: `resources.html`의 `<div class="video">…</div>`를 `<div class="video"><iframe src="https://www.youtube.com/embed/영상ID" allowfullscreen></iframe></div>`로 바꿉니다.
- 가입 신청 폼: `join.html`의 `href="#"`에 폼 주소를 넣습니다.
- 다음 모임: `index.html`의 `<div class="next">` 안 날짜와 설명을 바꿉니다.
