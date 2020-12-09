let tl = anime.timeline({
  easing: "easeInOutQuart",
  duration: 4000,
});
tl.add({
  targets: "svg",
  keyframes: [
    { scale: 0.3, rotate: "0deg" },
    { scale: 0.5, rotate: "360deg" },
  ],
  duration: 3000,
});

tl.add(
  {
    targets: ["#logo", "feTurbulence", "feDisplacementMap"],

    baseFrequency: 0,
    numOctaves: 2,
    rotate: "300deg",
    scale: 1,
    fill: "#fff",
    fillOpacity: "1",
    strokeWidth: 3,
    stroke: "#fff",
    strokeDasharray: "20,10,5,4,30,10",
  },
  "-=4000"
);

tl.add({
  targets: "svg",
  scale: 0,
  duration: 500,
});
