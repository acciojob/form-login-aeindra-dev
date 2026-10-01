function getFormvalue() {
    //Write your code here
	const fnameEl = document.querySelector("fname");
	const lnameEl = document.querySelector("lname");
	const first = fnameEl.innerText;
	const last = lnameEl.innerText;
	alert(`${first} ${last}`);
}
