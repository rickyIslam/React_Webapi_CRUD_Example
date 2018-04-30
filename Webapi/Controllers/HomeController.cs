using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BlogApi2.Models;

namespace BlogApi2.Controllers
{
    public class HomeController : Controller
    {
        // I USED THIS JUST TO INITIALIZE THE CONTEXT SO THAT WHEN IT GONNA RUN, DB WILL BE CREATED
        public ActionResult Index()
        {
            using (MyDatabaseContext mdc = new MyDatabaseContext())
            {
                int i = mdc.postDbSet.Count();
            }

            return View();
        }
    }
}
