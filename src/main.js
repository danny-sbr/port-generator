/**
 * 將一個字串映射成一個介於 3001 到 9999 的端口號。
 * @param {string} str - 要轉換的字串。
 * @returns {number} 映射後的端口號。
 */
function stringToPort(str) {
	// 如果字串為空，則回傳最小端口號 3001
	if (str.length === 0) return 3001;

	// 計算字串的哈希值
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // 將哈希值轉換為 32 位整數
	}

	// 定義端口範圍：3001 到 9999
	const portRange = 9999 - 3000; // 總共 6999 個端口號

	// 將哈希值映射到指定的端口範圍內
	const port = (((hash % portRange) + portRange) % portRange) + 3001;
	return port;
}

// DOM 元素
const textInput = document.getElementById("textInput");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// 點擊轉換按鈕時的處理函式
convertBtn.addEventListener("click", () => {
	const inputText = textInput.value;
	const port = stringToPort(inputText);
	resultDiv.textContent = `轉換結果：${port}`;
});

// 按下 Enter 鍵時也觸發轉換
textInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		const inputText = textInput.value;
		const port = stringToPort(inputText);
		resultDiv.textContent = `轉換結果：${port}`;
	}
});
