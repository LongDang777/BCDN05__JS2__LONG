/**
 * Mô Hình khối
 * 
 * 
 * khối 1: input
    giá usd  1usd = 23.500
    sô tiền dollar cần đổi
        
    khốii 2:
    b1: tạo biến và gán giá trị 
    b2: tính số tiền quy đổi.

    khối 3 :
    số tiền sau khi quy đổi X(usd) sang vnd. 
 */

    
     function DoiTien(){
        var usd = Number(document.getElementById('inputUsd').value);
        var tienViet = usd * 23500;
        
        document.getElementById('Result').innerHTML = (usd.toLocaleString())
         + " USD = " + (tienViet.toLocaleString('vi-VN')) + ' VNĐ';

         Result.classList.add("styleResult");
        
      }

    
// Bài 2
      /**
       *  Tính Diện tích, Chu vi hình chữ nhật.

    mô Hình khối  

    k1: input
    Chiều dài hình chữ nhật. chieuDai.
    Chiều Rộng hình chữ nhật. chieuRong.
    
    k2
    B1: tạo biến và gán giá trị.
    B2: tính chu vi và diện tích
        chuVi = (chieuDai + chieuRong) * 2
        dienTich = chieuDai * chieuRong

    k3 output
    chu vi hình chữ nhật (m)
    diện Tích hình Chữ Nhật (m2)
       */

    function  tinh() {
        var dai = parseFloat(document.getElementById('dai').value);
        var rong = parseFloat(document.getElementById('rong').value);
        var chuVi    = (dai + rong)*2;
        var dienTich = dai * rong;
        
        document.getElementById('ketqua').
        innerHTML = "<span>Chu Vi : "+chuVi+" m </span> <br> <span> Diện Tích : "+dienTich+" m<span style='vertical-align: super;font-size:10px;'>2</span></span>";
    }
    
// bài 3

/**
 *  <!-- Tính tổng 2 ký số -->

    <!-- Mô hình khối -->

    <!-- khối 1: input
    num ( sô nguyên dương có hai chữ số)
    
    khối 2:
    b1: tạo biến và gán giá trị
    ten ( hàng chục)
    unit (hàng đơn vị)

    b2: lấy hàng chục
    lấy phần nguyên trong phép chia num/10
    ten = Math.floor(num/10)
    
    lấy phần dư hàng đơn vị 
    unit = num%10

    khối 3: Output
    Tổng 2 chữ số của num
 */

    function tinhTong() {
       var num = Number(document.getElementById('inputNumber').value);
       var ten = Math.floor(num/10);
       var unit = num%10;

       var tong = ten + unit;
      document.getElementById('total').innerHTML = 'Tổng hai chữ số của số '+num+' <br> là: '+ tong;
    }