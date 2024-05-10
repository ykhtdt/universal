const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일을 제공하기 위해 express.static 미들웨어를 사용합니다.
app.use(express.static(path.join(__dirname, "/")));

// 모든 요청에 대해 index.html을 반환하는 라우트 설정
app.get("*", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "index.html"));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});