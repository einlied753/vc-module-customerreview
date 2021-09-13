﻿using CustomerReviews.Data.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirtoCommerce.Platform.Core.Common;

namespace CustomerReviews.Data.Repositories
{
    public interface ICustomerReviewRepository : IRepository
    {
        IQueryable<CustomerReviewEntity> CustomerReviews { get; }

        Task<IEnumerable<CustomerReviewEntity>> GetByIdsAsync(IEnumerable<string> ids);

        //void DeleteCustomerReviews(string[] ids);
    }
}
