using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Bangazon.Models
{
  public class Order
  {
    [Key]
    public int OrderId {get;set;}

    [Required]
    [DataType(DataType.Date)]
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime DateCreated {get;set;}

    
    [DataType(DataType.Date)]
    public DateTime? DateCompleted {get;set;}

    // Form relationship to Customer and CustomerId
    public int CustomerId {get;set;}
    public Customer Customer {get;set;}

    // Form relationship to Payment and PaymentId
    public int? PaymentTypeId {get;set;}
    public PaymentType PaymentType {get;set;} 

    public ICollection<LineItem> LineItems;
  }
}