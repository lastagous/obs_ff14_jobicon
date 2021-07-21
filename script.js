function OnButtonClick() {

    const uiMag = document.getElementById("ui_size").value;
    const hudMag = document.getElementById("hud_size").value;

    var css = templateCss(uiMag, hudMag);

    // get Discord ID
    for (var i = 1; i <= 8; i++) {
        const discord_id = document.getElementById("discord_id_" + i).value;
        // validation
        if (discord_id.length <= 0) { // if empty
            break;
        }

        const job = document.getElementById("job_" + i).value;
        if (job.length <= 0) { // if empty
            break;
        }

        css += createCharCss(discord_id, job, i);
    }

    document.getElementById('generated').value = css;
}

function createCharCss(discord_id, job, order) {
    return "img[data-reactid*=\"" + discord_id + "\"][class*=\"avatar\"] {\r" +
        "  content:url(" + jobIconUrlMap().get(job) + ");\r" +
        "}\r" +
        "li[data-reactid*=\"" + discord_id + "\"][class*=\"voice-state\"] {\r" +
        "  order:" + order + ";\r" +
        "}\r\r";
}

function jobIconUrlMap() {
    return new Map([
        ["PLD", "https://img.finalfantasyxiv.com/lds/promo/h/V/NUXU4h6iXzF8HS4BxHKYf7vOa0.png"],
        ["WAR", "https://img.finalfantasyxiv.com/lds/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png"],
        ["DRK", "https://img.finalfantasyxiv.com/lds/promo/h/9/5JT3hJnBNPZSLAijAF9u7zrueQ.png"],
        ["GNB", "https://img.finalfantasyxiv.com/lds/promo/h/8/fc5PYpEFGrg4qPYDq_YBbCy1X0.png"],
        ["WHM", "https://img.finalfantasyxiv.com/lds/promo/h/G/Na619RGtVtbEvNn1vyFoSlvZ84.png"],
        ["SCH", "https://img.finalfantasyxiv.com/lds/promo/h/s/2r8fm3U0Io7Pw1XT1tvnjPthp4.png"],
        ["AST", "https://img.finalfantasyxiv.com/lds/promo/h/E/g7JY4S1D-9S26VarEuIkPGIrFM.png"],
        ["MNK", "https://img.finalfantasyxiv.com/lds/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png"],
        ["DRG", "https://img.finalfantasyxiv.com/lds/promo/h/1/zWRkXGJIJhN7WHGGv1gVscRxmA.png"],
        ["NIN", "https://img.finalfantasyxiv.com/lds/promo/h/N/EXvdQYvr1Rn4En8AKssbVwwcac.png"],
        ["SAM", "https://img.finalfantasyxiv.com/lds/promo/h/J/Ra2GV79gVQhy6SwCrU19boTghc.png"],
        ["BRD", "https://img.finalfantasyxiv.com/lds/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png"],
        ["MCN", "https://img.finalfantasyxiv.com/lds/promo/h/2/oHLJxTt_OLDK_eQkRTBVNwwxeE.png"],
        ["DNC", "https://img.finalfantasyxiv.com/lds/promo/h/0/ZzzbixB1HHW9FaxNXdfY7Y7lvw.png"],
        ["BLM", "https://img.finalfantasyxiv.com/lds/promo/h/A/7JuT00VSwaFqTfcTYUCUnGPFQE.png"],
        ["SMN", "https://img.finalfantasyxiv.com/lds/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png"],
        ["RDM", "https://img.finalfantasyxiv.com/lds/promo/h/C/NRnqJxzRtbDKR1ZHzxazWBBR2Y.png"]
        // ["BLU", ""],
    ]);
}

function templateCss(uiMag, hudMag) {
    const defIconSize = 32;
    const betweenIconSize = 8;
    const magIconSize = Math.floor(defIconSize * uiMag * hudMag);
    const magBetweenIconSize = Math.floor(betweenIconSize * uiMag * hudMag);
    return ".voice-states {\r" +
        "  display: flex;\r" +
        "  flex-direction: column;\r" +
        "}\r" +
        ".voice-state {\r" +
        "  display: table !important;\r" +
        "  margin-bottom: 0px !important;\r" +
        "  padding-top: 0px !important;\r" +
        "  height: " + (magIconSize + magBetweenIconSize) + "px !important;\r" +
        "}\r" +
        ".avatar {\r" +
        "  height:" + magIconSize + "px !important;\r" +
        "  width:auto !important;\r" +
        "  border-radius:0% !important;\r" +
        "  filter: brightness(50%);\r" +
        "  float:none !important;\r" +
        "}\r" +
        ".user {\r" +
        "  display: none !important;\r" +
        "}\r" +
        ".speaking {\r" +
        "  border-color:rgba(255, 255, 255, 0) !important;\r" +
        "  -webkit-filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) !important;\r" +
        "  position:relative;\r" +
        "  animation-name: speak-now;\r" +
        "  animation-duration: 1s;\r" +
        "  animation-fill-mode:forwards;\r" +
        "  filter: brightness(100%);\r" +
        "}\r" +
        "li.voice-state{ position: static; }\r" +
        "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }\r\r\r";
}