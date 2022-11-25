let warrper = document.querySelector(".warrper"),
  input = warrper.querySelector("input"),
  downloadBtn = warrper.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innerText = "Downloading File...";
  fetchFile(input.value);
});

function fetchFile(url) {
  fetch(url).then(res => res.blob()).then(file => {
    let temp = URL.createObjectURL(file);
    let aTage = document.createElement("a");
    aTage.href = temp;
    aTage.download = url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(aTage);
    aTage.click();
    aTage.remove();
    URL.revokeObjectURL(temp);
    downloadBtn.innerText = "Download File";
  });
};


// https://www.you.com