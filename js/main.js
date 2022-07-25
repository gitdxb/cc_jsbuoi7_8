// Nhập input
var numArray = [];
function themSo() {
    // nhận input
    var num = document.querySelector('#nhapSoN').value;
    if(num == '') {
        num = 0;
    } 

    // đưa input vào mảng 
    numArray.push(Number(num));

    // in mảng ra UI
    document.querySelector('#kqThemSo').innerHTML = numArray.toString();
}
document.querySelector('#btnThemSo').onclick = themSo;

// Bài 1: tính tổng số dương
function tinhTong() {
    if (numArray == '') {
        document.querySelector('#kqTinhTong_b1').innerHTML = 0;
    }
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        } 
    }
    document.querySelector('#kqTinhTong_b1').innerHTML = sum;
}
document.querySelector('#btnTinhTong_b1').onclick = tinhTong;



// Bài 2: Đếm số dương trong mảng
function demSoDuong() {
    if (numArray == '') {
        document.querySelector('#kqSoDuong_b2').innerHTML = 0;
    }
    var count = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }
    document.querySelector('#kqSoDuong_b2').innerHTML = 'Số dương: ' + count;
}
document.querySelector('#btnSoDuong_b2').onclick = demSoDuong;


// Bài 3: tìm số nhỏ nhất
function timMin() {
    if (numArray == '') {
        document.querySelector('#kqSoMin_b3').innerHTML = "Số nhỏ nhất: 0";
    }
    var min = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
        }
    }
    document.querySelector("#kqSoMin_b3").innerHTML = "Số nhỏ nhất: " + min;
}
document.querySelector('#btnSoMin_b3').onclick = timMin;

// Bài 4: tìm số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat() {
    // tạo mảng copy
    var soDuongNN = [];
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > 0) {
            soDuongNN[i] = numArray[i];
        }
        
    }
    // tìm số dương nhỏ nhất
    var min = soDuongNN[0];
    for (let i = 1; i < soDuongNN.length; i++) {
        if (min > soDuongNN[i]) {
            min = soDuongNN[i];
        }
    }
    document.querySelector('#kqSoDuongNhoNhat_b4').innerHTML = "Số nhỏ nhất: " + min;
}
document.querySelector('#btnSoDuongNhoNhat_b4').onclick = timSoDuongNhoNhat;

// Bài 5: tìm số chẵn cuối cùng
function timSoChanCC() {
    var soChan = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChan = numArray[i];
        }
        if (numArray[i] % 2 != 0) {
            document.querySelector('#kqSoChan_b5').innerHTML = soChan;
        }
    }
    document.querySelector('#kqSoChan_b5').innerHTML = soChan;
}
document.querySelector('#btnSoChan_b5').onclick = timSoChanCC;
// Bài 6
// Bài 7
// Bài 8
// Bài 9
// Bài 10