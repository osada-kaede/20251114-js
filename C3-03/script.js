/* カーソルの位置で色が変化 */
const btn = document.querySelector("#flow-button-js");
btn.addEventListener("mousemove",(e) => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)*100;
    btn.style.backgroundPosition = `${x}% 0`;
})