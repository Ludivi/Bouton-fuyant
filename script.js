function flee(link) {
  link.style.position = "absolute";
  link.style.left =
    parseInt(
      Math.random() * (document.documentElement.clientWidth - link.offsetWidth)
    ) + "px";
  link.style.top =
    parseInt(
      Math.random() *
        (document.documentElement.clientHeight - link.offsetHeight)
    ) + "px";
}
