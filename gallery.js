const folder1 = document.getElementById('item1');
const inner1 = document.getElementById('item1-inner-gallery');

const folder2 = document.getElementById('item2');
const inner2 = document.getElementById('item2-inner-gallery');

const folder3 = document.getElementById('item3');
const inner3 = document.getElementById('item3-inner-gallery');

const folder4 = document.getElementById('item4');
const inner4 = document.getElementById('item4-inner-gallery');

const folder5 = document.getElementById('item5');
const inner5 = document.getElementById('item5-inner-gallery');


const pointer = (folder) => {
    folder.style.cursor = "pointer";
}

const openGallery = (/*folder,*/ inner) => {
    inner.style.display = "flex";
    //folder.addEventListener('click', closeGallery(folder, inner));
}

const closeGallery = (inner) => {
    inner.style.display = "none";
}

// folder1
folder1.onmouseenter = pointer(folder1);
folder1.addEventListener('click', function() {
    openGallery(inner1);

    folder1.style.webkitBoxShadow = "6px 6px 5px #ff258d";
    folder1.style.mozBoxShadow = "6px 6px 5px #ff258d";
    folder1.style.boxShadow = "6px 6px 5px #ff258d";

    folder2.style.webkitBoxShadow = "6px 6px 5px #666";
    folder2.style.mozBoxShadow = "6px 6px 5px #666";
    folder2.style.boxShadow = "6px 6px 5px #666";

    folder3.style.webkitBoxShadow = "6px 6px 5px #666";
    folder3.style.mozBoxShadow = "6px 6px 5px #666";
    folder3.style.boxShadow = "6px 6px 5px #666";

    folder4.style.webkitBoxShadow = "6px 6px 5px #666";
    folder4.style.mozBoxShadow = "6px 6px 5px #666";
    folder4.style.boxShadow = "6px 6px 5px #666";

    folder5.style.webkitBoxShadow = "6px 6px 5px #666";
    folder5.style.mozBoxShadow = "6px 6px 5px #666";
    folder5.style.boxShadow = "6px 6px 5px #666";

    inner2.style.display = "none";
    inner3.style.display = "none";
    inner4.style.display = "none";
    inner5.style.display = "none";
});

//folder2
folder2.onmouseenter = pointer(folder2);
folder2.addEventListener('click', function() {
    openGallery(inner2);

    folder1.style.webkitBoxShadow = "6px 6px 5px #666";
    folder1.style.mozBoxShadow = "6px 6px 5px #666";
    folder1.style.boxShadow = "6px 6px 5px #666";

    folder2.style.webkitBoxShadow = "6px 6px 5px #ff258d";
    folder2.style.mozBoxShadow = "6px 6px 5px #ff258d";
    folder2.style.boxShadow = "6px 6px 5px #ff258d";

    folder3.style.webkitBoxShadow = "6px 6px 5px #666";
    folder3.style.mozBoxShadow = "6px 6px 5px #666";
    folder3.style.boxShadow = "6px 6px 5px #666";

    folder4.style.webkitBoxShadow = "6px 6px 5px #666";
    folder4.style.mozBoxShadow = "6px 6px 5px #666";
    folder4.style.boxShadow = "6px 6px 5px #666";

    folder5.style.webkitBoxShadow = "6px 6px 5px #666";
    folder5.style.mozBoxShadow = "6px 6px 5px #666";
    folder5.style.boxShadow = "6px 6px 5px #666";

    inner1.style.display = "none";
    inner3.style.display = "none";
    inner4.style.display = "none";
    inner5.style.display = "none";
});

//folder3
folder3.onmouseenter = pointer(folder3);
folder3.addEventListener('click', function() {
    openGallery(inner3);

    folder1.style.webkitBoxShadow = "6px 6px 5px #666";
    folder1.style.mozBoxShadow = "6px 6px 5px #666";
    folder1.style.boxShadow = "6px 6px 5px #666";

    folder2.style.webkitBoxShadow = "6px 6px 5px #666";
    folder2.style.mozBoxShadow = "6px 6px 5px #666";
    folder2.style.boxShadow = "6px 6px 5px #666";

    folder3.style.webkitBoxShadow = "6px 6px 5px #ff258d";
    folder3.style.mozBoxShadow = "6px 6px 5px #ff258d";
    folder3.style.boxShadow = "6px 6px 5px #ff258d";

    folder4.style.webkitBoxShadow = "6px 6px 5px #666";
    folder4.style.mozBoxShadow = "6px 6px 5px #666";
    folder4.style.boxShadow = "6px 6px 5px #666";

    folder5.style.webkitBoxShadow = "6px 6px 5px #666";
    folder5.style.mozBoxShadow = "6px 6px 5px #666";
    folder5.style.boxShadow = "6px 6px 5px #666";

    inner1.style.display = "none";
    inner2.style.display = "none";
    inner4.style.display = "none";
    inner5.style.display = "none";
});

//folder4
folder4.onmouseenter = pointer(folder4);
folder4.addEventListener('click', function() {
    openGallery(inner4);

    folder1.style.webkitBoxShadow = "6px 6px 5px #666";
    folder1.style.mozBoxShadow = "6px 6px 5px #666";
    folder1.style.boxShadow = "6px 6px 5px #666";

    folder2.style.webkitBoxShadow = "6px 6px 5px #666";
    folder2.style.mozBoxShadow = "6px 6px 5px #666";
    folder2.style.boxShadow = "6px 6px 5px #666";

    folder3.style.webkitBoxShadow = "6px 6px 5px #666";
    folder3.style.mozBoxShadow = "6px 6px 5px #666";
    folder3.style.boxShadow = "6px 6px 5px #666";

    folder4.style.webkitBoxShadow = "6px 6px 5px #ff258d";
    folder4.style.mozBoxShadow = "6px 6px 5px #ff258d";
    folder4.style.boxShadow = "6px 6px 5px #ff258d";

    folder5.style.webkitBoxShadow = "6px 6px 5px #666";
    folder5.style.mozBoxShadow = "6px 6px 5px #666";
    folder5.style.boxShadow = "6px 6px 5px #666";

    inner1.style.display = "none";
    inner2.style.display = "none";
    inner3.style.display = "none";
    inner5.style.display = "none";
});

//folder5
folder5.onmouseenter = pointer(folder5);
folder5.addEventListener('click', function() {
    openGallery(inner5);

    folder1.style.webkitBoxShadow = "6px 6px 5px #666";
    folder1.style.mozBoxShadow = "6px 6px 5px #666";
    folder1.style.boxShadow = "6px 6px 5px #666";

    folder2.style.webkitBoxShadow = "6px 6px 5px #666";
    folder2.style.mozBoxShadow = "6px 6px 5px #666";
    folder2.style.boxShadow = "6px 6px 5px #666";

    folder3.style.webkitBoxShadow = "6px 6px 5px #666";
    folder3.style.mozBoxShadow = "6px 6px 5px #666";
    folder3.style.boxShadow = "6px 6px 5px #666";

    folder4.style.webkitBoxShadow = "6px 6px 5px #666";
    folder4.style.mozBoxShadow = "6px 6px 5px #666";
    folder4.style.boxShadow = "6px 6px 5px #666";

    folder5.style.webkitBoxShadow = "6px 6px 5px #ff258d";
    folder5.style.mozBoxShadow = "6px 6px 5px #ff258d";
    folder5.style.boxShadow = "6px 6px 5px #ff258d";

    inner1.style.display = "none";
    inner2.style.display = "none";
    inner3.style.display = "none";
    inner4.style.display = "none";
});