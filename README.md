# angular-explore
this is a repo to explore various things we can do in angular , kind of like a tutorial 

The build.sh can be run to build the angular app and 'npm start' will run the app

For Person search with id 1111, an api call happens which is taken care by the node app, on Angular side, use of HttpClient is demonstrated
# changes on component create

![image](https://user-images.githubusercontent.com/20777854/149267083-c07468d3-f646-4cd4-a1c9-9eb11b6bec6e.png)

# Added login form with FormControl

Typescript changes:
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';
![image](https://user-images.githubusercontent.com/20777854/149295571-2f6fbd9d-e2d8-4cdb-a36f-d002f1c1dcd7.png)

Html changes:
![image](https://user-images.githubusercontent.com/20777854/149295690-324cbc21-b028-44f6-9c0d-7ea8fb55a59d.png)

Custom Validation in typescript
![image](https://user-images.githubusercontent.com/20777854/149295792-1271acc8-1d2f-4c28-a403-a7fce97087c7.png)

Added loginSuccess component
![image](https://user-images.githubusercontent.com/20777854/149296624-e6957e34-813f-444c-8215-b4cbeabe20a0.png)

Modified login component to show loginSuccess component when succeed.
![image](https://user-images.githubusercontent.com/20777854/149296745-342a79d5-cb50-433f-9f62-9c9b6061d2fd.png)

Added three new components {add,delete,search}person and person service
![image](https://user-images.githubusercontent.com/20777854/149298204-c3e4ee15-dff2-477c-853d-61c00eea8d3a.png)

In app.module.ts added RouterModule.forRoot
![image](https://user-images.githubusercontent.com/20777854/149313234-7348ca5b-f7a4-4840-81b2-b975196ec565.png)

In loginsuccess comonent added routerLinks and router outlets:
![image](https://user-images.githubusercontent.com/20777854/149313406-844e57be-7bc5-4713-a557-76b04df2225b.png)

Updated add,delete and search Person 
addPerson is using two way binding to get the field data
![image](https://user-images.githubusercontent.com/20777854/149321063-6c003a8a-162c-424a-aecb-b5aca1166e40.png)
deletePerson and searchPerson are using FormControl for data binding
![image](https://user-images.githubusercontent.com/20777854/149320944-11658f3e-b232-44fd-b41e-d1e4eba27836.png)


