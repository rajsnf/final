const dbPromised = idb.open("footballersdb", 1, function (upgradeDb) {
    const teamsObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
    teamsObjectStore.createIndex("name", "name", { unique: false });
});
function favorit(team) {
    dbPromised
        .then(function (db) {
            let tx = db.transaction("teams", "readwrite");
            let store = tx.objectStore("teams");
            console.log(team);
            store.put(team);
            return tx.complete;
        })
        .then(function () {
            //console.log("Berhasil menambahkan team favorit!");
            M.toast({ html: 'Tim berhasil ditambahkan', classes: 'green darken-1 rounded' });
        });
}
function getAll() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                let tx = db.transaction("teams", "readonly");
                let store = tx.objectStore("teams");
                return store.getAll();
            })
            .then(function (teams) {
                resolve(teams);
            });
    });
}
function getById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                let tx = db.transaction("teams", "readonly");
                let store = tx.objectStore("teams");

                return store.get(parseInt(id));
            })
            .then(function (team) {
                resolve(team);
            });
    });

}
function deleteFav(teamId) {
    dbPromised
        .then(function (db) {
            let tx = db.transaction("teams", "readwrite");
            let store = tx.objectStore("teams");
            store.delete(teamId);
            return tx.complete;
        })
        .then(function () {
            //console.log("Team berhasil dihapus");
            getFavoritTeams();
            M.toast({ html: 'Tim berhasil dihapus', classes: 'red darken-1 rounded' });
        });
}

function deleteFavDB(teamId) {
    dbPromised
        .then(function (db) {
            let tx = db.transaction("teams", "readwrite");
            let store = tx.objectStore("teams");
            store.delete(teamId);
            return tx.complete;
        })
        .then(function () {
            //console.log("Team berhasil dihapus");
            M.toast({ html: 'Tim berhasil dihapus', classes: 'red darken-1 rounded' });
        });
}
