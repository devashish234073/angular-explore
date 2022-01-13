cd angular-explore
ng build --base-href "/"
rm -r ../static
mkdir ../static
cp -r dist/angular-explore/* ../static