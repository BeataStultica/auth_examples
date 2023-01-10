let request = require("request");

// лаба 2, отримання токену через client_credential grant
const get_reg_token = () => {
     let options = { method: "POST",
        url: "https://kpi.eu.auth0.com/oauth/token",
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        form:
        {grant_type: 'client_credentials',
        client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
        audience: 'https://kpi.eu.auth0.com/api/v2/',
        client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB'}
        };
    request(options, function(error, response, body){
        if (error) throw new Error(error)
        console.log(body)
    });
}

// лаба 2, реєстрація користувача
const reg_new_user = () => {
    let options = { method: "POST",
        url: "https://kpi.eu.auth0.com/api/v2/users",
        headers: {'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVCZTlBZFhrMERaUjhmR1dZYjdkViJ9.eyJpc3MiOiJodHRwczovL2twaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiSkl2Q081YzJJQkhsQWUycGF0bjZsNnE1SDM1cXh0aTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3BpLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjczMjQ3MTQxLCJleHAiOjE2NzMzMzM1NDEsImF6cCI6IkpJdkNPNWMySUJIbEFlMnBhdG42bDZxNUgzNXF4dGkwIiwic2NvcGUiOiJyZWFkOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.PyAIdF_0vGsIXl5gwT4V4TUUGHcGnilRfVHEEM9K_jiK0HKXftNF4hMdScfmLE_lEv_o1uFcAbTcloqOqwfUHUgHksIKNQeIrKxitX5Ss42skjxVJ3mzaJ4Ofv7w0al9qtHjJR7U2i_NqlMACJ5FYVnWc_DFvVDpSTG7JuOMRwedah92GNJnRAOXoEOctuh53DQH8OPacmeqEvORlSS6LGa09Zcoerwlppgzksl1AUe7Z51vhbSnUYzcAxz31bq0SxMtXI3iYVU4I07Vv-Uq7DvwYLAimJmjq2Zp5DoxUkYqkFU6hBc9o8Kfs43uq1CKolTKtojmLyBDnIWrSZlmUg',
        'Accept': 'application/json',
        },
        form:
        {
            "email":"asdimas14@gmail.com","connection":"Username-Password-Authentication","password":"strong_password19"
        }};
    request(options, function(error, response, body){
        if (error) throw new Error(error)
        console.log(body)
    });
}

// лаба 3, отримання токена та рефреш токена з використанням логіна та пароля користувача з лаби 2 (grant type password)
const get_user = () => {
    let options = { method: "POST",
        url: "https://kpi.eu.auth0.com/oauth/token",
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        form:
        {grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
        client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
        audience: 'https://kpi.eu.auth0.com/api/v2/',
        username: 'asdimas14@gmail.com',
        password: 'strong_password19',
        realm: 'Username-Password-Authentication',
        scope: 'offline_access',
        client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB'}
        };
    request(options, function(error, response, body){
        if (error) throw new Error(error)
        console.log(body)
    });
}


// лаба 3, оновлення токена з використанням рефреш токена
const  refresh_token = () => {
    var options = { method: 'POST',
    url: "https://kpi.eu.auth0.com/oauth/token",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form:
    { grant_type: 'refresh_token',
    client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
    client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
        refresh_token: 'FR-C_aMYShOcwPx2_0HBPhYlXwpGG1ETBbjRbRNcnLJD2'}
    };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    });
}

// лаба 3, зміна пароля
const change_pass = () => {
    let options = { method: "PATH",
        url: "https://kpi.eu.auth0.com/api/v2/users/63bbc07ddf31ca8fd7d24f76",
        headers: {'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVCZTlBZFhrMERaUjhmR1dZYjdkViJ9.eyJpc3MiOiJodHRwczovL2twaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiSkl2Q081YzJJQkhsQWUycGF0bjZsNnE1SDM1cXh0aTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3BpLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjczMjQ3MTQxLCJleHAiOjE2NzMzMzM1NDEsImF6cCI6IkpJdkNPNWMySUJIbEFlMnBhdG42bDZxNUgzNXF4dGkwIiwic2NvcGUiOiJyZWFkOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.PyAIdF_0vGsIXl5gwT4V4TUUGHcGnilRfVHEEM9K_jiK0HKXftNF4hMdScfmLE_lEv_o1uFcAbTcloqOqwfUHUgHksIKNQeIrKxitX5Ss42skjxVJ3mzaJ4Ofv7w0al9qtHjJR7U2i_NqlMACJ5FYVnWc_DFvVDpSTG7JuOMRwedah92GNJnRAOXoEOctuh53DQH8OPacmeqEvORlSS6LGa09Zcoerwlppgzksl1AUe7Z51vhbSnUYzcAxz31bq0SxMtXI3iYVU4I07Vv-Uq7DvwYLAimJmjq2Zp5DoxUkYqkFU6hBc9o8Kfs43uq1CKolTKtojmLyBDnIWrSZlmUg',
        'Accept': 'application/json',
        },
        form:
        {
            "connection":"Username-Password-Authentication","password":"ultra_strong_password19"
        }};
    request(options, function(error, response, body){
        if (error) throw new Error(error)
        console.log(body)
    });
}
