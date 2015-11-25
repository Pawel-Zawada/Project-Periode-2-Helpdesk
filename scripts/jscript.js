/*** Created by HP on 11-11-2015.*/
var naam = prompt("Uw naam hier");
naam = capitalizeFirstLetter(naam);
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth()+1;
var yyyy = date.getFullYear();
var datum = dd + '/' + mm + '/' + yyyy;
var model = prompt("Wat is het merk en type van uw modem?");
model = capitalizeFirstLetter(model);
document.writeln('<div class="panel panel-success">' + '<div class="panel-heading">' + '<h1 class="panel-title">'+ 'Klant naam: ' + naam + '</h1>' + '</div>' + '<div class="panel-body">');
document.writeln("Klant belt op: " + datum + "<br><br>");
document.writeln("Modem van klant: " + model + "<br><br>");
document.writeln('<script src="scripts/int.js"></script>');
document.writeln('<script src="scripts/intbel.js"></script>');
document.writeln('<script src="scripts/intbeltv.js"></script>');
document.writeln('<br>' + '<footer>Project Helpdesk Javascript - Versie 1.0 </footer>');

