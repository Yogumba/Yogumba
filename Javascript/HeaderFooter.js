/* Variables */
let headerLanguage

/*  Local Storage  */
if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "spanish")
} else {
    headerLanguage = JSON.parse(localStorage.getItem("language"));
}