mypath=/home/kapili3/k/svelte/sapper/time_management/src/routes

#_form.js _form.pug _index.pug

for d in index.svelte new.svelte [uid].svelte
do
  rsync $mypath/admin/colors/$d $mypath/admin/activities/$d
  rsync $mypath/admin/colors/$d $mypath/admin/announcements/$d
  rsync $mypath/admin/colors/$d $mypath/admin/users/$d
  rsync $mypath/admin/colors/$d $mypath/admin/extra/category/$d
  rsync $mypath/admin/colors/$d $mypath/admin/extra/news/$d

  rsync $mypath/admin/colors/$d $mypath/admin/users/groups/$d
  rsync $mypath/admin/colors/$d $mypath/admin/users/roles/$d
  rsync $mypath/admin/colors/$d $mypath/admin/work_packages/priorities/$d
  rsync $mypath/admin/colors/$d $mypath/admin/work_packages/statuses/$d
  rsync $mypath/admin/colors/$d $mypath/admin/work_packages/types/$d
done
