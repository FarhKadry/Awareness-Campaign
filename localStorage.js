if (!localStorage.getItem("loaded")) {

  let language = "EN";

  /* HERO */
  localStorage.setItem("heroParaEN",
    "In the heart of Cairo, master artisans preserve an ancient craft. But time is running out. Every stitch tells a story that shouldn't be forgotten."
  );
  localStorage.setItem("heroParaAR",
    "في قلب القاهرة، يحافظ الحرفيون المهرة على حرفة عريقة. لكن الوقت ينفد. كل غرزة تحكي قصة لا ينبغي نسيانها."
  );
    /* HERO BUTTONS */
    localStorage.setItem("heroBtn1EN", "Learn the Story");
    localStorage.setItem("heroBtn1AR", "تعرّف على الحكاية");

    localStorage.setItem("heroBtn2EN", "Support the Art");
    localStorage.setItem("heroBtn2AR", "ادعم الفن");

  /* ABOUT */
  localStorage.setItem("moreTitleEN", "What is Khayyamiyya?");
  localStorage.setItem("moreTitleAR", "ما هي الخيامية؟");

  localStorage.setItem("moreText1EN",
    "Khayyamiyya is an ancient Egyptian appliqué art used to decorate ceremonial tents, deeply rooted in Cairo’s history."
  );
  localStorage.setItem("moreText1AR",
    "الخيامية هي فن مصري قديم يعتمد على الزخرفة بالقماش، وكان يُستخدم لتزيين الخيام الاحتفالية، وهو جزء أصيل من تاريخ القاهرة."
  );

  localStorage.setItem("moreText2EN",
    "These textiles are entirely handmade, combining geometry, color, and storytelling, and are now used in modern products."
  );
  localStorage.setItem("moreText2AR",
    "تُصنع هذه القطع يدويًا بالكامل، وتجمع بين الهندسة والألوان والحكايات، وتُستخدم اليوم في منتجات عصرية."
  );

  localStorage.setItem("moreBtnEN", "Read More");
  localStorage.setItem("moreBtnAR", "اقرأ المزيد");

  /* WHY */
  localStorage.setItem("whyTitleEN", "Why It's Fading");
  localStorage.setItem("whyTitleAR", "لماذا يندثر هذا الفن");

  localStorage.setItem("whySubEN",
    "A storm of challenges threatens to erase this ancient art forever."
  );
  localStorage.setItem("whySubAR",
    "تحديات متراكمة تهدد بمحو هذا الفن العريق إلى الأبد."
  );

  /* STATS */
  localStorage.setItem("statsTitleEN", "The Numbers Send Alarms");
  localStorage.setItem("statsTitleAR", "الأرقام تدق أجراس الخطر");

  localStorage.setItem("statsSubEN",
    "A tradition on the brink of extinction."
  );
  localStorage.setItem("statsSubAR",
    "تراث يقترب من الاندثار."
  );
/* STATS – BLOCK 1 */
localStorage.setItem("stat1PrefixEN", "more than");
localStorage.setItem("stat1PrefixAR", "أكثر من");

localStorage.setItem("stat1TitleEN", "YEARS");
localStorage.setItem("stat1TitleAR", "عام");

localStorage.setItem("stat1SubEN", "of cultural heritage");
localStorage.setItem("stat1SubAR", "من التراث الثقافي");

/* STATS – BLOCK 2 */
localStorage.setItem("stat2PrefixEN", "approximated");
localStorage.setItem("stat2PrefixAR", "بنسبة تقارب");

localStorage.setItem("stat2TitleEN", "Decline");
localStorage.setItem("stat2TitleAR", "انخفاض");

localStorage.setItem("stat2SubEN", "in the past 30 years");
localStorage.setItem("stat2SubAR", "خلال الثلاثين عامًا الماضية");

/* STATS – BLOCK 3 */
localStorage.setItem("stat3PrefixEN", "less than");
localStorage.setItem("stat3PrefixAR", "أقل من");

localStorage.setItem("stat3TitleEN", "MASTER ARTISANS");
localStorage.setItem("stat3TitleAR", "حرفيّين محترفين");

localStorage.setItem("stat3SubEN", "remaining in Cairo");
localStorage.setItem("stat3SubAR", "متبقّين في القاهرة");

  /* GALLERY */
  localStorage.setItem("galleryTitleEN", "Gallery");
  localStorage.setItem("galleryTitleAR", "معرض الصور");

  localStorage.setItem("gallerySubEN",
    "Explore the beauty of Khayyamiyya details."
  );
  localStorage.setItem("gallerySubAR",
    "اكتشف جمال تفاصيل الخيامية."
  );

  localStorage.setItem("galleryTitle2EN", "Artisans' Work");
  localStorage.setItem("galleryTitle2AR", "أعمال الحرفيين");

  /* FORM */
  localStorage.setItem("formTitleEN",
    "Be Part of the Solution – Join Workshops!"
  );
  localStorage.setItem("formTitleAR",
    "كن جزءًا من الحل – شارك في الورش!"
  );

  localStorage.setItem("formSubEN",
    "Your support helps preserve this craft and sustain the artisans who keep it alive."
  );
  localStorage.setItem("formSubAR",
    "مساهمتك تساعد في الحفاظ على هذا الفن ودعم الحرفيين الذين يحيونه."
  );

  localStorage.setItem("language", language);
  localStorage.setItem("loaded", true);
}


// FORMFUNC
function saveFormData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('msg').value;
    let formData = {
    name,
    email,
    message,
};
    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);

    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
}
function getSavedData() {
    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    if (submissions.length === 0) {
        console.log('No contact messages found.');
        return [];
    }
    else{
    console.table(submissions);
    return submissions;
    }
}
getSavedData();

let users = [
    {
    Uname: "farh",
    email: "farh@gmail.com",
    Upass: "123" 
},
    {
    Uname: "Mohamed Ahmed", 
    email: "Mohamed@gmail.com",
    Upass: "123"  
    }
];
localStorage.setItem("localUsers", JSON.stringify(users));
