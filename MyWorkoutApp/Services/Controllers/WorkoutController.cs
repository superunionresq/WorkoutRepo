using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bll;

namespace Services.Controllers
{
    public class WorkoutController : ApiController
    {
        WorkoutDBEntities db = new WorkoutDBEntities();
        public IHttpActionResult Post(WorkOut_Collection item)
        {

            db.WorkOut_Collection.Add(item);
            int NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed To add workout");
            }

        }

        public IHttpActionResult Get()
        {
            var ObjRepository = new WorkoutRepository();
            return Ok(ObjRepository.ListAllWorkouts());
        }
    }
}
