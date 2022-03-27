// 📌 문제
// - 신고 결과 받기

// 📌 풀이

function solution(id_list, report, k) {
    // 간단하게
    // report를 for문을 돌려서, 신고자 -> 신고대상 쪼개는 로직이 필요할 것 같다.
    // 그 과정에서, 신고대상이 k번 이상 나오는지 체크.
    // K번 넘은 신고대상이 추려진다.
    const answer = [];

    const reporteeCounter = {};
    // 신고 당한 횟수
    const blockedReportees = [];
    // 신고 당한 유저
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

    // report 루프를 돌린다.
    // k번을 넘은 애를 알고 있다.
    // 루프를 돌리면서, 어떤 유저가 k번 넘은 애를 신고하고 있으면, 걔를 counter에 넣어준다.

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
