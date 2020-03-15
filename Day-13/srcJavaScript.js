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
                new Produk(234,"Fast Food",'Pizza',2000,5,0),  
                new Produk(345,"Electronic",'Bur HP',3000,5,0),
                new Produk(456,"Electronic",'Laptop',4000,5,0),
                new Produk(567,"Cloth",'Indomaret',5000,5,0),
                new Produk(678,"Cloth",'Alfamart',6000,5,0),
                new Produk(789,"Fruit",'Mangga',7000,5,0), 
                new Produk(890,"Fruit",'Jeruk',8000,5,0)
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
       
        arr.forEach(({id,kategori,nama,harga,stok},index) => {
            if (index == indexTarget){
                fieldEdit = stringEdit
                alert("masuk field edit")
                // tombolSave = `<input type="button" id="saveDataBtn" value="SAVE" onclick = "saveData(${index})" >`
                // tombolBuy = `<input type="button" disabled id="addCart" value="BUY" onclick = "addToCart(${id})">`
            }
            else{
            fieldEdit = `<td><center>${id}</td> 
                <td><center>${kategori}</td>
                <td><center>${nama}</td> 
                <td><center>${harga}</td>
                <td><center>${stok}</td>
                <td><input type="button" id="addCart" value="BUY" onclick = "addToCart(${id})"></td>
                <td><input type="button" id="editDataBtn" value="EDIT" onclick = "editData(${index})"></td>
                <td><input type="button" id="deleteDataBtn" value="DELETE" onclick = "deleteData(${id})"></td>
                `
            }
            stringData += `
            <tr>
            ${fieldEdit}
            </tr>  
            ` 
        }
        );
    
        document.getElementById("tampilData").innerHTML=stringData
        
    }
    
    renderData()
   
    let arrFiltered = []

    function filterData(){
        // if(event.keyCode == 13) {
    
        arrFiltered = []
        let namaProduk = selectorId("namaProduk").value.toLowerCase()
        let hargaMin = selectorId("hargaMin").value
        let hargaMax = selectorId("hargaMax").value
        let filterKategori = selectorId("filterKategori").value.toLowerCase()
        
        dataProduct.forEach(({id,kategori,nama,harga,stok},index) => {
            
            if((nama.toLowerCase().startsWith(namaProduk)||namaProduk=="") &&
                (kategori.toLowerCase().startsWith(filterKategori) || filterKategori=='all') && 
                (harga >= hargaMin) && //jika hargaMin ='' maka harga akan selalu lebih besar dari '' >> hargaMin>='' maka selalu true jika kosong
                (harga <= hargaMax || hargaMax == 0)){
                    arrFiltered.push(dataProduct[index])
                }
                
        })
       
     
        if (arrFiltered.length > 0) {
            renderData(arrFiltered);
          } else if(arrFiltered.length==0){
            selectorId("tampilData").innerHTML='<h1>NO DATA</h1>'
          }
        // renderData(arrFiltered)
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

    const deleteData = (id) =>{
        dataProduct.splice(dataProduct.indexOf(dataProduct.id),1)
        arrCart.splice(arrCart.indexOf(arrCart.id),1)
        renderData()
        renderCart()
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
                stringEdit += `
                    <td><center>${id}</td>
                    <td><center>${kategori}</td>
                    <td><input id="namaLama" value="${nama}"></td>
                    <td><input id="hargaLama" value="${harga}"></td>
                    <td><input id="stokLama" value="${stok}"> </td>
                    <td><input type="button" disabled id="addCart" value="BUY" onclick = "addToCart(${id})"></td>
                    <td><input type="button" id="saveDataBtn" value="SAVE" onclick = "saveData(${index})"></td>
                    <td><input type="button" id="cancelDataBtn" value="CANCEL" onclick = "renderData(dataProduct)"></td>
                    `     
            }
        });
 
        if(arrFiltered.length){
        renderData(arrFiltered,stringEdit,indexKirim)
        }
        else{renderData(dataProduct,stringEdit,indexKirim)}
    }

    function saveData(index)
    {
        // alert(index)
        let gantiId = dataProduct[index].id
        let gantiKategori = dataProduct[index].kategori
        let gantiNama = document.getElementById("namaLama").value
        let gantiHarga = document.getElementById("hargaLama").value *1
        let gantiStok = document.getElementById("stokLama").value *1

        dataProduct[index] = new FastFood(gantiId,gantiKategori,gantiNama,gantiHarga,gantiStok)
        renderData()
    

    }
    let arrCart = []
  
    const addToCart = (id) =>{
   
        let item
    // let item = dataProduct.find ((val) =>val.id==id) //pertanyaan
        
    
        dataProduct.forEach((element) => {
            if (element.id==id){
                item = element
            }
        });
        let isiInCart = arrCart.find((val) => val.id==item.id)
        //alert(isiInCart)
        if (isiInCart){
            let idx = arrCart.findIndex((val) => val.id==isiInCart.id)
            if(arrCart[idx].qty<arrCart[idx].stok){
            arrCart[idx].qty++
          
            dataProduct[dataProduct.indexOf(item)].stok -=1
            
            }
            else{alert("stok tidak mencukupi")}
        }
        else{
            let newCartItem = {
                ...item,qty:1
            }
            dataProduct[dataProduct.indexOf(item)].stok -=1
            arrCart.push(newCartItem)

        }
        renderCart()
        renderData()
    }

    const renderCart = () =>{
        let hasil = ''
        arrCart.forEach((val,index) => {
            let {id,kategori,nama,harga,qty} = val
            hasil +=`
            <tr>
            <td><center>${id}</td> 
            <td><center>${kategori}</td>
            <td><center>${nama}</td> 
            <td><center>${harga}</td>
            <td><center>${qty}</td>
            <td>
                <input type="button" id="deleteData" value="DELETE" onclick = "deleteData(${index})">
            </td>
            </tr>
            `
        })
        selectorId("cartTable").innerHTML=hasil
    }

    let  subtotal = 0
    const payment = () =>{
        let payment = ''
        judul = `<h1>Transaction Detail </h1>`
        fieldBayar = `<input type="number" id="bayar" placeholder="masukan jumlah uang">`
        arrCart.forEach(({kategori,nama,harga,qty}) => {
            payment +=`    
            ${kategori} | ${nama} | ${harga} X ${qty} = Rp.${harga*qty} <br>`
        });

      
        arrCart.forEach(({harga,qty}) => {
            subtotal+= harga*qty
        });
        total = Math.round(subtotal *(110/100))
        ppn = subtotal *(10/100)
        payment += `<strong> <p> Subtotal : ${subtotal} </p> 
                    <p>PPN : ${ppn}</p>
                    <p>Total : ${total}</p></strong>`


        selectorId("payment").innerHTML=payment
    }

    const payProcess = () =>{
        let pay = selectorId("pay").value*1
        let paymentResponse = ''
        if (pay>total){
            paymentResponse = `Kembalian anda = ${pay-total}`
        }
        else if(pay==total){
            paymentResponse = `Terimakasih sudah membayar dengan uang pas`
        }
        else if(pay<total){
            paymentResponse = `Maaf uang anda kurang ${total-pay}`
        }
        selectorId("paymentResponse").innerHTML=paymentResponse
    }
    

    