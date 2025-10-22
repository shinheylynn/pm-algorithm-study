# 📝 pm-algorithm-study

인티그레이션 PM Squad 알고리즘 스터디 레포입니다.  

<br>

### 📂 기본 폴더 구조
```bash
풀이 사이트
ㄴ 대분류 제목
  ㄴ [YY.MM.DD][문제 번호 및 제목]
    ㄴ 개인 풀이 파일

scripts
ㄴ 🛠 자동화 스크립트 파일
```

<br>

### 🛠 자동화 스크립트

#### `updateReadme` - README.md 자동 업데이트
LeetCode 문제 목록을 자동으로 업데이트하는 스크립트가 있습니다. 
새로운 문제를 추가한 후 `git push` 시 다음 명령어가 자동으로 실행됩니다:

```bash
npm run update-readme
```

- 폴더명 형식: `YY.MM.DD NUMBER. TITLE` (예: "25.09.03 35. Search Insert Position")
- 스크립트는 자동으로 leetcode 폴더를 스캔하여 README.md의 LeetCode 섹션을 업데이트합니다
- 기존의 다른 섹션들은 그대로 유지됩니다


<br/>

---

# 📁 문제 목록

### ![LeetCode](https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)

#### ㄴ Binary Search

1. [25.09.03 35. Search Insert Position](./leetcode/Binary%20Search/25.09.03%2035.%20Search%20Insert%20Position/)
2. [25.09.10 278. First Bad Version](./leetcode/Binary%20Search/25.09.10%20278.%20First%20Bad%20Version/)
3. [25.09.18 33. Search in Rotated Sorted Array](./leetcode/Binary%20Search/25.09.18%2033.%20Search%20in%20Rotated%20Sorted%20Array/)

#### ㄴ Binary Tree - DFS

1. [25.08.20 104. Maximum Depth of Binary Tree](./leetcode/Binary%20Tree%20-%20DFS/25.08.20%20104.%20Maximum%20Depth%20of%20Binary%20Tree/)
2. [25.08.27 94. Binary Tree Inorder Traversal](./leetcode/Binary%20Tree%20-%20DFS/25.08.27%2094.%20Binary%20Tree%20Inorder%20Traversal/)

#### ㄴ Linked List

1. [25.09.24 2. Add Two Numbers](./leetcode/Linked%20List/25.09.24%202.%20Add%20Two%20Numbers/)
2. [25.10.01 23. Merge k Sorted Lists](./leetcode/Linked%20List/25.10.01%2023.%20Merge%20k%20Sorted%20Lists/)

#### ㄴ Sorting

1. [25.10.20 88. Merge Sorted Array](./leetcode/Sorting/25.10.20%2088.%20Merge%20Sorted%20Array/)


<br/>

### ![Programmers](https://img.shields.io/badge/Programmers-000000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAABHNCSVQICAgIfAhkiAAAAYFJREFUaEPtmD9LQlEYxs/1D0kRgqCpscaWwC0SHIPAj9DQ1hcICqGxoU8QuLa2R0NRBI4RYRBBBhFCkFNTw0MvnMNVLnru1fdwOc8Nz3Z43+f3e855r0fIsgz+8WcQEP6MJX8QQvgzlvxBCCGEkEXAn7XkT0IIIYQQQgghhBBCyKLlz1ryJyGEEEIIIYQQQgghhCxa/qwlfxJCCCGEEEIIIYQQQhYtf9aSPwkhhBBCCCGEEEIIIYuWP2vJn4QQQgghhBBCCCGEkEXLn7XkT0IIIYQQQgghhBBCyKLlz1ryJyGEEEIIIYQQQgghi5Y/a8mfhBBCCCGEEEIIIYSQRcuftZQ/yWQyQbfbhcFgALZtg2EYoGkaKIoCkiSBKIogCAKIoghfH4ZhQK/Xg/F4DJZlgWmaYBgGaJoGqqpCLBaDeDwOkiTNHWI6nUK/34dhOATLsmE0GkE6nQZN00DTNEgkEpBMJkGWZU/3+v0+2LYNpmk6/6uqCslkElKpFMiyDNFo1NOz3h/z8cR/AXcYZhzw8uXHAAAAAElFTkSuQmCC)

#### ㄴ lv2

1. [25.07.02 [3차] n진수 게임](./programmers/lv2/25.07.02%20%5B3%EC%B0%A8%5D%20n%EC%A7%84%EC%88%98%20%EA%B2%8C%EC%9E%84/)
2. [25.07.09 k진수에서 소수 개수 구하기](./programmers/lv2/25.07.09%20k%EC%A7%84%EC%88%98%EC%97%90%EC%84%9C%20%EC%86%8C%EC%88%98%20%EA%B0%9C%EC%88%98%20%EA%B5%AC%ED%95%98%EA%B8%B0/)
3. [25.07.16 [3차] 압축](./programmers/lv2/25.07.16%20%5B3%EC%B0%A8%5D%20%EC%95%95%EC%B6%95/)
4. [25.07.23 두 큐 합 같게 만들기](./programmers/lv2/25.07.23%20%EB%91%90%20%ED%81%90%20%ED%95%A9%20%EA%B0%99%EA%B2%8C%20%EB%A7%8C%EB%93%A4%EA%B8%B0/)
5. [25.07.30 비밀 코드 해독](./programmers/lv2/25.07.30%20%EB%B9%84%EB%B0%80%20%EC%BD%94%EB%93%9C%20%ED%95%B4%EB%8F%85/)
6. [25.08.06 피로도](./programmers/lv2/25.08.06%20%ED%94%BC%EB%A1%9C%EB%8F%84/)

<br>
<br>
<br>

---

<a href="https://github.com/shinheylynn/pm-algorithm-study/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=shinheylynn/pm-algorithm-study" />
</a>

📤 클릭하면 기여도 인사이트로 이동합니다.