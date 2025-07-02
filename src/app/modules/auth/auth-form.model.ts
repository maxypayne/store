import {Form, FormControl} from "@angular/forms";

export interface AuthForm {
  email: FormControl<string | undefined>;
  password: FormControl<string | undefined>;
  username: FormControl<string | undefined>;
}
