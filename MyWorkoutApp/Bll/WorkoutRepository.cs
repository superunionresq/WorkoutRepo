using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class WorkoutRepository
    {
        public List<WorkOut_Category> ListAllCategory()
        {
            try
            {

                WorkoutDBEntities db = new WorkoutDBEntities();

                return db.WorkOut_Category.ToList();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public void AddCategory(WorkOut_Category item)
        {
            try
            {
                WorkoutDBEntities db = new WorkoutDBEntities();
                db.WorkOut_Category.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public void DeleteCategory(int id)
        {
            Console.WriteLine("enter the category id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                WorkoutDBEntities db = new WorkoutDBEntities();
                var ObjCategory = (from obj in db.WorkOut_Category
                                   where obj.Category_id == Id
                                   select obj).First();
                db.WorkOut_Category.Remove(ObjCategory);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void EditCategory(WorkOut_Category item)
        {

            try
            {
                WorkoutDBEntities db = new WorkoutDBEntities();
                var ObjCategory = (from obj in db.WorkOut_Category
                                   where obj.Category_id == item.Category_id
                                   select obj).First();

                ObjCategory.Category_Name = item.Category_Name;

                db.SaveChanges();




            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public WorkOut_Category Get(int id)
        {
            WorkOut_Category objWork = null;

            try
            {
                WorkoutDBEntities db = new WorkoutDBEntities();
                objWork = (from obj in db.WorkOut_Category
                           where obj.Category_id == id
                           select obj).First();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;

        }
    }
}
