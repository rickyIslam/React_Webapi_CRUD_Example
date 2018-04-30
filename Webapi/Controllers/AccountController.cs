using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BlogApi2.Models;

namespace BlogApi2.Controllers
{
    public class AccountController : ApiController
    {
        // ----------- || LOGIN AUTHENTICATION || ----------------------------
        MyDatabaseContext db = new MyDatabaseContext();
        public IHttpActionResult Post([FromBody]LogIn login)
        {
            var obj = db.logInDbSet.Where(a => a.userName.Equals(login.userName) && a.userPassword.Equals(login.userPassword)).FirstOrDefault();
            if (obj != null)
                return Json(new { result = "authenticated" });
            else
                return Json(new { result = "un-authenticated" });
        }
    }
}
