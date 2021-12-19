/* Array(배열)은 한개의 변수명에 여러 개의 값을 순차적으로 저장하는

배열선언 1. const, array_name = [item1, item2...];
배열선언 2. new 키워드 사용, const array_name = new Array [item1, item2]
배열원소 : index로 구분, index는 0부터 시작
*/

//배열선언
const a = [40,50,80,100]
// 배열선언 (new)
const b = new Array ( 70,10,40,70,50);
//console.log(a);
comsole.log(b);
// 배열원소는 index로구분
console.log(a[2]);
hap = 0;
for(let i = 0; i < a.length; i++){
//console.log(a[i]);
hap += a[i];
}
console.log("합=" +hap);
sum = 0;
for(let val of b){
    //console.log(val);
    sum+= val;
}
connsole.log("b의 합=>" + sum);
/*추가, 삭제, 수정
추가 : puush (마지막에 아이템을 추가), unshit(맨앞에 아이템을 추가)
삭제 : pop (마지막 아이템을 삭제), shift(맨앞에 아이템을 삭제)
shift , unshift는 속도가 느림

검색
indexOF : 값이 있는 index를 찾음
includes : 값이 있으면 True, 아니면 False */

a.push(90);
a.push(99);
console.log(a);
a.unshift(22);
console.Log(a);
console.log(a.inndexof(80));
//consoole.log(a.includes(80));
console.log(a.inndexof(1000));
//consoole.log(a.incluudes(1000));