// ========================================= Signup Page ============================================

function clientSection() {
  document.getElementById("signupClientSection").innerHTML = `<section class="ftco-section ftco-no-pb contact-section mb-4">
<div class="container">
  <div class="row d-flex contact-info">
    
    <div class="col-md-4 d-flex">
      <div class="align-self-stretch box p-4 text-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="fa fa-map-marker"></span>
        </div>
        <h3 class="mb-2">Address</h3>
        <p>198 West 21th Street, Suite 721 Tunis, Tunisie</p>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="align-self-stretch box p-4 text-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="fa fa-phone"></span>
        </div>
        <h3 class="mb-2">Contact Number</h3>
        <p><a href="tel://1234567920">+215 50 300 600</a></p>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="align-self-stretch box p-4 text-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="fa fa-paper-plane"></span>
        </div>
        <h3 class="mb-2">Email Address</h3>
        <p><a href="mailto:info@yoursite.com">Contact.Mamin@Gmail.com</a></p>
      </div>
    </div>
    
  </div>
</div>
</section>

<section class="ftco-section contact-section ftco-no-pt">
<div class="container">
  <div class="row block-9">        
    <div class="col-md-7 order-md-last d-flex">          
      <div  class="bg-light p-5 contact-form">
        <div class="form-group text-center">
        <h2 class="navbar-brand " >Signup</h2>
      </div>
        <div class="form-group">
          <input type="text" id="firstName" class="form-control" placeholder="First Name">
          <span id="checkFName" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="text" id="lastName" class="form-control" placeholder="Last Name">
          <span id="checkLName" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <select id="location" class="form-control" aria-label="Default select example">
            <option class="text-black-50">Country</option>
            <option value="tunis">Tunis</option>
            <option value="maroc">Maroc</option>
            <option value="france">France</option>
            <option value="italie">Italie</option>
            <option value="canada">Canada</option>
            <option value="thailand">Thailand</option>
            <option value="australia">Australia</option>
            <option value="philippines">Philippines</option>
            <option value="greece">Greece</option>
          </select>
          <span id="checkCountry" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="number" id="phone" class="form-control" placeholder="Phone Number">
          <span id="checkPhone" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="email" id="email" class="form-control" placeholder="Your Email">
          <span id="checkEmail" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="password" id="password" class="form-control" placeholder="Password">
          <span id="checkPassword" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm Password">
          <span id="checkConfirmPassword" style="margin-left: 30px;"></span>
        </div>

        <div class="form-group text-center">
          <button type="submit"  class="btn btn-primary py-3 px-5" onclick="signupClient() " ><a  >Signup</a></button>
        </div>
      </div>
    </div>
    <div class="col-md-5  d-flex">
       <img src="images/signup-1.jpg" alt="" width=450  >
      
    </div>
  </div>
</div>
</section>

<section class="ftco-intro ftco-section ftco-no-pt">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12 text-center">
      <div class="img" style="background-image: url(images/bg_2.jpg);">
        <div class="overlay"></div>
        <h2>We Are MAmin A Travel Agency</h2>
        <p>We can manage your dream building A small river named Duden flows by their place</p>
        <!-- <p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Ask For A Quote</a></p> -->
      </div>
    </div>
  </div>
</div>
</section>


<footer class="ftco-footer bg-bottom ftco-no-pt" style="background-image: url(images/bg_3.jpg);">
<div class="container">
  <div class="row mb-5">
    <div class="col-md pt-5">
      <div class="ftco-footer-widget pt-md-5 mb-4">
        <h2 class="ftco-heading-2">About</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
          blind texts.</p>
        <ul class="ftco-footer-social list-unstyled float-md-left float-lft">
          <li class="ftco-animate"><a href="#"><span class="fa fa-twitter"></span></a></li>
          <li class="ftco-animate"><a href="#"><span class="fa fa-facebook"></span></a></li>
          <li class="ftco-animate"><a href="#"><span class="fa fa-instagram"></span></a></li>
        </ul>
      </div>
    </div>
    <div class="col-md pt-5 border-left">
      <div class="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
        <h2 class="ftco-heading-2">Infromation</h2>
        <ul class="list-unstyled">
          <li><a href="#" class="py-2 d-block">Online Enquiry</a></li>
          <li><a href="#" class="py-2 d-block">General Enquiries</a></li>
          <li><a href="#" class="py-2 d-block">Booking Conditions</a></li>
          <li><a href="#" class="py-2 d-block">Privacy and Policy</a></li>
          <li><a href="#" class="py-2 d-block">Refund Policy</a></li>
          <li><a href="#" class="py-2 d-block">Call Us</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md pt-5 border-left">
      <div class="ftco-footer-widget pt-md-5 mb-4">
        <h2 class="ftco-heading-2">Experience</h2>
        <ul class="list-unstyled">
          <li><a href="#" class="py-2 d-block">Adventure</a></li>
          <li><a href="#" class="py-2 d-block">Hotel and Restaurant</a></li>
          <li><a href="#" class="py-2 d-block">Beach</a></li>
          <li><a href="#" class="py-2 d-block">Nature</a></li>
          <li><a href="#" class="py-2 d-block">Camping</a></li>
          <li><a href="#" class="py-2 d-block">Party</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md pt-5 border-left">
      <div class="ftco-footer-widget pt-md-5 mb-4">
        <h2 class="ftco-heading-2">Have a Questions?</h2>
        <div class="block-23 mb-3">
          <ul>
            <li><span class="icon fa fa-map-marker"></span><span class="text">203 Fake St. Mountain View, San
                Francisco, California, USA</span></li>
            <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
            <li><a href="#"><span class="icon fa fa-paper-plane"></span><span
                  class="text">info@yourdomain.com</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 text-center">

      <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with
        <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
          target="_blank">Colorlib</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </p>
    </div>
  </div>
</div>
</footer>`


}
function businessSection() {
  document.getElementById("signupBusinessSection").innerHTML = `<section class="ftco-section ftco-no-pb contact-section mb-4">
<div class="container">
  <div class="row d-flex contact-info">
    
    <div class="col-md-4 d-flex">
      <div class="align-self-stretch box p-4 text-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="fa fa-map-marker"></span>
        </div>
        <h3 class="mb-2">Address</h3>
        <p>198 West 21th Street, Suite 721 Tunis, Tunisie</p>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="align-self-stretch box p-4 text-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="fa fa-phone"></span>
        </div>
        <h3 class="mb-2">Contact Number</h3>
        <p><a href="tel://1234567920">+215 50 300 600</a></p>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="align-self-stretch box p-4 text-center">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="fa fa-paper-plane"></span>
        </div>
        <h3 class="mb-2">Email Address</h3>
        <p><a href="mailto:info@yoursite.com">Contact.Mamin@Gmail.com</a></p>
      </div>
    </div>
    
  </div>
</div>
</section>

<section class="ftco-section contact-section ftco-no-pt">
<div class="container">
  <div class="row block-9">        
    <div class="col-md-7 order-md-last d-flex">          
      <div  class="bg-light p-5 contact-form">
        <div class="form-group text-center">
        <h2 class="navbar-brand " >Signup</h2>
      </div>
        <div class="form-group">
          <input type="text" id="businessName" class="form-control" placeholder="Business Name">
          <span id="checkBName" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="text" id="firstName"class="form-control" placeholder="First Name">
          <span id="checkFName" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="text" id="lastName" class="form-control" placeholder="Last Name">
          <span id="checkLName" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <select id="locationHotel" class="form-control" aria-label="Default select example">
            <option class="text-black-50">Country</option>
            <option value="tunis">Tunis</option>
            <option value="maroc">Maroc</option>
            <option value="france">France</option>
            <option value="italie">Italie</option>
            <option value="canada">Canada</option>
            <option value="thailand">Thailand</option>
            <option value="australia">Australia</option>
            <option value="philippines">Philippines</option>
            <option value="greece">Greece</option>
          </select>
          <span id="checkCountry" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="number" id="phone" class="form-control" placeholder="Phone Number">
          <span id="checkPhone" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="email" id="email" class="form-control" placeholder="Your Email">
          <span id="checkEmail" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="password" id="password"class="form-control" placeholder="Password">
          <span id="Pwd" style="margin-left: 30px;"></span>
        </div>
        <div class="form-group">
          <input type="password" id="checkPassword"class="form-control" placeholder="Confirm Password">
          <span id="checkConfirmPassword" style="margin-left: 30px;"></span>
        </div>

        <div class="form-group text-center" >
          <button type="submit"  class="btn btn-primary py-3 px-5" onclick="signupBusiness()">Signup</button>
        </div>
      </div>

    </div>

    <div class="col-md-5  d-flex">
    <img src="images/signup-1.jpg" alt="" width=450  >
   
 </div>
  </div>
</div>
</section>

<section class="ftco-intro ftco-section ftco-no-pt">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12 text-center">
      <div class="img" style="background-image: url(images/bg_2.jpg);">
        <div class="overlay"></div>
        <h2>We Are MAmin A Travel Agency</h2>
        <p>We can manage your dream building A small river named Duden flows by their place</p>
        <!-- <p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Ask For A Quote</a></p> -->
      </div>
    </div>
  </div>
</div>
</section>


<footer class="ftco-footer bg-bottom ftco-no-pt" style="background-image: url(images/bg_3.jpg);">
<div class="container">
  <div class="row mb-5">
    <div class="col-md pt-5">
      <div class="ftco-footer-widget pt-md-5 mb-4">
        <h2 class="ftco-heading-2">About</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
          blind texts.</p>
        <ul class="ftco-footer-social list-unstyled float-md-left float-lft">
          <li class="ftco-animate"><a href="#"><span class="fa fa-twitter"></span></a></li>
          <li class="ftco-animate"><a href="#"><span class="fa fa-facebook"></span></a></li>
          <li class="ftco-animate"><a href="#"><span class="fa fa-instagram"></span></a></li>
        </ul>
      </div>
    </div>
    <div class="col-md pt-5 border-left">
      <div class="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
        <h2 class="ftco-heading-2">Infromation</h2>
        <ul class="list-unstyled">
          <li><a href="#" class="py-2 d-block">Online Enquiry</a></li>
          <li><a href="#" class="py-2 d-block">General Enquiries</a></li>
          <li><a href="#" class="py-2 d-block">Booking Conditions</a></li>
          <li><a href="#" class="py-2 d-block">Privacy and Policy</a></li>
          <li><a href="#" class="py-2 d-block">Refund Policy</a></li>
          <li><a href="#" class="py-2 d-block">Call Us</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md pt-5 border-left">
      <div class="ftco-footer-widget pt-md-5 mb-4">
        <h2 class="ftco-heading-2">Experience</h2>
        <ul class="list-unstyled">
          <li><a href="#" class="py-2 d-block">Adventure</a></li>
          <li><a href="#" class="py-2 d-block">Hotel and Restaurant</a></li>
          <li><a href="#" class="py-2 d-block">Beach</a></li>
          <li><a href="#" class="py-2 d-block">Nature</a></li>
          <li><a href="#" class="py-2 d-block">Camping</a></li>
          <li><a href="#" class="py-2 d-block">Party</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md pt-5 border-left">
      <div class="ftco-footer-widget pt-md-5 mb-4">
        <h2 class="ftco-heading-2">Have a Questions?</h2>
        <div class="block-23 mb-3">
          <ul>
            <li><span class="icon fa fa-map-marker"></span><span class="text">203 Fake St. Mountain View, San
                Francisco, California, USA</span></li>
            <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
            <li><a href="#"><span class="icon fa fa-paper-plane"></span><span
                  class="text">info@yourdomain.com</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 text-center">

      <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with
        <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
          target="_blank">Colorlib</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </p>
    </div>
  </div>
</div>
</footer>`
}

// ========================================= Signup Business ============================================

function signupBusiness() {
  // ======================== Récupuration des données ====================
  var bName = document.getElementById("businessName").value;
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var location = document.getElementById("locationHotel").value;
  var pwd = document.getElementById("password").value;
  var cPwd = document.getElementById("checkPassword").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  //=========================== check Business Name ========================================

  isValidBName = checkLength(bName, 4);
  if (isValidBName == false) {
    document.getElementById('checkBName').innerHTML = 'Business Name should be at least 4 caracters';
  }
  else {
    document.getElementById('checkBName').innerHTML = '';
  }
  //=========================== check Business Name ========================================

  isValidFName = checkLength(fName, 3);
  if (isValidFName == false) {
    document.getElementById('checkFName').innerHTML = 'First name should be at least 3 caracters';
  }
  else {
    document.getElementById('checkFName').innerHTML = '';
  }
  //=========================== check Business Name ========================================

  isValidLName = checkLength(lName, 4);
  if (isValidLName == false) {
    document.getElementById('checkLName').innerHTML = 'Last name should be at least 3 caracters';
  }
  else {
    document.getElementById('checkLName').innerHTML = '';
  }

  //==================================== Verif length Password ==========================================

  isValidPasswordLength = checkLength(pwd, 6);
  if (isValidPasswordLength == false) {
    document.getElementById('Pwd').innerHTML = 'Password should be at least 6 caracters';
  }
  else {
    document.getElementById('Pwd').innerHTML = '';
  }

  //==================================== Verif Confirm Password ==========================================
  isValidPassword = checkPwd(pwd, cPwd);
  if (isValidPassword == false) {
    document.getElementById('checkConfirmPassword').innerHTML = 'Password should be the same';
  }
  else {
    document.getElementById('checkConfirmPassword').innerHTML = '';
  }

  if (isValidBName && isValidFName && isValidLName && isValidPassword && isValidPasswordLength) {

    var usersTab = getObjFromLS('users');
    var user = {
      id: generateId(usersTab) + 1,
      bName: bName,
      firstName: fName,
      lastName: lName,
      location: location,
      email: email,
      pwd: pwd,
      checkPwd: cPwd,
      phone: phone,
      role: 'business',
      status: 'NOK'
    };

    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
  }
}

// ========================================= Signup Client ============================================

function signupClient() {
  // ======================== Récupuration des données ====================
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var location = document.getElementById("location").value;
  var pwd = document.getElementById("password").value;
  var cPwd = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;


  //=========================== check Business Name ========================================

  isValidFName = checkLength(fName, 3);
  if (isValidFName == false) {
    document.getElementById('checkFName').innerHTML = 'Required';
    document.getElementById('checkFName').innerHTML.style.color = 'red';
  }
  else {
    document.getElementById('checkFName').innerHTML = '';
  }
  //=========================== check Business Name ========================================

  isValidLName = checkLength(lName, 4);
  if (isValidLName == false) {
    document.getElementById('checkLName').innerHTML = 'Last name should be at least 3 caracters';
  }
  else {
    document.getElementById('checkLName').innerHTML = '';
  }

  //==================================== Verif length Password ==========================================

  isValidPasswordLength = checkLength(pwd, 6);
  if (isValidPasswordLength == false) {
    document.getElementById('checkPassword').innerHTML = 'Password should be at least 6 caracters';
  }
  else {
    document.getElementById('checkPassword').innerHTML = '';
  }

  //==================================== Verif Confirm Password ==========================================
  isValidPassword = checkPwd(pwd, cPwd);
  if (isValidPassword == false) {
    document.getElementById('checkConfirmPassword').innerHTML = 'Password should be the same';
  }
  else {
    document.getElementById('checkConfirmPassword').innerHTML = '';
  }

  if (isValidFName && isValidLName && isValidPassword && isValidPasswordLength) {

    var usersTab = getObjFromLS('users');
    var user = {
      id: generateId(usersTab) + 1,
      firstName: fName,
      lastName: lName,
      location: location,
      email: email,
      pwd: pwd,
      checkPwd: cPwd,
      phone: phone,
      role: 'client',
    };

    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));

  }

}

// ========================================= Signup Admin ============================================

function signupAdmin() {
  // ======================== Récupuration des données ====================
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var location = document.getElementById("location").value;
  var pwd = document.getElementById("password").value;
  var cPwd = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  //=========================== check Business Name ========================================

  isValidFName = checkLength(fName, 3);
  if (isValidFName == false) {
    document.getElementById('checkFName').innerHTML = 'First name should be at least 3 caracters';
  }
  else {
    document.getElementById('checkFName').innerHTML = '';
  }
  //=========================== check Business Name ========================================

  isValidLName = checkLength(lName, 4);
  if (isValidLName == false) {
    document.getElementById('checkLName').innerHTML = 'Last name should be at least 3 caracters';
  }
  else {
    document.getElementById('checkLName').innerHTML = '';
  }

  //==================================== Verif length Password ==========================================

  isValidPasswordLength = checkLength(pwd, 6);
  if (isValidPasswordLength == false) {
    document.getElementById('checkPassword').innerHTML = 'Password should be at least 6 caracters';
  }
  else {
    document.getElementById('checkPassword').innerHTML = '';
  }

  //==================================== Verif Confirm Password ==========================================
  isValidPassword = checkPwd(pwd, cPwd);
  if (isValidPassword == false) {
    document.getElementById('checkConfirmPassword').innerHTML = 'Password should be the same';
  }
  else {
    document.getElementById('checkConfirmPassword').innerHTML = '';
  }

  if (isValidFName && isValidLName && isValidPassword && isValidPasswordLength) {

    var usersTab = getObjFromLS('users');
    var user = {
      id: generateId(usersTab) + 1,
      firstName: fName,
      lastName: lName,
      location: location,
      email: email,
      pwd: pwd,
      checkPwd: cPwd,
      phone: phone,
      role: 'admin',
    };

    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
  }
}

// ========================================= Login Page ============================================

function login() {
  var email = document.getElementById("emailLogin").value;
  var pwd = document.getElementById("passwordLogin").value;
  var obj;
  var usersTab = getObjFromLS('users');


  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].email == email && usersTab[i].pwd == pwd) {
      obj = usersTab[i];
      break;
    }
  }

  if (obj.id && obj.role == 'business') {
    localStorage.setItem('connectedUser', obj.id)
    location.replace('index.html');

  } else if (obj.id && obj.role == 'client') {
    localStorage.setItem('connectedUser', obj.id)
    location.replace('index.html');
  } else if (obj.id) {
    localStorage.setItem('connectedUser', obj.id)
    location.replace('index.html');
  }
  else {
    document.getElementById('loginError').innerHTML = 'please check email/password';
    document.getElementById('loginError').style.color = 'red';
  }


}

// ========================================= Navbar Page ============================================

function createNavbar() {
  var connectedUser = getObjFromLS('connectedUser');
  var userTab = getObjFromLS('users');

  if (connectedUser == 0) {
    document.getElementById('NavbarAll').innerHTML = `
      <div class="container" >
      <a class="navbar-brand" href="index.html">MAmin<span>Travel Agency</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Destination  </a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="hotel.html">Hotel</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="guestHouse.html">Guest House</a></li>
            </li>
          </ul>
        </li>          <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</li></a>
        </ul>
        <a href="signup.html" class="nav-link" style="color: aliceblue; "><button type="submit"  class="btn  btn-primary " >Signup</button>	</a>	
        <a href="login.html" class="nav-item" style="color: aliceblue; "><button type="submit"  class="btn  btn-primary " >Login</button>	</a>	
      </div>
    </div>`;
  }

  //   client  ***************

  for (let i = 0; i < userTab.length; i++) {
    if (connectedUser == userTab[i].id && userTab[i].role == 'client') {
      document.getElementById('NavbarAll').innerHTML = `<div class="container" >
      <a class="navbar-brand" href="index.html">MAmin<span>Travel Agency</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Destination  </a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="hotel.html">Hotel</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="guestHouse.html">Guest House</a></li>
            </li>
          </ul>
        </li>          <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</li></a>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">${userTab[i].firstName}  <i class="fa-solid fa-user"></i></a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a  class="nav-link"  style="color:chocolate; margin-left: 30px;" href="login.html">Login</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="reservation.html">Reservation</a></li>
            <li class="nav-item "><a class="nav-link " style="color: chocolate; margin-left: 30px;" href="index.html"onclick="logOut()">Disconnect</a>
            </li>
          </ul>
        </li>
        </ul>
        	
      </div>
    </div>`;
      break;
    }
  }

  //  business man ***************

  for (let i = 0; i < userTab.length; i++) {
    if (connectedUser == userTab[i].id && userTab[i].role == 'business') {
      document.getElementById('NavbarAll').innerHTML = `
      <div class="container" >
      <a class="navbar-brand" href="index.html">MAmin<span>Travel Agency</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Destination  </a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="hotel.html">Hotel</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="guestHouse.html">Guest House</a></li>
            </li>
          </ul>
        </li>
          <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</li></a>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">${userTab[i].firstName}  <i class="fa-solid fa-user"></i></a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="dashboard-BusinessMan.html">Dashboard</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="addGuesthouse.html">New Projet</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="reservation.html">Reservation</a></li>
            <li class="nav-item "><a class="nav-link " style="color: chocolate; margin-left: 30px;" href="index.html" onclick="logOut()">Disconnect</a>
            </li>
          </ul>
        </li>
        </ul>
        	
      </div>
    </div>`
      break;
    }
  }

  //  Admin  ***************

  for (let i = 0; i < userTab.length; i++) {
    if (connectedUser == userTab[i].id && userTab[i].role == 'admin') {
      document.getElementById('NavbarAll').innerHTML = `
      <div class="container" >
      <a class="navbar-brand" href="index.html">MAmin<span>Travel Agency</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Destination  </a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="hotel.html">Hotel</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="guestHouse.html">Guest House</a></li>
            </li>
          </ul>
        </li>          <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</li></a>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">${userTab[i].firstName}  <i class="fa-solid fa-user"></i></a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="dashboard-admin.html">dashboard</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="addHotel.html">New Hotel</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="">Profil </a></li>
            <li class="nav-item "><a class="nav-link " style="color: chocolate; margin-left: 30px;" href="index.html" onclick="logOut()">Disconnect</a>
            </li>
          </ul>
        </li>
        </ul>
        	
      </div>
    </div>`
      break;
    }
  }

  //   Super Admin  ***************

  for (let i = 0; i < userTab.length; i++) {
    if (connectedUser == userTab[i].id && userTab[i].role == 'superadmin') {
      document.getElementById('NavbarAll').innerHTML = `
      
      <div class="container" >
      <a class="navbar-brand" href="index.html">MAmin<span>Travel Agency</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">Destination  </a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="hotel.html">Hotel</a></li>
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="guestHouse.html">Guest House</a></li>
            </li>
          </ul>
        </li>          <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</li></a>
          <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">${userTab[i].firstName}  <i class="fa-solid fa-user"></i></a>
          <ul class="dropdown-menu"  id="ftco-nav">
            <li class="nav-item "><a class="nav-link" style="color: chocolate; margin-left: 30px;" href="dashboard-superadmin.html">dashboard</a></li>
            <li class="nav-item "><a class="nav-link " style="color: chocolate; margin-left: 30px;" href="index.html" onclick="logOut()">Disconnect</a>
            </li>
          </ul>
        </li>
        </ul>
        	
      </div>
    </div>`
      break;
    }
  }
}

// ************  searshObjByEmail  ***************

function searshFromLSByWord(key, word) {
  var tab = JSON.parse(localStorage.getItem(key) || '[]');
  var findObj;
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].role == word) {
      findObj = tab[i];
      break;
    }
  }
  return findObj;
}
// ************  get object from local storage  ***************

function getObjFromLS(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

// ************  get object from local storage  ***************

function generateId(tab) {

  var max;
  if (tab.length == 0) {
    max = 0;
  }
  else {
    max = tab[0].id;
    for (var i = 1; i < tab.length; i++) {
      if (tab[i].id > max) {
        max = tab[i].id;
      }


    }
  }
  return max;

}

// ********************  check length  ******************

function checkLength(ch, x) {
  return (ch.length >= x)

}
//*******************  Password Checking  *******************

function checkPwd(x, y) {
  return (x == y);

}

//********************  check phone Number  *******************

function checkLengthNum(n, x) {
  return (n.length == x)

}

//********************  function logout  *******************

function logOut() {
  localStorage.removeItem('connectedUser');

}

// ========================== for add Hotel ================
function loadImgHotel() {

  const input = document.getElementById('hotelImage');

  input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
      table = getObjFromLS('image');
      table = reader.result;
      localStorage.setItem('image', JSON.stringify(table));
    });
  });
}

function disImg(img) {

  document.querySelector('#showMe').setAttribute("style", img);
}
function addHotel() {

  // ======================== Récupuration des données ====================
  var hotelName = document.getElementById("hotelName").value;
  var hotelEmail = document.getElementById("hotelEmail").value;
  var ownerName = document.getElementById("ownerName").value;
  var ownerLName = document.getElementById("ownerLName").value;
  var hotelAdress = document.getElementById("hotelAdress").value;
  var hotelCountry = document.getElementById("hotelCountry").value;
  var postalCode = document.getElementById("postalCode").value;
  var hotelDescription = document.getElementById("hotelDescription").value;
  var hotelSpot = document.getElementById('hotelSpot').value;
  var hotelRooms = document.getElementById('hotelRooms').value;
  var hotelPrice = document.getElementById('hotelPrice').value;
  var hotelCity = document.getElementById('hotelCity').value;


  var hotelsTab = getObjFromLS('hotels');
  var images = getObjFromLS('image');
  var hotel = {
    id: generateId(hotelsTab) + 1,
    hotelName: hotelName,
    ownerName: ownerName,
    ownerLName: ownerLName,
    code: postalCode,
    image: images,
    phone: hotelPhone,
    email: hotelEmail,
    adress: hotelAdress,
    country: hotelCountry,
    description: hotelDescription,
    rooms: hotelRooms,
    spot: hotelSpot,
    price: hotelPrice,
    city: hotelCity,
    inscription_by: getObjFromLS('connectedUser')
  };

  var roomsTab = getObjFromLS('hotelRooms');
  var room = {
    id: generateId(roomsTab) + 1,
    rooms: hotelRooms,
    idHotel: hotel.id,
  }
  roomsTab.push(room);
  localStorage.setItem("hotelRooms", JSON.stringify(roomsTab));

  hotelsTab.push(hotel);
  localStorage.setItem("hotels", JSON.stringify(hotelsTab));
  localStorage.removeItem('image');

  //=========================== check Business Name ========================================

  // isValidBName = checkLength(bName, 4);
  // if (isValidBName == false) {
  //   document.getElementById('checkBName').innerHTML = 'Business Name should be at least 4 caracters';
  // }
  // else {
  //   document.getElementById('checkBName').innerHTML = '';
  // }
  // //=========================== check Business Name ========================================

  // isValidFName = checkLength(fName, 3);
  // if (isValidFName == false) {
  //   document.getElementById('checkFName').innerHTML = 'First name should be at least 3 caracters';
  // }
  // else {
  //   document.getElementById('checkFName').innerHTML = '';
  // }
  // //=========================== check Business Name ========================================

  // isValidLName = checkLength(lName, 4);
  // if (isValidLName == false) {
  //   document.getElementById('checkLName').innerHTML = 'Last name should be at least 3 caracters';
  // }
  // else {
  //   document.getElementById('checkLName').innerHTML = '';
  // }

  // //==================================== Verif length Password ==========================================

  // isValidPasswordLength = checkLength(pwd, 6);
  // if (isValidPasswordLength == false) {
  //   document.getElementById('Pwd').innerHTML = 'Password should be at least 6 caracters';
  // }
  // else {
  //   document.getElementById('Pwd').innerHTML = '';
  // }

  // //==================================== Verif Confirm Password ==========================================
  // isValidPassword = checkPwd(pwd, cPwd);
  // if (isValidPassword == false) {
  //   document.getElementById('checkConfirmPassword').innerHTML = 'Password should be the same';
  // }
  // else {
  //   document.getElementById('checkConfirmPassword').innerHTML = '';
  // }

  // if (isValidBName && isValidFName && isValidLName && isValidPassword && isValidPasswordLength) {


  // }
}

// ========================== for add House ================

function loadImgHouse() {

  const input = document.getElementById('houseImage');

  input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
      table = getObjFromLS('image');
      table = reader.result;
      localStorage.setItem('image', JSON.stringify(table));
    });
  });
}
function loadImgRoom() {
  var rooms = document.getElementById("guestRooms").value;
  for (let i = 0; i < rooms; i++) {


    const input = document.getElementById('roomImage' + i);

    input.addEventListener('change', (event) => {
      const image = event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(image);

      reader.addEventListener('load', () => {
        table = getObjFromLS('image');
        table = reader.result;
        localStorage.setItem('image', JSON.stringify(table));
      });
    });
  }
}

function addHouse() {

  // ======================== Récupuration des données ====================
  var houseName = document.getElementById("houseName").value;
  var houseAdress = document.getElementById("houseAdress").value;
  var houseCountry = document.getElementById("houseCountry").value;
  var housePhone = document.getElementById("housePhone").value;
  var housePostalCode = document.getElementById("housePostalCode").value;
  var houseDescription = document.getElementById("houseDescription").value;
  var houseSpot = document.getElementById("houseSpot").value;
  var guestRooms = document.getElementById("guestRooms").value;
  var houseCity = document.getElementById("houseCity").value;


  var images = getObjFromLS('image');
  var houseTab = getObjFromLS('house');
  var house = {
    id: generateId(houseTab) + 1,
    houseName: houseName,
    code: housePostalCode,
    image: images,
    spot: houseSpot,
    phone: housePhone,
    adress: houseAdress,
    city: houseCity,
    rooms: guestRooms,
    country: houseCountry,
    description: houseDescription,
    inscription_by: getObjFromLS('connectedUser'),
    status: 'NOT OK'
  };

  houseTab.push(house);

  // ======================= insert to local storage room key ===============

  localStorage.setItem("house",JSON.stringify(houseTab));
  localStorage.removeItem('image');

  if (guestRooms > 0) {
    var images = getObjFromLS('image');
    var roomsTab = getObjFromLS('houseRooms');
    
    for (let i = 0; i < guestRooms; i++) {


      var price = document.getElementById('price' + i).value;
      var capacity = document.getElementById('capacity' + i).value;
      var bath = document.getElementById('bath' + i).value;
      var bed = document.getElementById('bed' + i).value;


      var room = {
        id: generateId(roomsTab) + 1,
        rooms: guestRooms,
        price: price,
        capacity: capacity,
        bed: bed,
        image: images,
        bath: bath,
        idHouse: house.id
      }
      roomsTab.push(room);
    }
    localStorage.setItem("houseRooms", JSON.stringify(roomsTab));

  }

}

function showRoom() {
  var nbreRomms = document.getElementById('guestRooms').value;
  if (nbreRomms > 0) {

    document.getElementById('addNewRoom').innerHTML = ` 
  <div class="col-md-12 ">
    <div class="card">
      <div class="card-header" style="background-color: rgb(238, 121, 43);">
        <h5 class="title"><span>Room i </span></h5>
      </div>
      <div class="card-body">
        <table class="table  table-borderless">

          <tbody>
            
            
          </tbody>
          <tbody id="anotherRoom">
          </tbody>
        </table>

      </div>
    </div>
  </div>
`}
}

function anotherRooms() {
  var nbreRomms = document.getElementById('guestRooms').value;
  var content = ``;
  for (let i = 0; i < nbreRomms; i++) {
    content = content + `<tr>
  <th scope="col" colspan="">

    <div class="">
      <label for="">Price</label>
      <input type="number" id="price${i}"
        class="form-control">
    </div>

  </th>
  <th scope="col" colspan="">

    <div class="">
      <label for="">Capacity</label>
      <input type="number" id="capacity${i}"
        class="form-control">
    </div>

  </th>

  <th scope="col" colspan="">

    <div class="">
      <label for="">Bath</label>
      <input type="number" id="bath${i}"
        class="form-control">
    </div>

  </th>
  <th scope="col" colspan="">

    <div class="">
      <label for="">Bed</label>
      <input type="number" id="bed${i}"
        class="form-control">
    </div>

  </th>
  <th scope="col" colspan="">

    <div class="">
      <label>Image</label>
      <input id="roomImage${i}" type="file" name="photo" />
    </div>
    <script>loadImgRoom()</script>
  </th>
</tr>
<tr>
  <th>
  <button class="btn btn-primary" onclick="">Room ${i + 1}</button>

  </th>
</tr>`;
  }
  document.getElementById('anotherRoom').innerHTML = content;
}
// ======================== display Hotels in Page Home ======================


function displayHotelHome() {
  var hotelTab = getObjFromLS('hotels');

  var content = '';
  for (let i = 0; i < 8; i++) {
    content = content + `
    <div class="item">
    <div class="project-wrap" >
      <a href="#" class="img" id="showMe" style="background-image: url(${hotelTab[i].image});">
        <span class="price">${hotelTab[i].price}$/person</span>
      </a>
      <div class="text p-4">
        <span class="days">Available</span>
        <h3><a href="#">${hotelTab[i].hotelName}</a></h3>
        <p class="location"><span class="fa fa-map-marker"></span> ${hotelTab[i].country}, ${hotelTab[i].city},
        ${hotelTab[i].code}</p>
        <button type="submit"  class="btn btn-primary " onclick="goToSingleHotel(${hotelTab[i].id})">Read More</button>

        <ul>
          <li><i class="fa-solid fa-location-dot" style="color:orange;"></i>  ${hotelTab[i].spot}</li>
        </ul>
      </div>
    </div>
  </div>`;
    document.getElementById('displayHotels').innerHTML = content;


  }

}

function displayHouseHome() {
  var houseTab = getObjFromLS('house');

  var content = '';
  for (let i = 0; i < 8; i++) {
    content = content + `
    <div class="item">
    <div class="project-wrap" >
      <a href="#" class="img" id="showMe" style="background-image: url(${houseTab[i].image});">
       
      </a>
      <div class="text p-4">
        <span class="days">Available</span>
        <h3><a href="#">${houseTab[i].houseName}</a></h3>
        <p class="location"><span class="fa fa-map-marker"></span> ${houseTab[i].country}, ${houseTab[i].city},
        ${houseTab[i].code}</p>
        <button type="submit"  class="btn btn-primary " onclick="goToSingleHouse(${houseTab[i].id})">Read More</button>

        <ul>
          
          <li><i class="fa-solid fa-location-dot" style="color:orange;"></i>  ${houseTab[i].spot}</li>
        </ul>
      </div>
    </div>
  </div>`;
    document.getElementById('displayHouse').innerHTML = content;
  }

}

function displayHotels() {

  var hotelTab = getObjFromLS("hotels");
  var content = '';
  for (let i = 0; i < hotelTab.length; i++) {
    content = content + `<div class="col-md-4 ftco-animate">
      <div class="project-wrap hotel">
      <div class="project-wrap" >
      <a href="#" class="img" id="showMe" style="background-image: url(${hotelTab[i].image});">
        <span class="price">${hotelTab[i].price}$/person</span>
      </a>
      <div class="text p-4">
        <span class="days">Available</span>
        <h3><a href="#">${hotelTab[i].hotelName}</a></h3>
        <p class="location"><span class="fa fa-map-marker"></span> ${hotelTab[i].country}, ${hotelTab[i].city},
        ${hotelTab[i].code}</p>
        <button type="submit"  class="btn btn-primary " onclick="goToSingleHotel(${hotelTab[i].id})">Read More</button>

        <ul>
          <li><i class="fa-solid fa-location-dot" style="color:orange;"></i>  ${hotelTab[i].spot}</li>
        </ul>
      </div>
    </div>
      </div>
    </div>`
    document.getElementById("hotelCon").innerHTML = content;
  }
}

function displayHouses() {

  var houseTab = getObjFromLS("house");
  var content = '';
  for (let i = 0; i < houseTab.length; i++) {
    content = content + `<div class="col-md-4 ftco-animate">
      <div class="project-wrap hotel">
      <div class="project-wrap" >
      <a href="#" class="img" id="showMe" style="background-image: url(${houseTab[i].image});">
       
      </a>
      <div class="text p-4">
        <span class="days">Available</span>
        <h3><a href="#">${houseTab[i].houseName}</a></h3>
        <p class="location"><span class="fa fa-map-marker"></span> ${houseTab[i].country}, ${houseTab[i].city},
        ${houseTab[i].code}</p>
        <button type="submit"  class="btn btn-primary " onclick="goToSingleHouse(${houseTab[i].id})">Read More</button>

        <ul>
          
          <li><i class="fa-solid fa-location-dot" style="color:orange;"></i>  ${houseTab[i].spot}</li>
        </ul>
      </div>
    </div>
    </div>
      </div>
    </div>`
    document.getElementById("hotelCon").innerHTML = content;
  }
}





// =========================== Searsh Bar ==================================

function SearshHotel(country, price) {
  location.replace("hotel-option.html");
  searsh = {
    country: country,
    price: price
  };
  localStorage.setItem('searshHotel', JSON.stringify(searsh));

}

function displayHotelSearsh() {

  var hotelTab = getObjFromLS("hotels");
  var searshTab = getObjFromLS("searshHotel");
  var roomsTab = getObjFromLS("hotelRooms");

  var content = '';

  for (let i = 0; i < hotelTab.length; i++) {
    if (Number(searshTab.price) <= Number(hotelTab[i].price) && searshTab.country == hotelTab[i].country) {
      content = content + `<div class="col-md-4 ftco-animate">
      <div class="project-wrap hotel">
      
        <a href="#" class="img" id="showMe" style="background-image: url(${hotelTab[i].image});">
         
        </a>
        <div class="text p-4">
          <span class="days">Available</span>
          <h3><a href="#">${hotelTab[i].hotelName}</a></h3>
          <p class="location"><span class="fa fa-map-marker"></span> ${hotelTab[i].country}, ${hotelTab[i].city},
          ${hotelTab[i].code}</p>
          <button type="submit"  class="btn btn-primary " onclick="goToSingleHouse(${hotelTab[i].id})">Read More</button>
  
          <ul>
            
            <li><i class="fa-solid fa-location-dot" style="color:orange;"></i>  ${hotelTab[i].spot}</li>
          </ul>
       
    </div>

        </div>
      </div>
    </div>`

    }
  }
  document.getElementById("hotelSearsh").innerHTML = content;
  localStorage.removeItem('searshHotel');
}

function SearshHouse(country, price) {
  location.replace("hotel-option.html");
  searsh = {
    country: country,
    price: price
  };
  localStorage.setItem('searshHotel', JSON.stringify(searsh));

}

function displayHouseSearsh() {

  var houseTab = getObjFromLS("house");
  var searshTab = getObjFromLS("searshHotel");
  var roomsTab = getObjFromLS("houseRooms");
  var content = '';

  for (let i = 0; i < roomsTab.length; i++) {
    if (Number(searshTab.price) <= Number(roomsTab[i].price) ) {
      alert(Number(roomsTab[i].price))
      for (let j = 0; j < houseTab.length; j++) {
        if (houseTab[j].id == roomsTab[i].idHouse && searshTab.country == houseTab[j].country) {
          content = content + `<div class="col-md-4 ftco-animate">
          <div class="project-wrap hotel">
            <a href="#" class="img" style="background-image: url(images/hotel-resto-1.jpg);">
              <span class="price">${houseTab[j].price}$/person</span>
            </a>
            <div class="text p-4">
              
              <span class="days">Availabe</span>
              <h3><a href="#">${houseTab[j].houseName}</a></h3>
              <p class="location"><span class="fa fa-map-marker"></span>  ${houseTab[j].country},  ${houseTab[j].city}</p>
              
              <ul>
                <li><span class="flaticon-king-size"></span>${roomsTab[j].rooms}</li>
                <li><span class="flaticon-mountains"></span>${houseTab[j].spot}</li>
              </ul>
              <button type="submit"  class="btn btn-primary " onclick="signupClient()">Read More</button>
    
            </div>
          </div>
        </div>`
        }
        
      }
     

    }
  }
  document.getElementById("houseSearsh").innerHTML = content;
  localStorage.removeItem('searshHotel');
}
// ====================== display single hotel =======================

function goToSingleHotel(id) {
  location.replace("hotel-single.html");
  localStorage.setItem('singleHotel', id);
}

function displayHotelSingle() {
  var hotelTab = getObjFromLS('hotels');
  var singleHotel = getObjFromLS('singleHotel');

  for (var i = 0; i < hotelTab.length; i++) {
    if (singleHotel == hotelTab[i].id) {
      document.getElementById('singleHotelArea').innerHTML = `  <div class="container">
      <div class="row d-flex">
          <div class="col-md-12 about-intro">
              <div class="row">
                  <div class="col-md-6 d-flex align-items-stretch">
                      <div class="img d-flex w-100 align-items-center justify-content-center"
                          style="background-image:url(${hotelTab[i].image});">
                      </div>
                  </div>
                  <div class="col-md-6 pl-md-5 py-5">
                      <div class="row justify-content-start pb-3">
                          <div class="col-md-12 heading-section ftco-animate">
                              <span class="subheading">About Our Hotel</span>
                              <h2 class="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                              <span class="title-orange"><i class="fa-sharp fa-solid fa-hotel"></i> ${hotelTab[i].hotelName}</span>
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th scope="col" colspan="2">Country</th>
                                          <td scope="col">${hotelTab[i].country}</td>
                                          <th scope="col" colspan="2">City</th>
                                          <td scope="col" colspan="2">${hotelTab[i].city}</td>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <th scope="col" colspan="2">Spot</th>
                                          <td scope="col"><span class="flaticon-mountains"> </span>${hotelTab[i].spot}
                                          </td>
                                          <th scope="col" colspan="2">ZIP Code</th>
                                          <td scope="col" colspan="2">${hotelTab[i].code}</td>
                                      </tr>
                                      <tr>
                                      <th scope="col" colspan="2">Price/Per</th>
                                      <td scope="col" colspan="2">${hotelTab[i].price} $</td>
                                  </tr>

                                  </tbody>
                              </table>
                              <p>${hotelTab[i].description}</p>

                          </div>

                      </div>

                  </div>
              </div>
              <div class="row">
              
                  <div class="col-md-3 d-flex align-items-stretch" style="margin-top:40px;">
                      
                          <img src="images/hotel-room-1.jpg" class="img-thumbnail" alt="..." style="margin-right:10px;" >
                          <img src="images/hotel-room-2.jpg" class="img-thumbnail" alt="..." style="margin-right:10px;" >
                          <img src="images/hotel-room-3.jpg" class="img-thumbnail" alt="..." style="margin-right:10px;" >
                          <img src="images/hotel-room-4.jpg" class="img-thumbnail" alt="..." style="margin-right:10px;" >
                        
                      
                  </div>
                  </div>

          </div>
      </div>
      <div class="row " style="margin-top: 100px;">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h5 class="title" ><span>Book Now</span></h5>
                  </div>
                  <div class="card-body">
                      <table class="table  table-borderless">
                          
                          <tbody>
                              <tr>
                                  <th scope="col" colspan="">
                                      <div class="input-group input-group-lg">
                                          <span class="input-group-text" id="inputGroup-sizing-lg"
                                              style="color:black;font-weight: bold; font-size: 20px; "><span
                                                  style="margin: 0px 10px 0px 10px;">Check in</span></span>
                                          <input type="date" class="form-control" id="hotelCheckIn"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-lg">
                                      </div>
                                  </th>
                                  <th scope="col" colspan="">
                                      <div class="input-group input-group-lg">
                                          <span class="input-group-text" id="inputGroup-sizing-lg"
                                              style="color:black;font-weight: bold; font-size: 20px; "><span
                                                  style="margin: 0px 10px 0px 10px;">Check out</span></span>
                                          <input type="date" class="form-control" id="hotelCheckOut"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-lg">
                                      </div>
                                  </th>
                                  <th scope="col" colspan="7">
                                      <div class="input-group input-group-lg">
                                          <span class="input-group-text" id="inputGroup-sizing-lg"
                                              style="color:black;font-weight: bold; font-size: 20px; "><span
                                                  style="margin: 0px 10px 0px 10px;">Adult</span></span>
                                          <select name="" id="hotelAdult" class="form-control">
                                              <option value="0" selected>0</option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                              <option value="5">5</option>


                                          </select>
                                      </div>
                                  </th>

                              </tr>
                              <tr>
                              <th scope="col" colspan="">
                              <div class="input-group input-group-lg">
                                  <span class="input-group-text" id="inputGroup-sizing-lg"
                                      style="color:black;font-weight: bold; font-size: 20px; "><span
                                          style="margin: 0px 10px 0px 10px;">Childreen</span></span>
                                  <select name="" id="hotelChildreen" class="form-control">
                                      <option value="0" selected>0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>


                                  </select>
                              </div>
                          </th>
                                  <th scope="col" colspan="">
                                      <div class="form-check form-check-inline">
                                          <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                              value="option1">
                                          <label class="form-check-label" for="inlineCheckbox1 "
                                              style="color:black;font-weight: bold; font-size: 20px; "><span
                                                  style="margin: 0px 10px 0px 10px;">Single
                                                  Room</span></label>
                                      </div>
                                      <div class="form-check form-check-inline">
                                          <input class="form-check-input" type="checkbox"
                                              id="inlineCheckbox2 " value="option2">
                                          <label class="form-check-label" for="inlineCheckbox2"
                                              style="color:black;font-weight: bold; font-size: 20px; "><span
                                                  style="margin: 0px 10px 0px 10px;">Suite </span></label>
                                      </div>
                                  </th>
                              </tr>
                              <tr>
                              </tr>
                              <tr>
                                  <th>
                                      <p><a href="reservation.html" class="btn btn-primary" onclick="bookingHotel()" ">Book Your Destination</a></p>
                                      <span id="checkUser"></span>
                                  </th>
                              </tr>
                          </tbody>

                      </table>

                  </div>
              </div>

          </div>

      </div>
  </div>`



    }
  }

}
// ====================== display single House =======================

function goToSingleHouse(id) {
  location.replace("house-single.html");
  localStorage.setItem('singleHouse', id);
}

function displayHouseSingle() {
  var houseTab = getObjFromLS('house');
  var roomTab = getObjFromLS('houseRooms');
  var singleHotel = getObjFromLS('singleHouse');

  for (var i = 0; i < houseTab.length; i++) {
    if (singleHotel == houseTab[i].id) {
      document.getElementById('singleHotelArea').innerHTML = `  <div class="container">
      <div class="row d-flex">
          <div class="col-md-12 about-intro">
              <div class="row">
                  <div class="col-md-6 d-flex align-items-stretch">
                      <div class="img d-flex w-100 align-items-center justify-content-center"
                          style="background-image:url(${houseTab[i].image});">
                      </div>
                  </div>
                  <div class="col-md-6 pl-md-5 py-5">
                      <div class="row justify-content-start pb-3">
                          <div class="col-md-12 heading-section ftco-animate">
                              <span class="subheading">About Our Hotel</span>
                              <h2 class="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                              <span class="title-orange"><i class="fa-sharp fa-solid fa-hotel"></i> ${houseTab[i].houseName}</span>
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th scope="col" colspan="2"><i class="fa-solid fa-globe"></i> Country</th>
                                          <td scope="col"> ${houseTab[i].country}</td>
                                          <th scope="col" colspan="2"><i class="fa-solid fa-city"></i> City</th>
                                          <td scope="col" colspan="2">${houseTab[i].city}</td>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <th scope="col" colspan="2"><span class="flaticon-mountains"> </span>Spot</th>
                                          <td scope="col">${houseTab[i].spot}
                                          </td>
                                          <th scope="col" colspan="2"><i class="fa-solid fa-location-pin"></i> ZIP Code</th>
                                          <td scope="col" colspan="2"> ${houseTab[i].code}</td>
                                      </tr>
                                     


                                  </tbody>
                              </table>
                              <p>${houseTab[i].description}</p>
                          </div>
                          <p><a  class="btn btn-primary" onclick="showRoomSingle()" ">Show Details</a></p>

                      </div>
                  </div>
              </div>
            <div class="row" id="houseRoomSingle">
              
          </div>
      

          </div>
      </div>
      <div class="row " style="margin-top: 100px;" id="bookSpace">      </div>

  </div>`



    }
  }

}


// ======================== Reservation Hotel =====================

function bookingHotel() {
  var connectedUser = getObjFromLS('connectedUser');
  var single = getObjFromLS('singleHotel');
  var reservationTab = getObjFromLS('reservations');
  var hotelChildreen = document.getElementById('hotelChildreen').value;
  var hotelAdult = document.getElementById('hotelAdult').value;
  var hotelCheckIn = document.getElementById('hotelCheckIn').value;
  var hotelCheckOut = document.getElementById('hotelCheckOut').value;

  // =============== date Calcul ===========================

  // var x = new Date (hotelCheckOut);
  // var y = new Date (hotelCheckIn);
  // alert(Math.floor((x - y) / (1000 * 60 * 60 * 24)));

  if (connectedUser == 0) {
    document.getElementById('checkUser').innerHTML = 'you are not connected';
    document.getElementById('checkUser').style.color = 'red';

  } else {

    var reservation = {
      id: generateId(reservationTab) + 1,
      idUser: connectedUser,
      idHotel: single,
      status: 'Not Valid',
      checkIn: hotelCheckIn,
      adult: hotelAdult,
      checkOut: hotelCheckOut,
      childreen: hotelChildreen
    }
    reservationTab.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservationTab));
  }
}

// ======================== Reservation House =====================

function bookingHouse() {
  var connectedUser = getObjFromLS('connectedUser');
  var single = getObjFromLS('singleHouse');
  var reservationTab = getObjFromLS('reservations');
  var houseChildreen = document.getElementById('houseChildreen').value;
  var houseAdult = document.getElementById('houseAdult').value;
  var houseCheckIn = document.getElementById('houseCheckIn').value;
  var houseCheckOut = document.getElementById('houseCheckOut').value;
  var houseRoom = document.getElementById('houseRoom').value;

  // =============== date Calcul ===========================
  // var x = new Date (houseCheckOut);
  // var y = new Date (houseCheckIn);
  // alert(Math.floor((x - y) / (1000 * 60 * 60 * 24)));

  if (connectedUser == 0) {
    document.getElementById('checkUser').innerHTML = 'you are not connected';
    document.getElementById('checkUser').style.color = 'red';

  } else {

    var reservation = {
      id: generateId(reservationTab) + 1,
      idUser: connectedUser,
      idhouse: single,
      status: 'Not Valid',
      checkIn: houseCheckIn,
      adult: houseAdult,
      checkOut: houseCheckOut,
      childreen: houseChildreen,
      idRoom: houseRoom
    }
    reservationTab.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservationTab));
  }
}

function showRoomSingle() {
  var roomTab = getObjFromLS('houseRooms');
  var singleHouse = getObjFromLS('singleHouse');
  var content = '';
  for (let i = 0; i < roomTab.length; i++) {
    if (roomTab[i].idHouse == singleHouse) {

      content = content + `      
      <div class="col-md-4 d-flex align-items-stretch" style="margin-top:40px;">
      <table class="table">
    <thead>
        <tr>
            <th scope="col" rowspan="3" colspan="3"><img src="images/hotel-room-6.jpg" class="img-thumbnail"
                    alt="..." style="margin-right:10px;" width=500px></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="col" colspan=""> <i class="fa-solid fa-money-check-dollar"></i> Price </th>
            <td scope="col">$ ${roomTab[i].price}</td>
        </tr>
        <tr>
            <th scope="col" colspan=""><i class="fa-solid fa-people-roof"></i> Capacity </th>
            <td scope="col"> ${roomTab[i].capacity}</td>
        </tr>
        <tr>
            <th scope="col" colspan=""><i class="fa-solid fa-bath"></i> Bath </th>
            <td scope="col"></span>${roomTab[i].bath}</td>
        </tr>
        <tr>
            <th scope="col" colspan=""> <i class="fa-sharp fa-solid fa-bed"></i> Bed </th>
            <td scope="col" colspan="">${roomTab[i].bed}</td>

        </tr>
        <tr>
            <td>
                <p><a  class="btn btn-primary" onclick="bookNow(${roomTab[i].id})">Book Your
                        Room</a></p>
            </td>
        </tr>
    </tbody>
</table>
</div>`
    }

  }
  document.getElementById('houseRoomSingle').innerHTML = content;


}

function bookNow(room) {
  document.getElementById('bookSpace').innerHTML = ` 
  <div class="card">
    <div class="card-header">
      <h5 class="title"><span>Book Now</span></h5>
    </div>
    <div class="card-body">
      <table class="table  table-borderless">

        <tbody>
          <tr>
            <th scope="col" colspan="">
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  style="color:black;font-weight: bold; font-size: 20px; "><span
                    style="margin: 0px 10px 0px 10px;">Check in</span></span>
                <input type="date" class="form-control" id="houseCheckIn"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg">
              </div>
            </th>
            <th scope="col" colspan="">
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  style="color:black;font-weight: bold; font-size: 20px; "><span
                    style="margin: 0px 10px 0px 10px;">Check out</span></span>
                <input type="date" class="form-control" id="houseCheckOut"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg">
              </div>
            </th>
            <th scope="col" colspan="" >
            <div class="input-group input-group-lg" >
            <span class="input-group-text" id="inputGroup-sizing-lg"
            style="color:black;font-weight: bold; font-size: 20px; background-color:orange;" ><span
              style="margin: 0px 10px 0px 10px;" >Room</span></span>
                
                <input type="number" id="houseRoom" class="form-control" value="${room}" >
            
                </div>
            </th>
          </tr>
          <tr>
            <th scope="col" colspan="">
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  style="color:black;font-weight: bold; font-size: 20px; "><span
                    style="margin: 0px 10px 0px 10px;">Adult</span></span>
                <select name="" id="houseAdult" class="form-control">
                  <option value="0" selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>


                </select>
              </div>
            </th>
            <th scope="col" colspan="">
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  style="color:black;font-weight: bold; font-size: 20px; "><span
                    style="margin: 0px 10px 0px 10px;">Childreen</span></span>
                <select name="" id="houseChildreen" class="form-control">
                  <option value="0" selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>


                </select>
              </div>
            </th>

          </tr>
          <tr>
          </tr>
          <tr>
            <th>
              <p><a href="reservation.html" class="btn btn-primary" onclick="bookingHouse()" >Book Now</a></p>
              <span id="checkUser"></span>
            </th>
          </tr>
        </tbody>

      </table>

    </div>
  

`

   

}

//============================== Reservation Page ====================

// ============================  display all reservation client ============

function displayReservation() {

  var reservationTab = getObjFromLS('reservations');
  var connectedUser = getObjFromLS('connectedUser');
  var rooms = getObjFromLS('houseRooms');
  var userTab = searshObj(connectedUser, 'users');

  content = '';

  for (let i = 0; i < reservationTab.length; i++) {
    var obj = searshObj(reservationTab[i].idHotel, 'hotels');


    var IN = new Date(reservationTab[i].checkIn);
    var OUT = new Date(reservationTab[i].checkOut);

    if (Number(reservationTab[i].idUser) == Number(connectedUser) && obj) {
      content = content + `<h2>${obj.hotelName}</h2>
    <ul class="list">
        <li><a href="#">Hotel Details </a></li>
        <li><a href="#">Check IN <span class="last">${reservationTab[i].checkIn}</span></a></li>
        <li><a href="#">Check Out <span class="last">${reservationTab[i].checkOut}</span></a></li>
        <li><a href="#">Adults <span class="last">${reservationTab[i].adult}</span></a></li>
        <li><a href="#">Childreens <span class="middle">%50</span><span
                    class="last">${reservationTab[i].childreen}</span></a></li>
        <li><a href="#">Country <span class="last">${obj.country}</span></a></li>
        <li><a href="#">City <span class="last">${obj.city}</span></a></li>
        <li><a href="#">ZIP Code  <span
                    class="last">${obj.code}</span></a></li>
    </ul>
    <ul class="list list_2">
        <li><a href="#">Total Days<span>${Math.floor((OUT - IN) / (1000 * 60 * 60 * 24))} Days</span></a></li>
        <li><a href="#">Total <span>$${((obj.price * reservationTab[i].adult) + ((obj.price * reservationTab[i].childreen) / 2))*Math.floor((OUT - IN) / (1000 * 60 * 60 * 24))}</span></a></li>

    </ul>
    <div class="payment_item" style="margin-bottom: 10px;">
        
        <p>Please wait until your reservation has been confirmed.  <span style="margin-left:320px; color:red;">${reservationTab[i].status}</span></p>
    </div >
    <hr>
    <button class="btn btn-danger" onclick="deleteByAdmin(${i},'reservations')">Delete</button>

    <hr>
    
    `;
    }
  }
  document.getElementById('hotelBook').innerHTML = content;




  var content_2 = '';
  for (let i = 0; i < reservationTab.length; i++) {
    var obj = searshObj(reservationTab[i].idhouse, 'house');

    // searshObj(reservationTab[i].idUser, 'users')
    var IN = new Date(reservationTab[i].checkIn);
    var OUT = new Date(reservationTab[i].checkOut);
    if (Number(reservationTab[i].idUser) == Number(connectedUser) && obj) {
      var room = searshObj(reservationTab[i].idRoom, 'houseRooms');

      content_2 = content_2 + `<h2>${obj.houseName}</h2>
    <ul class="list">
    
        <li><a href="#">Guest House Details </a></li>
        <li><a href="#">Check IN <span class="last">${reservationTab[i].checkIn}</span></a></li>
        <li><a href="#">Check Out <span class="last">${reservationTab[i].checkOut}</span></a></li>
        <li><a href="#">Adults <span class="last">${reservationTab[i].adult}</span></a></li>
        <li><a href="#">Childreens <span class="middle">%50</span><span
                    class="last">${reservationTab[i].childreen}</span></a></li>
        <li><a href="#">Country <span class="last">${obj.country}</span></a></li>
        <li><a href="#">City <span class="last">${obj.city}</span></a></li>
        <li><a href="#">ZIP Code  <span
                    class="last">${obj.code}</span></a></li>
        <li><a href="#">Room Price  <span
                    class="last">$ ${room.price}</span></a></li>
        <li><a href="#">Room ID  <span
                    class="last">${room.id}</span></a></li>
    </ul>
    <ul class="list list_2">
        <li><a href="#">Total Days<span>${Math.floor((OUT - IN) / (1000 * 60 * 60 * 24))} Days</span></a></li>
        <li><a href="#">Total <span>$${((room.price * reservationTab[i].adult) + ((room.price * reservationTab[i].adult) / 2))*Math.floor((OUT - IN) / (1000 * 60 * 60 * 24))}</span></a></li>

    </ul>
    <div class="payment_item" style="margin-bottom: 10px;">
        
        <p>Please wait until your reservation has been confirmed.  <span style="margin-left:320px; color:red;">${reservationTab[i].status}</span></p>
    </div >
    <hr>
    <button class="btn btn-danger" onclick="deleteByAdmin(${i},'reservations')">Delete</button>

    <hr>
    
    `;
    }
  }
  document.getElementById('houseBook').innerHTML = content_2;


}

function searshObj(id, key) {
  var t = JSON.parse(localStorage.getItem(key) || '[]');
  var findObj;
  for (var i = 0; i < t.length; i++) {
    if (t[i].id == id) {
      findObj = t[i];
      break;
    }
  }
  return findObj;
}


// ============================ Dashboard Business Man ========================

function displayBookTable() {
  var reservationTab = getObjFromLS('reservations')
  var connectedUser = getObjFromLS('connectedUser')
  var houseTab = getObjFromLS('house')
  
  var content = '';
  for (var j = 0; j < reservationTab.length; j++) {
    if (connectedUser != reservationTab[j].idUser) {
      for (var i = 0; i < houseTab.length; i++) {
        if (houseTab[i].id == reservationTab[j].idhouse && houseTab[i].inscription_by == connectedUser) {
          var room = searshObj(reservationTab[j].idRoom, 'houseRooms')
          var IN = new Date(reservationTab[j].checkIn);
          var OUT = new Date(reservationTab[j].checkOut);
          content = content + `
      <tr>
      <td>
      <h5>${reservationTab[j].id}</h5>
      </td>
      <td>
      <h5>${searshObj(reservationTab[j].idRoom, 'houseRooms').id}</h5>
      </td>
      <td>
          <h5>${houseTab[i].houseName}</h5>
      </td>
      <td>
          <h5>${searshObj(reservationTab[j].idUser, 'users').firstName}</h5>
      </td>
      <td>
          <h5>${reservationTab[j].checkIn}</h5>
      </td>
      <td>
      <h5>${reservationTab[j].checkOut}</h5>
      </td>
      <td>
          <h5>${reservationTab[j].adult}</h5>
      </td>
      <td>
          <h5>${reservationTab[j].childreen}</h5>
      </td>
      <td>
          <h5>${reservationTab[j].status}</h5>
      </td>
      <td>
          <h5>$ ${((room.price * reservationTab[j].adult) + ((room.price * reservationTab[j].childreen) / 2))*Math.floor((OUT - IN) / (1000 * 60 * 60 * 24))}</h5>
      </td>
    
     
      <td>
      <button class="btn btn-success" onclick="updateByAdmin(${reservationTab[j].id},'reservations','confirm')">Confirm</button>
      <button class="btn btn-danger" onclick="deleteByAdmin(${j},'reservations')">Delete</button>
      </td>
      </tr>
      `
        }
      }
    }
  }
  document.getElementById('bookTable').innerHTML = content;
}

function searshObjByInscription(id, key) {
  var t = JSON.parse(localStorage.getItem(key) || '[]');
  var findObj;
  for (var i = 0; i < t.length; i++) {
    if (t[i].id == id) {
      findObj = t[i];
      break;
    }
  }
  return findObj;
}
function searshObjByRoom(id, key) {
  var t = JSON.parse(localStorage.getItem(key) || '[]');
  var findObj;
  for (var i = 0; i < t.length; i++) {
    if (t[i].idHouse == id) {
      findObj = t[i];
      break;
    }
  }
  return findObj;
}

// ============================ Dashboard ADmin ========================
// ============================ users tables ========================

function displayAdminTable() {
  var userTab = getObjFromLS('users')
  var content = '';
  for (var i = 0; i < userTab.length; i++) {
    if (userTab[i].role != 'admin' && userTab[i].role != 'superadmin') {
      content = content + `
      <tr>
      <td>
      <h5>${userTab[i].id}</h5>
      </td>
      <td>
          <h5>${userTab[i].firstName}</h5>
      </td>
      <td>
          <h5>${userTab[i].lastName}</h5>
      </td>
      <td>
      <h5>${userTab[i].email}</h5>
      </td>
      <td>
          <h5>${userTab[i].phone}</h5>
      </td>
      <td>
          <h5>${userTab[i].location}</h5>
      </td>
      <td>
          <h5>${userTab[i].role}</h5>
      </td>
      <td>
      <button class="btn btn-danger" onclick="deleteByAdmin(${i},'users')">Delete</button>
      </td>
      
      </tr>
      `
    }
  }
  document.getElementById('usersTable').innerHTML = content;
  // <button class="btn btn-warning" onclick="updateProductByAdmin(${userTab[i].id})">Update</button>
  // 
}

function displaySuperAdminTable() {
  var userTab = getObjFromLS('users')
  var content = '';
  for (var i = 0; i < userTab.length; i++) {
    if (userTab[i].role != 'superadmin') {
      content = content + `
      <tr>
      <td>
      <h5>${userTab[i].id}</h5>
      </td>
      <td>
          <h5>${userTab[i].firstName}</h5>
      </td>
      <td>
          <h5>${userTab[i].lastName}</h5>
      </td>
      <td>
      <h5>${userTab[i].email}</h5>
      </td>
      <td>
          <h5>${userTab[i].phone}</h5>
      </td>
      <td>
          <h5>${userTab[i].location}</h5>
      </td>
      <td>
          <h5>${userTab[i].role}</h5>
      </td>
      <td>
      <button class="btn btn-danger" onclick="deleteByAdmin(${i},'users')">Delete</button>
      </td>
      
      </tr>
      `
    }
  }
  document.getElementById('usersTable').innerHTML = content;
  // <button class="btn btn-warning" onclick="updateProductByAdmin(${userTab[i].id})">Update</button>
  // 
}
// ============================ hotel Table ========================

function displayHotelTable() {
  var hotelTab = getObjFromLS('hotels')
  var content = '';
  for (var i = 0; i < hotelTab.length; i++) {

    content = content + `
      <tr>
      <td>
      <h5>${hotelTab[i].id}</h5>
      </td>
      <td>
          <h5>${hotelTab[i].hotelName}</h5>
      </td>
      <td>
          <h5>${hotelTab[i].ownerName}</h5>
      </td>
      <td>
      <h5>${hotelTab[i].email}</h5>
      </td>
      <td>
          <h5>${hotelTab[i].country}</h5>
      </td>
      <td>
          <h5>${hotelTab[i].city}</h5>
      </td>
      <td>
          <h5>$ ${hotelTab[i].price}</h5>
      </td>
      <td>
      <button class="btn btn-danger" onclick="deleteByAdmin(${i},'hotels')">Delete</button>
      </td>
      
      </tr>
      `
  }
  document.getElementById('hotelTable').innerHTML = content;
  // <button class="btn btn-warning" onclick="updateProductByAdmin(${userTab[i].id})">Update</button>
  // 
}
// ============================ house Table ========================

function displayHouseTable() {
  var houseTab = getObjFromLS('house')
  var content = '';

  for (var i = 0; i < houseTab.length; i++) {
    content = content + `
      <tr>
      <td>
      <h5>${houseTab[i].id}</h5>
      </td>
      <td>
          <h5>${houseTab[i].houseName}</h5>
      </td>
      <td>
          <h5>${houseTab[i].inscription_by}</h5>
      </td>
      <td>
      <h5>${houseTab[i].rooms}</h5>
      </td>
      <td>
          <h5>${houseTab[i].country}</h5>
      </td>     
      <td>
          <h5>${houseTab[i].status}</h5>
      </td>
      <td>
      <button class="btn btn-success" onclick="updateByAdmin(${houseTab[i].id},'house','Verifed')">Validate</button>
      <button class="btn btn-danger" onclick="deleteByAdmin(${i},'house')">Delete</button>
      </td>
      
      </tr>
      `

  }
  document.getElementById('houseTable').innerHTML = content;
  // <button class="btn btn-warning" onclick="updateProductByAdmin(${userTab[i].id})">Update</button>
  // 
}
// ============================ Reservation Table ========================

function displayReservationTable() {
  var bookTab = getObjFromLS('reservations')
  var content = '';
  var content_2 = '';


  for (var i = 0; i < bookTab.length; i++) {

    if (bookTab[i].idHotel) {
      content = content + `
      <tr>
      <td>
      <h5>${bookTab[i].id}</h5>
      </td>
      <td>
          <h5>${bookTab[i].idUser}</h5>
      </td>
      <td>
          <h5>${bookTab[i].idHotel}</h5>
      </td>
      <td>
      <h5>${bookTab[i].checkIn}</h5>
      </td>
      <td>
          <h5>${bookTab[i].checkOut}</h5>
      </td>
     
      <td>
          <h5>${bookTab[i].status}</h5>
      </td>
      <td>
      <button class="btn btn-success" onclick="updateByAdmin(${bookTab[i].id},'reservations','Valid')">Validate</button>
      <button class="btn btn-danger" onclick="deleteByAdmin(${i},'reservations')">Delete</button>
      </td>
      
      </tr>
      `
    }
  }
  for (var i = 0; i < bookTab.length; i++) {

    if (bookTab[i].idhouse) {
      content_2 = content_2 + `
      <tr>
      <td>
      <h5>${bookTab[i].id}</h5>
      </td>
      <td>
          <h5>${bookTab[i].idUser}</h5>
      </td>
      <td>
          <h5>${bookTab[i].idhouse}</h5>
      </td>
      <td>
      <h5>${bookTab[i].checkIn}</h5>
      </td>
      <td>
          <h5>${bookTab[i].checkOut}</h5>
      </td>
     
      <td>
          <h5>${bookTab[i].status}</h5>
      </td>
      <td>
      <button class="btn btn-success" onclick="updateByAdmin(${bookTab[i].id},'reservations','Valid')">Validate</button>
      <button class="btn btn-danger" onclick="deleteByAdmin(${i},'reservations')">Delete</button>
      </td>
      
      </tr>
      `
    }
  }
  document.getElementById('bookTable').innerHTML = content;
  document.getElementById('bookHouseTable').innerHTML = content_2;

  // <button class="btn btn-warning" onclick="updateProductByAdmin(${userTab[i].id})">Update</button>
  // 
}

function deleteByAdmin(id, key) {
  var userTab = getObjFromLS(key);
  userTab.splice(id, 1);
  localStorage.setItem(key, JSON.stringify(userTab));
  location.reload();
}

function updateByAdmin(id, key, msg) {
  var userTab = getObjFromLS(key);
  for (let i = 0; i < userTab.length; i++) {
    if (userTab[i].id == id) {
      userTab[i].status = msg;
    }

  }

  localStorage.setItem(key, JSON.stringify(userTab));
  location.reload();
}