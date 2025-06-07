const telegramFIibuBot = 'https://t.me/your_fiibu_bot'; // Өз сілтемеңіз
const telegramKnigiBot = 'https://t.me/your_knigi_bot'; // Өз сілтемеңіз

const booksByGenre = {
  love: [
    {
      title: "Гордость и предубеждение",
      author: "Джейн Остин",
      img: "https://cdn.meloman.kz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/o/gordost-i-predubejdenie.jpg",
      description: "История любви, гордости и страсти."
    },
    {
      title: "Три метра над небом",
      author: "Федерико Моччиа",
      img: "https://i.imgur.com/yNlMikY.jpg",
      description: "О любви между плохим парнем и примерной девочкой."
    }
  ],
  fantasy: [
    {
      title: "Гарри Поттер",
      author: "Дж. К. Роулинг",
      img: "https://i.imgur.com/4oFb8z9.jpg",
      description: "Мальчик-волшебник и школа магии."
    },
    {
      title: "Властелин колец",
      author: "Дж. Р. Р. Толкин",
      img: "https://i.imgur.com/pmBxS5v.jpg",
      description: "Эпическое путешествие в Средиземье."
    }
  ],
  scifi: [
    {
      title: "1984",
      author: "Джордж Оруэлл",
      img: "https://i.imgur.com/kS8HyOn.jpg",
      description: "Антиутопия о контроле и свободе."
    },
    {
      title: "Марсианин",
      author: "Энди Вейер",
      img: "https://i.imgur.com/93B7pVE.jpg",
      description: "Выживание на Марсе."
    }
  ]
};

const popularBooks = [
  {
    title: "Мастер и Маргарита",
    author: "Булгаков",
    img: "https://i.imgur.com/NzGzdcL.jpg",
    description: "Мистика мен сатираға толы шығарма."
  },
  {
    title: "Преступление и наказание",
    author: "Достоевский",
    img: "https://i.imgur.com/6CqY0Kh.jpg",
    description: "Ізгілік пен әділет туралы."
  }
];

const container = document.getElementById('container');
const popularContainer = document.getElementById('popularContainer');

// Кітаптарды жанр бойынша көрсету
for (const genre in booksByGenre) {
  booksByGenre[genre].forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.img}" alt="${book.title}" class="book-img" />
        <div class="book-title">${book.title}</div>
        <div class="book-author">Автор: ${book.author}</div>
        <div class="book-desc">${book.description}</div>
        <div class="btn-group">
          <a href="${telegramFIibuBot}" target="_blank" class="btn">Telegram</a>
          <a href="${telegramKnigiBot}" target="_blank" class="btn">Онлайн оқу</a>
        </div>
      </div>
    `;
  });
}

// Танымал кітаптарды көрсету
popularBooks.forEach(book => {
  popularContainer.innerHTML += `
    <div class="book-card">
      <img src="${book.img}" alt="${book.title}" class="book-img" />
      <div class="book-title">${book.title}</div>
      <div class="book-author">Автор: ${book.author}</div>
      <div class="book-desc">${book.description}</div>
      <div class="btn-group">
        <a href="${telegramFIibuBot}" target="_blank" class="btn">Telegram</a>
        <a href="${telegramKnigiBot}" target="_blank" class="btn">Онлайн оқу</a>
      </div>
    </div>
  `;
});
