// function 

function func() {

}

let arrowfun = () => {
    console.log("zawed khan")
};
arrowfun();

function marriagecard(fullName) {
    console.log(fullName);
}

marriagecard("safik");
marriagecard("faruk");
marriagecard("tafik");

function returnFun() {
    console.log("hello world");
    return 30;
}

let value = returnFun();
console.log(value)

function hof(func){
  console.log(func);
}

hof(()=>{console.log("khannnn")});




