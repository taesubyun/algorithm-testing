// π λ¬Έμ 
// - μ«μ λ¬Έμμ΄κ³Ό μλ¨μ΄

// π νμ΄
function solution(s) {
    let numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    let answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(number[i]);
        answer = arr.join[i];
    }
    return Number(answer);
}
