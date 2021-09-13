using CustomerReviews.Core.Model;
using System.Collections.Generic;
using VirtoCommerce.Platform.Core.Events;

namespace CustomerReviews.Core.Events
{
    public class CustomerReviewChangeEvent : GenericChangedEntryEvent<CustomerReview>
    {
        public CustomerReviewChangeEvent(IEnumerable<GenericChangedEntry<CustomerReview>> changeEntries) : base(changeEntries)
        {
        }
    }
}