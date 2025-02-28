document.getElementById("startGame").addEventListener("click", startFirstQuiz);

/* 📌 첫 번째 퀴즈 */
function startFirstQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 첫 번째 퀴즈</h2>
            <p>우리가 처음으로 노션을 시작한 날짜는 언제일까요?</p>
            <button onclick="checkFirstAnswer('A')">📅 1/29</button>
            <button onclick="checkFirstAnswer('B')">📅 1/30</button>
            <button onclick="checkFirstAnswer('C')">📅 1/31</button>
            <button onclick="checkFirstAnswer('D')">📅 2/1</button>
        </div>
    `;
}

/* 📌 첫 번째 퀴즈 정답 체크 */
function checkFirstAnswer(answer) {
    if (answer === "C") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>맞아요! 🎉 1월 31일,<br>우리의 특별한 공간이 생긴 날이야! 📒💖</p>
                <p>그때부터 함께 정리하고 추억을 쌓아왔어! 😊✨</p>
                <button onclick="startSecondQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 두 번째 퀴즈 */
function startSecondQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 두 번째 퀴즈</h2>
            <p>우리가 만나기로 한 첫날, 자기 전에 얼마나 통화했을까요?</p>
            <button onclick="checkSecondAnswer('A')">📞 2시간 13분</button>
            <button onclick="checkSecondAnswer('B')">📞 2시간 21분</button>
            <button onclick="checkSecondAnswer('C')">📞 2시간 28분</button>
            <button onclick="checkSecondAnswer('D')">📞 2시간 39분</button>
        </div>
    `;
}

/* 📌 두 번째 퀴즈 정답 체크 */
function checkSecondAnswer(answer) {
    if (answer === "D") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>첫날부터 이렇게 오래 통화했다니! 🥰<br>할 이야기가 정말 많았나 봐!</p>
                <p>앞으로도 오래오래 얘기하자! 💕</p>
                <button onclick="startTreasureHunt()">▶ 다음 스테이지</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}


// =====================================================================
/* 📌 2단계: 보물찾기 */
function startTreasureHunt() {
    let possibleSpots = [0, 1, 2, 3]; // 4개의 장소
    let treasureIndex = Math.floor(Math.random() * 4); // 4개 중 1개 보물 설정
    // let treasureIndex = 0

    document.body.innerHTML = `
        <div class="container">
            <h2>🔍 보물찾기 퍼즐</h2>
            <p>4개의 장소 중 1개의 보물을 찾아보세요!</p>
            <div class="grid-4">
                ${possibleSpots.map((i) => 
                    `<button id="btn-${i}" onclick="checkTreasure(${i}, ${treasureIndex})">❓</button>`
                ).join('')}
            </div>
        </div>
    `;
}

/* 📌 보물 체크 */
function checkTreasure(clickedIndex, treasureIndex) {
    let button = document.getElementById(`btn-${clickedIndex}`);

    if (clickedIndex === treasureIndex) {
        button.disabled = true;  // ✅ 보물 버튼 비활성화
        button.innerText = "💎"; // 보물 발견
        button.classList.add("found");  // ✅ 애니메이션 클래스 추가
        
        setTimeout(() => {
            startThirdQuiz();  // ✅ 보물 찾으면 두 번째 퀴즈 시작
        }, 1000);
    } else {
        button.disabled = true;  // ✅ 틀린 버튼도 비활성화
        button.classList.add("shake");
        button.style.background = "#d9534f";  // ❌ 틀린 경우 빨간색으로 변경
        button.style.color = "white";  // ❌ 글씨색 변경

        document.body.innerHTML = `
            <div class="container shake-container">
                <h2>틀렸어요! ❌</h2>
                <p>보물을 찾지 못했습니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;

        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 세 번째 퀴즈 */
function startThirdQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 세 번째 퀴즈</h2>
            <p>지금까지 우리가 함께 찍은 네컷 사진의 횟수는 몇 번일까요?</p>
            <button onclick="checkThirdAnswer('A')">📸 3번</button>
            <button onclick="checkThirdAnswer('B')">📸 4번</button>
            <button onclick="checkThirdAnswer('C')">📸 5번</button>
            <button onclick="checkThirdAnswer('D')">📸 6번</button>
        </div>
    `;
}

/* 📌 세 번째 퀴즈 정답 체크 */
function checkThirdAnswer(answer) {
    if (answer === "C") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>벌써 5번이나 네컷 사진을 찍었네! 😆</p>
                <p>매번 다 다른 포즈로, 너무 귀여운 사진들로 가득했어!<br>다음에도 또 찍자! 💖</p>
                <button onclick="startFourthQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 네 번째 퀴즈 */
function startFourthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 네 번째 퀴즈</h2>
            <p>듀플릿 두 번째 방문 날, 네컷 사진의 2열 2행에서 우리가 한 포즈는?</p>
            <button onclick="checkFourthAnswer('A')">🤗 턱받침</button>
            <button onclick="checkFourthAnswer('B')">😘 화은 → 우림 뽀뽀</button>
            <button onclick="checkFourthAnswer('C')">😘 우림 → 화은 뽀뽀</button>
            <button onclick="checkFourthAnswer('D')">🫶 손하트</button>
        </div>
    `;
}

/* 📌 네 번째 퀴즈 정답 체크 */
function checkFourthAnswer(answer) {
    if (answer === "B") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>그날 너무 귀엽고 사랑스러운 순간이었지! 🥰</p>
                <p>우리들의 알콩달콩한 포즈로! 다음에 또 해볼까? 💑💖</p>
                <button onclick="startFifthQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 다섯 번째 퀴즈 */
function startFifthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 다섯 번째 퀴즈</h2>
            <p>설날에 여보가 스스로 말한 신체 나이는 몇 살이었을까요?</p>
            <button onclick="checkFifthAnswer('A')">👵 40대</button>
            <button onclick="checkFifthAnswer('B')">👵 50대</button>
            <button onclick="checkFifthAnswer('C')">👵 60대</button>
            <button onclick="checkFifthAnswer('D')">👵 70대</button>
        </div>
    `;
}

/* 📌 다섯 번째 퀴즈 정답 체크 */
function checkFifthAnswer(answer) {
    if (answer === "B") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>그때 들으면서 아주 귀여웠는데! 😆<br>우리 건강하게 50대까지도 젊게 살자! 💪💕</p>
                <button onclick="startCardGame()">▶ 다음 스테이지</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}


// =====================================================================
/* 📌 4단계: 카드 뒤집기 게임 */
function startCardGame(size = 6) {
    let cardSymbols = [];
    let gridClass = size === 6 ? "grid-6x6" : "grid-4x4"; // ✅ 그리드 클래스 설정
    let pairs = (size * size) / 2; // 카드 쌍 개수 설정

    let emojis = ["👑", "🎀", "🍰", "🍀", "❤️‍🔥", "☕", "📺", "🎄", "💓", "💖", "🦑", "🕊️", "🍊", "🍕", "💋", "🐻", "📞", "🎤",
                  "👑", "🎀", "🍰", "🍀", "❤️‍🔥", "☕", "📺", "🎄", "💓", "💖", "🦑", "🕊️", "🍊", "🍕", "💋", "🐻", "📞", "🎤"];
    let selectedEmojis = emojis.slice(0, pairs); 
    cardSymbols = [...selectedEmojis, ...selectedEmojis]; // 이모지 쌍 만들기
    cardSymbols.sort(() => Math.random() - 0.5);  // 랜덤 섞기

    document.body.innerHTML = `
        <div class="container card-game-container">  <!-- ✅ 카드 게임에서만 크기 조절 -->
            <h2>🃏 카드 뒤집기</h2>
            <p>같은 그림의 카드를 모두 맞춰보세요!</p>
            <div class="${gridClass}">
                ${cardSymbols.map((symbol, i) => 
                    `<button id="card-${i}" class="card" onclick="flipCard(${i}, '${symbol}')">❓</button>`
                ).join('')}
            </div>
        </div>
    `;

    flippedCards = [];
    matchedPairs = 0;
}

let flippedCards = [];
let matchedPairs = 0;
let isChecking = false; // ✅ 카드가 확인 중인지 여부를 체크하는 변수 추가

/* 📌 카드 뒤집기 */
function flipCard(index, symbol) {
    let button = document.getElementById(`card-${index}`);

    // ✅ 카드가 이미 확인 중이라면 클릭 방지
    if (isChecking || flippedCards.length >= 2 || flippedCards.some(card => card.index === index)) {
        return;
    }

    button.innerText = symbol;
    flippedCards.push({ index, symbol });

    if (flippedCards.length === 2) {
        isChecking = true; // ✅ 카드 확인 중 상태 활성화
        setTimeout(checkCardMatch);
    }
}

/* 📌 뒤집은 카드 체크 */
function checkCardMatch() {
    let card1 = document.getElementById(`card-${flippedCards[0].index}`);
    let card2 = document.getElementById(`card-${flippedCards[1].index}`);

    if (flippedCards[0].symbol === flippedCards[1].symbol) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        card1.disabled = true; // ✅ 클릭 방지
        card2.disabled = true; // ✅ 클릭 방지
        
        matchedPairs++;

        // ✅ 모든 쌍을 맞추면 다음 스테이지로 이동
        let totalPairs = document.querySelector(".grid-6x6") ? 18 : 8;
        if (matchedPairs === totalPairs) {
            setTimeout(startSixthQuiz, 800);
        }
    } else {
        setTimeout(() => {
            card1.innerText = "❓";
            card2.innerText = "❓";
        }, 300);
    }
    
    flippedCards = [];
    setTimeout(() => {
        isChecking = false; // ✅ 카드 확인이 끝난 후 다시 클릭 가능하도록 설정
    }, 300);
}

/* 📌 여섯 번째 퀴즈 */
/* 📌 정답 순서 설정 */
let correctOrder = ["C", "A", "B"]; // 올바른 노래 순서
let userOrder = []; // 사용자가 선택한 순서

function startSixthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 여섯 번째 퀴즈</h2>
            <p>경주 여행에서 첫째 날 부른 노래의 순서는 어떻게 될까요?</p>
            <button id="songA" class="song-btn" onclick="selectSong('A')">🎶 바라봐줘요</button>
            <button id="songB" class="song-btn" onclick="selectSong('B')">🎼 진심이 담긴 노래<br>(True Song)</button>
            <button id="songC" class="song-btn" onclick="selectSong('C')">🎵 그대를 사랑하는<br>10가지 이유</button>
        </div>
    `;

    // 선택한 순서 초기화
    userOrder = [];
}

/* 📌 사용자가 노래 버튼을 클릭했을 때 */
function selectSong(songId) {
    let button = document.getElementById(`song${songId}`);

    // 이미 선택한 버튼은 다시 누를 수 없음
    if (userOrder.includes(songId)) return;

    // 버튼 색상 변경 (선택됨 표시)
    button.style.background = "#4caf50";
    button.style.color = "white";

    // 선택한 순서 기록
    userOrder.push(songId);

    // 3개 버튼을 다 누르면 정답 확인
    if (userOrder.length === 3) {
        checkSixthAnswer();
    }
}

/* 📌 정답 확인 */
function checkSixthAnswer() {
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
        setTimeout(() => {
            document.body.innerHTML = `
                <div class="container">
                    <h2>정답! 🎉</h2>
                    <p>그날 노래 불러줘서 너무 기분 좋았지! 🎵💕</p>
                    <p>다음에도 같이 불러보자! 🎤💖</p>
                    <button onclick="startSeventhQuiz()">▶ 다음 퀴즈</button>
                </div>
            `;
        }, 500);
    } else {
        setTimeout(() => {
            document.body.innerHTML = `
                <div class="container">
                    <h2>틀렸어요! ❌</h2>
                    <p>정답이 아닙니다. 다시 도전하세요.</p>
                </div>
            `;

            // ✅ 1.5초 후에 메인 화면으로 이동
            setTimeout(goToMainScreen, 1500);
        }, 500);
    }
}

/* 📌 일곱 번째 퀴즈 */
function startSeventhQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 일곱 번째 퀴즈</h2>
            <p>경주 여행 둘째 날, 우리가 만난 지 몇 일째였을까요?</p>
            <button onclick="checkSeventhAnswer('A')">📆 74일</button>
            <button onclick="checkSeventhAnswer('B')">📆 75일</button>
            <button onclick="checkSeventhAnswer('C')">📆 76일</button>
            <button onclick="checkSeventhAnswer('D')">📆 77일</button>
        </div>
    `;
}

/* 📌 일곱 번째 퀴즈 정답 체크 */
function checkSeventhAnswer(answer) {
    if (answer === "A") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>우리의 74일째, 특별한 추억을 만들었던 날이었어!</p>
                <p>시간이 이렇게 빨리 흐르다니,<br>앞으로도 더 많은 날을 함께하자! 💕</p>
                <button onclick="startEighthQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 여덟 번째 퀴즈 */
function startEighthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 여덟 번째 퀴즈</h2>
            <p>발렌타인데이에 노션에 쓴 편지에서<br>두 번째 문장에 사용한 단어는?</p>
            <button onclick="checkEighthAnswer('A')">💕 사랑</button>
            <button onclick="checkEighthAnswer('B')">💖 영원</button>
            <button onclick="checkEighthAnswer('C')">🙏 감사</button>
            <button onclick="checkEighthAnswer('D')">😘 소중</button>
        </div>
    `;
}

/* 📌 여덟 번째 퀴즈 정답 체크 */
function checkEighthAnswer(answer) {
    if (answer === "C") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>항상 늘 여보한테 감사한 마음을 가지고 있어! 💖</p>
                <p>이렇게 소중한 순간들을 함께해서 너무 행복해! 😊💞</p>
                <button onclick="startPasswordQuiz()">▶ 다음 스테이지</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}


// =====================================================================
/* 📌 비밀번호 문제 데이터 (각 문제의 정답) */
const passwordQuestions = [
    { hint: "📜 고백한 날 저녁식사한 식당명의 글자 수는?", answer: "5" },
    { hint: "📜 같이 네컷 찍은 횟수는?", answer: "5" },
    { hint: "📜 우리가 같이 서울 간 날의 날짜는? (10월 ?일)", answer: "26" }
];

let userInput = "";

/* 📌 비밀번호 퀴즈 시작 */
function startPasswordQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔐 비밀번호 퀴즈</h2>
            <p>📖 <strong>노션 문서를 참고하여 정답을 찾고, <br>숫자를 입력하세요!</strong></p>
            <p>🔢 <strong>예시: 10 2 13 → 10213</strong></p>
            <div class="question-box">
                ${passwordQuestions.map(q => `<p>${q.hint}</p>`).join('')}
            </div>

            <div class="input-box">
                <input id="passwordInput" type="text" value="${userInput}" readonly>
            </div>

            <div class="keypad">
                ${[1,2,3,4,5,6,7,8,9,0].map(n => `<button onclick="addDigit(${n})">${n}</button>`).join('')}
                <button class="clear" onclick="clearInput()">⟵</button>
                <button class="submit" onclick="checkFinalPassword()">✔</button>
            </div>
        </div>
    `;
}

/* 📌 숫자 입력 (키패드) */
function addDigit(num) {
    if (userInput.length < 5) { // 최대 5자리 입력 가능
        userInput += num;
        document.getElementById("passwordInput").value = userInput;
    }
}

/* 📌 입력 초기화 (지우기 버튼) */
function clearInput() {
    userInput = userInput.slice(0, -1);
    document.getElementById("passwordInput").value = userInput;
}

/* 📌 최종 비밀번호 확인 */
function checkFinalPassword() {
    const correctPassword = passwordQuestions.map(q => q.answer).join(""); // 정답 조합

    if (userInput === correctPassword) {
        showSuccessScreen();
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>비밀번호가 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 퀴즈 클리어 화면 */
function showSuccessScreen() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🎉 축하합니다! 🎉</h2>
            <p>비밀번호를 해독했어요! 다음 단계로 이동합니다.</p>
            <button onclick="startNinthQuiz()">▶ 다음 퀴즈</button>
        </div>
    `;
}

/* 📌 아홉 번째 퀴즈 */
function startNinthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 아홉 번째 퀴즈</h2>
            <p>백문백답2에서 21번의 답은 무엇이었을까요?</p>
            <button onclick="checkNinthAnswer('A')">💞 더 주고도 모자람</button>
            <button onclick="checkNinthAnswer('B')">🚫 불가능</button>
            <button onclick="checkNinthAnswer('C')">💓 안아줄 때</button>
            <button onclick="checkNinthAnswer('D')">🤝 내가 같이 있을게</button>
        </div>
    `;
}

/* 📌 아홉 번째 퀴즈 정답 체크 */
function checkNinthAnswer(answer) {
    if (answer === "D") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>우리 언제 어디서든 서로의 편이 되어주기로 약속했지!</p>
                <p>앞으로도 항상 곁에서 함께하자! 💑💖</p>
                <button onclick="startTenthQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 열 번째 퀴즈 */
function startTenthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 열 번째 퀴즈</h2>
            <p>백문백답2에서 22번의 답은 무엇이었을까요?</p>
            <button onclick="checkTenthAnswer('A')">💕 벗</button>
            <button onclick="checkTenthAnswer('B')">🏢 건물주</button>
            <button onclick="checkTenthAnswer('C')">🥘 요리</button>
            <button onclick="checkTenthAnswer('D')">🔗 동기화</button>
        </div>
    `;
}

/* 📌 열 번째 퀴즈 정답 체크 */
function checkTenthAnswer(answer) {
    if (answer === "A") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>서로를 이해하고, 아껴주고, 늘 함께하자! 💞✨</p>
                <p>다음에 꼭 불러줘! 🎤💖</p>
                <button onclick="startEleventhQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 열한 번째 퀴즈 */
function startEleventhQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 열한 번째 퀴즈</h2>
            <p>백문백답2에서 38번의 답은 무엇이었을까요?</p>
            <button onclick="checkEleventhAnswer('A')">🫡 예절</button>
            <button onclick="checkEleventhAnswer('B')">😐 진지모드</button>
            <button onclick="checkEleventhAnswer('C')">🥰 0순위</button>
            <button onclick="checkEleventhAnswer('D')">🔒 비밀</button>
        </div>
    `;
}

/* 📌 열한 번째 퀴즈 정답 체크 */
function checkEleventhAnswer(answer) {
    if (answer === "D") {
        document.body.innerHTML = `
            <div class="container">
                <h2>정답! 🎉</h2>
                <p>자기의 비밀, 이제는 말해줄 때가 된 것 같아!</p>
                <p>앞으로 둘만의 소중한 기억을 가득 만들자! 💑💖</p>
                <button onclick="startTwelfthQuiz()">▶ 다음 퀴즈</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>틀렸어요! ❌</h2>
                <p>정답이 아닙니다. 다음 기회에 다시 도전하세요.</p>
            </div>
        `;
        // ✅ 0.5초 후에 메인 화면으로 이동
        setTimeout(goToMainScreen, 1500);
    }
}

/* 📌 열두 번째 퀴즈 */
function startTwelfthQuiz() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🔎 열두 번째 퀴즈</h2>
            <p>앞으로 우리만의 특별한 습관을 만든다면,<br>무엇이 가장 좋을까요?</p>
            <button onclick="checkTwelfthAnswer('A')">🌙 하루의 마지막에<br>"오늘의 행복" 한 가지 공유하기</button>
            <button onclick="checkTwelfthAnswer('B')">🎨 매달 한 번, 특별한 테마로<br>그림 또는 낙서 그리기</button>
            <button onclick="checkTwelfthAnswer('C')">🥂 매달 한 번, 하나씩 새로운<br>음식이나 음료 도전하기</button>
            <button onclick="checkTwelfthAnswer('D')">🌎 매달 한 번,<br>"버킷리스트 데이" 만들기</button>
        </div>
    `;
}

/* 📌 열두 번째 퀴즈 정답 체크 */
function checkTwelfthAnswer(answer) {
    if (answer === "A") {
        document.body.innerHTML = `
            <div class="container">
                <h2>좋아! 😊</h2>
                <p>하루의 끝마다 서로에게 행복한 순간을 말해주는 것,<br>너무 따뜻할 것 같아! 💖</p>
                <p>오늘 하루 행복한 순간을 만들어보자! 💕</p>
                <button onclick="FinalStage()">▶ 다음 스테이지</button>
            </div>
        `;
    } else if (answer === "B") {
        document.body.innerHTML = `
            <div class="container">
                <h2>좋아! 😊</h2>
                <p>어떤 일상들이 그려질지 벌써 기대돼! 🎨</p>
                <p>오늘은 어떤 그림이 그려질까? ✍️💕</p>
                <button onclick="FinalStage()">▶ 다음 스테이지</button>
            </div>
        `;
    } else if (answer === "C") {
        document.body.innerHTML = `
            <div class="container">
                <h2>좋아! 😊</h2>
                <p>맛집 탐방! 🍽️ <br>새로운 맛을 함께 찾아다니는 것도 정말 재밌을 것 같아! 😋</p>
                <p>이번 달에는 어떤 새로운 음식을 도전해볼까? 🍕🍣🍰</p>
                <button onclick="FinalStage()">▶ 다음 스테이지</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="container">
                <h2>좋아! 😊</h2>
                <p>우리의 버킷리스트를 하나씩 실현하면서,<br>특별한 추억을 더 많이 만들어가자! ✨</p>
                <p>이번 달엔 어떤 새로운 경험을 해볼까? 💡💕</p>
                <button onclick="FinalStage()">▶ 다음 스테이지</button>
            </div>
        `;
    }
}


/* =================================================== */ 

/* 📌 메인 화면으로 돌아가기 */
function goToMainScreen() {
    document.body.innerHTML = `
        <div class="container fade-in">
            <h1>🎮 사랑의 파노라마<br>: 100일의 추억</h1>
            <p><span class="highlight">모든 미션을 <b>한번에</b></span> 클리어하면 <br>특별한 장소가 나타나요!</p>
            <button id="startGame">🚀 게임 시작</button>
        </div>
    `;
    document.getElementById("startGame").addEventListener("click", startFirstQuiz);
}

/* 📌 최종 스테이지 */
function FinalStage() {
    document.body.innerHTML = `
        <div class="container">
            <h2>🎊 축하합니다!</h2>
            <p>모든 미션을 클리어했습니다! <br>이제 특별한 장소로 이동합니다. 😊</p>
            <button onclick="goToNextMission()">▶ 특별한 장소 보기</button>
        </div>
    `;
}

function goToNextMission() {
    document.body.innerHTML = `
            <div class="container">
                <h2>이곳으로 가보세요!</h2>
                <p id="finalPlace">서면 롯데백화점 B1, <br>고디바 매장 뒷편</p>
            </div>
        `;
}
