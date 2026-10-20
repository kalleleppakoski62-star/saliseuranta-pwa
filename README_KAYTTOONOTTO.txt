SALISEURANTA 4.0 — SELAINSOVELLUS / ANDROID PWA

UUSI VERSIOSSA 4.0
1. Salin kuormasuositus aiempien saman liikkeen sarjojen perusteella: lisää, pidä tai kevennä.
2. Lepoajastin + nopea sarjan vahvistus ja ”= edellinen sarja” -painike.
3. Painon 28 päivän trendianalyysi riittävän mittausmäärän perusteella.
4. Viikoittainen liikemalli-/lihasryhmäkohtainen suorasarjojen yhteenveto.
5. 60 päivän voimatasojen muutosarvio, yksittäisten liikkeiden laskennallinen 1RM.
6. Vuorotyösuunnittelija: päivä-/yövuoro, nukkumapäivä, vapaa + vireys.
7. Asennettava PWA ja uusien versioiden automaattinen tarkistus ja käyttöönotto turvallisessa kohdassa.

JULKAISEMINEN ANDROID-PUHELIMELLA GITHUB PAGESISSA
1. Avaa GitHubissa aiemmin käyttämäsi Sali-repositorion Code-välilehti.
2. Lataa tämän ZIP-paketin sisältämät tiedostot repositorion JUUREEN (ei itse ZIP-tiedostoa).
   Tiedostot ovat index.html, sw.js, manifest.webmanifest sekä molemmat icon-PNG:t.
   Jos samannimiset tiedostot ovat jo olemassa, korvaa vanhat julkaisutiedostot.
   Säilytä .github-kansio; Android-käännöstä ei tässä enää tarvita.
3. Avaa Settings → Pages → Build and deployment → Deploy from a branch:
   Branch: main; Folder: /(root); Save.
4. Odota, kunnes GitHub Pages näyttää HTTPS-osoitteen.
5. Avaa kyseinen sivu Android Chromessa; Chromen valikko → Asenna sovellus / Lisää aloitusnäyttöön.

VERSIOPÄIVITYKSET
- Julkaise uuden PWA-version samat tiedostot SAMAAN repositorioon ja samaan polkuun.
- Palvelutyöntekijä (sw.js) tarkistaa päivitykset avatessa ja n. tunnin välein.
- Kun uusi päivitys on ladattu, se otetaan käyttöön automaattisesti vain, jos salitreeniä ei ole kesken.
- Keskeneräisen treenin aikana sovellus tarjoaa painikkeen ”Päivitä” tai päivitys odottaa.
- Älä muuta verkkotunnusta/polkua turhaan; localStorage on sidottu sivuston osoitteeseen.

TIETOJEN TURVALLISUUS
- Versiot 3.x ja 4.0 käyttävät samaa tietojen tallennusavainta: saliseuranta_fi_v1.
- Paikalliset merkinnät säilyvät samalla sivusto-osoitteella päivitettäessä.
- Jos siirryt eri tiedostosta/selaimesta/osoitteesta, vie ensin JSON-varmuuskopio ja tuo se uudessa.
- Ota säännöllisesti oma JSON-varmuuskopio. PWA:n välimuisti ei ole varmuuskopio.
- Tietoja ei lähetetä sovelluksen toimesta verkkopalveluun eikä käyttäjätiliä tarvita.

HUOMIO
HTML-tiedosto toimii myös ilman verkkoa, mutta EI ole automaattisesti päivittyvä asennettava PWA.
PWA:n installointi ja taustapäivitykset edellyttävät HTTPS-julkaisua ja selaimen tukea.
Sovelluksen harjoitus- ja ravintopäätelmät ovat viitteellisiä, eivät kehonkoostumusmittauksia.
