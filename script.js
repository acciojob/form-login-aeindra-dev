function getFormvalue() {
    //Write your code here
	const fnameEl = document.querySelector('input[name="fname"]');
	const lnameEl = document.querySelector('input[name="lname"]');
	const first = fnameEl.value;
	const last = lnameEl.value;
	alert(`${first} ${last}`);
}
