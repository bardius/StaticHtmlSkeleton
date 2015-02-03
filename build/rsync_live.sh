# This script will use rsync to 
# copy the files for the Jenkins job workspace to the provided target server:directory, 
# copy the asset files for the Jenkins job workspace to the provided target server:directory, 
# excluding the files listed in exclude.txt (regular expression list)
# setting proper file owner and permissions

# 1 - Location of the build checkout - double quoted, no trailing slash
# 2 - Relative path to be deployed - no trailing slash
# 3 - Target server IP
# 4 - Target server location
# 5 - Target server sudo user

# building the unix path for the root directory
dirRoot=$1
echo -e "\n\n\e[0;34mUnix path for Jenkins Workspace working dir is:\e[0m" $dirRoot
echo -e "\n\e[0;34mUnix path for Deployable files dir is:\e[0m" $dirRoot/$2

echo -e "\n\n\e[0;34m********** Start Synchronising files with Rsync **********\e[0m" 
echo /usr/bin/rsync -arivzt --delete --no-p --no-o --no-g --exclude-from=$dirRoot/build/exclude-live.txt --stats $dirRoot/$2/ -e \"/usr/bin/ssh\" --rsync-path=\"sudo /usr/bin/rsync\" $5@$3:$4 
sudo -H -u $5 bash -c "/usr/bin/rsync -arivzt --delete --no-p --no-o --no-g --exclude-from=$dirRoot/build/exclude-live.txt --stats $dirRoot/$2/ -e '/usr/bin/ssh' --rsync-path='sudo /usr/bin/rsync' $5@$3:$4"

echo -e "\n\n\e[0;34m********** Start Synchronising files in user upload folders with Rsync **********\e[0m" 
echo /usr/bin/rsync -arivzt --no-p --no-o --no-g --exclude-from=$dirRoot/build/exclude.txt --stats $dirRoot/$2/uploads/ -e \"/usr/bin/ssh\" --rsync-path=\"sudo /usr/bin/rsync\" $5@$3:$4/uploads 
sudo -H -u $5 bash -c "/usr/bin/rsync -arivzt --no-p --no-o --no-g --exclude-from=$dirRoot/build/exclude.txt --stats $dirRoot/$2/uploads/ -e '/usr/bin/ssh' --rsync-path='sudo /usr/bin/rsync' $5@$3:$4/uploads"

echo -e "\n\n\e[0;34m********** Set folder owners and permissions **********\e[0m"
echo /usr/bin/ssh $5@$3 "sudo chown -R www-data:www-data $4"
sudo -H -u $5 bash -c "/usr/bin/ssh $5@$3 'sudo chown -R www-data:www-data $4'"

echo -e "\n\n\e[0;34m********** Set permissions to folders **********\e[0m"
echo /usr/bin/ssh $5@$3 "sudo find $4 -type d -print0 | xargs -0 sudo chmod 0755"
sudo -H -u $5 bash -c "/usr/bin/ssh $5@$3 'sudo find $4 -type d -print0 | xargs -0 sudo chmod 0755'"

echo -e "\n\n\e[0;34m********** Set permissions to files **********\e[0m"
echo /usr/bin/ssh $5@$3 "sudo find $4 -type f -print0 | xargs -0 sudo chmod 0644"
sudo -H -u $5 bash -c "/usr/bin/ssh $5@$3 'sudo find $4 -type f -print0 | xargs -0 sudo chmod 0644'"

echo -e "\n\n\e[0;34m********** Set permissions to uploads folder **********\e[0m"
echo /usr/bin/ssh $5@$3 "sudo chmod 0755 -R $4/uploads"
sudo -H -u $5 bash -c "/usr/bin/ssh $5@$3 'sudo chmod 0755 -R $4/uploads'"

# Purge cache if you use a CDN
# echo -e "\n\n\e[0;34m********** Purge CDN Cache **********\e[0m"
# echo php curl_exec(curl_init("https://www.cloudflare.com/api_json.html?a=fpurge_ts&tkn=TOKEN&email=your@email.com&z=yourdomain.com&v=1"));
# php curl_exec(curl_init("https://www.cloudflare.com/api_json.html?a=fpurge_ts&tkn=TOKEN&email=your@email.com&z=yourdomain.com&v=1"));