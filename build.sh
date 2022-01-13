cd angular-explore
ng build --base-href "/"
rm -r ../nodeapp/static
mkdir ../nodeapp/static
cp -r dist/angular-explore/* ../nodeapp/static