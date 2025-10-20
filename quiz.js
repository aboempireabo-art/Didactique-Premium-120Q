// ==========================================================
// الإعدادات العامة للمشروع
// ==========================================================

let currentPage = 1;
const questionsPerPage = 20;
// القيمة النهائية المستهدفة هي 120، لكننا سنتركها مؤقتاً 120
// ليعرف البرنامج كم صفحة يجب أن يولد (6 صفحات)
const totalQuestions = 120; 
const totalPages = Math.ceil(totalQuestions / questionsPerPage);


// ==========================================================
// مصفوفة الأسئلة (40 سؤالاً جاهزاً الآن)
// ==========================================================
const quizQuestions = [
    // --------------------------------------------------------------------------------------
    // القسم 1: علوم التربية والمستجدات التربوية (20 سؤالاً)
    // --------------------------------------------------------------------------------------
    {
        question: "في المقاربة البنائية، إذا أظهر المتعلم 'عائقاً ديداكتيكياً' (Obstacle Didactique) مرتبطاً بتمثلاته، فإن الإجراء الأنجع للمعالجة يكمن في:",
        options: ["تكرار الشرح النظري للقاعدة الصحيحة", "تجاهل العائق لأنه سيختفي مع التقدم في الدراسة", "مواجهة المتعلم بالخطأ عبر وضعية جديدة تُبين حدود تمثله وتدفعه للمواءمة المعرفية (Accommodation)", "عزله عن زملائه لتلقي دعماً فردياً مكثفاً"],
        answer: "مواجهة المتعلم بالخطأ عبر وضعية جديدة تُبين حدود تمثله وتدفعه للمواءمة المعرفية (Accommodation)",
        rationale: "العائق الديداكتيكي يتطلب 'المواءمة' (Accommodation) وهي عملية تغيير البنية المعرفية للمتعلم، وتتم عبر إحداث خلخلة معرفية (Conflit cognitif) عن طريق وضعية جديدة ومناقشة جماعية."
    },
    {
        question: "أي من المبادئ التالية يمثل جوهر 'بيداغوجيا الإدماج' (Pédagogie de l'intégration)؟",
        options: ["قياس كمية المعلومات المخزنة في نهاية كل درس", "التأكد من قدرة المتعلم على تجنيد وتوظيف موارده بشكل مُنسَّق في سياق مركب وذي دلالة", "التركيز على تدريس الأهداف السلوكية المجزأة", "فصل المكتسبات المعرفية عن المهارات المنهجية"],
        answer: "التأكد من قدرة المتعلم على تجنيد وتوظيف موارده بشكل مُنسَّق في سياق مركب وذي دلالة",
        rationale: "الإدماج هو المحطة النهائية التي تدمج فيها المعارف والمهارات والمواقف في إطار واحد (الكفاية)، ويُقوَّم عبر وضعية مركبة."
    },
    {
        question: "أي من النظريات التالية ترى أن الذكاء ليس قدرة واحدة، بل مجموعة من القدرات المستقلة؟",
        options: ["النظرية السلوكية", "النظرية البنائية (بياجيه)", "نظرية الذكاءات المتعددة (هوارد غاردنر)", "النظرية المعرفية"],
        answer: "نظرية الذكاءات المتعددة (هوارد غاردنر)",
        rationale: "نظرية الذكاءات المتعددة (هوارد غاردنر) تنص على وجود أنواع مختلفة من الذكاء (لغوي، منطقي، موسيقي، إلخ)، مما يستلزم تنويع أساليب التدريس والتقويم."
    },
    {
        question: "في نموذج 'المثلث الديداكتيكي'، يشير مفهوم 'التمثل' (Représentation) إلى العلاقة بين:",
        options: ["الأستاذ والمعرفة", "الأستاذ والمتعلم", "المتعلم والمعرفة", "المؤسسة والإدارة"],
        answer: "المتعلم والمعرفة",
        rationale: "التمثل هو التصورات والمعارف المسبقة التي يحملها المتعلم حول موضوع ما، وهي تشكل جزءاً أساسياً من علاقته بالمعرفة."
    },
    {
        question: "من أهم مميزات 'الجودة في التعليم' (Qualité de l'enseignement) في الإصلاحات التربوية الحديثة:",
        options: ["التركيز على الكمية على حساب الكيف", "التركيز على المتعلم والنتائج القابلة للقياس والتحقق من تحصيل الكفايات", "الزيادة في عدد ساعات التدريس فقط", "الاعتماد على التقويم الإشهادي فقط"],
        answer: "التركيز على المتعلم والنتائج القابلة للقياس والتحقق من تحصيل الكفايات",
        rationale: "تُقاس الجودة اليوم بتحقيق الكفايات وفاعلية المخرجات، وليس فقط بتوفير الموارد أو عدد الساعات."
    },
    {
        question: "أي من الآليات التالية يضمن 'التخفيف من أثر العقد الديداكتيكي' السلبي؟",
        options: ["تحديد التوقعات المسبقة من طرف الأستاذ فقط", "المناقشة الصريحة والواضحة للأدوار والتوقعات والمراحل مع المتعلمين في بداية التعلم", "تجاهل المشكلات الصفية الصغيرة", "الاعتماد على التلقين الصارم"],
        answer: "المناقشة الصريحة والواضحة للأدوار والتوقعات والمراحل مع المتعلمين في بداية التعلم",
        rationale: "العقد الديداكتيكي هو اتفاق ضمني، وتوضيحه وكسر جوانبه السلبية يتم بالمناقشة الصريحة والشفافة بين جميع أطراف العملية."
    },
    {
        question: "أي من المستويات التالية في تصنيف 'بلوم' المعرفي يمثل أعلى درجة من التفكير والإبداع؟",
        options: ["الفهم (Compréhension)", "التطبيق (Application)", "التحليل (Analyse)", "الإبداع / التركيب (Création / Synthèse)"],
        answer: "الإبداع / التركيب (Création / Synthèse)",
        rationale: "الإبداع (أو التركيب في التصنيف القديم) هو أعلى مستوى في الهرم، حيث يتطلب من المتعلم توليد أفكار أو منتجات جديدة."
    },
    {
        question: "يشير مفهوم 'التمفصل الديداكتيكي' إلى:",
        options: ["الربط الأفقي بين مكونات المادة الواحدة والربط العمودي بين مستويات السلك التعليمي", "التركيز على مادة دراسية واحدة فقط", "التقييم الكمي لأداء المتعلمين", "الجهد الفردي للمتعلم"],
        answer: "الربط الأفقي بين مكونات المادة الواحدة والربط العمودي بين مستويات السلك التعليمي",
        rationale: "يهدف التمفصل إلى تحقيق الاتساق والتكامل بين مختلف المعارف والمهارات المكتسبة في مسار تعلم المتعلم."
    },
    {
        question: "المبدأ الذي يركز على أن المتعلم هو من يبني المعرفة بشكل نشط ولا يتلقاها بشكل سلبي هو مبدأ:",
        options: ["السلوكية", "البنائية", "المعرفية", "كل الخيارات السابقة خاطئة"],
        answer: "البنائية",
        rationale: "البنائية (Constructivism) هي النظرية التي ترى أن التعلم يتم عندما يبني المتعلم معرفته الخاصة من خلال الخبرة والتفاعل مع المحيط."
    },
    {
        question: "يُعتبر 'التخطيط' عنصراً أساسياً في الممارسة المهنية لضمان:",
        options: ["تنفيذ الأنشطة دون تعديل", "الارتجال والعمل العشوائي", "الوضوح والاتساق بين الأهداف، المحتويات، وطرق التقويم", "تقليص الوقت المخصص للتدريس"],
        answer: "الوضوح والاتساق بين الأهداف، المحتويات، وطرق التقويم",
        rationale: "التخطيط المنهجي يضمن تماسك العملية التعليمية وتوجيهها نحو أهداف محددة وقابلة للقياس."
    },
    {
        question: "التقويم الذي يُجرى في نهاية كل مرحلة لتقييم الحصيلة النهائية وتحديد مستوى الإتقان هو:",
        options: ["التقويم التكويني", "التقويم التشخيصي", "التقويم الإجمالي (التجميعي)", "التقويم بالقرين"],
        answer: "التقويم الإجمالي (التجميعي)",
        rationale: "التقويم الإجمالي (Summative) يهدف إلى إصدار حكم نهائي حول إتقان الكفايات في نهاية فترة زمنية محددة."
    },
    {
        question: "الوسيلة الديداكتيكية الأكثر ملاءمة لمعالجة ظاهرة 'الفشل الدراسي المتكرر' لدى المتعلم هي:",
        options: ["تكرار نفس الأنشطة التعليمية", "بيداغوجيا الدعم والمعالجة المرتكزة على تحديد مواطن الضعف بدقة", "التقويم الإشهادي دون توجيه", "كل الخيارات السابقة خاطئة"],
        answer: "بيداغوجيا الدعم والمعالجة المرتكزة على تحديد مواطن الضعف بدقة",
        rationale: "الدعم والمعالجة يتطلبان تشخيصاً دقيقاً (عن طريق التقويم التشخيصي والتكويني) يليه تكييف الأنشطة لمعالجة الصعوبات المحددة."
    },
    {
        question: "أي من الأنواع التالية يعتبر تقويماً للمكتسبات القبلية؟",
        options: ["التقويم التشخيصي", "التقويم التكويني", "التقويم التجميعي", "التقويم المستمر"],
        answer: "التقويم التشخيصي",
        rationale: "التقويم التشخيصي يتم في بداية التعلم لتحديد المكتسبات والتمثلات القبلية (Prérequis) وتكييف البداية مع مستوى المتعلمين."
    },
    {
        question: "أي مبدأ بيداغوجي يهدف إلى تكييف العملية التعليمية مع سرعة وقدرات كل متعلم؟",
        options: ["التوحيد", "التفريد (البيداغوجيا الفارقية)", "التجميع", "التركيز"],
        answer: "التفريد (البيداغوجيا الفارقية)",
        rationale: "التفريد هو المبدأ الذي يركز على تكييف الأساليب والوسائل والوتيرة حسب الاختلافات بين المتعلمين."
    },
    {
        question: "ما هي الوظيفة الأساسية لـ'الوضعية البيداغوجية'؟",
        options: ["أي نشاط يحدث في المدرسة", "مجموعة من الظروف المحيطة بالمشكلة أو النشاط التعليمي الهادف", "إجراء اختبار نهاية الفصل", "تنظيف الطاولات"],
        answer: "مجموعة من الظروف المحيطة بالمشكلة أو النشاط التعليمي الهادف",
        rationale: "الوضعية البيداغوجية هي إطار منهجي لتنفيذ الأنشطة، يحدد الأهداف والوسائل والسياق الذي ستبنى فيه المعرفة."
    },
    {
        question: "ماذا يقصد بـ'الاستقلالية' في التعلم؟",
        options: ["اعتماد المتعلم بشكل كامل على الأستاذ", "قدرة المتعلم على إدارة تعلمه وتوجيه نفسه ذاتياً", "الحصول على درجات عالية", "العمل في مجموعات كبيرة فقط"],
        answer: "قدرة المتعلم على إدارة تعلمه وتوجيه نفسه ذاتياً",
        rationale: "الاستقلالية تعني تمكين المتعلم من التخطيط والمراجعة والتقييم الذاتي لعمله، مما يجعله مسؤولاً عن مسار تعلمه."
    },
    {
        question: "التقنية التي تعتمد على تقسيم المتعلمين إلى مجموعات صغيرة لإنجاز مهمة مشتركة تسمى:",
        options: ["التلقين المباشر", "العمل بالمجموعات التعاونية", "التقويم الإشهادي", "المناقشة الفردية"],
        answer: "العمل بالمجموعات التعاونية",
        rationale: "العمل بالمجموعات التعاونية يعزز التفاعل الاجتماعي، والتفاوض المعرفي، وبناء المعرفة بشكل جماعي (النظرية السوسيو-بنائية)."
    },
    {
        question: "أي من أدوار الأستاذ يتماشى مع المقاربة بالكفايات؟",
        options: ["ناقل للمعلومات ومُلقّن أساسي", "مُسهِّل ومُوجّه يُنظّم الوضعيات ويساعِد المتعلم على بناء معارفه", "مُراقب فقط", "مُقيّم إشهادي فقط"],
        answer: "مُسهِّل ومُوجّه يُنظّم الوضعيات ويساعِد المتعلم على بناء معارفه",
        rationale: "دور الأستاذ تحول من مُلقِّن إلى موجه ومنشط ومساعد (Facilitator) للوصول إلى المعرفة."
    },
    {
        question: "ما هي المرحلة التي يتم فيها تجميع النتائج المتوصل إليها وصياغتها في شكل قاعدة علمية أو مفهوم دقيق؟",
        options: ["صياغة الفرضيات", "الملاحظة والتجريب", "المأسسة (Institutionnalisation)", "التقويم"],
        answer: "المأسسة (Institutionnalisation)",
        rationale: "المأسسة هي ترجمة المعرفة التي تم بناؤها (سواء عبر التجريب أو الاستقراء) إلى معرفة رسمية ثابتة وقابلة للتوظيف."
    },
    {
        question: "العملية التي يقوم فيها المتعلم بتطبيق معلومة سابقة على وضعية جديدة مشابهة دون تغيير في بنيته المعرفية تسمى:",
        options: ["المواءمة (Accommodation)", "النمو", "المماثلة (Assimilation)", "الإدماج"],
        answer: "المماثلة (Assimilation)",
        rationale: "المماثلة هي دمج المعلومة الجديدة في البنية العقلية الحالية، بينما المواءمة هي تغيير البنية لتناسب المعلومة (وفق جان بياجيه)."
    },
    // --------------------------------------------------------------------------------------
    // القسم 2: ديداكتيك اللغة العربية (20 سؤالاً)
    // --------------------------------------------------------------------------------------
    {
        question: "ما هو الإجراء الديداكتيكي الذي يضمن تحويل مهارة 'القراءة الجهرية' من مجرد قراءة آلية إلى قراءة معبرة ووظيفية؟",
        options: ["التركيز على سرعة النطق فقط", "قراءة المعلم النموذجية للنص فقط", "الربط الصريح بين الأداء القرائي (الطلاقة) وفهم المعنى والتعبير عن الانفعالات التي يحملها النص", "إجبار جميع المتعلمين على قراءة نفس الجزء بغض النظر عن مستواهم"],
        answer: "الربط الصريح بين الأداء القرائي (الطلاقة) وفهم المعنى والتعبير عن الانفعالات التي يحملها النص",
        rationale: "القراءة الوظيفية يجب أن تربط بين الطلاقة اللغوية والفهم العميق للمحتوى والتعبير عنه بنبرة مناسبة، وليس مجرد فك للرموز أو قياس للسرعة (Prosodie)."
    },
    {
        question: "في تدريس مكون 'الظواهر اللغوية' (النحو) بالمستويات العليا، ما هي أفضل مقاربة لتمكين المتعلم من بناء القاعدة بنفسه؟",
        options: ["المقاربة الاستنباطية (من القاعدة إلى الأمثلة)", "المقاربة السلوكية التكرارية", "المقاربة الاستقرائية (من الأمثلة والنصوص إلى القاعدة)", "المقاربة التلقينية المباشرة"],
        answer: "المقاربة الاستقرائية (من الأمثلة والنصوص إلى القاعدة)",
        rationale: "المنهج الاستقرائي يتماشى مع البنائية، حيث يبدأ المتعلم بتحليل أمثلة ونصوص وظيفية لاستنتاج القاعدة بنفسه (مرحلة الملاحظة والاكتشاف)، ثم تأتي مرحلة المأسسة."
    },
    {
        question: "ما هي الوظيفة الأساسية لمرحلة 'بناء التوقعات' (Pré-lecture) في حصص القراءة؟",
        options: ["تحديد الأخطاء الإملائية الشائعة", "ربط العنوان والصورة والمعلومات القبلية للمتعلم بمحتوى النص لتسهيل الفهم اللاحق", "قراءة النص بصوت جهوري سليم", "تحديد نوع النص (سردي، إخباري...) بشكل نهائي"],
        answer: "ربط العنوان والصورة والمعلومات القبلية للمتعلم بمحتوى النص لتسهيل الفهم اللاحق",
        rationale: "تهدف هذه المرحلة إلى تفعيل المعارف القبلية للمتعلم (Activation des connaissances antérieures) وتهيئته ذهنياً لتقبل محتوى النص الجديد، وهي خطوة إجرائية أساسية في المقاربة المنهجية."
    },
    {
        question: "في ديداكتيك الكتابة، ما هي المرحلة التي يركز فيها المتعلم على مراجعة 'انسجام النص' و 'تطور الأفكار'؟",
        options: ["مرحلة التخطيط", "مرحلة الإنتاج الأولي (المسودة)", "مرحلة المراجعة (Réécriture)", "مرحلة النقل الخطّي"],
        answer: "مرحلة المراجعة (Réécriture)",
        rationale: "المراجعة تركز على الجوانب المنهجية والمنطقية (الانسجام، التسلسل، ووضوح الأفكار)، بينما التصحيح يركز على الجوانب اللغوية (النحو، الصرف، الإملاء)."
    },
    {
        question: "ما هو الفرق الديداكتيكي بين 'الوضعية التواصلية' و 'الحكاية' في المستويات الدنيا؟",
        options: ["الوضعية تركز على الإنتاج الشفوي الفوري، والحكاية تركز على التلقي وتنمية الرصيد", "الوضعية تقوّم كتابة النصوص، والحكاية تقوّم القراءة", "لا فرق جوهري بينهما", "الوضعية تدرس في المستوى الأول فقط، والحكاية في المستوى الثاني فقط"],
        answer: "الوضعية تركز على الإنتاج الشفوي الفوري، والحكاية تركز على التلقي وتنمية الرصيد",
        rationale: "الوضعية التواصلية تهدف إلى استخدام 'الفعل الكلامي' (Acte de langage) في سياق وظيفي، بينما الحكاية هي رافد لغوي وثقافي لتنمية مهارات الاستماع والفهم."
    },
    {
        question: "أي من تقنيات التدريس تعتمد على تجميع الأخطاء الأكثر شيوعاً في الفصل لإنشاء حصص دعم موجهة للقصور المشترك؟",
        options: ["التقويم التجميعي", "التحليل البعدي للأخطاء (Analyse Postérieure des Erreurs)", "التعاقد الديداكتيكي", "التخطيط الفردي"],
        answer: "التحليل البعدي للأخطاء (Analyse Postérieure des Erreurs)",
        rationale: "التحليل البعدي للأخطاء هو إجراء منهجي يسمح بتصنيف الأخطاء وتحديد أصولها الديداكتيكية أو المعرفية لوضع خطة دعم جماعية أو فردية فعالة."
    },
    {
        question: "في تدريس مكون 'الاستماع والفهم'، ما هي أهمية مرحلة 'التسميع' (Première écoute)؟",
        options: ["مقارنة أداء المتعلمين ببعضهم", "تنمية مهارات الملاحظة السمعية وتأسيس الفهم الأولي والاحتفاظ بالمعلومات", "إصدار حكم نهائي على مستوى المتعلم", "كل الخيارات السابقة خاطئة"],
        answer: "تنمية مهارات الملاحظة السمعية وتأسيس الفهم الأولي والاحتفاظ بالمعلومات",
        rationale: "التسميع الأولي يركز على الفهم العام وتلقي الرسالة ككل (Compréhension Globale) قبل الدخول في التفاصيل والتحليل."
    },
    {
        question: "ما هو الهدف الأسمى من إدراج 'الأنشطة الموازية' (Activités Parallèles) في المنهاج الدراسي؟",
        options: ["تخفيف الضغط على المقررات الرسمية", "تنمية الكفايات المستعرضة والشخصية (الاجتماعية، الثقافية، الفنية) وإثراء شخصية المتعلم", "إلزام المتعلم بحضور إضافي", "استبدال الأنشطة الصفية بالخارجية"],
        answer: "تنمية الكفايات المستعرضة والشخصية (الاجتماعية، الثقافية، الفنية) وإثراء شخصية المتعلم",
        rationale: "الأنشطة الموازية تساعد على تطوير الجوانب الوجدانية والمهارات العرضية (Soft Skills) التي لا يغطيها المنهج الرسمي بالكامل."
    },
    {
        question: "أي من الظواهر التالية يعتبر 'خطأً نظامياً' (Erreur Systématique) يتطلب معالجة معمقة؟",
        options: ["نسيان المتعلم لكلمة عابرة في النص", "الخطأ المتكرر لدى المتعلم في تطبيق قاعدة ثابتة (مثلاً، عدم رفع الفاعل باستمرار)", "الخطأ الناتج عن التسرع وقلة الانتباه", "كل الخيارات السابقة خاطئة"],
        answer: "الخطأ المتكرر لدى المتعلم في تطبيق قاعدة ثابتة (مثلاً، عدم رفع الفاعل باستمرار)",
        rationale: "الخطأ النظامي هو الخطأ الذي يتكرر بشكل منتظم، وهو دليل على أن المتعلم يطبق قاعدة خاطئة أو ناقصة في ذهنه (تمثل خاطئ)، ويجب معالجته ديداكتيكياً."
    },
    {
        question: "في منهجية تدريس 'الخط والإملاء'، ما هي الأولوية التي ينبغي التركيز عليها في المراحل الأولى؟",
        options: ["التسريع في الكتابة لتوفير الوقت", "التركيز على مطابقة الصوت بالحرف (التطابق الصوتي-الخطّي) والوضوح والتقيد بالقياسات", "التزيين والزخرفة", "التحرير المباشر لنصوص طويلة"],
        answer: "التركيز على مطابقة الصوت بالحرف (التطابق الصوتي-الخطّي) والوضوح والتقيد بالقياسات",
        rationale: "الأولوية هي الجانب الآلي: التحكم في الأبعاد، ووضوح الحروف، ثم ربطها بالصوت المنطوق، وهذا هو أساس الإملاء الصحيح."
    },
    {
        question: "ما هي القيمة المضافة لتوظيف 'الخريطة الذهنية' (Mind Map) في حصص مراجعة المفاهيم؟",
        options: ["قياس الذكاء المنطقي فقط", "تنظيم الأفكار بشكل هرمي مرئي والربط بين المفاهيم لتسهيل الاسترجاع والفهم الشامل", "تقليص عدد الأهداف التعليمية", "كل الخيارات السابقة خاطئة"],
        answer: "تنظيم الأفكار بشكل هرمي مرئي والربط بين المفاهيم لتسهيل الاسترجاع والفهم الشامل",
        rationale: "الخرائط الذهنية تدعم التعلم البصري وتساعد الدماغ على تنظيم المعلومات المعقدة والربط بينها، مما يخدم المراجعة الشاملة للكفايات."
    },
    {
        question: "ما هو الهدف من 'شبكة معايير التقويم' (Grille d'évaluation) في تقويم إنتاج كتابي؟",
        options: ["الاعتماد على انطباع الأستاذ فقط", "توفير الموضوعية والشفافية وتحديد دقيق لجوانب الإتقان (الملائمة، الانسجام، السلامة اللغوية)", "قياس السرعة فقط", "تحديد مستوى المتعلم مقارنة بزميله"],
        answer: "توفير الموضوعية والشفافية وتحديد دقيق لجوانب الإتقان (الملائمة، الانسجام، السلامة اللغوية)",
        rationale: "شبكة المعايير تضمن أن التقويم يتم بناءً على معايير محددة ومتفق عليها، مما يزيد من موضوعية الحكم على مستوى إتقان الكفاية."
    },
    {
        question: "لتمكين المتعلم من التمييز بين أنواع النصوص (إخباري، وصفي، سردي)، ما هو النشاط الأكثر فعالية؟",
        options: ["حفظ تعريف كل نوع من الكتاب المدرسي", "تحليل نصوص متنوعة والتركيز على الخصائص البنيوية واللغوية المميزة لكل نوع", "إهمال هذا المكون والتركيز على النحو", "كل الخيارات السابقة خاطئة"],
        answer: "تحليل نصوص متنوعة والتركيز على الخصائص البنيوية واللغوية المميزة لكل نوع",
        rationale: "التحليل المقارن للنصوص يعزز فهم المتعلم لوظيفة اللغة وكيف تتغير البنية بتغير الهدف التواصلي (الخصائص البنيوية واللغوية هي المعيار الحاسم)."
    },
    {
        question: "ما هي الوظيفة الديداكتيكية لتصحيح الأخطاء من طرف المتعلم نفسه (التقويم الذاتي) أو زملائه؟",
        options: ["إراحة المدرس من مهمة التصحيح الإجمالية", "تنمية قدرة المتعلم على المراجعة الذاتية وتطوير مهارات التقويم الذاتي والتقويم بالقرين", "توفير وقت إضافي لإنهاء المقرر الدراسي", "زيادة المنافسة بين المتعلمين"],
        answer: "تنمية قدرة المتعلم على المراجعة الذاتية وتطوير مهارات التقويم الذاتي والتقويم بالقرين",
        rationale: "الهدف هو جعل المتعلم مسؤولاً عن تعلمه وعن تطوير مهارات المراجعة النقدية والتعاونية."
    },
    {
        question: "ما هو العنصر الذي يحدد السياق الاجتماعي والوظيفي لـ 'الوضعية التواصلية'؟",
        options: ["الظاهرة النحوية المستهدفة", "القاعدة الإملائية", "الموضوع (Theme) والفعل الكلامي (Acte de Langage) المستهدف", "كل الخيارات السابقة خاطئة"],
        answer: "الموضوع (Theme) والفعل الكلامي (Acte de Langage) المستهدف",
        rationale: "تحدد الوضعية التواصلية بناءً على الغرض التواصلي (الفعل الكلامي) والموقف الذي يتم فيه التبادل (السياق الاجتماعي والموضوع)."
    },
    {
        question: "ماذا يقصد بـ'الاستدلال' في التعلم اللغوي؟",
        options: ["القدرة على نطق الحروف بشكل صحيح", "القدرة على استنتاج الأحكام والقواعد اللغوية من الأمثلة المعروضة", "التركيز على مهارات الحفظ والاستظهار", "تلوين الكلمات في النص"],
        answer: "القدرة على استنتاج الأحكام والقواعد اللغوية من الأمثلة المعروضة",
        rationale: "الاستدلال هو عملية عقلية تتضمن استخلاص قاعدة أو حكم عام بناءً على مجموعة من الأمثلة الجزئية (المنهج الاستقرائي)."
    },
    {
        question: "في تدريس مكون الإملاء، ما هو الخطأ الديداكتيكي الشائع الذي يجب تجنبه؟",
        options: ["إعطاء المتعلمين نصوص إملائية قصيرة", "تجنب تدريس الحروف المتشابهة في النطق أو الرسم معاً", "التركيز على إعطاء القاعدة دون ربطها بالتمارين التطبيقية والتحليل الصوتي", "كل الخيارات السابقة خاطئة"],
        answer: "التركيز على إعطاء القاعدة دون ربطها بالتمارين التطبيقية والتحليل الصوتي",
        rationale: "تعليم الإملاء يتطلب ربطاً قوياً بين القواعد اللغوية والمهارات الحسية (التمييز السمعي) عبر التمارين والتطبيق، والاكتفاء بالقاعدة النظرية لا يضمن الإتقان."
    },
    {
        question: "ما هو الدور الذي يلعبه 'النص المسترسل' (Le Texte Suivi) في المستويات العليا؟",
        options: ["يخدم مهارات القراءة فقط", "يخدم مهارات التعبير الكتابي فقط", "يخدم كنموذج تطبيقي لتوظيف المكتسبات اللغوية وتنمية مهارات الفهم العميق والتحليل النقدي", "كل الخيارات السابقة خاطئة"],
        answer: "يخدم كنموذج تطبيقي لتوظيف المكتسبات اللغوية وتنمية مهارات الفهم العميق والتحليل النقدي",
        rationale: "النص المسترسل يوفر سياقاً لغوياً غنياً لتوظيف وتحليل مكتسبات المتعلم في مكونات اللغة المختلفة (قراءة، تراكيب، صرف)."
    },
    {
        question: "أي منهجية يجب اتباعها لتدريس تراكيب جديدة (مثل النعت أو الحال)؟",
        options: ["المنهج الاستنباطي (القياسي)", "منهجية تبدأ بتقديم الأمثلة واستخلاص القاعدة من طرف المتعلمين قبل الانتقال للتطبيق (المنهج الاستقرائي)", "المنهج الوصفي الذي يكتفي بوصف الظاهرة دون قواعد", "كل الخيارات السابقة خاطئة"],
        answer: "منهجية تبدأ بتقديم الأمثلة واستخلاص القاعدة من طرف المتعلمين قبل الانتقال للتطبيق (المنهج الاستقرائي)",
        rationale: "المقاربة الاستقرائية هي الأنسب في بناء القواعد، حيث يكتشف المتعلم القاعدة بنفسه من خلال النصوص والأمثلة."
    },
    {
        question: "ما هي أهمية اعتماد التدرج في تدريس القراءة من النصوص البسيطة إلى المعقدة؟",
        options: ["لتوفير وقت الحصة وتركيز الجهود على النصوص الصعبة فقط", "يضمن اكتساب المتعلم مهارات الفهم القرائي الأساسية بشكل متسلسل وفعال قبل مواجهة النصوص الأصعب", "إرضاء جميع المتعلمين بغض النظر عن مستواهم", "تشجيع المتعلمين على حفظ النصوص"],
        answer: "يضمن اكتساب المتعلم مهارات الفهم القرائي الأساسية بشكل متسلسل وفعال قبل مواجهة النصوص الأصعب",
        rationale: "التدرج يضمن البناء المتراكم للمعارف والمهارات ويقلل من الفشل الدراسي المرتبط بمواجهة صعوبات تفوق مستوى المتعلم (مبدأ التدرج والاستمرارية)."
    },


    // --------------------------------------------------------------------------------------
    // القسم 3: ديداكتيك اللغة الفرنسية (20 سؤالاً)
    // --------------------------------------------------------------------------------------
    {
        question: "Quel est le but de la phase de 'conceptualisation' dans une séance de grammaire?",
        options: ["Répéter la règle donnée par l'enseignant", "Faire un exercice écrit individuel", "Formuler la règle grammaticale (la généralisation) à partir des exemples analysés", "Lire un texte sans s'arrêter"],
        answer: "Formuler la règle grammaticale (la généralisation) à partir des exemples analysés",
        rationale: "C'est la phase d'institutionnalisation de la règle par les élèves eux-mêmes, suivant une démarche inductive."
    },
    {
        question: "Quelle est la principale fonction de la 'Boîte à mots' (Mots outils) en lecture/écriture?",
        options: ["Remplir le cahier de vocabulaire", "Fournir un répertoire de mots fréquents invariables pour faciliter la lecture et la production écrite", "Être utilisée par l'enseignant uniquement", "Servir de décoration pour la classe"],
        answer: "Fournir un répertoire de mots fréquents invariables pour faciliter la lecture et la production écrite",
        rationale: "La Boîte à mots offre un soutien visuel et linguistique essentiel, surtout pour les mots dits 'outils' ou 'fréquents'."
    },
    {
        question: "Pour développer la compétence 'Écrire' dans le cycle primaire, la meilleure méthode pour gérer l'hétérogénéité des apprenants est:",
        options: ["Donner la même tâche à tous, mais évaluer différemment.", "Proposer des tâches de production écrite avec des degrés de complexité variés et des outils d'aide (aides lexicales, canevas) pour chaque groupe de besoin (Pédagogie Différenciée).", "Corriger seulement les erreurs des élèves les plus faibles.", "Se concentrer uniquement sur la correction grammaticale."],
        answer: "Proposer des tâches de production écrite avec des degrés de complexité variés et des outils d'aide (aides lexicales, canevas) pour chaque groupe de besoin (Pédagogie Différenciée).",
        rationale: "La pédagogie différenciée est essentielle pour la production écrite car elle adapte les ressources et le niveau d'exigence à chaque apprenant, en fournissant des 'échafaudages' (scaffolding) appropriés."
    },
    {
        question: "L'erreur de 'sur-généralisation' (Sur-généralisation) en grammaire (ex: 'Il a prendu' au lieu de 'Il a pris') est considérée comme une erreur:",
        options: ["D'inattention", "Systématique, révélatrice d'une étape nécessaire dans la construction de la règle par l'apprenant", "Due à la langue maternelle (interférence)", "Tardive et accidentelle"],
        answer: "Systématique, révélatrice d'une étape nécessaire dans la construction de la règle par l'apprenant",
        rationale: "C'est une erreur positive qui prouve que l'apprenant a compris la règle générale (comme la terminaison du passé composé) mais l'applique de manière excessive à des exceptions."
    },
    {
        question: "Quel est l'objectif principal de la phase de 'pré-écoute' (avant l'oral) dans une séance de communication en français?",
        options: ["Vérifier la bonne prononciation des mots par les élèves.", "Activer les connaissances antérieures des élèves, les préparer au thème et susciter leurs hypothèses de sens.", "Corriger toutes les erreurs de grammaire commises lors de la séance précédente.", "Demander aux élèves d'écrire un résumé de ce qu'ils vont entendre."],
        answer: "Activer les connaissances antérieures des élèves, les préparer au thème et susciter leurs hypothèses de sens.",
        rationale: "Cette étape sert à préparer l'élève psychologiquement et cognitivement à l'écoute, en mobilisant ses connaissances préalables (connaissances antérieures)."
    },
    {
        question: "Quelle approche privilégie-t-on pour que l'élève construise la règle de Conjugaison/Grammaire par lui-même?",
        options: ["L'approche déductive", "L'approche explicite et systématique (méthode frontale)", "L'approche inductive (qui part des exemples concrets)", "L'approche comportementale basée sur la répétition"],
        answer: "L'approche inductive (qui part des exemples concrets)",
        rationale: "L'approche inductive est conforme au courant constructiviste, elle permet à l'élève de déduire la règle (institutionnalisation) à partir de l'analyse de corpus linguistiques (exemples)."
    },
    {
        question: "Quelle est la compétence linguistique la première à être développée chez l'enfant dans l'apprentissage du français?",
        options: ["La production écrite (Écrire)", "La lecture (Lire)", "La compréhension de l'oral (l'écoute)", "L'expression orale (Parler)"],
        answer: "La compréhension de l'oral (l'écoute)",
        rationale: "L'ordre naturel d'acquisition de la langue est : Compréhension Orale (Écouter) -> Production Orale (Parler) -> Compréhension Écrite (Lire) -> Production Écrite (Écrire)."
    },
    {
        question: "Quel est le rôle d'un 'critère de réussite' (Critère de performance) dans l'évaluation d'une production écrite?",
        options: ["Il définit le temps imparti pour réaliser la tâche.", "C'est la note finale attribuée à l'élève.", "C'est un indicateur précis qui spécifie la qualité attendue du produit final (le texte écrit).", "Il permet de classer les élèves du meilleur au moins bon."],
        answer: "C'est un indicateur précis qui spécifie la qualité attendue du produit final (le texte écrit).",
        rationale: "Le critère de réussite est un élément de la grille d'évaluation qui précise les attentes de qualité pour la production de l'apprenant (ex: 'le texte comporte au moins 5 phrases')."
    },
    {
        question: "Si un élève a des difficultés persistantes à accorder le participe passé avec l'auxiliaire 'être', de quelle erreur s'agit-il principalement?",
        options: ["Une erreur de compréhension du texte.", "Une erreur de prononciation.", "Une erreur de compétence grammaticale et de conjugaison (règle de l'accord).", "Une erreur de lexique (vocabulaire)."],
        answer: "Une erreur de compétence grammaticale et de conjugaison (règle de l'accord).",
        rationale: "L'accord du participe passé est une règle morphosyntaxique, sa non-maîtrise relève d'une lacune dans la compétence grammaticale."
    },
    {
        question: "L'objectif principal de la lecture à haute voix par les élèves en classe est de:",
        options: ["Vérifier la mémorisation du texte.", "Évaluer la compréhension profonde du texte.", "Améliorer la fluidité, l'intonation, et la prosodie (respect du rythme et de la ponctuation).", "Remplacer l'écoute du texte par le maître."],
        answer: "Améliorer la fluidité, l'intonation, et la prosodie (respect du rythme et de la ponctuation).",
        rationale: "La lecture à haute voix (lecture oralisée) vise le développement des mécanismes de décodage et d'expression orale du texte (prosodie et fluidité)."
    },
    {
        question: "Dans le cycle primaire, à quel moment la compétence de communication orale doit-elle être évaluée?",
        options: ["Uniquement lors de l'examen final de l'année.", "Uniquement par des tests écrits qui mesurent le vocabulaire acquis.", "De manière continue (formative) et sommative, en utilisant des grilles d'observation pendant les activités de communication.", "Par la simple observation de l'attitude de l'élève en classe."],
        answer: "De manière continue (formative) et sommative, en utilisant des grilles d'observation pendant les activités de communication.",
        rationale: "L'évaluation de l'oral doit être continue et basée sur des critères précis pour fournir un feedback immédiat et ajuster la pratique (formatif)."
    },
    {
        question: "Que signifie l'expression 'Lire pour comprendre' (Comprendre ce que l'on lit) en didactique de la lecture?",
        options: ["Se contenter de déchiffrer les lettres et les mots à haute voix.", "Lire rapidement pour battre un record de vitesse.", "Construire le sens du texte en traitant les informations et en les reliant à ses connaissances.", "Mémoriser toutes les phrases du texte sans les analyser."],
        answer: "Construire le sens du texte en traitant les informations et en les reliant à ses connaissances.",
        rationale: "La lecture est un processus actif de construction du sens qui implique la mobilisation des connaissances antérieures et l'inférence."
    },
    {
        question: "Quelle est l'approche recommandée pour l'enseignement du vocabulaire au primaire?",
        options: ["L'apprentissage par cœur de longues listes de mots isolés.", "L'enseignement du vocabulaire en contexte (selon le thème et la situation de communication).", "L'utilisation d'un dictionnaire uniquement.", "Se concentrer sur les mots qui contiennent des sons difficiles."],
        answer: "L'enseignement du vocabulaire en contexte (selon le thème et la situation de communication).",
        rationale: "L'apprentissage en contexte assure que le mot est compris et mémorisé avec ses différentes acceptions et utilisations fonctionnelles."
    },
    {
        question: "Quel est le rôle principal du portfolio de l'élève (Portfolio) dans l'apprentissage?",
        options: ["Remplacer complètement les examens écrits traditionnels.", "Servir d'outil de classement des meilleurs travaux de la classe.", "Permettre à l'élève de suivre ses progrès, de réfléchir à son travail et de s'auto-évaluer au fil du temps.", "Stocker tous les manuels scolaires et les cahiers de l'élève."],
        answer: "Permettre à l'élève de suivre ses progrès, de réfléchir à son travail et de s'auto-évaluer au fil du temps.",
        rationale: "Le portfolio est un outil d'auto-évaluation et de réflexion qui témoigne du cheminement de l'apprenant et de l'atteinte progressive des objectifs."
    },
    {
        question: "Quel est l'acte de langage visé dans une situation où l'élève doit demander poliment à son camarade de lui prêter un stylo?",
        options: ["Raconter (le récit).", "Décrire (la description).", "Demander (solliciter) quelque chose de manière courtoise et appropriée.", "Justifier (la justification)."],
        answer: "Demander (solliciter) quelque chose de manière courtoise et appropriée.",
        rationale: "Il s'agit d'un acte de langage précis (la demande) qui doit être réalisé dans un contexte social spécifique (la courtoisie)."
    },
    {
        question: "Lors de la correction d'erreurs en expression orale, quel type de rétroaction (feedback) est le plus efficace pour l'apprentissage?",
        options: ["Le feedback systématique et tardif (une semaine après).", "Le feedback qui interrompt l'élève à chaque mot erroné.", "Le feedback immédiat, constructif, et ciblé sans interrompre complètement le flux de communication.", "Le feedback qui se contente de donner la réponse correcte sans explication."],
        answer: "Le feedback immédiat, constructif, et ciblé sans interrompre complètement le flux de communication.",
        rationale: "Un feedback immédiat permet à l'apprenant de corriger l'erreur dans le contexte de production, sans nuire à la fluidité de son discours."
    },
    {
        question: "Qu'est-ce que la 'transposition didactique' dans le contexte de la didactique du français?",
        options: ["La traduction d'un concept du français à l'arabe.", "Le processus par lequel le savoir savant (la linguistique) est adapté et transformé pour être enseigné aux élèves.", "La réutilisation d'une même activité d'une année à l'autre.", "Le transfert des compétences de lecture à l'écriture."],
        answer: "Le processus par lequel le savoir savant (la linguistique) est adapté et transformé pour être enseigné aux élèves.",
        rationale: "La transposition didactique est l'opération par laquelle un savoir académique complexe est simplifié, contextualisé, et rendu didactisable pour l'enseignement scolaire."
    },
    {
        question: "Quelle est l'approche recommandée pour l'enseignement de la phonologie (sons et lettres) en début de cycle?",
        options: ["Préparer les élèves à écrire des poèmes.", "Rendre les élèves capables de reconnaître et de manipuler les sons de la langue pour faciliter le décodage et l'encodage (lecture et écriture).", "Leur faire mémoriser tous les accents et les signes de ponctuation.", "Leur apprendre les règles de grammaire les plus complexes."],
        answer: "Rendre les élèves capables de reconnaître et de manipuler les sons de la langue pour faciliter le décodage et l'encodage (lecture et écriture).",
        rationale: "La conscience phonologique (phonologie) est la capacité à manipuler les unités sonores de la langue, ce qui est le fondement de l'apprentissage de la lecture (décodage) et de l'écriture (encodage)."
    },
    {
        question: "Dans la didactique de l'écriture, quelle est la finalité de la phase de 'réécriture' (révision)?",
        options: ["Transférer les compétences de lecture à l'écriture.", "Évaluer la vitesse d'écriture des élèves.", "Améliorer la cohérence, la correction linguistique, et l'enrichissement du brouillon.", "Donner une note finale au travail de l'élève."],
        answer: "Améliorer la cohérence, la correction linguistique, et l'enrichissement du brouillon.",
        rationale: "La réécriture est la phase d'amélioration du texte produit, englobant la révision du fond (cohérence, idées) et de la forme (correction linguistique)."
    },
    {
        question: "Quelle est la principale caractéristique de l'évaluation par critères?",
        options: ["Comparer l'élève à la moyenne de la classe.", "Évaluer l'élève par rapport à des indicateurs de performance (critères) prédéfinis liés aux objectifs d'apprentissage.", "Se concentrer uniquement sur les aspects quantitatifs.", "Tous les choix précédents sont faux."],
        answer: "Évaluer l'élève par rapport à des indicateurs de performance (critères) prédéfinis liés aux objectifs d'apprentissage.",
        rationale: "L'évaluation par critères se focalise sur ce que l'élève a acquis ou non (maîtrise des critères de réussite), et non sur sa position par rapport à ses pairs (évaluation normative)."
    },

    // --------------------------------------------------------------------------------------
    // القسم 4: ديداكتيك النشاط العلمي والرياضيات (20 سؤالاً)
    // --------------------------------------------------------------------------------------
    {
        question: "في تدريس 'القياس' في الرياضيات (الأطوال أو الكتل)، ما هو التسلسل الديداكتيكي الصحيح؟",
        options: ["التعريف النظري للوحدة -> استخدام الأدوات -> القياس", "استخدام الوحدات المعيارية مباشرة -> المقارنة -> التقدير", "المقارنة الحسية والتقدير -> استخدام وحدات غير معيارية -> استخدام الأدوات والوحدات المعيارية", "كل الخيارات السابقة خاطئة"],
        answer: "المقارنة الحسية والتقدير -> استخدام وحدات غير معيارية -> استخدام الأدوات والوحدات المعيارية",
        rationale: "التسلسل البنائي (بياجيه) يبدأ بالمقارنة المباشرة المحسوسة، ثم القياس بأدوات بسيطة (غير معيارية)، وأخيراً الانتقال إلى الأدوات والوحدات المعيارية والمجردة."
    },
    {
        question: "في منهجية التقصي العلمي، ما هو الدور الأهم لـ'سجل التقصي' (Cahier d'investigation)؟",
        options: ["دفتر لتدوين الملاحظات فقط", "أداة منهجية لتنظيم مسار البحث العلمي للمتعلم، من التساؤل والفرضية إلى الاستنتاج والتفسير العلمي", "سجل لتقييم الأستاذ لأداء المتعلمين", "كل الخيارات السابقة خاطئة"],
        answer: "أداة منهجية لتنظيم مسار البحث العلمي للمتعلم، من التساؤل والفرضية إلى الاستنتاج والتفسير العلمي",
        rationale: "سجل التقصي هو أداة عمل للمتعلم لتوثيق كل مراحل التقصي، وهو انعكاس لتطبيقه للمنهج العلمي."
    },
    {
        question: "ما هي القيمة التربوية الأهم لتحليل أخطاء المتعلمين في مادة الرياضيات؟",
        options: ["تحديد ترتيب المتعلمين لغرض التصنيف", "توفير دليل على فشل المتعلم في تحقيق الكفاءة", "تشخيص الصعوبات المعرفية وتعديل طريقة التدريس (العقد الديداكتيكي)", "تجميع الأخطاء الأكثر شيوعاً لوضع اختبارات أكثر صعوبة"],
        answer: "تشخيص الصعوبات المعرفية وتعديل طريقة التدريس (العقد الديداكتيكي)",
        rationale: "تحليل الأخطاء هو أساس بيداغوجيا الخطأ، ويهدف إلى فهم منشأ الخطأ (التمثل الخاطئ) لمعالجته ديداكتيكياً."
    },
    {
        question: "ما هو المبدأ الديداكتيكي الذي يوجه تدريس الهندسة في الابتدائي؟",
        options: ["الاستدلال الاستنباطي المباشر", "الاعتماد على النشاط اليدوي (Manipulation) والتمثيل الحسي والرسومات قبل الانتقال للقاعدة المجردة", "التلقين النظري للتعريفات الهندسية", "كل الخيارات السابقة خاطئة"],
        answer: "الاعتماد على النشاط اليدوي (Manipulation) والتمثيل الحسي والرسومات قبل الانتقال للقاعدة المجردة",
        rationale: "في الهندسة، يجب البدء بالنشاط العملي والتحسس بالأشكال الهندسية (المحسوس) قبل الانتقال إلى الخصائص المجردة والقوانين الرياضية."
    },
    {
        question: "يشير مفهوم 'النمذجة الرياضية' (Modélisation) إلى:",
        options: ["التمثيل البياني للمعادلات", "استخدام المفاهيم الرياضية لحل وضعيات مستمدة من الواقع وربطها به", "حفظ القوانين الرياضية عن ظهر قلب", "كل الخيارات السابقة خاطئة"],
        answer: "استخدام المفاهيم الرياضية لحل وضعيات مستمدة من الواقع وربطها به",
        rationale: "النمذجة هي عملية ترجمة مشكلة واقعية إلى لغة رياضية (معادلة أو خطاطة) وحلها ثم تفسير النتيجة في السياق الواقعي."
    },
    {
        question: "في منهجية التقصي العلمي، ما هي الخطوة التي تأتي مباشرة بعد 'صياغة الفرضيات'؟",
        options: ["الملاحظة الأولية", "المأسسة واستخلاص النتائج", "التجريب أو التحقق من الفرضيات", "تحديد المكتسبات القبلية"],
        answer: "التجريب أو التحقق من الفرضيات",
        rationale: "بعد وضع التخمينات (الفرضيات)، يجب الانتقال إلى التحقق العملي (التجريب أو البحث الوثائقي) لإثبات أو نفي هذه الفرضيات."
    },
    {
        question: "أي من عناصر المسألة الرياضية يُعتبر أهم عامل في تطوير التفكير النقدي لدى المتعلم؟",
        options: ["المعطيات الكافية والواضحة فقط", "المعطيات المشوشة والزائدة (Inutile)", "السؤال النهائي الذي يتطلب عملية واحدة", "كل الخيارات السابقة خاطئة"],
        answer: "المعطيات المشوشة والزائدة (Inutile)",
        rationale: "تتطلب المعطيات المشوشة من المتعلم مهارة التحليل والانتقاء لتحديد المعطيات ذات الصلة، وهذا يعزز التفكير النقدي."
    },
    {
        question: "ما هو الهدف من 'الحساب الذهني' المنتظم في بداية حصص الرياضيات؟",
        options: ["قياس قدرة المتعلمين على الحفظ", "تطوير السرعة والدقة في العمليات الحسابية وتقوية الذاكرة العاملة والتركيز", "إضاعة وقت الحصة", "كل الخيارات السابقة خاطئة"],
        answer: "تطوير السرعة والدقة في العمليات الحسابية وتقوية الذاكرة العاملة والتركيز",
        rationale: "الحساب الذهني يعمل على تدريب الدماغ على المعالجة السريعة والفعالة للأرقام ويقوي مهارات الحساب الأساسية."
    },
    {
        question: "عند تدريس مفهوم 'العدد السالب' لأول مرة، ما هو التمثل الأفضل لربطه بالواقع؟",
        options: ["شرح القاعدة الجبرية مباشرة", "استخدام سياق حسي ومعروف (مثل: درجة الحرارة تحت الصفر أو العمق والارتفاع)", "البدء بإجراء عمليات الضرب والقسمة للأعداد السالبة", "كل الخيارات السابقة خاطئة"],
        answer: "استخدام سياق حسي ومعروف (مثل: درجة الحرارة تحت الصفر أو العمق والارتفاع)",
        rationale: "يجب ربط المفاهيم الرياضية المجردة (مثل الأعداد السالبة) بسياق حسي من الواقع (درجة الحرارة أو رصيد البنك) لتبسيطها للمتعلم."
    },
    {
        question: "ما هي الغاية من إدماج الجانب التكنولوجي (TIC) في تدريس النشاط العلمي؟",
        options: ["تزيين العرض فقط", "استبدال الأستاذ بالآلة", "إثراء الشرح وتوفير محاكاة لظواهر يصعب ملاحظتها مباشرة (كـ دورة المياه أو الزلازل)", "مضاعفة عدد التمارين المنزلية"],
        answer: "إثراء الشرح وتوفير محاكاة لظواهر يصعب ملاحظتها مباشرة (كـ دورة المياه أو الزلازل)",
        rationale: "تستخدم التكنولوجيا لتمثيل الظواهر المعقدة (المحاكاة) التي لا يمكن إجراؤها في الفصل، مما يعزز الفهم البصري للعمليات العلمية."
    },
    {
        question: "ما هو الهدف الرئيسي من مقاربة 'التقصي' (L'investigation) في تدريس النشاط العلمي؟",
        options: ["تلقين المعلومات الجاهزة للمتعلمين", "جعل المتعلم يتبع مساراً علمياً منظماً لاكتشاف المعارف والتحقق منها بنفسه", "الاعتماد فقط على التجارب المخبرية دون الحاجة إلى التفكير", "ملء دفتر التمارين بأسرع وقت ممكن"],
        answer: "جعل المتعلم يتبع مساراً علمياً منظماً لاكتشاف المعارف والتحقق منها بنفسه",
        rationale: "منهجية التقصي هي تطبيق للمنهج العلمي على الوضعيات التعليمية، وهي تهدف إلى بناء المعرفة عبر البحث والتحقق الذاتي."
    },
    {
        question: "ما هو المعيار الأساسي لتمييز فرضية جيدة عن فرضية غير جيدة في منهجية التقصي العلمي؟",
        options: ["أن تكون الفرضية طويلة ومعقدة", "أن تكون الفرضية قابلة للاختبار والتحقق (Vérifiable) من خلال التجربة أو الملاحظة", "أن تكون الفرضية مطابقة تماماً لإجابة الأستاذ", "أن تكون الفرضية غريبة وغير متوقعة"],
        answer: "أن تكون الفرضية قابلة للاختبار والتحقق (Vérifiable) من خلال التجربة أو الملاحظة",
        rationale: "الفرضية العلمية يجب أن تكون قابلة للدحض أو الإثبات عبر خطوات منهجية، وإلا فهي مجرد تخمين غير علمي."
    },
    {
        question: "ما هو الدور الديداكتيكي للمحاكاة (Simulation) في تدريس ظواهر علمية معقدة؟",
        options: ["استبدال التفسير الشفوي بالتفسير الحركي", "مساعدة المتعلم على تمثيل الظاهرة وتصورها ذهنياً وحسياً لفهمها بشكل أعمق", "تقويم المتعلمين في نهاية الحصة", "تقديم معلومات تاريخية حول الظاهرة"],
        answer: "مساعدة المتعلم على تمثيل الظاهرة وتصورها ذهنياً وحسياً لفهمها بشكل أعمق",
        rationale: "المحاكاة (أو النمذجة) تساعد على تكسير المفاهيم المجردة وتصويرها بطريقة تفاعلية لتعزيز البناء المعرفي."
    },
    {
        question: "ما هو الفرق بين 'الملاحظة' و'التجربة' في المنهج العلمي المعتمد؟",
        options: ["لا يوجد فرق، فكلاهما مصطلح مرادف للآخر", "الملاحظة سلبية (مراقبة الظاهرة كما هي)، والتجربة إيجابية (إحداث تغييرات متعمدة في الظاهرة لدراسة نتائجها)", "التجربة تتم في القسم، والملاحظة تتم في المختبر", "كل الخيارات السابقة خاطئة"],
        answer: "الملاحظة سلبية (مراقبة الظاهرة كما هي)، والتجربة إيجابية (إحداث تغييرات متعمدة في الظاهرة لدراسة نتائجها)",
        rationale: "التجربة هي تغيير متعمد للظروف (العوامل) لمراقبة تأثيرها، بينما الملاحظة هي رصد ورصد الظاهرة كما تحدث بشكل طبيعي."
    },
    {
        question: "عند تدريس مفهوم الحفظ والصحة (التغذية)، ما هي المقاربة الأفضل لجعل التعلم وظيفياً؟",
        options: ["الاكتفاء بتصنيف الأغذية حسب نوعها", "ربط المفهوم بحياة المتعلم اليومية (وجبة الإفطار مثلاً) وتعديل سلوكه الغذائي", "إعطاء قائمة من الأمراض المتعلقة بسوء التغذية", "الطلب من المتعلمين رسم أعضاء الجهاز الهضمي"],
        answer: "ربط المفهوم بحياة المتعلم اليومية (وجبة الإفطار مثلاً) وتعديل سلوكه الغذائي",
        rationale: "لجعل التعلم وظيفياً (أي قابلاً للتطبيق)، يجب ربطه بالممارسات والسياقات الحياتية اليومية للمتعلم."
    },
    {
        question: "لماذا لا ينبغي أن تكون التجربة العلمية (Manipulation) هي أول خطوة في الدرس؟",
        options: ["لأنها قد تسبب فوضى في القسم", "لأن التجربة يجب أن تأتي لتأكيد أو نفي فرضية سابقة، ويجب أن يسبقها التساؤل وصياغة الفرضيات", "لأن المتعلمين لا يحبون التجارب", "كل الخيارات السابقة خاطئة"],
        answer: "لأن التجربة يجب أن تأتي لتأكيد أو نفي فرضية سابقة، ويجب أن يسبقها التساؤل وصياغة الفرضيات",
        rationale: "منهج التقصي يبدأ بإثارة التساؤل، يليه وضع التخمينات (الفرضيات)، ثم يأتي دور التجريب لاختبار تلك الفرضيات."
    },
    {
        question: "ما هو العنصر الذي يجب أن يتضمنه تقويم كفاية في النشاط العلمي؟",
        options: ["أسئلة نظرية مباشرة حول التعريفات", "وضعية مركبة تتطلب من المتعلم توظيف معارفه ومهاراته لإيجاد حل أو إجراء تحقيق علمي", "اختبار القدرة على حفظ أسماء العلماء", "سؤال حول تاريخ اكتشاف الظاهرة"],
        answer: "وضعية مركبة تتطلب من المتعلم توظيف معارفه ومهاراته لإيجاد حل أو إجراء تحقيق علمي",
        rationale: "تقويم الكفاية يتطلب بالضرورة وضعية إدماجية (Situation d'intégration) تتطلب تجنيد الموارد في سياق مركب، وليس مجرد استظهار للمعلومات."
    },
    {
        question: "أي من أنواع التقويم يهدف إلى قياس المهارات القابلة للتطبيق (Performance-based) عبر إنجاز مهمة عملية؟",
        options: ["التقويم الكتابي", "التقويم الشفوي", "التقويم العملي (Pratique)", "التقويم النظري"],
        answer: "التقويم العملي (Pratique)",
        rationale: "التقويم العملي يقيس قدرة المتعلم على الأداء المباشر، مثل إجراء تجربة أو استخدام الأدوات أو حل مسألة تطبيقية."
    },
    {
        question: "ما هي الأداة التي تضمن للأستاذ مراقبة جميع خطوات المتعلم أثناء إنجاز تجربة علمية؟",
        options: ["جذاذة الأستاذ", "شبكة ملاحظة الأداء (Grille d'observation)", "ملخص الدرس", "كل الخيارات السابقة خاطئة"],
        answer: "شبكة ملاحظة الأداء (Grille d'observation)",
        rationale: "شبكة الملاحظة هي الأداة المنهجية التي تسجل مؤشرات الأداء (Indicators) خطوة بخطوة أثناء العملية التطبيقية."
    },
];

// ==========================================================
// الدوال (Functions) - الكود المنطقي
// ==========================================================

// دالة توليد الواجهة (عرض الأسئلة)
function generateQuiz() {
    const container = document.getElementById('quiz-container');
    const pageInfo = document.getElementById('pageInfo');
    let htmlContent = '';
    
    // تحديث رقم الصفحة في شريط التحكم
    pageInfo.textContent = `الصفحة ${currentPage} من ${totalPages}`;
    
    // تحديد الأسئلة للصفحة الحالية
    const start = (currentPage - 1) * questionsPerPage;
    const end = start + questionsPerPage;
    const questionsToShow = quizQuestions.slice(start, end);

    questionsToShow.forEach((q, localIndex) => {
        const questionNumber = start + localIndex + 1;
        const inputName = `q${questionNumber}`;
        
        const shuffledOptions = shuffleArray([...q.options]);
        
        // إضافة الخيار الموحد في النهاية
        const unifiedOption = "كل الخيارات السابقة خاطئة";
        // نتحقق أولا من وجود الخيار الموحد لتجنب تكراره في حالة إعادة توليد الصفحة
        if (!shuffledOptions.includes(unifiedOption)) {
             shuffledOptions.push(unifiedOption);
        }

        htmlContent += `
            <div class="flashcard-container" onclick="toggleRationale(this)">
                <div class="card-front">
                    <h4>سؤال #${questionNumber} (${getQuestionCategory(questionNumber)}):</h4>
                    <p>${q.question}</p>
                </div>
                <div class="card-back" style="display:none;">
                    <h4>الإجابة الصحيحة: ${q.answer}</h4>
                    <p style="color: #007bff; font-weight: bold;">الشرح:</p>
                    <p>${q.rationale}</p>
                    <hr>
                    <p>اختر الإجابة:</p>
                    <form id="qcm-q${questionNumber}">
                        ${shuffledOptions.map(option => `
                            <label style="display: block;">
                                <input type="radio" name="${inputName}" value="${option}"> ${option}
                            </label>
                        `).join('')}
                    </form>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = htmlContent;
    updatePaginationControls();
}

// دالة تحديد الفئة (لإظهار التوزيع)
function getQuestionCategory(num) {
    if (num >= 1 && num <= 20) return "علوم التربية والمستجدات";
    if (num >= 21 && num <= 40) return "ديداكتيك اللغة العربية";
    if (num >= 41 && num <= 60) return "ديداكتيك اللغة الفرنسية";
    if (num >= 61 && num <= 80) return "ديداكتيك النشاط العلمي";
    if (num >= 81 && num <= 100) return "ديداكتيك الرياضيات";
    if (num >= 101 && num <= 120) return "كفايات عامة وإدماج";
    return "عام";
}


// دالة التحكم في التنقل بين الصفحات
function changePage(direction) {
    currentPage += direction;
    // التأكد من أن الصفحة لا تتجاوز الحدود
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    
    generateQuiz();
    window.scrollTo(0, 0); 
}

function updatePaginationControls() {
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
    
    // إظهار زر إنهاء الاختبار في الصفحة الأخيرة
    if (currentPage === totalPages && totalQuestions > questionsPerPage) { // التأكد من وجود صفحات متعددة
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        document.getElementById('submitBtn').style.display = 'none';
    }
}

// دالة حساب النتيجة (تعمل على 120 سؤالاً)
function submitQuiz() {
    let score = 0;
    let feedbackHTML = '<h3>مراجعة إجاباتك:</h3>';
    
    for (let i = 1; i <= totalQuestions; i++) {
        const q = quizQuestions[i - 1]; 
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        let isCorrect = false;
        let selectedValue = 'لم يتم الإجابة';

        if (selectedOption) {
            selectedValue = selectedOption.value;
            // منطق حساب النتيجة هنا:
            if (selectedValue === q.answer) {
                score++;
                isCorrect = true;
            }
        }
        
        // بناء تقرير المراجعة (للتغذية الراجعة بعد الضغط على إنهاء)
        feedbackHTML += `
            <div style="border: 1px solid ${isCorrect ? '#4CAF50' : '#f44336'}; padding: 10px; margin-bottom: 10px; border-radius: 4px; background-color: ${isCorrect ? '#e6ffe6' : '#ffe6e6'};">
                <p><strong>السؤال ${i} (${getQuestionCategory(i)}):</strong> ${q.question}</p>
                <p style="color: #333;">إجابتك: <strong>${selectedValue}</strong></p>
                <p style="color: #4CAF50;">الإجابة الصحيحة: <strong>${q.answer}</strong></p>
                <p style="color: #007bff; font-weight: bold;">الشرح:</p>
                <p>${q.rationale}</p>
            </div>
        `;
    }

    const resultsDiv = document.getElementById('results');
    const feedbackDiv = document.getElementById('feedback');
    
    feedbackDiv.innerHTML = feedbackHTML;
    resultsDiv.style.display = 'block'; 

    document.getElementById('score').parentNode.innerHTML = `
        لقد حصلت على 
        <span id="score" style="font-weight: bold; color: ${score >= totalQuestions * 0.5 ? '#4CAF50' : '#f44336'};">${score}</span>
        من ${totalQuestions} إجابة صحيحة (120).
    `;
    
    window.scrollTo(0, 0); 
}

// دالة مساعدة لقلب البطاقة وعرض الشرح
function toggleRationale(cardElement) {
    const back = cardElement.querySelector('.card-back');
    if (back.style.display === 'none') {
        back.style.display = 'block';
    } else {
        back.style.display = 'none';
    }
}

// دالة مساعدة لترتيب الخيارات بشكل عشوائي
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==========================================================
// تشغيل دالة توليد الواجهة عند تحميل الصفحة
// ==========================================================

document.addEventListener('DOMContentLoaded', generateQuiz);