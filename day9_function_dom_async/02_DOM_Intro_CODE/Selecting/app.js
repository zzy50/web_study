
// id가 'banner'인 element 선택
const bannerImage = document.getElementById('banner');
if (bannerImage) {
    bannerImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// img태그인 모든 element 선택
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

// class가 'square'인 모든 element 선택
const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// id가 'toc'인 element 선택
const tocElement = document.querySelector('#toc');
if (tocElement) {
    tocElement.style.backgroundColor = '#d3d3d3'; // 예를 들어, 회색으로 변경
}

// h2태그 중 id가 'History'인 element 선택
const historyHeading = document.querySelector('h2#History');
if (historyHeading) {
    historyHeading.style.color = 'blue'; // 예를 들어, 파란색으로 변경
}

// img태그 중 class가 'square'인 element 선택
const firstSquareImage = document.querySelector('img.square');
if (firstSquareImage) {
    firstSquareImage.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png';
}

// p태그를 부모로 갖는 a태그인 모든 element 선택
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}


const items = document.querySelectorAll('li');
// 각 <li> 요소에 대해 반복
items.forEach(item => {
    item.classList.toggle('highlight');
});