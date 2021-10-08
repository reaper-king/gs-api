var { GoogleSpreadsheet } = require('google-spreadsheet');

var cors = require('cors')
const doc = new GoogleSpreadsheet('16lDK6kgt3BjVEvh5rQqLP7p0uyWoiJxHIkXMHIUrA8g');


var express = require("express");
var app = express();




async function getBloodLevel() {
    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth({
        client_email: "nambts@marc-978.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCZIHJchMnCBopT\nDS5OpnkQzaeoAdgb+CdQSreMtL9devswXeFAnAthCHh4p2eZdZToyb6PPFeZHbXu\n2kqrbVQ3ctQMfdZ+LKMu9q7QK6kNktG16741T92fGLYxFDbMxz8htJCd8SeBxbqq\ng3ddqIvTWH8GVOQ0yosX+fLZGjH5FhLq0Q4eomC061NqQJ7xJSMdEaerv3yVycGk\nuHO8z2ejtWZeqJxdsYX5iRnHIiW4vDUSCU3Hz4CWYoL6HDgKeXP1tvAZBkknvfBa\n+jWu5LFrif9RUf3qNj/073OQ5RJaEd71I/rnnz0N7A6+dJAGrJSjGOEJkQVh5b9G\noOIjSL0xAgMBAAECggEABE16mSnsB2UqptnEdtZLqZK1xs1Cdsq6xBFNZglAJU7K\n1xmUNj4MPc5AoFdH3HKG3CGrFphB993zWkJM/dMlHie+WJmCmOoFLdElqVjIt8Zr\n2RpGLnZPimRl3iwsvAVPO1G5DI8VpppZO+hUxs9xGl+utg1Vmjwku2g9ECehxtdy\nRjom44g4dI6MKjtRtwaoi+T0qkx0/9+7QWSG3niANdNulQQNwTdDw9gyUx7pKuAI\nt8kJ4p6TEPXxVNkUBD3EoE+5I8yboLVf02mTNjbmfx0EU1eRJvZIadAf+sRSc/KS\nbjkcX9FQDzN/aiQmJ3dz8Tl8whu6+ExgOqkY7V0sbwKBgQDYJC9oqyz3Iu7syqUO\nLYQV1377QKhXTrypjk4LUop5o/OAxQH6gF699uaKLxtM0B72a7k/Uhg+94NmSqaI\nTqED+wXZigOFOFh+VfgfNvj92pJrzxU/s8f7uXw9dVjAs+gtHGtfnDhs1TjxNNJ+\nYQ137o3q8Nad8S7hOp2zuMgXIwKBgQC1XWfeWlnRuZr9Ehcouzx2gBlNpI6W4MWf\nDlA8fG3YViMDW2v/u62zfXZCrFwp6naD+Yxdv0LxVVSKd+9YYvlVWLAw+AD34jB5\noCo/Fzf+E9mOl96PSlG3QWwme7S+C4C8goZWoUnGoJtlmUN/CY9YqpzlnBnUFALn\n6X2kp8uJmwKBgQCwzKibDaoyXbjiqMBq4IBy/Vs5WqJZCGb6qxTb3iC3b4z3gC8m\nIWteKGBcGDxUkMlC+MsHKLf8iapKOjYOuYKsJuGaGHLYvkZk0R2tKuJxhCDRXwsa\nmIy1M/yUqTB4MLFydRS/mKHvJFr3syWbivfhaplb3LUxbN/UDIaDRFsn0QKBgQCj\nnW9d7d6H0EydL9vKuBdUxD2PiPvF62L9GdmSp6Ik/5g4qBonLDYI7g9pGLtQaR+f\n8doKnMgUlald/dLjxu4ua4MPujyNY/XdU3upTRYLVfb3p9R1KlPL4e5iTUmCBTiP\nV6U/s+OtmCh4oKp+ia5TDB/dGFVIuQDiHQdnKqT5LwKBgEIUzHGmbhRAXmUKq0E/\nt3RxAtTBzMGwicCuhqUKqCXHMZ3ce3WTSCpyjBjAqfKQbRVI1FkMUQuZJ87/bdwg\nmsdBk2yVFJg2HOk0CSOVefLhK5vhPV283DaG6MwfA4j80Esn9jCPw+B6r9VdrikW\naZtBfuEvhJU0v9X7+u5zw0rJ\n-----END PRIVATE KEY-----\n",

    });

    await doc.loadInfo(); // loads document properties and worksheets
    // console.log(doc.title);
    const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    const rows = await sheet.getRows();
    let bloodLevel = rows.map(item => {
        const container = {};

        container.A_Negative = item.A_Negative;
        container.A_POSITIVE = item.A_POSITIVE;
        container.B_Negative = item.B_Negative;
        container.B_POSITIVE = item.B_POSITIVE;
        container.AB_Negative = item.AB_Negative;
        container.AB_POSITIVE = item.AB_POSITIVE;
        container.O_Negative = item.O_Negative;
        container.O_POSITIVE = item.O_POSITIVE;

        return container;
    })
    return bloodLevel
}

let BloodLevel = getBloodLevel()




async function getSheetData() {
    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth({
        client_email: "nambts@marc-978.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCZIHJchMnCBopT\nDS5OpnkQzaeoAdgb+CdQSreMtL9devswXeFAnAthCHh4p2eZdZToyb6PPFeZHbXu\n2kqrbVQ3ctQMfdZ+LKMu9q7QK6kNktG16741T92fGLYxFDbMxz8htJCd8SeBxbqq\ng3ddqIvTWH8GVOQ0yosX+fLZGjH5FhLq0Q4eomC061NqQJ7xJSMdEaerv3yVycGk\nuHO8z2ejtWZeqJxdsYX5iRnHIiW4vDUSCU3Hz4CWYoL6HDgKeXP1tvAZBkknvfBa\n+jWu5LFrif9RUf3qNj/073OQ5RJaEd71I/rnnz0N7A6+dJAGrJSjGOEJkQVh5b9G\noOIjSL0xAgMBAAECggEABE16mSnsB2UqptnEdtZLqZK1xs1Cdsq6xBFNZglAJU7K\n1xmUNj4MPc5AoFdH3HKG3CGrFphB993zWkJM/dMlHie+WJmCmOoFLdElqVjIt8Zr\n2RpGLnZPimRl3iwsvAVPO1G5DI8VpppZO+hUxs9xGl+utg1Vmjwku2g9ECehxtdy\nRjom44g4dI6MKjtRtwaoi+T0qkx0/9+7QWSG3niANdNulQQNwTdDw9gyUx7pKuAI\nt8kJ4p6TEPXxVNkUBD3EoE+5I8yboLVf02mTNjbmfx0EU1eRJvZIadAf+sRSc/KS\nbjkcX9FQDzN/aiQmJ3dz8Tl8whu6+ExgOqkY7V0sbwKBgQDYJC9oqyz3Iu7syqUO\nLYQV1377QKhXTrypjk4LUop5o/OAxQH6gF699uaKLxtM0B72a7k/Uhg+94NmSqaI\nTqED+wXZigOFOFh+VfgfNvj92pJrzxU/s8f7uXw9dVjAs+gtHGtfnDhs1TjxNNJ+\nYQ137o3q8Nad8S7hOp2zuMgXIwKBgQC1XWfeWlnRuZr9Ehcouzx2gBlNpI6W4MWf\nDlA8fG3YViMDW2v/u62zfXZCrFwp6naD+Yxdv0LxVVSKd+9YYvlVWLAw+AD34jB5\noCo/Fzf+E9mOl96PSlG3QWwme7S+C4C8goZWoUnGoJtlmUN/CY9YqpzlnBnUFALn\n6X2kp8uJmwKBgQCwzKibDaoyXbjiqMBq4IBy/Vs5WqJZCGb6qxTb3iC3b4z3gC8m\nIWteKGBcGDxUkMlC+MsHKLf8iapKOjYOuYKsJuGaGHLYvkZk0R2tKuJxhCDRXwsa\nmIy1M/yUqTB4MLFydRS/mKHvJFr3syWbivfhaplb3LUxbN/UDIaDRFsn0QKBgQCj\nnW9d7d6H0EydL9vKuBdUxD2PiPvF62L9GdmSp6Ik/5g4qBonLDYI7g9pGLtQaR+f\n8doKnMgUlald/dLjxu4ua4MPujyNY/XdU3upTRYLVfb3p9R1KlPL4e5iTUmCBTiP\nV6U/s+OtmCh4oKp+ia5TDB/dGFVIuQDiHQdnKqT5LwKBgEIUzHGmbhRAXmUKq0E/\nt3RxAtTBzMGwicCuhqUKqCXHMZ3ce3WTSCpyjBjAqfKQbRVI1FkMUQuZJ87/bdwg\nmsdBk2yVFJg2HOk0CSOVefLhK5vhPV283DaG6MwfA4j80Esn9jCPw+B6r9VdrikW\naZtBfuEvhJU0v9X7+u5zw0rJ\n-----END PRIVATE KEY-----\n",

    });

    await doc.loadInfo(); // loads document properties and worksheets
    // console.log(doc.title);
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    const rows = await sheet.getRows();

    let daysOfWeek = rows.map(item => {
        const container = {};

        container.name = item.name;
        container.badge = item.badge;
        container.date = [item.date_from, item.date_to];
        container.description = item.description;
        container.type = 'event';

        return container;
    })
    return daysOfWeek
}

let promise = getSheetData()


app.listen(5000, () => {
    console.log("Server running on port 5000");
});



app.get("/data", cors(), async(req, res, next) => {
    let respo = await getSheetData();
    res.json(respo);
});

app.get("/bl", cors(), async(req, res, next) => {
    let respo = await getBloodLevel();
    res.json(respo);
});
