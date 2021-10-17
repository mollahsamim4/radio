
javascript: (function () {
    const form = document.querySelectorAll(`form table.th tr td input[type="checkbox"]`); form.forEach(all => { all.click() }); let deleteCheck = document.querySelector("form table tbody tr td input[name='nvp_a_tr']"); deleteCheck.click();
})()