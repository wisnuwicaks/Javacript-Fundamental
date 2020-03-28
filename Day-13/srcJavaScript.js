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
                new Produk(1585369534743,"Fast Food",'Burger Chicken ',1000,5,0),
                new Produk(1585369960624,"Fast Food",'Burger Spicy',2000,5,0),  
                new Produk(1585369525682,"Electronic",'Lenovo',3000,5,0),
                new Produk(1585369867945,"Electronic",'Samsung',4000,5,0),
                new Produk(1585369907324,"Cloth",'Zalora',5000,5,0),
                new Produk(1585369537932,"Cloth",'Adidas',6000,5,0),
                new Produk(1585369568436,"Fruit",'Mangga Arumanis',7000,5,0), 
                new Produk(1585369088643,"Fruit",'Mangga Asam',8000,5,0)
                ]

    const selectorId = (id) => {
        return document.getElementById(id)
    }
    
    function renderData(arr = dataProduct,stringEdit,idTarget=-1){
        let stringData = ''
        //alert('dirender:'+stringEdit)
        // arr.forEach(element => {
        //     for(i=0;i<element.length;i++)
        //     objAllProduct.push(element[i])
        // })
       
        arr.forEach(({id,kategori,nama,harga,stok},index) => {
            if (id == idTarget){
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
                <td><input type="button" id="editDataBtn" value="EDIT" onclick = "editData(${id})"></td>
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
            selectorId("tampilData").innerHTML='<td colspan="7"><center>NO DATA</td>'
          }
        // renderData(arrFiltered)
    }


    const inputData = () =>{
        let inputNama = selectorId("inputNama").value
        let inputHarga = parseInt(selectorId("inputHarga").value)
        let kategoriProduk = selectorId("kategoriProduk").value
        let inputStok = selectorId("inputStok").value *1
        let newItemId = new Date().getTime()
        let pushParam
      
        if (inputNama !=='' && kategoriProduk !=="Default" && inputStok !=='' && inputStok !==NaN){
            pushParam = new Produk(newItemId,kategoriProduk,inputNama,inputHarga,inputStok,0)
            dataProduct.push(pushParam)
        }
        else{
            alert("Input anda Salah")
        }
        alert(inputNama +' Berhasil diinput!')
        renderData()
        selectorId("inputNama").value = ''
        selectorId("inputHarga").value =''
        selectorId("kategoriProduk").value =''
        selectorId("inputStok").value =''
    }

    const deleteData = (idDiterima,deleteCart) =>{
        let indexProduct
        let indexArrCart
       
        
        for(objectKe of dataProduct){
            let {id}=objectKe
            if(id==idDiterima){
                indexProduct = dataProduct.indexOf(objectKe)
            }
        }

        for(objectKe of arrCart){
            let {id}=objectKe
            if(id==idDiterima)
            {
                indexArrCart = arrCart.indexOf(objectKe)
            }
        }
        //jika yang dihapus adalah cart, dataProduct tidak ikut terhapus
        if(deleteCart){
        dataProduct[indexProduct].stok += arrCart[indexArrCart].qty
        arrCart.splice(indexArrCart,1)
        
        }
        //jika yang dihapus adalah dataProduct maka cart ikut terhapus
        else{
            dataProduct.splice(indexProduct,1)
            if(indexArrCart !==undefined){//cek apakah indexArrCart diketahui
            arrCart.splice(indexArrCart,1)
            }
            
        }
        renderData()
        renderCart()
    }
  

    function editData(idEdit)
    {
        let stringEdit = ''
        

    dataProduct.forEach(({id,kategori,nama,harga,stok},indexEdit) => {
            if (idEdit==id) {
                stringEdit += `
                    <td><center>${id}</td>
                    <td><center>${kategori}</td>
                    <td><input id="namaLama" value="${nama}"></td>
                    <td><input id="hargaLama" value="${harga}"></td>
                    <td><input id="stokLama" value="${stok}"> </td>
                    <td><input type="button" disabled id="addCart" value="BUY" onclick = "addToCart(${id})"></td>
                    <td><input type="button" id="saveDataBtn" value="SAVE" onclick = "saveData(${indexEdit})"></td>
                    <td><input type="button" id="cancelDataBtn" value="CANCEL" onclick = "renderData(dataProduct)"></td>
                    `     
            }
        });
 
        if(arrFiltered.length){
        renderData(arrFiltered,stringEdit,idEdit)
        }
        else{renderData(dataProduct,stringEdit,idEdit)}
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
        filterData()
    }
    let arrCart = []
  
    const addToCart = (id) =>{
   
        let item
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
                <input type="button" id="deleteData" value="DELETE" onclick = "deleteData(${id},true)">
            </td>
            </tr>
            `
        })
        selectorId("cartTable").innerHTML=hasil
    }
    let interval = ''
    let  subtotal = 0
    let paymentDetail = ''
    const payment = () =>{
     
        // paymentDetail = ''
        judul = `<h1>Transaction Detail </h1>`
        fieldBayar = `<input type="number" id="bayar" placeholder="masukan jumlah uang">`
        arrCart.forEach(({kategori,nama,harga,qty}) => {
            paymentDetail +=`    
            ${kategori} | ${nama} | ${harga} X ${qty} = Rp.${harga*qty} <br>`
        });

      
        arrCart.forEach(({harga,qty}) => {
            subtotal+= harga*qty
        });
        total = Math.round(subtotal *(110/100))
        ppn = subtotal *(10/100)
        paymentDetail += `<strong> <p> Subtotal : ${subtotal} </p> 
                    <p>PPN : ${ppn}</p>
                    <p>Total : ${total}</p></strong>`

        paymentDetail += `<input type="number" name="pay" id="pay" placeholder="Masuk sejumlah uang">
                    <input type="button" name="payBtn" value="PAY" id="payBtn" onclick="payProcess()">`

        timer = document.createElement('p')
        timer.setAttribute("id", "id")
        coba =selectorId("payment").appendChild(timer)
       
        timeout=30
        selectorId("paymentResponse").innerHTML=`Sisa waktu pembayaran :${timeout}`
        interval = setInterval(() => {
            timeout--
            selectorId("paymentResponse").innerHTML=`Sisa waktu pembayaran :${timeout}`
            if(timeout==0){
                alert('waktu anda habis')
                clearInterval(interval)
                selectorId("paymentResponse").innerHTML=timeout
            }
        }, 1000);
       
        selectorId("payment").innerHTML=paymentDetail
    }
    let pay =0
    const payProcess = () =>{
        clearInterval(interval)
        selectorId("paymentResponse").innerHTML='<p>Selesai</p>'
        
        let transaksiSelesai = false
        pay += selectorId("pay").value*1
      
            if (pay>total){
            alert(`Kembalian anda = ${pay-total}`)
            transaksiSelesai = true
            }
            else if(pay==total){
            alert(`Terimakasih sudah membayar dengan uang pas`)
            transaksiSelesai = true
            }
            else if(pay<total){
            alert(`Maaf uang anda kurang ${total-pay}`)
            selectorId("pay").value=''
            selectorId("payment").innerHTML=paymentDetail
            
            }
        
            if(transaksiSelesai==true){
            pay = 0
            arrCart=[]
            renderCart()
            selectorId("payment").innerHTML='<p><strong>Transaksi selesai</p>'
            }
    }

    // categoryAtInput = ''
    // let addedElement = ''
    tambahKategori = () =>{
        
        listFilterKategori = selectorId("filterKategori")
        listKategoriProduk = selectorId("kategoriProduk")
        tambahKategori = selectorId("addCategory").value
        
        textNode1 = document.createTextNode(tambahKategori)//membuat isi element option 
        addCategoryOption1 = document.createElement('option')//membuat element = <option></option>
        addCategoryOption1.appendChild(textNode1)//memasukkan isi element option =  <option> Isi Element </option>
   
        textNode2 = document.createTextNode(tambahKategori) 
        addCategoryOption2 = document.createElement('option')
        addCategoryOption2.appendChild(textNode2)

        listFilterKategori.appendChild(addCategoryOption1)
        listKategoriProduk.appendChild(addCategoryOption2)
        let categoryAtFilter = listFilterKategori.getElementsByTagName('option')
        let categoryAtInput = listKategoriProduk.getElementsByTagName('option')
        categoryAtFilter[categoryAtFilter.length-1].setAttribute("value",tambahKategori)
        categoryAtInput[categoryAtInput.length-1].setAttribute("value",tambahKategori)

        selectorId("addCategory").value = ''
       
    }

    //====pakai addEventListener======//
    const tombolAddCategory = selectorId('addCategoryBtn')
    tombolAddCategory.addEventListener('click',tambahKategori)

    //====pakai onclick handler======//
    // const elementAddCategory = selectorId('addCategoryBtn')
    // elementAddCategory.onclick = tambahKategori

    

    