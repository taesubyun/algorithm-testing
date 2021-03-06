// ๐ ๋ฌธ์ 
// - ์ ๊ณ  ๊ฒฐ๊ณผ ๋ฐ๊ธฐ

// ๐ ํ์ด

function solution(id_list, report, k) {
    // ๊ฐ๋จํ๊ฒ
    // report๋ฅผ for๋ฌธ์ ๋๋ ค์, ์ ๊ณ ์ -> ์ ๊ณ ๋์ ์ชผ๊ฐ๋ ๋ก์ง์ด ํ์ํ  ๊ฒ ๊ฐ๋ค.
    // ๊ทธ ๊ณผ์ ์์, ์ ๊ณ ๋์์ด k๋ฒ ์ด์ ๋์ค๋์ง ์ฒดํฌ.
    // K๋ฒ ๋์ ์ ๊ณ ๋์์ด ์ถ๋ ค์ง๋ค.
    const answer = [];

    const reporteeCounter = {};
    // ์ ๊ณ  ๋นํ ํ์
    const blockedReportees = [];
    // ์ ๊ณ  ๋นํ ์ ์ 
    let uniqueReport = Array.from(new Set(report));

    for (let i = 0; i < uniqueReport.length; i++) {
        const [reporter, reportee] = uniqueReport[i].split(' ');

        if (reportee in reporteeCounter) {
            reporteeCounter[reportee] += 1;
        } else {
            reporteeCounter[reportee] = 1;
        }

        if (reporteeCounter[reportee] >= k) {
            blockedReportees.push(reportee);
        }
    }

    // report ๋ฃจํ๋ฅผ ๋๋ฆฐ๋ค.
    // k๋ฒ์ ๋์ ์ ๋ฅผ ์๊ณ  ์๋ค.
    // ๋ฃจํ๋ฅผ ๋๋ฆฌ๋ฉด์, ์ด๋ค ์ ์ ๊ฐ k๋ฒ ๋์ ์ ๋ฅผ ์ ๊ณ ํ๊ณ  ์์ผ๋ฉด, ๊ฑ๋ฅผ counter์ ๋ฃ์ด์ค๋ค.

    const mailedCounter = {};

    for (let i = 0; i < uniqueReport.length; i++) {
        const [reporter, reportee] = uniqueReport[i].split(' ');
        if (blockedReportees.includes(reportee)) {
            if (reporter in mailedCounter) {
                mailedCounter[reporter] += 1;
            } else {
                mailedCounter[reporter] = 1;
            }
        }
    }

    // formatting
    // { muzi: 2, frodo: 3 }
    // [2, 1, 1, 1]

    for (let i = 0; i < id_list.length; i++) {
        if (id_list[i] in mailedCounter) {
            answer.push(mailedCounter[id_list[i]]);
        } else {
            answer.push(0);
        }
    }

    return answer;
}
