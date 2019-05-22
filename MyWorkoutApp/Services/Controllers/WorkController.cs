using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bll;

namespace Services.Controllers
{
    public class WorkController : ApiController
    {
        WorkoutDBEntities db = new WorkoutDBEntities();

        public IHttpActionResult Get()
        {
            var ObjRepository = new WorkoutRepository();
            return Ok(ObjRepository.ListAllCategory());
        }


        public IHttpActionResult Post(WorkOut_Category item)
        {

            db.WorkOut_Category.Add(item);
            int NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed To add workout");
            }

        }



        public IHttpActionResult Get(int id)
        {

            if (id < 0)
            {

                return BadRequest("Invalid workoutid number ");

            }
            var Obj = db.WorkOut_Category.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            return Ok(Obj);
        }

        public IHttpActionResult Put(WorkOut_Category obj)
        {
            db.WorkOut_Category.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;

            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed To Modify supplier");
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var Obj = db.WorkOut_Category.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            db.WorkOut_Category.Remove(Obj);
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed to Delete workout");
            }
        }

    }
}
