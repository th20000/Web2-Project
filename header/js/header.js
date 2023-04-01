var header = document.getElementById("header");
if (header) {
  header.innerHTML = `
  <div class="top container">
  <div class="logo" style="float: left">
      <img src="/image/logo.jpg" style=" margin-left: 20px; width:200px;height:128px;">
  </div>

  <div class="top_search" style="float: left; margin-left: 30px;">
      <div class="search " style="height: 50px; width: 800px">
          <form>
              <input type="text" placeholder="&#xF002; Search"
                  style="margin-left: 10px; font-family: Arial, 'Font Awesome 5 Free'; height:40px; width:750px; border-radius:15px;" />
          </form>
      </div>
      <div class="menu" style="height: 75px;float: left; ">
          <ul>
              <li><a href="">Nhạc hot</a></li>
              <li><a href="">Yêu thích</a></li>
              <li><a href="">Trend</a></li>
              <li><a href="">Bảng xếp hạng</a></li>
              <li><a href="">Play list</a></li>
          </ul>
      </div>
  </div>

  <div class="taikhoan " style="float: left;  height: 125px; width: 230px;">
      <div class="icon_tk" style="height: 50px; width: 60px;">
          <img src="/image/user.jpg" style="height: 100%; width: 100%; margin-left: 90px;">
      </div>
      <div class="tk">
          <ul>
              <li><a href="">Đăng nhập</a></li>
              <li><a href="">Đăng kí</a></li>
          </ul>
      </div>
  </div>
</div>
`;
}
