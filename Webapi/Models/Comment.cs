using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogApi2.Models
{
    public class Comment
    {
        [Key]
        public string commentId { get; set; }
        public string postId { get; set; }
        public string comment { get; set; }
    }
}