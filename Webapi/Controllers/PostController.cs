using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BlogApi2.Models;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace BlogApi2.Controllers
{
    public class PostController : ApiController
    {
        MyDatabaseContext db = new MyDatabaseContext();

        // ----------- || GET ALL POST || ----------------------------
        public List<Post> Get()
        {
            var postAndRespectiverComments = db.postDbSet.Include(x => x.Comments).ToList();
            //'include' method FORM 'System.Data.Entity'
            return postAndRespectiverComments;
        }

        // ----------- || GET POST BY ID || ----------------------------
        // GET api/values/5
        public List<Post> Get(string id)
        {
            var postAndRespectiverCommentsById = db.postDbSet.Include(x => x.Comments).Where(t => t.postId == id).ToList();
            return postAndRespectiverCommentsById;
        }

        // ----------- || CREATE POST || ----------------------------
        public IHttpActionResult Post([FromBody] Post post)
        {
            Post pst = new Post();
            pst.postId = post.postId;
            pst.postTitle = post.postTitle;
            pst.postBody = post.postBody;

            try
            {
                db.postDbSet.Add(pst);
                db.SaveChanges();
                return Json(new { result = "Post Added" });
            }
            catch
            {
                return Json(new { result = "Post Not Added" });
            }
        }

        // ----------- || DELETE POST || ----------------------------
        [HttpDelete]
        public IHttpActionResult DeleteComment (string commentId)
        {
            try
            {
                var commentItem = db.commentDbSet.Find(commentId);
                db.commentDbSet.Remove(commentItem);
                db.SaveChanges();

                return Json(new { result = "Comment Deleted Successfullyu" });
            }
            catch
            {
                return Json(new { result = "Something wrong ! Comment Can't Be Deleted" });
            }
        }


        // ----------- || UPDATE POST || ----------------------------
        public IHttpActionResult PutPost(string id, [FromBody] Post post)
        {

            if (id != post.postId)
            {
                return Json(new { result = "Id Should Be Matched" });
            }

            db.Entry(post).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
                return Json(new { result = "Post Updated" });
            }
            catch (DbUpdateConcurrencyException)
            {
                if (db.postDbSet.Find(id) == null)
                {
                    return Json(new { result = "No such Post || Something wrong" });
                }
                else
                {
                    return Json(new { result = "No such Post || Something wrong" });
                }
            }
        }

    }
}


