﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bll
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class WorkoutDBEntities : DbContext
    {
        public WorkoutDBEntities()
            : base("name=WorkoutDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<WorkOut_Active> WorkOut_Active { get; set; }
        public virtual DbSet<WorkOut_Category> WorkOut_Category { get; set; }
        public virtual DbSet<WorkOut_Collection> WorkOut_Collection { get; set; }
    }
}
