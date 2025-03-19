import { LIMIT_BLOG_ITEMS } from "../config"
import { Blog, BlogCategoryResponse } from "../types/types"

const BLOGS: Blog[] = [
    {
        title: "Blog 66",
        slug: "blog-66",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "thiet-ke-website",
        createdAt: "2025-01-29T17:56:00.257Z"
    },
    {
        title: "Blog 8",
        slug: "blog-8",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "thiet-ke-website",
        createdAt: "2025-01-20T17:15:08.573Z"
    },
    {
        title: "Blog 83",
        slug: "blog-83",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "thiet-ke-app-mobile",
        createdAt: "2024-12-23T14:31:10.200Z"
    },
    {
        title: "Blog 26",
        slug: "blog-26",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "thiet-ke-app-mobile",
        createdAt: "2024-11-20T15:03:56.785Z"
    },
    {
        title: "Blog 97",
        slug: "blog-97",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "thiet-ke-app-mobile",
        createdAt: "2024-11-17T07:43:41.826Z"
    },
    {
        title: "Blog 31",
        slug: "blog-31",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "thiet-ke-website",
        createdAt: "2024-11-07T02:29:59.886Z"
    },
    {
        title: "Blog 98",
        slug: "blog-98",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "quan-ly-ban-hang",
        createdAt: "2024-10-13T05:09:09.119Z"
    },
    {
        title: "Blog 88",
        slug: "blog-88",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "bao-chi-noi-ve-foso",
        createdAt: "2024-10-07T08:54:23.931Z"
    },
    {
        title: "Blog 18",
        slug: "blog-18",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "quan-ly-ban-hang",
        createdAt: "2024-10-03T09:26:42.777Z"
    },
    {
        title: "Blog 16",
        slug: "blog-16",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "quan-ly-ban-hang",
        createdAt: "2024-07-30T07:17:51.658Z"
    },
    {
        title: "Blog 62",
        slug: "blog-62",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content: `<div id="content" >
    <section>
      <h2 id="section1" style="color: #15AA7A;">1. Quy trình 5S là gì?</h2>
      <img src="/images/blog-image-1.png" width="100%" height="900" alt="quy-trinh-5s-la-gi" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5S là gì?</figcaption>
      </figure>
      <blockquote style="font-style: italic; color: #555;">Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
        gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này
        cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</blockquote>
      <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
        sở hoa anh đào Nhật Bản.</p>
      <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
      <ul style="margin-left: 20px;">
        <li>Seiri (Ngăn nắp)</li>
        <li>Seiso (Sạch sẽ)</li>
        <li>Seiton (Trật tự)</li>
        <li>Shitsuke (Kỷ luật)</li>
        <li>Seiketsu (Tiêu chuẩn hóa)</li>
      </ul>
    </section>
    <section>
      <h2 id="section2" style="color: #15AA7A;">2. Lợi ích quy trình 5S đem lại</h2>
      <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi
        trường làm việc của doanh nghiệp.</p>
      <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
        dễ dàng tìm kiếm khi cần thiết.</p>
      <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
        phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
      <img src="/images/blog-image-2.png" width="100%" height="900" alt="tai-sao-doanh-nghiep-can-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section3" style="color: #15AA7A;">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
      <h3 id="section3-1" style="color: #15AA7A;">3.1 Cải thiện rõ nét môi trường làm việc</h3>
      <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra
        một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
      <h3 id="section3-2" style="color: #15AA7A;">3.2 Tiết kiệm thời gian đáng kể</h3>
      <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời
        gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm
        đều trở nên dễ dàng.</p>
      <h3 id="section3-3" style="color: #15AA7A;">3.3 Tăng năng suất làm việc</h3>
      <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có
        thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất
        làm việc.</p>
      <h3 id="section3-4" style="color: #15AA7A;">3.4 Tiết kiệm chi phí</h3>
      <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp
        có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
      <h3 id="section3-5" style="color: #15AA7A;">3.5 Tăng chất lượng sản phẩm</h3>
      <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và
        giảm thiểu lỗi sản xuất không mong muốn.</p>
      <img src="/images/blog-image-3.png" width="100%" height="900" alt="quy-trinh-5s-gom-cac-buoc" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Quy trình 5s gồm các bước</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section4" style="color: #15AA7A;">4. Quy trình 5S gồm các bước</h2>
      <h3 id="section4-1" style="color: #15AA7A;">4.1 Seiri (Ngăn nắp)</h3>
      <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa,
        không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>
      <h3 id="section4-2" style="color: #15AA7A;">4.2 Seiton (Sắp xếp)</h3>
      <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng
        để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
      <h3 id="section4-3" style="color: #15AA7A;">4.3 Seiso (Vệ sinh)</h3>
      <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc
        luôn sạch sẽ. Việc vệ sinh thường xuyên sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
        nhân viên.</p>
      <h3 id="section4-4" style="color: #15AA7A;">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
      <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn
        gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>
      <h3 id="section4-5" style="color: #15AA7A;">4.5 Shitsuke (Kỷ luật)</h3>
      <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả
        của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo
        mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
      <img src="/images/blog-image-4.png" width="100%" height="900" alt="cac-buoc-thuc-hien-quy-trinh-5s" />
      <figure style="margin: 20px 0; text-align: center;">
        <figcaption style="font-weight: bold;">Các bước thực hiện quy trình 5S</figcaption>
      </figure>
    </section>
    <section>
      <h2 id="section-5" style="color: #15AA7A;">5. Quy trình được thực hiện như sau:</h2>
      <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều
        này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
        trình:</p>
      <h3 id="section-5-1" style="color: #15AA7A;">5.1 Giai đoạn chuẩn bị</h3>
      <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy
        trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
      <h3 id="section-5-2" style="color: #15AA7A;">5.2 Triển khai rộng rãi</h3>
      <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp
        nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
      <h3 id="section-5-3" style="color: #15AA7A;">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
      <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền
        tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
      <h3 id="section-5-4" style="color: #15AA7A;">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
      <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu
        chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau
        này.</p>
      <h3 id="section-5-5" style="color: #15AA7A;">5.5 Đánh giá</h3>
      <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương
        diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
    </section>
    <section>
      <h2 id="section-6" style="color: #15AA7A;">6. Quy trình 5S có giống với Kaizen?</h2>
      <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
      <blockquote>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm
        tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</blockquote>
      <blockquote>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào
        việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.</blockquote>
      <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo
        ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
        tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
    </section>
    <section>
      <h2 id="section-7" style="color: #15AA7A;">7. Đối tượng nào nên áp dụng 5S?</h2>
      <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh
        nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
        chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
      <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được
        quản lý và sử dụng hiệu quả.</p>
      <img src="/images/blog-image-5.png" width="100%" height="900" alt="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" />
      <figcaption>Các yếu tố tạo nên thành công cho quy trình 5S</figcaption>
    </section>
    <section>
      <h2 id="section-8" style="color: #15AA7A;">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
      <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh
        nghiệp đó là từ phía:</p>
      <ul>
        <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định
          doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
          tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
          thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
      </ul>
      <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm
        bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
        trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
    </section>
  </div>`,
        category: "quan-ly-ban-hang",
        createdAt: "2024-07-16T12:38:05.734Z"
    },
    {
        title: "Blog 84",
        slug: "blog-84",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2024-07-14T23:17:24.924Z"
    },
    {
        title: "Blog 23",
        slug: "blog-23",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2024-05-22T14:51:36.085Z"
    },
    {
        title: "Blog 25",
        slug: "blog-25",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2024-04-12T06:34:54.737Z"
    },
    {
        title: "Blog 85",
        slug: "blog-85",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2024-03-10T23:27:03.324Z"
    },
    {
        title: "Blog 59",
        slug: "blog-59",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2024-03-03T12:32:00.196Z"
    },
    {
        title: "Blog 75",
        slug: "blog-75",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2024-02-22T06:56:57.575Z"
    },
    {
        title: "Blog 48",
        slug: "blog-48",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2024-02-10T19:42:29.504Z"
    },
    {
        title: "Blog 45",
        slug: "blog-45",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2024-02-05T17:39:05.286Z"
    },
    {
        title: "Blog 82",
        slug: "blog-82",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2024-02-05T14:06:24.580Z"
    },
    {
        title: "Blog 51",
        slug: "blog-51",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2023-12-26T09:36:20.556Z"
    },
    {
        title: "Blog 44",
        slug: "blog-44",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2023-12-15T07:30:04.441Z"
    },
    {
        title: "Blog 89",
        slug: "blog-89",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2023-09-25T23:01:21.777Z"
    },
    {
        title: "Blog 69",
        slug: "blog-69",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2023-09-08T15:08:29.030Z"
    },
    {
        title: "Blog 24",
        slug: "blog-24",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2023-09-01T14:35:23.044Z"
    },
    {
        title: "Blog 30",
        slug: "blog-30",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2023-08-27T01:05:18.489Z"
    },
    {
        title: "Blog 65",
        slug: "blog-65",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2023-08-26T22:55:45.037Z"
    },
    {
        title: "Blog 6",
        slug: "blog-6",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2023-07-18T06:11:33.427Z"
    },
    {
        title: "Blog 43",
        slug: "blog-43",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2023-07-02T11:29:40.964Z"
    },
    {
        title: "Blog 94",
        slug: "blog-94",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2023-06-03T22:53:42.541Z"
    },
    {
        title: "Blog 4",
        slug: "blog-4",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2023-05-24T01:48:40.757Z"
    },
    {
        title: "Blog 64",
        slug: "blog-64",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2023-04-28T05:44:30.334Z"
    },
    {
        title: "Blog 74",
        slug: "blog-74",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2023-04-20T08:48:19.972Z"
    },
    {
        title: "Blog 13",
        slug: "blog-13",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2023-03-01T14:28:56.973Z"
    },
    {
        title: "Blog 17",
        slug: "blog-17",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2023-02-01T21:53:22.854Z"
    },
    {
        title: "Blog 93",
        slug: "blog-93",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2023-01-04T18:47:19.855Z"
    },
    {
        title: "Blog 2",
        slug: "blog-2",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2022-12-29T12:28:26.761Z"
    },
    {
        title: "Blog 67",
        slug: "blog-67",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2022-12-16T02:06:52.974Z"
    },
    {
        title: "Blog 50",
        slug: "blog-50",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2022-10-17T22:04:19.059Z"
    },
    {
        title: "Blog 60",
        slug: "blog-60",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2022-10-09T03:31:09.129Z"
    },
    {
        title: "Blog 57",
        slug: "blog-57",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2022-09-02T03:14:27.222Z"
    },
    {
        title: "Blog 52",
        slug: "blog-52",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2022-07-30T10:43:21.890Z"
    },
    {
        title: "Blog 49",
        slug: "blog-49",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2022-07-17T05:14:30.718Z"
    },
    {
        title: "Blog 38",
        slug: "blog-38",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2022-07-05T05:56:55.129Z"
    },
    {
        title: "Blog 92",
        slug: "blog-92",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2022-06-20T02:54:45.534Z"
    },
    {
        title: "Blog 9",
        slug: "blog-9",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2022-06-15T16:08:48.710Z"
    },
    {
        title: "Blog 78",
        slug: "blog-78",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2022-05-28T05:03:24.610Z"
    },
    {
        title: "Blog 90",
        slug: "blog-90",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2022-05-11T21:57:34.273Z"
    },
    {
        title: "Blog 55",
        slug: "blog-55",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2022-05-04T10:36:15.098Z"
    },
    {
        title: "Blog 99",
        slug: "blog-99",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2022-04-23T03:28:47.558Z"
    },
    {
        title: "Blog 40",
        slug: "blog-40",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2022-03-26T15:39:58.338Z"
    },
    {
        title: "Blog 95",
        slug: "blog-95",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2022-02-20T14:02:21.661Z"
    },
    {
        title: "Blog 11",
        slug: "blog-11",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2021-12-16T04:24:23.818Z"
    },
    {
        title: "Blog 56",
        slug: "blog-56",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2021-12-05T00:31:12.037Z"
    },
    {
        title: "Blog 15",
        slug: "blog-15",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2021-12-03T16:57:37.502Z"
    },
    {
        title: "Blog 46",
        slug: "blog-46",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2021-11-22T12:59:06.269Z"
    },
    {
        title: "Blog 86",
        slug: "blog-86",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2021-10-29T15:02:47.789Z"
    },
    {
        title: "Blog 37",
        slug: "blog-37",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2021-09-14T00:33:02.962Z"
    },
    {
        title: "Blog 79",
        slug: "blog-79",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2021-08-22T23:46:22.009Z"
    },
    {
        title: "Blog 91",
        slug: "blog-91",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2021-08-12T18:04:22.822Z"
    },
    {
        title: "Blog 68",
        slug: "blog-68",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2021-08-12T09:00:30.977Z"
    },
    {
        title: "Blog 32",
        slug: "blog-32",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2021-08-05T06:17:22.211Z"
    },
    {
        title: "Blog 5",
        slug: "blog-5",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2021-07-10T14:39:30.654Z"
    },
    {
        title: "Blog 61",
        slug: "blog-61",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2021-06-21T18:04:53.001Z"
    },
    {
        title: "Blog 72",
        slug: "blog-72",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2021-06-14T03:42:31.795Z"
    },
    {
        title: "Blog 7",
        slug: "blog-7",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2021-06-02T12:46:15.700Z"
    },
    {
        title: "Blog 34",
        slug: "blog-34",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2021-05-28T03:24:42.996Z"
    },
    {
        title: "Blog 53",
        slug: "blog-53",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2021-05-19T19:14:41.609Z"
    },
    {
        title: "Blog 41",
        slug: "blog-41",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2021-03-22T22:43:28.898Z"
    },
    {
        title: "Blog 80",
        slug: "blog-80",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2021-02-05T15:04:35.387Z"
    },
    {
        title: "Blog 70",
        slug: "blog-70",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2021-01-23T17:19:24.087Z"
    },
    {
        title: "Blog 71",
        slug: "blog-71",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2021-01-23T04:21:48.342Z"
    },
    {
        title: "Blog 81",
        slug: "blog-81",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2021-01-15T03:11:04.336Z"
    },
    {
        title: "Blog 19",
        slug: "blog-19",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2021-01-05T08:43:41.916Z"
    },
    {
        title: "Blog 58",
        slug: "blog-58",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-11-27T04:30:08.048Z"
    },
    {
        title: "Blog 28",
        slug: "blog-28",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-10-24T19:17:42.692Z"
    },
    {
        title: "Blog 42",
        slug: "blog-42",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2020-09-21T12:47:39.590Z"
    },
    {
        title: "Blog 76",
        slug: "blog-76",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-ban-hang",
        createdAt: "2020-09-12T00:40:26.086Z"
    },
    {
        title: "Blog 29",
        slug: "blog-29",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-09-09T17:43:16.837Z"
    },
    {
        title: "Blog 39",
        slug: "blog-39",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2020-09-08T22:23:54.695Z"
    },
    {
        title: "Blog 47",
        slug: "blog-47",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2020-09-04T13:20:47.446Z"
    },
    {
        title: "Blog 36",
        slug: "blog-36",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2020-08-02T18:22:57.349Z"
    },
    {
        title: "Blog 27",
        slug: "blog-27",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2020-08-01T19:43:59.230Z"
    },
    {
        title: "Blog 20",
        slug: "blog-20",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2020-06-20T17:20:22.040Z"
    },
    {
        title: "Blog 35",
        slug: "blog-35",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-06-12T20:52:29.274Z"
    },
    {
        title: "Blog 87",
        slug: "blog-87",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2020-06-09T23:43:55.625Z"
    },
    {
        title: "Blog 77",
        slug: "blog-77",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-06-09T05:21:31.321Z"
    },
    {
        title: "Blog 14",
        slug: "blog-14",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2020-05-27T22:29:27.820Z"
    },
    {
        title: "Blog 1",
        slug: "blog-1",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-05-12T10:11:22.967Z"
    },
    {
        title: "Blog 3",
        slug: "blog-3",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2020-05-03T04:54:29.096Z"
    },
    {
        title: "Blog 33",
        slug: "blog-33",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-04-30T15:51:49.506Z"
    },
    {
        title: "Blog 100",
        slug: "blog-100",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-app-mobile",
        createdAt: "2020-04-25T23:13:38.786Z"
    },
    {
        title: "Blog 10",
        slug: "blog-10",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2020-04-12T16:55:20.890Z"
    },
    {
        title: "Blog 96",
        slug: "blog-96",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2020-04-02T22:49:34.264Z"
    },
    {
        title: "Blog 54",
        slug: "blog-54",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "bao-chi-noi-ve-foso",
        createdAt: "2020-03-23T23:05:47.622Z"
    },
    {
        title: "Blog 63",
        slug: "blog-63",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2020-03-23T00:17:17.445Z"
    },
    {
        title: "Blog 21",
        slug: "blog-21",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "quan-ly-san-xuat",
        createdAt: "2020-03-09T16:46:09.239Z"
    },
    {
        title: "Blog 73",
        slug: "blog-73",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2020-02-24T11:45:25.593Z"
    },
    {
        title: "Blog 12",
        slug: "blog-12",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "thiet-ke-website",
        createdAt: "2020-02-13T16:15:18.965Z"
    },
    {
        title: "Blog 22",
        slug: "blog-22",
        readTime: "10 phút",
        author: {
            name: "FOSO Creator"
        },
        reaction: {
            like: 0,
            heart: 0,
            interesting: 0,
            surprise: 0,
            boring: 0,
            angry: 0
        },
        content:
            '<div id="content" ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>',
        category: "tin-tuc-foso",
        createdAt: "2020-01-15T01:25:35.624Z"
    }
]

export async function getBlogs(
    page: number,
    category?: string
): Promise<{ blogs: Blog[]; total: number }> {
    let blogs = []
    let total = BLOGS.length
    if (category) {
        const filteredBlogs = BLOGS.filter(
            (blog: Blog) => blog.category === category
        )
        total = filteredBlogs.length
        blogs = filteredBlogs.slice(
            (page - 1) * LIMIT_BLOG_ITEMS,
            page * LIMIT_BLOG_ITEMS
        )
    } else {
        blogs = BLOGS.slice(
            (page - 1) * LIMIT_BLOG_ITEMS,
            page * LIMIT_BLOG_ITEMS
        )
    }

    return { blogs, total }
}

export async function getBlog(slug: string): Promise<Blog | undefined> {
    const blog = BLOGS.find((blog: Blog) => blog.slug === slug)

    return blog
}

export async function getBlogCategories(): Promise<BlogCategoryResponse[]> {
    let categories: { [key: string]: number } = {}
    for (let i = 0; i < BLOGS.length; i++) {
        if (categories[BLOGS[i].category]) {
            categories[BLOGS[i].category]++
        } else {
            categories = { ...categories, [BLOGS[i].category]: 1 }
        }
    }

    const result = Object.entries(categories).map(([key, value]) => ({
        slug: key,
        total: value
    }))

    result.unshift({ slug: "tat-ca", total: BLOGS.length })

    return result
}

export async function getRelatedBlogs(
    slug: string,
    category: string
): Promise<Blog[]> {
    const relatedBlogs = BLOGS.filter(
        (blog: Blog) => blog.slug !== slug && blog.category === category
    ).slice(0, 3)

    return relatedBlogs
}
