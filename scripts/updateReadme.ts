import fs from 'fs-extra';
import path from 'path';

interface Problem {
    date: string;
    number: string;
    title: string;
    path: string;
}

interface Category {
    name: string;
    problems: Problem[];
}

const LEETCODE_DIR = path.join(__dirname, '..', 'leetcode');
const README_PATH = path.join(__dirname, '..', 'README.md');

// 날짜 형식을 검증하고 파싱하는 함수
function parseProblemFolder(folderName: string): Problem | null {
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
            const problem = parseProblemFolder(problemDir);
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

// README.md 파일의 LeetCode 섹션을 업데이트
async function updateReadme(categories: Category[]) {
    let content = await fs.readFile(README_PATH, 'utf8');

    // LeetCode 섹션을 찾아서 업데이트
    const leetcodeSection = '### ![LeetCode](https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)';
    const nextSection = '### ![Programmers]';

    let startIdx = content.indexOf(leetcodeSection);
    if (startIdx === -1) {
        console.error('LeetCode section not found in README.md');
        return;
    }

    let endIdx = content.indexOf(nextSection, startIdx);
    if (endIdx === -1) {
        endIdx = content.length;
    }

    // 새로운 LeetCode 섹션 생성
    let newSection = leetcodeSection + '\n\n';
    
    for (const category of categories) {
        newSection += `#### ㄴ ${category.name}\n\n`;
        category.problems.forEach((problem, index) => {
            newSection += `${index + 1}. [${problem.date} ${problem.number}. ${problem.title}](${problem.path})\n`;
        });
        newSection += '\n';
    }

    // README 파일 업데이트
    const updatedContent = content.substring(0, startIdx) + newSection + content.substring(endIdx);
    await fs.writeFile(README_PATH, updatedContent, 'utf8');
}

// 메인 실행 함수
async function main() {
    try {
        const categories = await scanLeetcodeDirectory();
        await updateReadme(categories);
        console.log('✅ README.md has been successfully updated!');
    } catch (error) {
        console.error('❌ Error updating README.md:', error);
    }
}

main();
