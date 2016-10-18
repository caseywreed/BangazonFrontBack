using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Bangazon.Data;
using Bangazon.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace BangazonAPI.Controllers
{
    [ProducesAttribute("application/json")]
    [Route("[controller]")]
    public class LineItemsController : Controller
    {


        private BangazonContext context;
        public LineItemsController(BangazonContext ctx)
        {
            context = ctx;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            IQueryable<object> LineItems = from lineitem in context.LineItem select lineitem;

            if (LineItems == null)
            {
                return NotFound();
            }

            return Ok(LineItems);

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "Getlineitem")]
        public IActionResult Get([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                LineItem lineitem = context.LineItem.Single(m => m.LineItemId == id);

                if (lineitem == null)
                {
                    return NotFound();
                }
                
                return Ok(lineitem);
            }
            catch (System.InvalidOperationException ex)
            {
                return NotFound();
            }


        }
        // POST method
        public IActionResult Post([FromBody] LineItem lineitem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.LineItem.Add(lineitem);
            try
            {
                context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (lineitemExists(lineitem.LineItemId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("Getlineitem", new { id = lineitem.LineItemId }, lineitem);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put([FromRoute]int id, [FromBody]LineItem lineitem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if(lineitem.LineItemId != id)
            {
                return BadRequest(lineitem);
            }
            context.LineItem.Update(lineitem);
            context.SaveChanges();
            return Ok(lineitem);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            LineItem lineitem = context.LineItem.Single(m => m.LineItemId == id);

            if (lineitem == null)
            {
                return NotFound();
            }
            else
            {
                context.LineItem.Remove(lineitem);
                    try
                    {
                        context.SaveChanges();
                    }
                    catch (DbUpdateException)
                    {
                        if (lineitemExists(lineitem.LineItemId))
                        {
                            return new StatusCodeResult(StatusCodes.Status403Forbidden);
                        }
                        else
                        {
                            throw;
                        }
                    }
            }
            return Ok(lineitem);
        }
        private bool lineitemExists(int id)
        {
            return context.LineItem.Count(e => e.LineItemId == id) > 0;
        }
    }
}
