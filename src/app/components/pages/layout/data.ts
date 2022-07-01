import { TDSMenuDTO } from "tds-ui/menu";

export const Data: Array<TDSMenuDTO> = [
    {
        name: "trang chủ",
        icon: "tdsi-home-fill",
        link: '/pages/trangchu',
    },
    {
        name: "Trò chuyện",
        icon: "tdsi-message-fill",
        listChild: [
            {
                link: '/pages/trochuyen/DS-tinnhan',
                name: 'Danh sách tin nhắn'
            },
            {
                link: '/pages/trochuyen/thietlapchat',
                name: 'Thiết lập chat'
            },
        ]
    },
    {
        name: 'Đơn hàng',
        icon: "tdsi-bag-fill",
        listChild: [
            {
                link: '/pages/donhang/danhsach-donhang',
                name: 'Danh sách đơn hàng'
            },
            {
                link: '/pages/donhang/trahang',
                name: 'Trả hàng/hoàn tiền'
            },
        ]
    },
    {
        name: 'Sản phẩm',
        icon: "tdsi-product-fill",
        listChild: [
            {
                link: '/pages/sanpham/danhsach-sanpham',
                name: 'Danh sách sản phẩm'
            },
            {
                link: '/pages/sanpham/themsanpham',
                name: 'Thêm sản phẩm'
            },
        ]
    },
    {
        name: 'Đánh giá',
        icon: "tdsi-star-2-fill",
        listChild: [
            {
                link: '/pages/danhgia/danhgiashop',
                name: 'Đánh giá shop'
            },
            {
                link: '/pages/danhgia/danhgiasanpham',
                name: 'Đánh giá sản phẩm'
            },
            {
                link: '/pages/danhgia/danhgiavanchuyen',
                name: 'Đánh giá vận chuyển'
            },
        ]
    },
    {
        name: "Danh sách khách hàng",
        icon: "tdsi-user-fill",
        link: '/pages/danhsachkhachhang',
    },
    {
        name: 'Khuyến mãi',
        icon: "tdsi-discount-fill",
        listChild: [
            {
                link: '/pages/giamgia/magiamgia',
                name: 'Mã giảm giá'
            },
            {
                link: '/pages/giamgia/sanpham-giamgia',
                name: 'Sản phẩm giảm giá'
            },
            {
                link: '/pages/giamgia/giamgia-vanchuyen',
                name: 'Giảm giá vận chuyển'
            },
            {
                link: '/pages/giamgia/caidat-giamgia',
                name: 'Cài đặt mã giảm giá'
            },
        ]
    },
    {
        name: 'Quảng cáo sản phẩm',
        icon: "tdsi-marketing-fill",
        link:'/pages/quangcaosanpham'
    },
    {
        name: 'Quản lý shop',
        icon: "tdsi-shop-fill",
        listChild: [
            {
                link: '/pages/quanlyshop/hoso',
                name: 'Hồ sơ shop'
            },
            {
                link: '/pages/quanlyshop/trangtri',
                name: 'Trang trí gian hàng'
            },
            {
                link: '/pages/quanlyshop/danhmuc',
                name: 'Danh mục shop'
            },
        ]
    },
    {
        name: 'Quản lý nhà vận chuyển',
        icon: "tdsi-transport-fill",
        listChild: [
            {
                link: '/pages/quanlyvanchuyen/danhsachvanchuyen',
                name: 'Danh sách vận chuyển'
            },
            {
                link: '/pages/quanlyvanchuyen/giaohangloat',
                name: 'Giao hàng loạt'
            },
            {
                link: '/pages/quanlyvanchuyen/caidat-vanchuyen',
                name: 'Cài đặt vận chuyển'
            },
        ]
    },
    {
        name: 'Quản lý kho',
        icon: "tdsi-supplier-fill",
        listChild: [
            {
                link: '/pages/quanlykho/danhsachkhohang',
                name: 'Danh sách kho hàng'
            },
            {
                link: '/pages/quanlykho/tonkho',
                name: 'Tồn kho thực tế'
            },
            {
                link: '/pages/quanlykho/donnhaphang',
                name: 'Đơn nhập hàng'
            },
        ]
    },
    {
        name: 'Quản lý tài chính',
        icon: "tdsi-wallet-fill",
        listChild: [
            {
                link: '/pages/quanlytaichinh/doanhthu',
                name: 'Doanh thu'
            },
            {
                link: '/pages/quanlytaichinh/thietlap-thanhtoan',
                name: 'Thiết lập thanh toán'
            },
        ]
    },
    {
        name: 'Báo cáo',
        icon: "tdsi-chart-pie-fill",
        listChild: [
            {
                link: '/pages/baocao/tongquang',
                name: 'Tổng quang'
            },
            // {
            //     link: '/pages/baocao/luottruycap',
            //     name: 'Lượt truy cập'
            // },
            // {
            //     link: '/pages/baocao/sanpham',
            //     name: 'Sản phẩm'
            // },
            // {
            //     link: '/pages/baocao/vanhanh',
            //     name: 'Vận hành'
            // },
        ]
    },
    {
        name: 'Quản lý nhân viên',
        icon: "tdsi-user-fill",
        link: '/pages/quanlynv/DSnhanhvien'
    },
    {
        name: 'Cấu hình tài khoản',
        icon: "tdsi-gear-1-fill",
        listChild: [
            {
                link: '/pages/cauhinh-TK/thietlapshop',
                name: 'Thiết lập shop'
            },
            {
                link: '/pages/cauhinh-TK/taikhoan',
                name: 'Tài khoản'
            },
        ]
    },
]