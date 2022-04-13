
let a2 = new myarray(1, 2 ,3);

function myarray() {
    Object.defineProperty(this, "length", {
      value: 0,
      writable: true,
      enumerable: false, //dont count this property
    });

    this.length = arguments.length;
    for(let i=0; i<this.length;i++){
        this[i] = arguments[i]
    }
}
myarray.prototype.bhejna = function(value){ //push
    let index = this.length;
    this[index]= value;
    this.length++;
}
myarray.prototype.nikalna = function(){ //pop
    let index = this.length-1;
    delete this[index]
    this.length--;
}
myarray.prototype.uparka = function(){ //top
    let index = this.length-1;
     console.log(this[index]) 
    
}
myarray.prototype.dabbekasize = function(value){ //size
    let index = this.length;
     console.log(index)
}
myarray.prototype.dikhana = function(value){ //print
    console.log(Object.values(a2))
}
myarray.prototype.reversedikhana = function(){ //reverse
    let ulta=[]
    for(let i=this.length-1; i>=0; i--){
        ulta.push(a2[i])
    }console.log(ulta)
}
a2.reversedikhana();
// a2.pop()
// a2.print()
// a2.dikhana()
// console.log("a2", Object.values(a2));