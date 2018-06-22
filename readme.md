# fri3d programma
Fri3d Camp 2018 programma

## Howto

De site wordt gegenereerd met Jekyll. Bundler is nodig om de site
te genereren.

### MacOS

Sinds El Capitan is /usr/bin niet meer schrijfbaar, waardoor je problemen ondervindt met het opzetten van Jekyll. Er zijn een aantal manieren om dat te omzeilen:

Installeer Ruby via homebrew:

```bash
$ brew install ruby
```
Vervolgens zal `gem install jekyll bundler` werken zonder foutmelding.

Installeer de Jekyll gem in je user folder:

```bash
$ gem install jekyll bundler --user-install
```

## Gebruikte Tools

* [https://www.w3.org/TR/html5/](HTML5) -- We verwachten een relatief moderne browser
* [http://lesscss.org/](LESS) -- CSS pre-processor
* [http://gulpjs.com/](Gulp) -- Task runner   
* [https://www.npmjs.com/](NPM) -- Package manager  
* [http://jekyllrb.com/](Jekyll) -- Static site generator  

## Minimale instructies om te overleven:

Commando's te runnen in de root van de site (de dir waar deze readme staat)

Als je de ingebouwde server van jekyll wil gebruiken (en watchen voor changes):

```
$ bundle exec jekyll serve
```

Als je enkel de site wil builden (en watchen voor changes):

```
$ bundle exec jekyll build --watch
```

## LESS

De site gebruikt LESS voor het genereren van de CSS.

De standaard LESS files van Fri3d worden telkens bij het parsen van LESS gekopieerd vanuit de Fri3d website. Deze moet dan wel relatief tov. deze dir staan in '../fri3d2018-announce/'.

Om een nieuwe minified style.css te genereren doe je:

```bash
$ gulp
```

Je zal merken dat dit ook het regenereren van de Jekyll site triggert.

Check [http://localhost:5000](http://localhost:5000) om je wijzigingen te valideren.

Wil je een niet-minified css genereren dan doe je

```bash
$ gulp dev
```

Wil je `gulp dev` runnen telkens een .less file verandert, dan doe je

```bash
$ gulp stream
```

##GPL License
Fri3d Camp program content
    Copyright (C) 2018 Fri3d Camp

    This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
    
    www.fri3d.be - info@fri3d.be
