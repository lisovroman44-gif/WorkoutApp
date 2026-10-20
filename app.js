let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

function setupButton(btnId, groupKey, btnText) {
    let btn = document.getElementById(btnId);
    btn.addEventListener("click", function () {
        if (tg.MainButton.isVisible && item === groupKey) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setText(btnText);
            item = groupKey;
            tg.MainButton.show();
        }
    });
}

setupButton("btn_chest", "chest", "План на грудь");
setupButton("btn_back", "back", "План на спину");
setupButton("btn_legs", "legs", "План на ноги");
setupButton("btn_arms", "arms", "План на руки");

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});