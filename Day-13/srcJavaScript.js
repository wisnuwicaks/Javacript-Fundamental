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
                new FastFood(123,"Fast Food",'Burger',1000,5,0),
                new FastFood(234,"Fast Food",'Pizza',1000,5,0),  
                new Electronic(345,"Electronic",'Bur HP',1000,5,0),
                new Electronic(456,"Electronic",'Laptop',1000,5,0),
                new Cloth(567,"Cloth",'Indomaret',1000,5,0),
                new Cloth(678,"Cloth",'Alfamart',1000,5,0),
                new Fruit(789,"Fruit",'Mangga',1000,5,0), 
                new Fruit(890,"Fruit",'Jeruk',1000,5,0)
                ]

   

    const selectorId = (id) =>{
        return document.getElementById(id).value
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
            <td><input type="button" id="addCart" value="BUY" onclick = "addCart(${index})"></td>
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
        if(event.keyCode == 13) {
    //alert(ele.value);        
    let arrFiltered = []
        // let namaProduk = document.getElementById("namaProduk").value.toLowerCase()
        let namaProduk = selectorId("namaProduk").toLowerCase()
        let hargaMin = parseInt(selectorId("hargaMin"))
        let hargaMax = parseInt(selectorId("hargaMax"))
        let filterKategori = selectorId("filterKategori")
      
        dataProduct.forEach(({id,kategori,nama,harga,stok},index) => {
            if (nama.toLowerCase().startsWith(namaProduk) && 
                (filterKategori==kategori) ) {
                arrFiltered.push(dataProduct[index])
            }
        });
        
        // alert(filterKategori)
        renderData(arrFiltered)
    }
    }

    const inputData = () =>{
        let inputNama = document.getElementById("inputNama").value
        let inputHarga = parseInt(document.getElementById("inputHarga").value)
        let kategoriProduk = document.getElementById("kategoriProduk").value
        let inputStok = document.getElementById("inputStok").value *1

        let pushParam
      
        if (inputNama !=='' && kategoriProduk !=="Default" && inputStok !=='' && inputStok !==NaN){
            if (kategoriProduk=="Fast Food"){
            pushParam = new FastFood(Math.floor(Math.random() * 100) +100,kategoriProduk,inputNama,inputHarga,inputStok,0)
            }
            else if(kategoriProduk=="Electronic"){
                pushParam = new FastFood(Math.floor(Math.random() * 100) +100,kategoriProduk,inputNama,inputHarga,inputStok,0)
            }
            else if(kategoriProduk=="Cloth") {
                pushParam = new Cloth(Math.floor(Math.random() * 100) +100,kategoriProduk,inputNama,inputHarga,inputStok,0)
            }    
            else if(kategoriProduk=="Fruit"){
                pushParam = new Fruit(Math.floor(Math.random() * 100) +100,kategoriProduk,inputNama,inputHarga,inputStok,0)
            }
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
                stringEdit += `<td><input id="idLama" value="${id}"></td>
                    <td><input id="kategoriLama" value="${kategori}""></td>
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