class Mobile{
    constructor(tenDienThoai) {
        this.tenDienThoai = tenDienThoai;
        this.pin = 50;
        this.on = false;
        this.soanTin = "";
        this.tinDen = [];
        this.tinDi = [];
    }
    tatDienThoai() {
        if (this.on) {
            this.on = false;
            alert(this.tenDienThoai + " đã được tắt");
        } else {
            alert(this.tenDienThoai + " đã tắt từ trước");
        }
    }
    moDienThoai(){
        if (!this.on){
            this.on = true;
            alert(this.tenDienThoai + " đã được bật");
        } else {
            alert(this.tenDienThoai + " đang bật từ trước");
        }
    }
    kiemTra(){
        if (this.on){
            alert(this.tenDienThoai + " đang mở ")
        } else {
            alert( this.tenDienThoai + " đangg tắt ")
        }
    }
    sacDienThoai(){
        if (this.pin<100){
            this.pin += 10;
            alert( this.tenDienThoai + " pin đang được sạc " + this.pin);
        } else {
            alert("pin đầy ");
        }
    }
    haoPin(){
        if (this.pin>0){
            this.pin = this.pin -5;
        } else {
            alert("hết pin");
            this.on = false;
        }
    }
    soanTinNhan(tinNhan){
        if (this.on){
            this.soanTin = tinNhan;
            alert( this.tenDienThoai + " đang soạn tin nhắn: " + this.soanTin);
            this.haoPin();
        } else {
            alert(" mở điện thoại để soạn tin");
        }
    }
    guiTinNhan(nguoiNhan) {
        if (this.on) {
            if (this.soanTin) {
                nguoiNhan.nhanTinNhan(this.soanTin,this.tenDienThoai);
                this.tinDi.push(this.soanTin);
                alert("tin nhắn đã được gửi đến " + nguoiNhan.tenDienThoai);
                this.soanTin = "";
                this.haoPin();
            } else {
                alert("vui lòng nhập tin nhắn để gửi")
            }

        } else {
            alert(this.tenDienThoai + "đang tắt , vui lòng mở điện thoại để gửi tin ")
        }
    }
    nhanTinNhan(tinNhan,nguoiGui){
        if (this.on){
            this.tinDen.push(tinNhan);
            alert( this.tenDienThoai + " đã nhận được tin nhắn:" + tinNhan + "từ người gửi: " + nguoiGui);
            this.haoPin();
        } else{
            alert(this.tenDienThoai + " đang tắt ");
        }
    }
    xemTinGui(){
        if (this.on){
            alert("bạn đang xem tin nhắn đi của : " + this.tenDienThoai)
            this.tinDi.forEach((noiDung1,chiSo1)=>{
                alert("tin đã gửi " + (chiSo1+1) + " có nội dung :" + noiDung1);
            });
            this.haoPin();
        } else {
            alert("mở điện thoại để xem tin");
        }
    }
    xemTinDen(){
        if (this.on){
            alert(" bạn đang xem tin nhắn đến của : " + this.tenDienThoai )
            this.tinDen.forEach((noiDung2,chiSo2)=>{
                alert("tin đã nhận " + (chiSo2+1) + " có nội dung :" + noiDung2);
            });
            this.haoPin();
        } else {
            alert("mở điện thoại để xem tin");
        }
    }
}
let mobile1 = new Mobile("samsung");
let mobile2 = new Mobile("nokia");
mobile1.tatDienThoai();
mobile1.moDienThoai();
mobile1.soanTinNhan("Hello Nokia!");
mobile2.moDienThoai();
mobile1.guiTinNhan(mobile2);
mobile2.xemTinDen();
mobile1.xemTinGui();
mobile2.soanTinNhan("Xin chào Samsung!");
mobile2.guiTinNhan(mobile1);
mobile1.xemTinDen();
mobile2.xemTinGui();
mobile1.kiemTra();
mobile2.kiemTra();



