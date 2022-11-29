function SignIn() {
    return ( 
        <div>

<form id="form">
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="txt" class="form-control" id="ttt" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="txt" class="form-control" id="kkk" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="bbb" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="www"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
     );
}

export default SignIn;