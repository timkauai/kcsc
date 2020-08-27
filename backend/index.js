const {
    google
} = require("googleapis");
const keys = require('./keys.json');

const client = new google.auth.JWT(
    keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
);

const NEXT_EMAIL = [
    ["spam@jamesdpratt.com"]
]

const INTERN_APPLIC = [
    ["James", "Island", "College Freshman", "18", "jpratt@scu.edu", "Sam Pratt", "sam@sampratt.net", "808-651-4226", "i like computers accept me :)))"]
]

client.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return
    } else {
        console.log('Hacker Voice: I\'m in');
        internship(client);
    }
});

async function newsletter(cl) {
    const gsapi = google.sheets({
        version: 'v4',
        auth: cl,
    });
    const opt = {
        spreadsheetId: '1i_Y9AZ9EQcGqV5AcJtYkAE1SwEwHZeVmcnZAEphJqV8',
        range: 'emails!A:A'
    }

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    console.log(dataArray)
    let nextRow = dataArray.length + 1;
    console.log(nextRow);
    let nextEmailRange = 'emails!A' + nextRow;
    console.log(nextEmailRange)

    const uptOpt = {
        spreadsheetId: '1i_Y9AZ9EQcGqV5AcJtYkAE1SwEwHZeVmcnZAEphJqV8',
        range: nextEmailRange,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: NEXT_EMAIL
        }
    }

    let res = await gsapi.spreadsheets.values.update(uptOpt);
    console.log(res)
}

async function internship(cl) {
    const gsapi = google.sheets({
        version: 'v4',
        auth: cl,
    });
    const opt = {
        spreadsheetId: '1i_Y9AZ9EQcGqV5AcJtYkAE1SwEwHZeVmcnZAEphJqV8',
        range: 'internship!A:A'
    }

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    console.log(dataArray)
    let nextRow = dataArray.length + 1;
    console.log(nextRow);
    let nextEmailRange = 'internship!A' + nextRow;
    console.log(nextEmailRange)

    const uptOpt = {
        spreadsheetId: '1i_Y9AZ9EQcGqV5AcJtYkAE1SwEwHZeVmcnZAEphJqV8',
        range: nextEmailRange,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: INTERN_APPLIC
        }
    }

    let res = await gsapi.spreadsheets.values.update(uptOpt);
    console.log(res)
}