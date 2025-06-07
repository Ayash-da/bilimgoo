// Sidebar мен негізгі контентті байланыстыру
const subjectList = document.getElementById('subject-list')
const sections = document.querySelectorAll('.content-section')

subjectList.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    // Барлық активті алып тастау
    subjectList.querySelectorAll('li').forEach(li => li.classList.remove('active'))
    e.target.classList.add('active')

    // Барлық секцияларды жасыру
    sections.forEach(sec => sec.classList.remove('active'))

    const subject = e.target.dataset.subject

    if (subject === 'about') {
      document.getElementById('about').classList.add('active')
    } else if (subject === 'math' || subject === 'kazakh' || subject === 'russian' || subject === 'physics' || subject === 'chemistry' || subject === 'biology' || subject === 'history' || subject === 'geography' || subject === 'informatics') {
      // "Тесттер бөлімдері" көрсету
      document.getElementById('tests').classList.add('active')

      // Тест блоктарын көрсету/жасыру (фильтрация)
      document.querySelectorAll('.test-block').forEach(block => {
        if (block.dataset.subject === subject) {
          block.style.display = 'block'
        } else {
          block.style.display = 'none'
        }
      })
    } else if (subject === 'universities') {
      document.getElementById('universities').classList.add('active')
    } else if (subject === 'results') {
      document.getElementById('results').classList.add('active')
    } else if (subject === 'schedule') {
      document.getElementById('schedule').classList.add('active')
    } else if (subject === 'motivation') {
      document.getElementById('motivation').classList.add('active')
    } else if (subject === 'faq') {
      document.getElementById('faq').classList.add('active')
    } else {
      // Егер жоқ болса, бәрін жасыру
      sections.forEach(sec => sec.classList.remove('active'))
    }
  }
})

// Университеттер батырмасы үшін мысал
document.getElementById('go-to-universities').addEventListener('click', () => {
  alert('Университеттер бетіне өту мүмкіндігі әзірше жоқ. Болашақта қосылады.')
})

// Тестке кіру батырмаларының функционалын қосу (қосымша)
document.querySelectorAll('.start-test-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Тест басталатын бет әзірше дайын емес. Қазір әзірленуде.')
  })
})
 const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });