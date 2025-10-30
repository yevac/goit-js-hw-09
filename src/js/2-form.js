const formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.email.value = parsedData.email || "";
  form.message.value = parsedData.message || "";
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Form data:", formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});
