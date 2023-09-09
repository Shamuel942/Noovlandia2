const doParticles = true;

const getWidth = () => {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

const handleCopyIP = () => {
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = t;
    copy.select();
    document.execCommand("copy");
    $(".ip").html("<span class='extrapad'>IP copiada!</span>");
    setTimeout(() => {
        $(".ip").html(t);
        var copy = document.getElementById("ta");
        copy.parentNode.removeChild(copy);
    }, 800);
};

const updatePlayercount = (ip, port) => {
    $.get(`https://api.bybilly.uk/api/players/${ip}/${port}`, (result) => {
        if (result.hasOwnProperty('online')) {
            $(".sip").html(result.online);
        } else {
            $(".playercount").html("El servidor no está disponible!");
        }
    });
};

if (doParticles) {
    const particleSettings = getWidth() < 400 ? {
        minPixel: 1,
        maxPixel: 2,
        total: 20
    } : {
        minPixel: 1,
        maxPixel: 3,
        total: 40
    };
    $.firefly(particleSettings);
}

let t;
$(document).ready(() => {
    t = $(".ip").html();
});

$(document).on("click", ".ip", handleCopyIP);

$(document).ready(() => {
    let ip = $(".sip").attr("data-ip");
    let port = $(".sip").attr("data-port");
    if (port == "" || port == null) port = "25565";
    if (ip == "" || ip == null) return console.error("Error al obtener el recuento de jugadores: ¿la IP está configurada correctamente en el HTML?");
    updatePlayercount(ip, port);

    setInterval(() => {
        updatePlayercount(ip, port);
    }, 60000);
});
