/*** Created by HP on 18-11-2015.*/
if (confirm("Heeft u een klacht over ons product Internet, Bellen en Televisie") === true) {
    document.writeln('<div class="bordered">' + '<div class="content">');
    document.writeln('<br>' + '<h1 class="title3">Internet, Bellen en Televisie</h1>');
    document.writeln('Klant meldt probleem met Internet, Bellen en Televisie');
    var tv = prompt("Aantal televisie toestellen?");
        if (tv == '') {
            document.writeln('<br><br>' + 'Geen aantal televisies aangegeven');
        }
        else {
            document.writeln('<br><br>' + 'Aantal televisies: ' + tv);
        }
    var splitter = confirm("Is uw splitter goed aangesloten?");
        if (splitter === true) {
            document.writeln('<br><br>' + 'Splitter is goed aangesloten')
        }
        else {
        document.writeln('<br><br>' + 'Probleem: Splitter is niet goed aangesloten')
    }
    var box = confirm("Is uw settopbox goed aangesloten?");
        if (box === true) {
            document.writeln('<br><br>' + 'Settopbox is goed aangesloten');
        }
        else {
            document.writeln('<br><br>' + 'Probleem: Settopbox is niet goed aangesloten');
        }
    var zender = confirm("Kunt u zenders ontvangen?");
        if (zender === true) {
            document.writeln('<br><br>' + 'Zenders worden ontvangen');
        }
        else {
            document.writeln('<br><br>' + 'Probleem: Zenders worden niet ontvangen');
        }
    if (splitter === true && box === true && zender === true) {
        document.writeln('<br><br>' + '...uw zenders worden gevonden, uw splitter is goed aangesloten en uw settopbox is goed aangesloten. U heeft geen Internet, Bellen en Televisie probleem.' +
            '<ul>' + '<li>' + 'Klant heeft ' + tv + ' televisies' + '</li>' + '<li>Splitter is goed aangesloten</li> <li>Settopbox is goed aangesloten</li> <li>Zenders worden ontvangen</li> </ul>');
    }
    else {
        if (splitter === false) {
            document.writeln('<br><br>' + '<a href="zenders-niet-gevonden.html">' + 'Splitter' + '</a>');
        }
        if (box === false) {
            document.writeln('<br><br>' + '<a href="splitter-aangesloten.html">' + 'Settopbox' + '</a>');
        }
        if (zender === false) {
            document.writeln('<br><br>' + '<a href="settopbox-aangesloten.html">' + 'Zenders ontvangen');
        }
    }
    document.writeln('</div>' + '</div>' + '</div>' + '</div>' + '<br>')
}
