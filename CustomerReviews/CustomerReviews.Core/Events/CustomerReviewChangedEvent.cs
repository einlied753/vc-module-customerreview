using CustomerReviews.Core.Model;
using System.Collections.Generic;
using VirtoCommerce.Platform.Core.Events;

namespace CustomerReviews.Core.Events
{
    public class CustomerReviewChangedEvent : GenericChangedEntryEvent<CustomerReview>
    {
        public CustomerReviewChangedEvent(IEnumerable<GenericChangedEntry<CustomerReview>> changedEntries) : base(changedEntries)
        {
        }
    }
}
