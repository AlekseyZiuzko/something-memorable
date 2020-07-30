let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");

new MutationObserver(function () {
    console.log("mutate");
}).observe(outer, {
    attributes: true,
});

function onClick() {
    console.log("click");

    setTimeout(function () {
        console.log("timeout");
    }, 0);

    Promise.resolve().then(function () {
        console.log("promise");
    });

    outer.setAttribute("data-random", Math.random());
}

inner.addEventListener("click", onClick);
outer.addEventListener("click", onClick);
