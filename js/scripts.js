function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}
function Address (street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}
Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName + " " + this.address;

};
var lisa = new Contact("Lisa", "Simpson");
var home = new Address("742 Evergreen Terrace", "Springfield", "Oregon");

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".address").text(newContact.address);
   });
  });

});
