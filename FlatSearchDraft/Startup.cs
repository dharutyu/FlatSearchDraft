using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FlatSearchDraft.Startup))]
namespace FlatSearchDraft
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
