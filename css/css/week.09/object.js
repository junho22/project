/*class는 fields(data)와 method(기능)로 구성 (자바스크립트에서 클래스)
class와 object : class 는 template
object는 class instance =>메모리에 올라감
object 선언
const 이름,속성 또는 object이름["속성"]
object 메소드 사용 
object이름.method()
*/




const product = (
    designer : "홍길동",
    price :1500,
    name : "액자"
    print : function() {
        console.log(this.designer + ","+this.price+","+this.name);
    }
)
console.log(product.price=","+product["name"]);
product.print();