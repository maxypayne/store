import {Form, FormControl} from "@angular/forms";

export interface AuthFormInterface {
  email: FormControl<string | undefined>;
  password: FormControl<string | undefined>;
  username: FormControl<string | undefined>;
  remember: FormControl<boolean | undefined>;
}
