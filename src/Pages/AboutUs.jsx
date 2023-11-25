import React from 'react'
import "../Scss/about.scss"
export default function AboutUs() {
  return (
    <div className='container-fluid p-0'>
        <div className='img-about d-flex justify-content-center align-items-center'>
           <h1>About Us</h1>
        </div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 col-sm-6 col-md-6'>
                    <p>
                        Thành phố Sa Đéc là thành phố trung tâm của tỉnh Đồng Tháp, nằm ở phía Nam của vùng Đồng bằng sông Cửu Long. Sa Đéc có diện tích tự nhiên khoảng 200 km2, dân số khoảng 200.000 người.Sa Đéc nổi tiếng với những cánh đồng lúa xanh mướt, những con kênh rạch uốn lượn giữa ruộng lúa. Nền kinh tế chủ yếu dựa trên nông nghiệp, đặc biệt là trồng lúa và nuôi trồng thủy sản. Bên cạnh đó, thương mại và dịch vụ cũng đang phát triển mạnh mẽ.
                        Sa Đéc còn nổi tiếng với nhiều di tích lịch sử văn hóa như đền thờ Tây Sơn Tam Kiệt, chùa Ông, chùa Bà...đã trở thành những điểm du lịch hấp dẫn. Với vị trí chiến lược cạnh sông Tiền, Sa Đéc ngày càng phát triển thành một trung tâm kinh tế, văn hóa của vùng Đồng bằng sông Cửu Long.
                    </p>
                </div>
                <div className='col-12 col-md-6 col-sm-6'>
                    <img src="../assets/image/SaDec1.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row mt-5'>
            <div className='col-12 col-md-6 col-sm-6'>
                    <img src="../assets/image/vuonchala.jpg" alt="" />
                </div>
                <div className='col-12 col-sm-6 col-md-6'>
                    <p>
                    Quán Cafe Chà Là nằm trên con phố yên tĩnh thuộc phường Tân Quy Đông , TP.Sa Đéc. Ngay từ cửa ra vào, khách hàng sẽ bất ngờ trước không gian thanh bình được bao quanh bởi những cây chà là xum xuê.
                    Cây chà là được trồng xen kẽ giữa các bàn ghế, tạo nên bóng râm mát mẻ. Hương thơm nhẹ nhàng của lá chà là bay khắp mọi ngóc ngách, mang lại cảm giác thư thái, thanh tịnh.
                    Ngoài cà phê pha theo phong cách truyền thống, quán còn phục vụ các món ăn nhẹ như bánh ngọt.
                    Với không gian xanh mát, lãng mạn bởi những cây chà là, Quán Cafe Chà Là hứa hẹn sẽ là địa điểm lý tưởng cho những giây phút thư giãn của bạn.
                    </p>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12'>
                    <div className='map'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.255924995432!2d105.73739947569986!3d10.321391967420666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a7d61b18d4e59%3A0xd9a790b2ca575df!2zVsaw4budbiBDaMOgIEzDoA!5e0!3m2!1svi!2s!4v1700902637848!5m2!1svi!2s" className='w-100' height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='chalamap'/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
