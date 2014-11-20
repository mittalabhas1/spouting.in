git push origin :gh-pages
git branch -D gh-pages
git checkout -b gh-pages
git add dist -f
git commit -m "new build"
git subtree push --prefix dist origin gh-pages
print "Code deployed!"
git checkout dev
