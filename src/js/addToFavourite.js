const cocktailSection = document.querySelector('.cocktail__list');
const favouriteCocktailSection = document.querySelector('.favourite-cocktail__list');

let localKeys = [];
for (const key in localStorage) {
    localKeys.push(key);
}
function addRemove(event) {
    const cardItem = document.querySelectorAll('.cocktail__item');
    if (event.target.className === 'buttons__add-to') {
        let elementId = event.target.id;
        if (localKeys.includes(elementId)) {
            localStorage.removeItem(`${elementId}`);
            event.target.innerHTML =
                "Add to <svg class='buttons__add-to__img' viewBox='0 0 22 19'><path d='M15.8376 1.52C16.3836 1.51953 16.9243 1.62954 17.4279 1.84357C17.9314 2.05759 18.3877 2.37134 18.7701 2.7664C19.5579 3.57685 19.9995 4.6688 19.9995 5.8064C19.9995 6.944 19.5579 8.03595 18.7701 8.8464L11.0001 16.8188L3.23008 8.8464C2.44226 8.03595 2.00067 6.944 2.00067 5.8064C2.00067 4.6688 2.44226 3.57685 3.23008 2.7664C3.61264 2.37162 4.06901 2.05804 4.57251 1.84398C5.07601 1.62992 5.61656 1.51968 6.16258 1.51968C6.7086 1.51968 7.24914 1.62992 7.75264 1.84398C8.25614 2.05804 8.71251 2.37162 9.09508 2.7664L11.0001 4.7424L12.8976 2.7816C13.2788 2.38183 13.7356 2.06406 14.2407 1.84729C14.7459 1.63052 15.289 1.5192 15.8376 1.52V1.52ZM15.8376 2.03897e-06C15.0918 -0.000638429 14.3534 0.149612 13.6657 0.441943C12.9779 0.734275 12.3547 1.1628 11.8326 1.7024L11.0001 2.5536L10.1676 1.7024C9.64479 1.16378 9.02142 0.735993 8.33382 0.443987C7.64621 0.15198 6.90812 0.00159405 6.16258 0.00159405C5.41703 0.00159405 4.67894 0.15198 3.99133 0.443987C3.30373 0.735993 2.68036 1.16378 2.15758 1.7024C1.09398 2.79956 0.498047 4.27603 0.498047 5.814C0.498047 7.35197 1.09398 8.82845 2.15758 9.9256L11.0001 19L19.8426 9.9256C20.9062 8.82845 21.5021 7.35197 21.5021 5.814C21.5021 4.27603 20.9062 2.79956 19.8426 1.7024C19.3199 1.16349 18.6966 0.735411 18.009 0.443129C17.3214 0.150846 16.5832 0.000209835 15.8376 2.03897e-06V2.03897e-06Z' fill='#FD5103'/></svg>";
            let localIndex = localKeys.indexOf(`${event.target.id}`);
            localKeys.splice(localIndex, 1);
            if (favouriteCocktailSection) {
                document.location.reload();
            }
        } else {
            localKeys.push(elementId);
            let parentLi;
            cardItem.forEach(item => {
                if (item.id === elementId) {
                    parentLi = item.innerHTML;
                }
            });

            localStorage.setItem(`${elementId}`, parentLi);

            event.target.innerHTML =
                "Remove <svg class='buttons__add-to__img' viewBox='0 0 36 32'><path fill='#fd5103'style='fill: var(--color1, #fd5103)' d='M17.882 32l-2.593-2.302c-9.209-8.144-15.289-13.515-15.289-20.107 0-5.371 4.328-9.591 9.835-9.591 3.112 0 6.098 1.413 8.047 3.645 1.949-2.232 4.936-3.645 8.047-3.645 5.508 0 9.835 4.22 9.835 9.591 0 6.592-6.080 11.963-15.289 20.124l-2.593 2.284z' ></path><path fill='#fd5103' style='fill: var(--color2, #fd5103)' d='M17.882 28.631l-2.099-1.817c-7.455-6.429-12.377-10.67-12.377-15.874 0-4.24 3.503-7.572 7.962-7.572 2.519 0 4.936 1.115 6.514 2.877 1.578-1.762 3.995-2.877 6.514-2.877 4.459 0 7.962 3.332 7.962 7.572 0 5.204-4.922 9.444-12.377 15.888l-2.099 1.803z'></path></svg>";
        }
    }
}
if (favouriteCocktailSection) {
    favouriteCocktailSection.addEventListener('click', addRemove);
    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage.key(i);
        if (element.startsWith('strDrink')) {
            const el = localStorage.getItem(element);
            favouriteCocktailSection.insertAdjacentHTML('beforeend', `<li class='cocktail__item' class='${element}'>${el}</li>`);
        }
    }
    let its = document.querySelectorAll('.buttons__add-to');
    its.forEach(it => {
        if (localKeys.includes(it.id)) {
            it.innerHTML =
                "Remove <svg class='buttons__add-to__img' viewBox='0 0 36 32'><path fill='#fd5103'style='fill: var(--color1, #fd5103)' d='M17.882 32l-2.593-2.302c-9.209-8.144-15.289-13.515-15.289-20.107 0-5.371 4.328-9.591 9.835-9.591 3.112 0 6.098 1.413 8.047 3.645 1.949-2.232 4.936-3.645 8.047-3.645 5.508 0 9.835 4.22 9.835 9.591 0 6.592-6.080 11.963-15.289 20.124l-2.593 2.284z' ></path><path fill='#fd5103' style='fill: var(--color2, #fd5103)' d='M17.882 28.631l-2.099-1.817c-7.455-6.429-12.377-10.67-12.377-15.874 0-4.24 3.503-7.572 7.962-7.572 2.519 0 4.936 1.115 6.514 2.877 1.578-1.762 3.995-2.877 6.514-2.877 4.459 0 7.962 3.332 7.962 7.572 0 5.204-4.922 9.444-12.377 15.888l-2.099 1.803z'></path></svg>";
        }
    });
}

if (cocktailSection) {
    cocktailSection.addEventListener('click', addRemove);
}
