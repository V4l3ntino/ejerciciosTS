document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box') as HTMLElement;
  const tl = document.getElementById('tl') as HTMLInputElement;
  const tr = document.getElementById('tr') as HTMLInputElement;
  const br = document.getElementById('br') as HTMLInputElement;
  const bl = document.getElementById('bl') as HTMLInputElement;

  const tlv = document.getElementById("tlv") as HTMLInputElement;
  const trv = document.getElementById("trv") as HTMLInputElement;
  const blv = document.getElementById("blv") as HTMLInputElement;
  const brv = document.getElementById("brv") as HTMLInputElement;

  const grosor = document.getElementById("grosor") as HTMLInputElement;
  const grosorv = document.getElementById("grosorv") as HTMLInputElement;

  function updateBorderRadius() {
      box.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;
  }

  function updateGrosor() {
    box.style.border = `${grosor.value}px solid #000`
  }

  tl.addEventListener('input', () => {updateBorderRadius(); tlv.value = tl.value.toString()});
  tr.addEventListener('input', () => {updateBorderRadius(); trv.value = tr.value.toString()});
  br.addEventListener('input', () => {updateBorderRadius(); brv.value = br.value.toString()});
  bl.addEventListener('input', () => {updateBorderRadius(); blv.value = bl.value.toString()});
  grosor.addEventListener('input', () => {updateGrosor(); grosorv.value = grosor.value.toLocaleLowerCase()})
});
