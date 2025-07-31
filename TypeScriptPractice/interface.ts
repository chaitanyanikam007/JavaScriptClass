//to define the interface in ts we can write the interface keyword
interface  Iproduct{
    id : number;
    name :string;
    MRP:number;
    ctogary :string;

//method to display the details of product , in the interface we can write only methods name or only declear it without body.
//  we can write the body logic in side the class.
    ShowDitails():void
}


class product implements Iproduct{

    id : number;
    name :string;
    MRP:number;
    ctogary :string;
    flaver:string;


constructor(id ,name,mrp,category,flaver){
this.id=id;
this.name=name;
this.MRP=mrp;
this.ctogary=category;
this.flaver=flaver;
}
    ShowDitails(): void {
        console.log(this.id,this.name,this.MRP,this.ctogary,this.flaver);
        
    }
    
}
const products =new product(1,"sofe",50,"grosary","HaldiChandan");

products.ShowDitails()