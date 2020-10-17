let webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BLU4-8Epo0Q6mYW8-Mn77Sa68X5pnVnuThB6yvAjSq6VvBIR2JDDz_rcttqwSBY3mcuwjHrXb_HsIlasZlb1QzA",
    "privateKey": "ac-irnxRqomIc8MIfxJcduWbEk4AXH1ROQ3TeNpAxK0"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dlirL2399VA:APA91bEytvGc-78JtXHkXZjflmSGSqmXA2pX9PJhadN6oKycvWL85ElkokufdSI2ofMnlAbWMj7ZfDE5FV4QVzoEeePB1t9PdLUA2iHFQvk91vIBGn2rQMGQc6l3Vtv3cqWg58ijypO6https://fcm.googleapis.com/fcm/send/eQe1nmyBWPw:APA91bHzPPq_Be1CjH4ijEafIo4BCsShDDAR4OjprkYdJ10x8AK06a0O04TKdPixjbwU0OCVFf71f4iizxg9sCj8VTfk9xnI6mwXQg5M3f-4NPTf2pY-lVuVLguYgMOZvkBm2Bf54g_H",
    "keys": {
        "p256dh": "BIBAu+X9hiMDRlukqlY3yd2gWs4OqBl1J1TZJCfK9ePxo1KlkZsF8y9V9/iKT7F4N1CNi5pP6plSTAY79kCNrBA=",
        "auth": "cFqAMIr5DT94UcgulAdcBQ=="
    }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

let options = {
    gcmAPIKey: '577379320041',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);