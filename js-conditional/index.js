let posisiJabatan = "CEO"

if (posisiJabatan === "CEO") {
    console.log("Jika tugas saya CEO maka tugas saya membuat kebijakan, prosedur, dan standar pada organisasi perusahaan");
} else if (posisiJabatan === "CTO") {
    console.log("Jika saya sebagai CTO maka tugas saya membuat keputusan mengenai semua infrastruktur dari teknologi.");
} else if (posisiJabatan === "HR") {
    console.log("Jika tugas saya sebagai HR maka tugas saya melakukan rekrutmen untuk calon pegawai");
} else if (posisiJabatan === "Programmer") {
    console.log("Jika tugas saya sebagai Programmer maka tugas saya menciptakan program sesuai dengan kebutuhan yang memang diperlukan dan memiliki manfaat");
} else {
    console.log(posisiJabatan);
}


let nilai1 = 10
let nilai2 = 50

if (nilai1 === nilai2) {
    console.log(`${nilai2} sama dengan ${nilai1}`);
} else if (nilai1 < nilai2) {
    console.log(`${nilai2} lebih besar dari ${nilai1}`);
} else {
    console.log(`${nilai1} lebih besar dari ${nilai2}`);
}

let hari = 7

switch (hari) {
    case 1:
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin");
        break;
    case 3:
        console.log("Selasa");
        break;
    case 4:
        console.log("Rabu");
        break;
    case 5:
        console.log("Kamis");
        break;
    case 6:
        console.log("Jumat");
        break;
    case 7:
        console.log("Sabtu");
        break;
    default:
        break;
}

let movement = "DOWN"

switch (movement) {
    case "UP":
        console.log("Karakter berjalan keatas");
        break;
    case "RIGHT":
        console.log("Karakter berjalan kekanan");
        break;
    case "LEFT":
        console.log("Karakter berjalan kekiri");
        break;
    case "DOWN":
        console.log("Karakter berjalan kebawah");
        break;
    default:
        break;
}

