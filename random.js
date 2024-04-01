alert("this is a remote js");
setTimeout(() => {
  localStorage.setItem("remote", "from remote js");
}, 10000);
