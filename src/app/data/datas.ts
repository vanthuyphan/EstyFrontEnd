

export var products = [
    {id:1,name:'name1' ,status:"sold", desc:'description1' , price:250},
    {id:2,name:'name2' ,status:"sale", desc:'description2' , price:123},
    {id:3,name:'name3' ,status:"sold", desc:'description3' , price:345},
    {id:4,name:'name4' ,status:"sale", desc:'description4' , price:345},
    {id:5,name:'name5' ,status:"sold", desc:'description5' , price:677},
    {id:5,name:'name5' ,status:"sale", desc:'description5' , price:677},
    {id:5,name:'name5' ,status:"sale", desc:'description5' , price:677},
]

// Products appearing in home page

export var productsInSale = [
    
    { id:1, name:'n1' , desc:'description1' , price:250, status:true, vendor:{id:1 , name:'name1'} },
    { id:2, name:'123' , desc:'description2' , price:123, status:false, vendor:{id:2 , name:'name1'}  },
    { id:3, name:'1234' , desc:'description3' , price:123, status:false, vendor:{id:1 , name:'name1'}  },
    { id:4, name:'12345' , desc:'description4' , price:123, status:false, vendor:{id:3 , name:'name3'}  },
    { id:5, name:'123456' , desc:'description5' , price:123, status:true, vendor:{id:1 , name:'name1'}  },
    { id:6, name:'1234567' , desc:'description6' , price:123, status:false, vendor:{id:1 , name:'name1'}  },
    { id:7, name:'name7' , desc:'descriptioawdawd n2' , price:123, status:true, vendor:{id:4 , name:'name4'}  },
    { id:8, name:'name8' , desc:'descri  pti o  n2' , price:123, status:false, vendor:{id:1 , name:'name1'}  },
 
];



export function getProductsInsale( ){
    return productsInSale;
}


export function getMyProductsInsale(){

}



export var allProducts = [{ id:1, name:'n1' , desc:'description1' , price:250, status:"sold", vendor:{id:1 , name:'name1'} },
{ id:2, name:'123' , desc:'description2' , price:123, status:"sale", vendor:{id:2 , name:'name1'}  },
{ id:3, name:'1234' , desc:'description3' , price:123, status:"sale", vendor:{id:1 , name:'name1'}  },
{ id:4, name:'12345' , desc:'description4' , price:123, status:"sold", vendor:{id:3 , name:'name3'}  },
{ id:5, name:'123456' , desc:'description5' , price:123, status:"sold", vendor:{id:1 , name:'name1'}  },
{ id:6, name:'1234567' , desc:'description6' , price:123, status:"sold", vendor:{id:1 , name:'name1'}  },
{ id:7, name:'name7' , desc:'descriptioawdawd n2' , price:123, status:"sale", vendor:{id:4 , name:'name4'}  },
{ id:8, name:'name8' , desc:'descri  pti o  n2' , price:123, status:"sold", vendor:{id:1 , name:'name1'}  }];
export function getAllProducts( ){
    return allProducts;
}