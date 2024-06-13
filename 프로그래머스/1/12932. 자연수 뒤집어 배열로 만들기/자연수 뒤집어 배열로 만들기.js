function solution(n) {
    // 숫자를 문자열로 변환한 후 split을 이용해 각 자리 숫자를 배열로 변환
    let arr = n.toString().split('');
    // 배열을 뒤집음
    arr.reverse();
    // 배열의 각 원소를 숫자로 변환
    return arr.map(Number);
}