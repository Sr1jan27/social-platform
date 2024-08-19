import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// first comment

// date 19-08-2024 POTD GFG
//  int findkthsmallestnumber(int[] arr, int k){

//     Arrays.sort(arr);
//     return arr[k-1];
// }
