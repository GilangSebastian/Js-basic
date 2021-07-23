let num = 100

for (let i = 1; i <= num; i++) {
    document.write(`User ke - ${i} <br>`);
}

for (let i = 0; i < 20; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 20; i++ ) {
    if (i % 2 == 0){
        console.log(`${i} - Genap`);
    } else {
        console.log(`${i} - Ganjil`);
    }
}

let konfirmasi = confirm("Apakah anda mau mengulang");
let count = 2;

while (konfirmasi) {
    konfirmasi = confirm("Apakah anda mau mengulang")
} if (konfirmasi) {
    count++;
} else {
    alert(`perulangan sudah dilakukan ${count}`);
}


let promptInput = prompt("Sebutkan kepanjangan dari nama IB");

while (promptInput) {
    if (promptInput === "Impact Byte") {
        alert("Selamat jawaban kamu benar");
        break;
    } else {
        promptInput = prompt("Sebutkan kepanjangan dari nama IB")
    }
}