using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CustomerReviews.Data.Repositories
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<CustomerReviewsDbContext>
    {
        public CustomerReviewsDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<CustomerReviewsDbContext>();

            builder.UseSqlServer("Data Source=DESKTOP-8LAGKCC\\SQLEXPRESS;Initial Catalog=VirtoCommerce3;Persist Security Info=True;User ID=virto;Password=11111;MultipleActiveResultSets=True;Connect Timeout=30");

            return new CustomerReviewsDbContext(builder.Options);
        }
    }
}
