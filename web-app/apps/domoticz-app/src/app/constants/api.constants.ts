//Create "credentials.secret.ts" with namespace Credentials that export username and password
import { Credentials } from './credentials.secret';

export namespace API
{
    const BASE_URL = "http://31.208.177.79:1111/json.htm?username=" + Credentials.username + "&password=" + Credentials.password;

    export const ALL_TEMPS = BASE_URL + "&type=devices&filter=temp&used=true";

    export const TEMP_HISTORY = BASE_URL + "&type=graph&sensor=temp"
}