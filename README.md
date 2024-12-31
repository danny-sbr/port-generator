# 文字轉端口號轉換器

這是一個簡單的網頁應用程式，可以將輸入的文字轉換成一個固定的端口號（介於 3001 到 9999 之間）。

## 功能特點

- 將任意文字轉換為 3001-9999 之間的端口號
- 相同的輸入文字會產生相同的端口號
- 支援按鈕點擊或 Enter 鍵觸發轉換
- 簡潔的使用者介面

## 技術實現

- 純 JavaScript 實現，無需額外依賴
- 使用 HTML5 和 CSS3 建構使用者介面
- 採用模組化的程式碼結構


## 轉換演算法

```javascript
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
```

## 檔案結構

- `index.html`: 網頁的 HTML 主檔案
- `src/main.js`: 主要的 JavaScript 程式碼
- `src/style.css`: 網頁的 CSS 樣式

## 使用方法

1. 打開 `index.html` 檔案
2. 在輸入框中輸入任意文字
3. 按下「轉換」按鈕或按 Enter 鍵
4. 結果將顯示在下方


