"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const tl = document.getElementById('tl');
    const tr = document.getElementById('tr');
    const br = document.getElementById('br');
    const bl = document.getElementById('bl');
    const tlv = document.getElementById("tlv");
    const trv = document.getElementById("trv");
    const blv = document.getElementById("blv");
    const brv = document.getElementById("brv");
    const grosor = document.getElementById("grosor");
    const grosorv = document.getElementById("grosorv");
    function updateBorderRadius() {
        box.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;
    }
    function updateGrosor() {
        box.style.border = `${grosor.value}px solid #000`;
    }
    tl.addEventListener('input', () => { updateBorderRadius(); tlv.value = tl.value.toString(); });
    tr.addEventListener('input', () => { updateBorderRadius(); trv.value = tr.value.toString(); });
    br.addEventListener('input', () => { updateBorderRadius(); brv.value = br.value.toString(); });
    bl.addEventListener('input', () => { updateBorderRadius(); blv.value = bl.value.toString(); });
    grosor.addEventListener('input', () => { updateGrosor(); grosorv.value = grosor.value.toLocaleLowerCase(); });
});
