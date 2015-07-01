[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Dependency Status](https://www.versioneye.com/user/projects/5593bc066238390015000034/badge.png)](https://www.versioneye.com/user/projects/5593bc066238390015000034)
[![Dependency Status](https://www.versioneye.com/user/projects/5593bc5d6238390018000023/badge.png)](https://www.versioneye.com/user/projects/5593bc5d6238390018000023)

Static HTML Project Skeleton Grunt Build with integrated Zurb Foundation 5
============================================================================

This is a skeleton for kick starting new static HTML5 projects that require to be fully responsive.
Bower and Grunt with custom build tasks are included for better workflow on front end and.
Zurb Foundation 5 front end framework is already included and provides out of the box responsive functionality for the most common website features.
Pages are generated with grunt assemble npm module from handlebars templates while Zurb Foundation 5 is integrated.
Best practices are being used for htaccess, favicons, html meta, og meta, twiter card meta, google analytics etc.

You can find the documentation for Zurb Foundation 5 here http://foundation.zurb.com/docs/

Requirements

* [NodeJs] (http://nodejs.org/)
* [Ruby] (http://www.rubyinstaller.org/)
* [Sass] (http://sass-lang.com/install)
* [Grunt] (http://gruntjs.com/)
* [Bower] (https://github.com/bower/bower)


Quick Start
------------------------------------------------------

To setup and use follow these steps

    1. Checkout of the SVN repo
    2. Setup your virtual host localy (see details in relevant section of readme file).
    3. The rood dir of your host should be trunk/public_html
    4. Install any dependencies if not already existing in your system
    5. Go to the trunk folder
    6. Run [sudo] npm install -g grunt
    7. Run [sudo] npm install -g grunt-cli
    8. Run [sudo] npm install -g bower
    9. Run npm install
    10. Run grunt setup
    11. Use the commands grunt [watch, dev, deploy, generate]


Dependencies
---------------------------------------------

    1. Install NodeJs and add it to you system PATH (http://nodejs.org/download/)
    2. Install Ruby or run gem update --system to ensure latest version (https://www.ruby-lang.org/en/downloads/)
    3. Install Sass by running gem install sass (http://sass-lang.com/install)


How To Use
---------------------------------------------

The HTML files are generated with Grunt tasks based on Assemble generator with the Handlebars templates found in trunk/static-src folder. The templates are split into layouts, partials and pages. Partials can be included in a layout, page or another partial. Pages can have variables whose values are defined in the top part of the file (eg. page title).

All the custom JavaScript should be inside the /trunk/public_html/js/script.js file following the structural pattern and self declaring variable/method names. Alternatively, you can write your own jQuery plugin with a module pattern that should then be placed in the proper folder and included in the Gruntfile to be compiled with the rest. Mind the existing Foundation scripts, no need to reinvent the wheel.

In the /trunk/sass folder you can find the existing styles and place your own. Mind the existing Foundation variables and helper classes, no need to reinvent the wheel. For the documentation of this front end framework please check Zurb Foundation Docs

You can run the Grunt tasks for the trunk folder and all the compiled/generated files will be placed to the trunk/public_html folder


Virtual Host Settings
---------------------------------------------

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

Useful Links and Documentation
----------------------------------------------

Link to Front end Framework http://foundation.zurb.com/

NodeJs, Node Packaged Modules, Ruby, compass, sass, foundation gems and GIT and bower dependency manager

http://git-scm.com/downloads				(GIT)

http://nodejs.org/					(NodeJs)

https://npmjs.org/					(Node Packaged Modules)

http://www.rubyinstaller.org/				(Ruby)

https://github.com/bower/bower				(Bower)

http://sass-lang.com/install				(Sass)

http://compass-style.org/install/			(Compass)

http://foundation.zurb.com/docs/sass.html		(Foundation 5 - Sass based)
