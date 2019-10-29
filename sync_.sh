mypath=/home/kapili3/k/svelte/sapper/time_management/src/routes

for d in _form.js _form.pug _index.pug index.svelte new.svelte [uid].svelte
do
  rsync $mypath/admin/users/$d $mypath/admin/activities/$d
  rsync $mypath/admin/users/$d $mypath/admin/announcements/$d
  rsync $mypath/admin/users/$d $mypath/admin/colors/$d
  rsync $mypath/admin/users/$d $mypath/admin/extra/category/$d
  rsync $mypath/admin/users/$d $mypath/admin/extra/news/$d

  rsync $mypath/admin/users/$d $mypath/admin/users/groups/$d
  rsync $mypath/admin/users/$d $mypath/admin/users/roles/$d
  rsync $mypath/admin/users/$d $mypath/admin/work_packages/priorities/$d
  rsync $mypath/admin/users/$d $mypath/admin/work_packages/statuses/$d
  rsync $mypath/admin/users/$d $mypath/admin/work_packages/types/$d
done
