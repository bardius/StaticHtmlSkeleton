[![Build Status](https://travis-ci.org/bardius/StaticHtmlSkeleton.svg?branch=master)](https://travis-ci.org/bardius/StaticHtmlSkeleton)
[![Dependency Status](https://www.versioneye.com/user/projects/5593bc066238390015000034/badge.png)](https://www.versioneye.com/user/projects/5593bc066238390015000034)
[![Dependency Status](https://www.versioneye.com/user/projects/5593bc5d6238390018000023/badge.png)](https://www.versioneye.com/user/projects/5593bc5d6238390018000023)
[![Code Climate](https://codeclimate.com/github/bardius/StaticHtmlSkeleton/badges/gpa.svg)](https://codeclimate.com/github/bardius/StaticHtmlSkeleton)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Gitter chat](https://badges.gitter.im/bardius/StaticHtmlSkeleton.png)](https://gitter.im/bardius/StaticHtmlSkeleton)

![](http://www.bardis.info/StaticHtmlSkeleton.png?)

# Static HTML Project Generator distribution with integrated Zurb Foundation 6 (v6.2.3)

StaticHtmlSkeleton is a Static HTML Project Generator distribution with integrated Zurb Foundation 6 Framework.

Travis CI, Bower and Grunt with custom builds are included for better workflow on the Front End, while Foundation 6 is
the framework of choice that has been integrated in all the templates/views. Cache busting is also been taken care of.

Pages are generated with grunt assemble npm module from handlebars templates while best practices are being used for
htaccess, favicons, html meta, og meta, twiter card meta, google analytics etc.

ESLint and SCSSLint has been set to ensure standards along with Babel to allow ES2015 code. Last but not least, Jasmine
is in place for Unit testing.

You can browse the Git repository, that I update with big releases every couple of months or so, and use freely for your
projects.

You can find the documentation for Zurb Foundation 6 here http://foundation.zurb.com/docs/.

Requirements

-   [NodeJs](http://nodejs.org/)
-   [Ruby](http://www.rubyinstaller.org/)
-   [Grunt](http://gruntjs.com/)
-   [Bower](https://github.com/bower/bower)

## Dependencies

    1. Install NodeJs and add it to you system PATH (http://nodejs.org/download/)
    2. Install Ruby or run gem update --system to ensure latest version (https://www.ruby-lang.org/en/downloads/)

## Quick Start

The fastest way to get everything running is (must have nodejs and ruby installed):

    1. git clone https://github.com/bardius/StaticHtmlSkeleton.git
    2. cd StaticHtmlSkeleton
    3. npm install -g grunt grunt-cli bower
    4. npm run setup
    5. Access the website at localhost:8000 (grunt watch mode should be on to recompile your changes)

## How To Use

The HTML files are generated with Grunt tasks based on Assemble generator with the Handlebars templates found in
/statix-src folder. The templates are split into layouts, partials and pages.

Partials can be included in a layout, page or another partial. Pages can have variables whose values are defined in the
top part of the file (eg. page title).

All the custom JavaScript should be inside the /ui-src/js/script.js file following the structural pattern and self
declaring variable/method names. Alternatively, you can write your own jQuery plugin with a module pattern that should
then be placed in the proper folder and included in the Gruntfile to be compiled with the rest. Mind the existing
Foundation scripts, no need to reinvent the wheel.

In the /ui-src/sass folder you can find the existing styles and place your own. Mind the existing Foundation variables
and helper classes, no need to reinvent the wheel. For the documentation of this front end framework please check
Zurb Foundation Docs.

You can run the Grunt tasks for the root folder and all the compiled/generated files will be placed to the public_html
folder.

## Manual Setup

Due to the use of the Zurb Foundation Framework 6 (version 6.2) the need for the following steps is unavoidable unless
you do not need the framework at all.

We need to install NodeJs, Node Packaged Modules, Ruby, GIT and bower dependency manager if they are not already
installed to the system.

More information can be found below at their official web sites:

    http://git-scm.com/downloads				(GIT)
    http://nodejs.org/                          (NodeJs)
    https://npmjs.org/                          (Node Packaged Modules)
    http://www.rubyinstaller.org/               (Ruby)
    https://github.com/bower/bower				(Bower)
    http://foundation.zurb.com/sites/docs/	    (Foundation 6 - Sass based)
    http://assemble.io/                         (Assemble)

The command line steps are:

    1. [sudo] npm install -g grunt grunt-cli bower
    2. [sudo] npm run setup
    3. grunt serve [release, dev, watch]

Your project should work now and you can see your front end working, all the source files are found in the ui-src folder
along with the existing Grunt tasks and all the layouts, partials and pages are placed under statix-src.

Visit to localhost:8000 to view the website after grunt serve task is run.

Tip: In case you are behind a firewall and connection to git is refused, force https for all git connections with running
this in your bash git config --global url."https://".insteadOf git://

## Virtual Host Settings

Here is a sample setup for your virtual host configuration

    <VirtualHost *:80>
                ServerAdmin support@domain.com

                ServerName domain.com
                ServerAlias domain.co.uk

                DocumentRoot /var/www/domain.com/httpdocs

                <Directory /var/www/domain.com/httpdocs>
                        Options -Indexes FollowSymLinks MultiViews
                        AllowOverride All
                        Order allow,deny
                        allow from all
                </Directory>

                ErrorLog ${APACHE_LOG_DIR}/domain.com.error.log

                # Possible values include: debug, info, notice, warn, error, crit,
                # alert, emerg.
                LogLevel warn

                CustomLog ${APACHE_LOG_DIR}/domain.com.access.log combined
        </VirtualHost>

## Useful Links and Documentation

Links to Front end Frameworks (Zurb and Boostrap)

http://bootstrap.braincrafted.com/
http://foundation.zurb.com/

NodeJs, Node Packaged Modules, Ruby, compass, sass, foundation gems and GIT and bower dependency manager

http://git-scm.com/downloads (GIT)

http://nodejs.org/ (NodeJs)

https://npmjs.org/ (Node Packaged Modules)

http://www.rubyinstaller.org/ (Ruby)

https://github.com/bower/bower (Bower)

http://sass-lang.com/install (Sass)

http://foundation.zurb.com/sites/docs/ (Foundation 6 - Sass based)

http://assemble.io/ (Assemble)
