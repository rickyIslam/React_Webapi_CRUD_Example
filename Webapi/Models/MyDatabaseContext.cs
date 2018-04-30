using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BlogApi2.Models;
using System.Data.Entity;

namespace BlogApi2.Models
{
    public class MyDatabaseContext : DbContext
    {
        public MyDatabaseContext() : base("name=BlogApi")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Post> postDbSet { get; set; }
        public DbSet<Comment> commentDbSet { get; set; }
        public DbSet<LogIn> logInDbSet { get; set; }
    }
}