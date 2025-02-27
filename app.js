const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ 정적 파일 제공 (index.html, css, js, assets 폴더)
app.use(express.static(path.join(__dirname)));


// ✅ 기본 페이지(index.html) 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// ✅ 서버 실행
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running at: http://exapmle.com`);
});


// 서버 시작 명령어: node server.js
// node_server.sh를 이용한 background 실행: bash node_server.sh start