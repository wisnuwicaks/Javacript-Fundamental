class Produk {
    constructor(id,kategori,nama,harga,stok,qty) {
        this.id = id
        this.kategori = kategori
        this.nama = nama
        this.harga = harga
        this.stok = stok
        this.qty = 0
    }
}

    class FastFood extends Produk {
    constructor(id,kategori,nama,harga,stok,qty) {
        super(id,kategori,nama,harga,stok,qty)
     
    }
}

    class Electronic extends Produk {
    constructor(id,kategori,nama,harga,stok,qty) {
        super(id,kategori,nama,harga,stok,qty)
        
    }
}
    class Cloth extends Produk {
    constructor(id,kategori,nama,harga,stok,qty) {
        super(id,kategori,nama,harga,stok,qty)
        
    }
}

class Fruit extends Produk {
    constructor(id,kategori,nama,harga,stok,qty) {
        super(id,kategori,nama,harga,stok,qty)
      
    }
}


    let dataProduct = [
                new Produk(123,"Fast Food",'Burger',1000,5,0),
                new Produk(234,"Fast Food",'Pizza',1000,5,0),  
                new Produk(345,"Electronic",'Bur HP',1000,5,0),
                new Produk(456,"Electronic",'Laptop',1000,5,0),
                new Produk(567,"Cloth",'Indomaret',1000,5,0),
                new Produk(678,"Cloth",'Alfamart',1000,5,0),
                new Produk(789,"Fruit",'Mangga',1000,5,0), 
                new Produk(890,"Fruit",'Jeruk',1000,5,0)
                ]

   

    const selectorId = (id) => {
        return document.getElementById(id)
    }
    
    function renderData(arr = dataProduct,stringEdit,indexTarget=-1){
        let stringData = ''
        //alert('dirender:'+stringEdit)
        // arr.forEach(element => {
        //     for(i=0;i<element.length;i++)
        //     objAllProduct.push(element[i])
        // })
        let fieldEdit =''
        let tombolSave = ''
        arr.forEach(({id,kategori,nama,harga,stok},index) => {
            if (index == indexTarget){
                fieldEdit = stringEdit
                alert("masuk field edit")
            }
            else{
            fieldEdit = `<td><center>${id}</td> 
                <td><center>${kategori}</td>
                    <td><center>${nama}</td> 
                        <td><center>${harga}</td>
                            <td><center>${stok}</td>`
                            }
          
            if(indexTarget !==-1)
            {
                // alert(fieldEdit)
                tombolSave = `<input type="button" id="saveDataBtn" value="SAVE" onclick = "saveData(${index})" >`
            }
            if (index !== indexTarget){
                tombolSave = ''
            }
         
            stringData += `
            <tr>
            ${fieldEdit}
            <td><input type="button" id="addCart" value="BUY" onclick = "addToCart(${id})"></td>
            <td>
                <input type="button" id="deleteData" value="DELETE" onclick = "deleteData(${index})">
            </td>
            <td> 
                <input type="button" id="editDataBtn" value="EDIT" onclick = "editData(${index})">
                ${tombolSave}
            </td>
            </tr>  
            ` 
            tombolSave = ''
        }
        );
    
        document.getElementById("tampilData").innerHTML=stringData
        
    }
    
    renderData()
    // document.getElementById("editDataBtn").style.display="block";
    // document.getElementById("saveDataBtn").style.display="none";
    function filterData(){
        // if(event.keyCode == 13) {
    //alert(ele.value);        
    let arrFiltered = []
        // let namaProduk = document.getElementById("namaProduk").value.toLowerCase()
        let namaProduk = selectorId("namaProduk").value.toLowerCase()
        let hargaMin = parseInt(selectorId("hargaMin")).value
        let hargaMax = parseInt(selectorId("hargaMax")).value
        let filterKategori = selectorId("filterKategori").value
      
        dataProduct.forEach(({id,kategori,nama,harga,stok},index) => {
            if (nama.toLowerCase().startsWith(namaProduk) && 
                kategori==filterKategori ) {
                arrFiltered.push(dataProduct[index])
            }
            else if(filterKategori=="Default"){
                arrFiltered.push(dataProduct[index])
            }
           
        });
        
        // alert(filterKategori)
        renderData(arrFiltered)
    // }
    }

    const inputData = () =>{
        let inputNama = document.getElementById("inputNama").value
        let inputHarga = parseInt(document.getElementById("inputHarga").value)
        let kategoriProduk = document.getElementById("kategoriProduk").value
        let inputStok = document.getElementById("inputStok").value *1

        let pushParam
      
        if (inputNama !=='' && kategoriProduk !=="Default" && inputStok !=='' && inputStok !==NaN){
            
            pushParam = new Produk(Math.floor(Math.random() * 100) +100,kategoriProduk,inputNama,inputHarga,inputStok,0)
            
            dataProduct.push(pushParam)
        }
        else{
            alert("Input anda Salah")
        }
        alert(inputNama,inputHarga,inputStok,kategoriProduk)
        renderData()
    }

    const deleteData = (index) =>{
       
        dataProduct.splice(index,1)
        renderData()
    }
  

    function editData(index)
    {
        let stringEdit = ''
   // alert(index)
   let indexKirim = index
    // document.getElementById("editDataBtn").style.display="none";
    // document.getElementById("saveDataBtn").style.display="block";

    dataProduct.forEach(({id,kategori,nama,harga,stok},indexEdit) => {
            if (indexEdit==index) {
                stringEdit += `<td><center>${id}</td>
                    <td><center>${kategori}</td>
                    <td><input id="namaLama" value="${nama}"></td>
                    <td><input id="hargaLama" value="${harga}"></td>
                    <td><input id="stokLama" value="${stok}"> </td>
                    `
                    
            }
        });
 

        renderData(dataProduct,stringEdit,indexKirim)
    }

    function saveData(index)
    {
        // alert(index)
        let gantiId = document.getElementById("idLama").value *1
        let gantiKategori = document.getElementById("kategoriLama").value
        let gantiNama = document.getElementById("namaLama").value
        let gantiHarga = document.getElementById("hargaLama").value *1
        let gantiStok = document.getElementById("stokLama").value *1

        dataProduct[index] = new FastFood(gantiId,gantiKategori,gantiNama,gantiHarga,gantiStok)
        renderData()
        // document.getElementById("editDataBtn").style.display="block";
        // document.getElementById("saveDataBtn").style.display="none";

    }

    let arrCart = []
    const addToCart = (id) =>{
   
    let item = dataProduct.find ((val) =>val.id==id)
        alert(item.nama)
        let isiInCart = arrCart.find((val) => val.id==item.id)
        if (isiInCart){
            let idx = arrCart.findIndex((val) => val.id==isiInCart.id)
            arrCart[idx].qty++
        }
        else{
            let newCartItem = {
                ...item,qty:1
            }
            arrCart.push(newCartItem)
        }
        renderCart()
    }

    const renderCart = () =>{
        let hasil = ''
        arrCart.forEach((val) => {
            let {id,kategori,nama,harga,qty} = val
            hasil +=`
            <tr>
            <td><center>${id}</td> 
            <td><center>${kategori}</td>
            <td><center>${nama}</td> 
            <td><center>${harga}</td>
            <td><center>${qty}</td>
            </tr>
            `
        })
     
        
        selectorId("cartTable").innerHTML=hasil
        
    }

    if(dataProduct.length ==0)
    {
    renderCart()
    }

    