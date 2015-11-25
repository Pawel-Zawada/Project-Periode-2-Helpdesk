/*** Created by HP on 18-11-2015.*/
if (confirm("Heeft u een klacht over ons product Internet, Bellen en Televisie") === true) {
    document.writeln('<div class="bordered">' + '<div class="content">');
    document.writeln('<br>' + '<u><h1 class="title3">Internet, Bellen en Televisie</h1></u>');
    document.writeln('Klant meldt probleem met Internet, Bellen en Televisie' + '<br><br>');
    var tv = prompt("Aantal televisie toestellen?");
    if (tv == '') {
        document.writeln('<div class="alert alert-info" role="alert">Geen aantal televisies aangegeven</div>');
    }
    else {
        document.writeln('<div class="alert alert-info" role="alert">Aantal televisies: ' + tv + '</div>');
    }
    var splitter = confirm("Is uw splitter goed aangesloten?");
    if (splitter === true) {
        document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Splitter is goed aangesloten</div>')
    }
    else {
        document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Splitter is niet goed aangesloten</div>')
    }
    var box = confirm("Is uw settopbox goed aangesloten?");
    if (box === true) {
        document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Settopbox is goed aangesloten</div>');
    }
    else {
        document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Settopbox is niet goed aangesloten</div>');
    }
    var zender = confirm("Kunt u zenders ontvangen?");
    if (zender === true) {
        document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Zenders worden ontvangen</div>');
    }
    else {
        document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Zenders worden niet ontvangen</div>');
    }
    if (splitter === true && box === true && zender === true) {
        document.writeln('<div class="well"><strong>...Uw zenders worden gevonden, uw splitter is goed aangesloten en uw settopbox is goed aangesloten. U heeft geen Internet, Bellen en Televisie probleem.</strong>' +
            '<li class="list-group-item">' + 'Klant heeft ' + tv + ' televisies' + '</li>' + '<li class="list-group-item">Splitter is goed aangesloten</li> <li class="list-group-item">Settopbox is goed aangesloten</li> <li class="list-group-item">Zenders worden ontvangen</li> </ul> </div>');
    }
    else {
        if (splitter === false) {
            document.writeln('<a href="zenders-niet-gevonden.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Splitter</strong></button>' + '</a>' + '<br><br>');
        }
        if (box === false) {
            document.writeln('<a href="splitter-aangesloten.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Settopbox</strong></button>' + '</a>' + '<br><br>');
        }
        if (zender === false) {
            document.writeln('<a href="settopbox-aangesloten.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Zenders ontvangen</strong></button>' + '</a>' + '<br><br>');
        }
    }
    document.writeln('</div>' + '</div>' + '</div>' + '</div>' + '<br>');
}
