using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FlatSearchDraft.Api.Controllers
{
    public class SearchController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Test()
        {
            return Ok("Test Passed");
        }
    }
}
