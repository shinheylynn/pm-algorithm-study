import fs from 'fs-extra';
import path from 'path';

interface Problem {
    date: string;
    number?: string;  // optional for Programmers problems
    title: string;
    path: string;
}

interface Category {
    name: string;
    problems: Problem[];
}

const LEETCODE_DIR = path.join(__dirname, '..', 'leetcode');
const PROGRAMMERS_DIR = path.join(__dirname, '..', 'programmers');
const README_PATH = path.join(__dirname, '..', 'README.md');

// Section markers in README.md
const LEETCODE_SECTION = '### ![LeetCode](https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)';
const PROGRAMMERS_SECTION = '### ![Programmers](https://img.shields.io/badge/Programmers-000000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAABHNCSVQICAgIfAhkiAAAAYFJREFUaEPtmD9LQlEYxs/1D0kRgqCpscaWwC0SHIPAj9DQ1hcICqGxoU8QuLa2R0NRBI4RYRBBBhFCkFNTw0MvnMNVLnru1fdwOc8Nz3Z43+f3e855r0fIsgz+8WcQEP6MJX8QQvgzlvxBCCGEkEXAn7XkT0IIIYQQQgghhBBCyKLlz1ryJyGEEEIIIYQQQgghhCxa/qwlfxJCCCGEEEIIIYQQQhYtf9aSPwkhhBBCCCGEEEIIIYuWP2vJn4QQQgghhBBCCCGEkEXLn7XkT0IIIYQQQgghhBBCyKLlz1ryJyGEEEIIIYQQQgghi5Y/a8mfhBBCCCGEEEIIIYSQRcuftZQ/yWQyQbfbhcFgALZtg2EYoGkaKIoCkiSBKIogCAKIoghfH4ZhQK/Xg/F4DJZlgWmaYBgGaJoGqqpCLBaDeDwOkiTNHWI6nUK/34dhOATLsmE0GkE6nQZN00DTNEgkEpBMJkGWZU/3+v0+2LYNpmk6/6uqCslkElKpFMiyDNFo1NOz3h/z8cR/AXcYZhzw8uXHAAAAAElFTkSuQmCC)';

// LeetCode 문제 폴더명을 파싱하는 함수
function parseLeetCodeProblemFolder(folderName: string): Problem | null {
    // 예상 형식: "25.09.03 35. Search Insert Position"
    const match = folderName.match(/^(\d{2}\.\d{2}\.\d{2})\s+(\d+)\.\s+(.+)$/);
    if (!match || !match[1] || !match[2] || !match[3]) return null;

    const [, date, number, title] = match;
    return {
        date,
        number,
        title,
        path: encodeURIComponent(folderName)
    };
}

// Programmers 문제 폴더명을 파싱하는 함수
function parseProgrammersProblemFolder(folderName: string): Problem | null {
    // 예상 형식: "25.07.02 [3차] n진수 게임"
    const match = folderName.match(/^(\d{2}\.\d{2}\.\d{2})\s+(.+)$/);
    if (!match || !match[1] || !match[2]) return null;

    const [, date, title] = match;
    return {
        date,
        title,
        path: encodeURIComponent(folderName)
    };
}

// leetcode 디렉토리를 스캔하여 카테고리와 문제들을 수집
async function scanLeetcodeDirectory(): Promise<Category[]> {
    const categories: Category[] = [];
    const dirs = await fs.readdir(LEETCODE_DIR);

    for (const dir of dirs) {
        const categoryPath = path.join(LEETCODE_DIR, dir);
        const stat = await fs.stat(categoryPath);

        if (!stat.isDirectory()) continue;

        const problems: Problem[] = [];
        const problemDirs = await fs.readdir(categoryPath);

        for (const problemDir of problemDirs) {
            const problem = parseLeetCodeProblemFolder(problemDir);
            if (problem) {
                problems.push({
                    ...problem,
                    path: `./leetcode/${encodeURIComponent(dir)}/${problem.path}/`
                });
            }
        }

        if (problems.length > 0) {
            // 날짜순으로 정렬
            problems.sort((a, b) => a.date.localeCompare(b.date));
            categories.push({
                name: dir,
                problems
            });
        }
    }

    return categories;
}

// programmers 디렉토리를 스캔하여 카테고리와 문제들을 수집
async function scanProgrammersDirectory(): Promise<Category[]> {
    const categories: Category[] = [];
    const dirs = await fs.readdir(PROGRAMMERS_DIR);

    for (const dir of dirs) {
        const categoryPath = path.join(PROGRAMMERS_DIR, dir);
        const stat = await fs.stat(categoryPath);

        if (!stat.isDirectory()) continue;

        const problems: Problem[] = [];
        const problemDirs = await fs.readdir(categoryPath);

        for (const problemDir of problemDirs) {
            const problem = parseProgrammersProblemFolder(problemDir);
            if (problem) {
                problems.push({
                    ...problem,
                    path: `./programmers/${encodeURIComponent(dir)}/${problem.path}/`
                });
            }
        }

        if (problems.length > 0) {
            // 날짜순으로 정렬
            problems.sort((a, b) => a.date.localeCompare(b.date));
            categories.push({
                name: dir,
                problems
            });
        }
    }

    return categories;
}

// README.md 파일의 LeetCode와 Programmers 섹션을 업데이트
async function updateReadme(leetcodeCategories: Category[], programmersCategories: Category[]) {
    let content = await fs.readFile(README_PATH, 'utf8');

    // LeetCode 섹션 업데이트
    let leetcodeStartIdx = content.indexOf(LEETCODE_SECTION);
    if (leetcodeStartIdx === -1) {
        console.error('LeetCode section not found in README.md');
        return;
    }

    let leetcodeEndIdx = content.indexOf(PROGRAMMERS_SECTION, leetcodeStartIdx);
    if (leetcodeEndIdx === -1) {
        leetcodeEndIdx = content.indexOf('###', leetcodeStartIdx + LEETCODE_SECTION.length);
        if (leetcodeEndIdx === -1) {
            leetcodeEndIdx = content.length;
        }
    }

    // 새로운 LeetCode 섹션 생성
    let newLeetCodeSection = LEETCODE_SECTION + '\n\n';
    for (const category of leetcodeCategories) {
        newLeetCodeSection += `#### ㄴ ${category.name}\n\n`;
        category.problems.forEach((problem, index) => {
            newLeetCodeSection += `${index + 1}. [${problem.date} ${problem.number}. ${problem.title}](${problem.path})\n`;
        });
        newLeetCodeSection += '\n';
    }

    // Programmers 섹션 업데이트
    let programmersStartIdx = content.indexOf(PROGRAMMERS_SECTION);
    let newProgrammersSection = PROGRAMMERS_SECTION + '\n\n';
    
    for (const category of programmersCategories) {
        newProgrammersSection += `#### ㄴ ${category.name}\n\n`;
        category.problems.forEach((problem, index) => {
            newProgrammersSection += `${index + 1}. [${problem.date} ${problem.title}](${problem.path})\n`;
        });
        newProgrammersSection += '\n';
    }

    // 각 섹션을 개별적으로 업데이트
    let updatedContent = content;

    // LeetCode 섹션 업데이트
    updatedContent = 
        content.substring(0, leetcodeStartIdx) + 
        newLeetCodeSection + 
        content.substring(leetcodeEndIdx);

    // Programmers 섹션 업데이트
    if (programmersStartIdx !== -1) {
        let programmersEndIdx = content.indexOf('###', programmersStartIdx + PROGRAMMERS_SECTION.length);
        if (programmersEndIdx === -1) {
            programmersEndIdx = content.length;
        }
        updatedContent = 
            updatedContent.substring(0, programmersStartIdx) + 
            newProgrammersSection + 
            updatedContent.substring(programmersEndIdx);
    } else {
        // Programmers 섹션이 없으면 파일 끝에 추가
        updatedContent += '\n' + newProgrammersSection;
    }

    await fs.writeFile(README_PATH, updatedContent, 'utf8');
}

// 메인 실행 함수
async function main() {
    try {
        const [leetcodeCategories, programmersCategories] = await Promise.all([
            scanLeetcodeDirectory(),
            scanProgrammersDirectory()
        ]);
        await updateReadme(leetcodeCategories, programmersCategories);
        console.log('✅ README.md has been successfully updated!\n');
    } catch (error) {
        console.error('❌ Error updating README.md:', error, '\n');
    }
}

main();