using Microsoft.EntityFrameworkCore;
using AgendaFullStack.Server.Models;

namespace AgendaFullStack.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Contacto> Contactos { get; set; }
    }
}