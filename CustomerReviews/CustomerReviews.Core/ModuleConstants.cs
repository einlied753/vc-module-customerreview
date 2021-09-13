using System.Collections.Generic;
using VirtoCommerce.Platform.Core.Settings;

namespace CustomerReviews.Core
{
    public static class ModuleConstants
    {
        public static class Security
        {
            public static class Permissions
            {
                public const string Access = "customerReviews:access";
                public const string Create = "customerReviews:create";
                public const string Read = "customerReviews:read";
                public const string Update = "customerReviews:update";
                public const string Delete = "customerReviews:delete";

                public static string[] AllPermissions { get; } = { Read, Create, Access, Update, Delete };
            }
        }

        public static class Settings
        {
            public static class General
            {
                public static SettingDescriptor CustomerReviewsEnabled { get; } = new SettingDescriptor
                {
                    Name = "CustomerReviews.CustomerReviewsEnabled",
                    GroupName = "CustomerReviews|General",
                    ValueType = SettingValueType.Boolean,
                    DefaultValue = false
                };

                public static SettingDescriptor CustomerReviewsPassword { get; } = new SettingDescriptor
                {
                    Name = "CustomerReviews.CustomerReviewsPassword",
                    GroupName = "CustomerReviews|Advanced",
                    ValueType = SettingValueType.SecureString,
                    DefaultValue = "qwerty"
                };

                public static IEnumerable<SettingDescriptor> AllSettings
                {
                    get
                    {
                        yield return CustomerReviewsEnabled;
                        yield return CustomerReviewsPassword;
                    }
                }
            }

            public static IEnumerable<SettingDescriptor> AllSettings
            {
                get
                {
                    return General.AllSettings;
                }
            }
        }
    }
}
