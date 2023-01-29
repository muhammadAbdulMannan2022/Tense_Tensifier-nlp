const inp = document.querySelector("[name='sentence']");
const toTense = document.querySelector("#select");
inp.addEventListener("keyup", async (event) => {
  if (!(event.which === 13)) {
    return;
  } else {
    async function fatchTheValue(route) {
      const request = await fetch(
        `/${route}?${new URLSearchParams({
          sentence: event.target.value,
        })}`
      );
      const tense = await request.json();
      document.querySelector("#output").innerHTML = tense.text;
    }
    if (toTense.value == "past") {
      fatchTheValue("past-tense");
    } else if (toTense.value == "present") {
      fatchTheValue("present-tense");
    } else {
      fatchTheValue("futore-tense");
    }
  }
});
