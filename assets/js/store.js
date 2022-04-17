document.addEventListener('alpine:init', () => {
  Alpine.store('data', {
    sections: {
      1: {
        text: 'Endokrinologiya',
        img: '../assets/images/about/icon/section-icon-1.svg'
      },
      2: {
        text: 'Pulmonologiya',
        img: '../assets/images/about/icon/section-icon-2.svg'
      },
      3: {
        text: 'Nevrologiya',
        img: '../assets/images/about/icon/section-icon-3.svg'
      },
      4: {
        text: 'Stomatolog',
        img: '../assets/images/about/icon/section-icon-4.svg'
      },
      5: {
        text: 'Kardiologiya',
        img: '../assets/images/about/icon/section-icon-5.svg'
      },
      6: {
        text: 'Oftalmolog',
        img: '../assets/images/about/icon/section-icon-6.svg'
      },
      7: {
        text: 'Gepatolog',
        img: '../assets/images/about/icon/section-icon-7.svg'
      },
      8: {
        text: 'Travmatolog ortoped',
        img: '../assets/images/about/icon/section-icon-8.svg'
      },
      9: {
        text: 'Otalaringolog',
        img: '../assets/images/about/icon/section-icon-9.svg'
      },
      10: {
        text: 'Gastroenterolog',
        img: '../assets/images/about/icon/section-icon-10.svg'
      },
      11: {
        text: 'Androlog',
        img: '../assets/images/about/icon/section-icon-11.svg'
      },
      12: {
        text: 'Pediatr',
        img: '../assets/images/about/icon/section-icon-12.svg'
      },
      13: {
        text: 'Laboratoriya',
        img: '../assets/images/about/icon/section-icon-13.svg'
      },
      14: {
        text: 'Immunolog',
        img: '../assets/images/about/icon/section-icon-14.svg'
      },
      15: {
        text: 'Rentgenolog',
        img: '../assets/images/about/icon/section-icon-15.svg'
      }
    },
    doctors: {
      1: {
        name: 'Endokrinologiya',
        job: 'Ortoped',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev ',
        img: '../assets/images/about/docdo-1.png'
      },
      2: {
        name: 'Pulmonologiya',
        job: 'Vrach-rentgenolog',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev ',
        img: '../assets/images/about/docdo-2.png'
      },
      3: {
        name: 'Nevrologiya',
        job: 'Anesteziolog',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev ',
        img: '../assets/images/about/docdo-3.png'
      },
      4: {
        name: 'Nasriddinov Shoxrux',
        job: '',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, boshqaruv va sotuv bilan Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev ',
        img: '../assets/images/about/docdo-4.png'
      }
    },
    clinics: {
      1: {
        text: 'Yondashuv',
        number: '01',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, Ban elimi sana vadiim duramadim'
      },
      2: {
        text: 'Hamshira',
        number: '02',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, Ban elimi sana vadiim duramadim'
      },
      3: {
        text: 'Qulayliklar',
        number: '03',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, Ban elimi sana vadiim duramadim'
      },
      4: {
        text: 'Mazzali taomlar',
        number: '04',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi sevayim Biznesini endigina boshlagan, Ban elimi sana vadiim duramadim'
      },
    },
    services: {
      1: {
        text: 'Urologiya',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi'
      },
      2: {
        text: 'Ginekologiya',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi'
      },
      3: {
        text: 'Stomatologiya',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi'
      },
      4: {
        text: 'Lab',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi'
      },
      5: {
        text: 'Proktologiya',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi'
      },
      6: {
        text: 'Flebologiya',
        desc: 'Ban elimi sana vadiim duramadim yine galdim bu da benim dardim san seeev diye yinemi yine galdim bu da benim dardim san seeev diye yinemi'
      },
    },
    gallery: {
      1: {
        img: '../assets/images/gallery/img-1.png'
      },
      2: {
        img: '../assets/images/gallery/img-2.png'
      },
      3: {
        img: '../assets/images/gallery/img-3.png'
      },
      4: {
        img: '../assets/images/gallery/img-4.png'
      },
      5: {
        img: '../assets/images/gallery/img-5.png'
      },
      6: {
        img: '../assets/images/gallery/img-6.png'
      },
      7: {
        img: '../assets/images/gallery/img-7.png'
      },
      8: {
        img: '../assets/images/gallery/img-8.png'
      },
      9: {
        img: '../assets/images/gallery/img-9.png'
      },
      10: {
        img: '../assets/images/gallery/img-10.png'
      },
      11: {
        img: '../assets/images/gallery/img-11.png'
      },
      12: {
        img: '../assets/images/gallery/img-12.png'
      },
      13: {
        img: '../assets/images/gallery/img-13.png'
      },
      14: {
        img: '../assets/images/gallery/img-14.png'
      },
      15: {
        img: '../assets/images/gallery/img-15.png'
      },
      16: {
        img: '../assets/images/gallery/img-16.png'
      },
      17: {
        img: '../assets/images/gallery/img-17.png'
      },
      18: {
        img: '../assets/images/gallery/img-18.png'
      },
      19: {
        img: '../assets/images/gallery/img-19.png'
      },
      20: {
        img: '../assets/images/gallery/img-20.png'
      },
    },
    gallery2: {
      15: {
        img: '../assets/images/gallery/img-15.png'
      },
      16: {
        img: '../assets/images/gallery/img-16.png'
      },
      17: {
        img: '../assets/images/gallery/img-17.png'
      },
      18: {
        img: '../assets/images/gallery/img-18.png'
      },
      19: {
        img: '../assets/images/gallery/img-19.png'
      },
      20: {
        img: '../assets/images/gallery/img-20.png'
      },
    },
  })
  
  Alpine.data('dropdown', () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
}))
})