using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlogApi2.Models
{
    public class Post
    {
        [Key]
        public string postId { get; set; }
        public string postTitle { get; set; }
        public string postBody { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}