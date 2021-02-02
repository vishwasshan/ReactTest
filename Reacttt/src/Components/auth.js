class Auth{
  constructor(){
    this.athenticated=false
  }

   Login(cb){
      this.athenticated=true
      cb()
  }

  logOut(cb){
      this.athenticated=false;
      cb()
  }

  isAthenticated(){
      return this.athenticated
  }

}

export default new Auth()