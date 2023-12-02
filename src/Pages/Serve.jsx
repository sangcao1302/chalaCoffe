import React from 'react'
import "../Scss/serve.scss"
export default function Serve() {
  return (
    <div className='container-fluid p-0'>
         <div className='img-serve d-flex justify-content-center align-items-center'>
           <h1>We Serve</h1>
        </div> 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 col-sm6'>
                    <div className='img-item'>
                        <img src="../assets/image/machinecoffee.jpg" alt="" />
                    </div>
                </div>
                <div className='col-12 col-md-6 col-sm6'>
                    <div className='text serve'>
                        <p>Quán cafe chúng tôi tự hào là địa điểm lý tưởng để thưởng thức nhiều loại đồ uống ngon miệng và đẳng cấp.
                        Nếu bạn là người yêu thích hương vị cà phê thì không thể bỏ qua cà phê espresso, cappuccino hay latte. Đặc biệt, chúng tôi thường xuyên pha chế các loại latte đặc sắc như golden latte, oat latte, lavender latte... mang đến trải nghiệm mới lạ.
                        Bên cạnh đó, những thức uống nhẹ nhàng khác như trà, sữa chua, sinh tố cũng là lựa chọn hoàn hảo cho buổi sáng hay chiều tối mát mẻ. Đặc biệt, sinh tố bơ cà chua là món đặc sản được nhiều thực khách yêu thích.
                        Với không gian ấm cúng, thân thiện cùng đội ngũ nhân viên phục vụ chuyên nghiệp, quán cafe chúng tôi mong muốn mang đến cho quý khách những giây phút thư giãn đáng nhớ bên ly thức uống ưa thích</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <ul className="nav nav-pills mb-3 justify-content-center gap-5 bg-success" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active bg-success" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Latte</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link  bg-success" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Espressso</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link bg-success" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Tea</button>
                </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
                <div className="tab-pane fade show active mt-5" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-md-6'>
                            <div className='img-item' >
                                <img src="../assets/image/goldenlatte.jpg" style={{maxHeight:"100%",objectFit:"cover"}}   alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6'>
                            <div className='text-product'>
                                <p>
                                Golden Latte - thức uống sang trọng dành cho giới thượng lưu. Được chế biến từ sữa tươi, bột turmeric và mật ong, latte vàng như tên gọi mang màu sắc rực rỡ. Khi thưởng thức, người uống cảm nhận được vị ngọt dịu của mật ong, hương vị đặc trưng của riêng turmeric cùng sự mềm mại, béo ngậy từ sữa.
                                Không chỉ ngon miệng, loại đồ uống này còn gắn liền với câu chuyện văn hóa Ấn Độ truyền thống. Vàng là màu sắc của vương giả, của quyền lực và sự thịnh vượng. Uống một ly Golden Latte, bạn như đang thưởng lãm văn hóa Ấn Độ đồng thời tôn vinh vị thế của mình
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-sm-6'>
                            <div className='img-item'>
                                <img src="../assets/image/lavenderlatte.jpg"  style={{objectFit:"contain",maxWidth:"100%"}} alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-sm-6'>
                            <div className='text-espresso'>
                                <p>Lavender Latte - Thức uống sang trọng dành cho những ai yêu thích vẻ đẹp tinh tế và muốn tôn vinh gu thẩm mỹ của mình. Được pha từ sữa, cà phê espresso và lá hoa oải hương tươi, ly Lavender Latte sủa màu tím nhạt rất lịch lãm.
                                Khi thưởng thức, hương thơm dịu nhẹ của hoa oải hương sẽ bao phủ lấy giác quan. Đây không chỉ là một loại đồ uống mà còn là tác phẩm nghệ thuật mang hơi thở thiên nhiên. Uống Lavender Latte, bạn như đang thưởng lãm vẻ đẹp thanh lịch của thiên nhiên trong từng ngụm.
                                Không gian quán cafe sang trọng, nhẹ nhàng thơm tho của hoa oải hương chính là nơi dành riêng cho giới thượng lưu yêu thích vẻ đẹp tinh tế</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                <div className='row'>
                        <div className='col-12 col-md-6 col-sm-6'>
                            <div className='img-item '>
                                <img src="../assets/image/peaflowerlatte.jpg" className='' style={{objectFit:"cover"}} alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-sm-6'>
                            <div className='text-espresso'>
                                <p>Butterfly Pea Tea Latte - Ly latte màu sắc biến hóa của giới trẻ sành điệu.
                                Được pha từ sữa tươi, trà hoa xanh bướm và chanh leo, ly Butterfly Pea Tea Latte có điểm đặc biệt là màu sắc sẽ thay đổi khi thêm chất kiềm hoặc axit vào.
                                Cụ thể, khi không có tác động môi trường, ly sẽ có màu tím đậm rất cuốn hút. Tuy nhiên, khi thêm chanh vào, màu sắc sẽ chuyển thành xanh dương rất nổi bật.
                                Không chỉ vậy, hương vị nhẹ nhàng của trà hoa cùng vị chua dịu của chanh sẽ mang đến cảm giác thư thái cho người uống.
                                Uống một ly Butterfly Pea Tea Latte, bạn như đang trải nghiệm sự biến hóa của màu sắc cùng tinh thần sáng tạo nơi từng người trẻ. Đây chắc chắn sẽ là lựa chọn của giới trẻ yêu thích cái mới, cái lạ.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <h1 className='text-center' style={{color:"orange"}}>Glamping</h1>
        </div>
        <div className='container-fluid p-0'>
            <div className='glamping'>
                <img src="../assets/image/glamping.jpg" alt="" />
                <div className='text-glamping'>
                    <h1>Comming Soon</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
