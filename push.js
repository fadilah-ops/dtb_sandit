import { data } from "./model.js";
 class rumus{
  validasi(isi){
    if(isi <= 54 ){
        return "SK"
    }else if(isi <= 59 ){
        return "K"
    }else if( isi <= 69 ){
        return "C"
    }else if( isi <= 79 ){
        return "B"
    } else{
        return "SB"
    }
  }
 };

 (async () => {
  try {
    const system = new rumus();
    await data.sync();
    const content = await data.findAll();
    const mhs = await Promise.all(content.map( async(item)=>{
      return [{
        nama: item.Nama,
        Matematika: system.validasi(item.Matematika),
        Ipa: system.validasi(item.Ipa),
        inggris: system.validasi(item.inggris),
        indo: system.validasi(item.indo),
        hasil: item.Hasil
        
      }]
    }))
  } catch (error) {
    console.error("Failed to sync database or insert data:", error);
  }
})();

// const data = {
  
// }
// knn(44,51,20,11);