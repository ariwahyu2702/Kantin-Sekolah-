 function hitungan(){
                let nasigoreng = Number(document.getElementById("nasigoreng").value);
                console.log("kontol")
                let miegoreng = Number(document.getElementById("miegoreng").value);
                
                let ayamgoreng = Number(document.getElementById("ayamgoreng").value);
                let esjeruk = Number(document.getElementById("esjeruk").value);
                
                let esteh = Number(document.getElementById("esteh").value);

                let bayar = Number(document.getElementById("bayar").value);
                
                let harganasigoreng = 15000 * nasigoreng;
                let hargamiegoreng = 13000 * miegoreng;
                let hargaayamgoreng = 15000 * ayamgoreng;
                let hargaesjeruk = 6000 * esjeruk;
                let hargaesteh = 5000 * esteh;
               
                let total = harganasigoreng + hargamiegoreng + hargaayamgoreng + hargaesjeruk + hargaesteh;
                 let kembalian = bayar - total;
            
                document.getElementById("ganti").innerText = "KANTIN SEKOLAH";
                document.getElementById("pesanan").innerText = "nasi goreng: " + nasigoreng;
                document.getElementById("pesanan1").innerText = "mie goreng: " + miegoreng;
                document.getElementById("pesanan2").innerText = "ayam goreng: " + ayamgoreng;
                document.getElementById("pesanan3").innerText = "es jeruk: " + esjeruk;
                document.getElementById("pesanan4").innerText = "es teh: " + esteh;
                document.getElementById("total").innerText = "total: " + total;
                document.getElementById("kembalian").innerText = "Kembalian: " + kembalian;
                document.getElementById("hr1").innerText = "============================";
                document.getElementById("hr2").innerText = "============================";
                document.getElementById("hr3").innerText = "============================";
                document.getElementById("hr4").innerText = "============================";
            if(kembalian >= 0){
                if(total >= 100000){
                    let diskontotal = total * 0.8
                    document.getElementById("diskon").innerText = "kamu mendapatkan diskon 20%, "
                    document.getElementById("total1").innerText = "Total: " + diskontotal
                }
                else if(total > 50000){
                    let diskontotal = total * 0.9
                    document.getElementById("diskon").innerText = "kamu tidak mendapatkan 10%, "
                    document.getElementById("total1").innerText = "Total: " + diskontotal
                }
                else{
                    document.getElementById("diskon").innerText = "kamu tidak mendapatkan diskon, Terimakasih"
                }
            }
            else{
                document.getElementById("bayaran").innerText = "uang kamu tidak cukup"
            }
            }