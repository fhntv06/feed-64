export const ScrollIntoView = (event) => {
  const href = event.currentTarget.href.split('#')[1];
  const viewSection = document.querySelector(`#${href}`);

  event.preventDefault();
  viewSection.scrollIntoView({ behavior: "smooth" });
}