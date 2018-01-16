﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    using Model;
    using Commons.ViewModel;
  public  class CourseViewModel : BaseViewModel<Course>
    {
        public  CourseViewModel(Course x) : base(x)
        {
            Name = x.Name;
        }
        public string Name { get; set; }
    }
}
