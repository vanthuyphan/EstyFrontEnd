

export var products = [
    {id:1,name:'name1' , desc:'description1' , price:250},
    {id:2,name:'name2' , desc:'description2' , price:123},
    {id:3,name:'name3' , desc:'description3' , price:345},
    {id:4,name:'name4' , desc:'description4' , price:345},
    {id:5,name:'name5' , desc:'description5' , price:677}
]

// Products appearing in home page

export var productsInSale = [
    
    { id:1, name:'name1' , desc:'description1' , price:250, status:true, vendor:{id:1 , name:'name1'} },
    { id:2, name:'name2' , desc:'description2' , price:123, status:false, vendor:{id:2 , name:'name1'}  },
    { id:3, name:'name3' , desc:'description3' , price:123, status:false, vendor:{id:1 , name:'name1'}  },
    { id:4, name:'name4' , desc:'description4' , price:123, status:false, vendor:{id:3 , name:'name3'}  },
    { id:5, name:'name5' , desc:'description5' , price:123, status:true, vendor:{id:1 , name:'name1'}  },
    { id:6, name:'name6' , desc:'description6' , price:123, status:false, vendor:{id:1 , name:'name1'}  },
    { id:7, name:'name7' , desc:'descriptioawdawd n2' , price:123, status:true, vendor:{id:4 , name:'name4'}  },
    { id:8, name:'name8' , desc:'descri  pti o  n2' , price:123, status:false, vendor:{id:1 , name:'name1'}  },
 
];


export function getProductsInsale(callback){
}


export function getMyProductsInsale(){

}

