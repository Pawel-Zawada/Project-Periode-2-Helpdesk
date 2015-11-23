/*** Created by HP on 18-11-2015.*/
if (confirm("Heeft u een klacht over ons product Internet en Bellen?") === true) {
    document.writeln('<div class="bordered">' + '<div class="content">');
    document.writeln('<br>' + '<h1 class="title2">Internet en Bellen</h1>');
    document.writeln('Klant meldt probleem met Internet en Bellen');
    var kies = confirm("Hoort u een kiestoon?");
        if (kies === true) {
            document.writeln('<br><br>' + "Hoort een kiestoon");
        }
        else {
            document.writeln('<br><br>' + "Probleem: Hoort geen kiestoon");
        }
    var zelfbel = confirm('Kunt u uzelf bellen op bijvoorbeeld een mobiel nummer');
        if (zelfbel === true) {
            document.writeln('<br><br>' + "Kan zichzelf bellen");
        }
        else {
            document.writeln('<br><br>' + "Probleem: Kan zichzelf niet bellen");
        }
    var bel = confirm('Kunt u met uw mobiel het nummer bellen waar u een klacht over hebt?');
        if (bel === true) {
            document.writeln('<br><br>' + "Kan bellen waar hij/zij klacht over heeft");
        }
        else {
            document.writeln('<br><br>' + "Probleem: Kan niet bellen");
        }
    if (bel == true && zelfbel === true && kies === true) {
        document.writeln('<br><br>' + '...u heeft een kiestoon, u kunt bellen en gebeld worden. U heeft geen Internet en Bellen probleem.' +
            '<ul> <li>Hoort een kiestoon</li> <li>Kan van vast naar mobiel bellen</li> <li>Kan van mobiel naar vast bellen</li>');
    }
    else {
        if (kies === false) {
            document.writeln('<br><br>' + '<a href="geen-kiestoon.html">' + 'Kiestoon horen' + '</a>');
        }
        if (zelfbel === false) {
            document.writeln('<br><br>' + '<a href="uit-bellen.html">' + 'Uzelf bellen' + '</a>');
        }
        if (bel === false) {
            document.writeln('<br><br>' + '<a href="gebeld-worden.html">' + 'Bellen' + '</a>');
        }
    }
    document.writeln('</div>' + '</div>' + '<br>')
}
